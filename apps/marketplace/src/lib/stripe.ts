import crypto from "node:crypto";
import Stripe from "stripe";

import { env } from "@/lib/env";
import { prisma } from "@/lib/prisma";

let _stripe: Stripe | null = null;

export function getStripe(): Stripe | null {
  if (!env.STRIPE_SECRET_KEY) return null;
  if (!_stripe) {
    _stripe = new Stripe(env.STRIPE_SECRET_KEY, {
      typescript: true,
      maxNetworkRetries: 2,
    });
  }
  return _stripe;
}

export async function getCommissionPercent(): Promise<number> {
  const setting = await prisma.platformSetting.findUnique({
    where: { key: "platform.commissionPercent" },
    select: { value: true },
  });
  const parsed = setting ? Number(setting.value) : NaN;
  return Number.isFinite(parsed) && parsed >= 0 && parsed <= 100
    ? parsed
    : 10;
}

export function generateOrderNumber(): string {
  const ts = Date.now().toString(36).toUpperCase();
  const rand = crypto.randomBytes(3).toString("hex").toUpperCase();
  return `IO-${ts}-${rand}`;
}

type FinalizeResult =
  | { status: "success"; orderCount: number }
  | { status: "already_finalized"; orderCount: number }
  | { status: "not_paid" }
  | { status: "invalid_session" };

interface SessionLineItem {
  serviceId: string;
  packageId: string;
  unitAmount: number;
  quantity: number;
}

export async function finalizeCheckoutSession(
  sessionId: string
): Promise<FinalizeResult> {
  const stripe = getStripe();
  if (!stripe) {
    return { status: "invalid_session" };
  }

  const existing = await prisma.paymentTransaction.findFirst({
    where: { type: "PAYMENT", providerReference: sessionId },
    select: { id: true },
  });
  if (existing) {
    const orderCount = await prisma.payment.count({
      where: {
        transactions: { some: { providerReference: sessionId } },
      },
    });
    return { status: "already_finalized", orderCount };
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["payment_intent"],
  });
  if (session.mode !== "payment" || session.payment_status !== "paid") {
    return { status: "not_paid" };
  }

  const userId = session.metadata?.userId ?? "";
  const buyer = userId
    ? await prisma.user.findUnique({ where: { id: userId }, select: { id: true } })
    : null;
  if (!buyer) {
    return { status: "invalid_session" };
  }

  const lineItems = await stripe.checkout.sessions.listLineItems(sessionId, {
    limit: 100,
  });

  const items: SessionLineItem[] = [];
  for (const line of lineItems.data) {
    const idMatch = line.description?.match(/^([^|]+)\|([^|]+)$/);
    if (!idMatch) continue;
    items.push({
      serviceId: idMatch[1],
      packageId: idMatch[2],
      unitAmount: (line.amount_total ?? 0) / 100,
      quantity: line.quantity ?? 1,
    });
  }
  if (items.length === 0) {
    return { status: "success", orderCount: 0 };
  }

  const packageIds = [...new Set(items.map((item) => item.packageId))];
  const packages = await prisma.servicePackage.findMany({
    where: { id: { in: packageIds } },
    include: {
      service: { select: { id: true, title: true, slug: true, userId: true } },
    },
  });
  const packageById = new Map(packages.map((p) => [p.id, p]));

  const currency = (session.currency ?? "usd").toUpperCase();
  const commissionPercent = await getCommissionPercent();

  const orderCount = await prisma.$transaction(async (tx) => {
    let count = 0;
    for (const item of items) {
      const pkg = packageById.get(item.packageId);
      if (!pkg) continue;

      const amount = item.unitAmount * item.quantity;
      const platformFee = Math.round((amount * commissionPercent) / 100);
      const freelancerAmount = amount - platformFee;
      const paymentIntentId =
        typeof session.payment_intent === "string"
          ? session.payment_intent
          : (session.payment_intent?.id ?? null);

      await tx.order.create({
        data: {
          orderNumber: generateOrderNumber(),
          buyerId: buyer.id,
          freelancerId: pkg.service.userId,
          serviceId: pkg.serviceId,
          packageId: pkg.id,
          status: "PAID",
          amount,
          platformFee,
          freelancerAmount,
          currency,
          quantity: item.quantity,
          paidAt: new Date(),
          items: {
            create: {
              serviceId: pkg.serviceId,
              packageId: pkg.id,
              packageName: pkg.name,
              title: pkg.service.title,
              price: item.unitAmount,
              quantity: item.quantity,
              deliveryTime: pkg.deliveryTime,
              revisions: pkg.revisions,
            },
          },
          payment: {
            create: {
              userId: buyer.id,
              amount,
              currency,
              status: "PAID",
              provider: "STRIPE",
              providerIntentId: paymentIntentId,
              paidAt: new Date(),
              transactions: {
                create: {
                  type: "PAYMENT",
                  amount,
                  status: "SUCCEEDED",
                  providerReference: sessionId,
                  metadata: { checkoutSessionId: sessionId },
                },
              },
            },
          },
        },
      });
      count += 1;
    }
    return count;
  });

  if (orderCount > 0) {
    const cart = await prisma.cart.findUnique({
      where: { userId: buyer.id },
      select: { id: true },
    });
    if (cart) {
      for (const item of items) {
        await prisma.cartItem.deleteMany({
          where: {
            cartId: cart.id,
            serviceId: item.serviceId,
            packageId: item.packageId,
          },
        });
      }
    }

    const totalSpent = items.reduce(
      (sum, item) => sum + item.unitAmount * item.quantity,
      0
    );
    await prisma.buyerProfile.upsert({
      where: { userId: buyer.id },
      update: {
        orderCount: { increment: orderCount },
        totalSpent: { increment: totalSpent },
      },
      create: {
        userId: buyer.id,
        orderCount,
        totalSpent,
      },
    });

    const serviceIds = [...new Set(items.map((item) => item.serviceId))];
    await prisma.service.updateMany({
      where: { id: { in: serviceIds } },
      data: { salesCount: { increment: 1 } },
    });
  }

  return { status: "success", orderCount };
}