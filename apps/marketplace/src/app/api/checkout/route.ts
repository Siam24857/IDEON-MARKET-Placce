import { NextRequest } from "next/server";

import { apiError, apiSuccess, handleRouteError } from "@/lib/api";
import { env } from "@/lib/env";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";
import { getStripe } from "@/lib/stripe";
import { absoluteUrl } from "@/lib/utils";

export async function POST(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session?.user) {
      return apiError("Unauthorized", "UNAUTHORIZED", 401);
    }
    const userId = session.user.id;

    const stripe = getStripe();
    if (!stripe) {
      return apiError(
        "Stripe is not configured yet. Add STRIPE_SECRET_KEY to your .env file.",
        "STRIPE_NOT_CONFIGURED",
        503
      );
    }

    const cart = await prisma.cart.findUnique({
      where: { userId },
      include: {
        items: {
          include: {
            service: {
              select: {
                id: true,
                slug: true,
                title: true,
                status: true,
              },
            },
            package: {
              select: {
                id: true,
                name: true,
                price: true,
                isActive: true,
              },
            },
          },
        },
      },
    });

    const items = cart?.items ?? [];
    if (items.length === 0) {
      return apiError("Your cart is empty", "EMPTY_CART", 400);
    }

    for (const item of items) {
      if (item.service.status !== "PUBLISHED" || !item.package.isActive) {
        return apiError(
          `"${item.service.title}" is no longer available. Remove it from your cart and try again.`,
          "ITEM_UNAVAILABLE",
          400,
          { itemId: item.id, serviceId: item.serviceId }
        );
      }
    }

    const currency = env.STRIPE_CURRENCY;
    const checkout = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: session.user.email || undefined,
      client_reference_id: userId,
      currency,
      metadata: {
        cartId: cart?.id ?? "",
        userId,
      },
      line_items: items.map((item) => ({
        quantity: item.quantity,
        price_data: {
          currency,
          unit_amount: item.package.price,
          product_data: {
            name: `${item.service.title} — ${item.package.name}`,
            description: `${item.service.id}|${item.package.id}`,
            metadata: {
              serviceId: item.service.id,
              packageId: item.package.id,
            },
          },
        },
      })),
      success_url: absoluteUrl(
        "/checkout/success?session_id={CHECKOUT_SESSION_ID}"
      ),
      cancel_url: absoluteUrl("/cart?payment=cancelled"),
    });

    if (!checkout.url) {
      return apiError(
        "Stripe could not create a checkout session.",
        "STRIPE_SESSION_ERROR",
        502
      );
    }

    return apiSuccess({ url: checkout.url });
  } catch (error) {
    return handleRouteError(error);
  }
}