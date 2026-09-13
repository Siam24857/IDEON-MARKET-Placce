import { NextRequest, NextResponse } from "next/server";

import { products } from "@/data/mockData";
import { getStripe } from "@/lib/stripe";

const currency = process.env.STRIPE_CURRENCY || "usd";

interface RawItem {
  id?: string;
  quantity?: number;
}

export async function POST(req: NextRequest) {
  try {
    const stripe = getStripe();
    if (!stripe) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Stripe is not configured yet. Add STRIPE_SECRET_KEY to your .env file.",
        },
        { status: 503 }
      );
    }

    const body = await req.json().catch(() => null);
    const rawItems: RawItem[] = Array.isArray(body?.items) ? body.items : [];
    const items = rawItems
      .map((item) => ({
        id: String(item?.id ?? ""),
        quantity: Math.max(1, Math.floor(Number(item?.quantity) || 1)),
      }))
      .filter((item) => item.id.length > 0);

    if (items.length === 0) {
      return NextResponse.json(
        { success: false, message: "Your cart is empty." },
        { status: 400 }
      );
    }

    const productById = new Map(products.map((p) => [p.id, p]));

    const line_items = items.map((item) => {
      const product = productById.get(item.id);
      if (!product) {
        throw new Error(`Unknown product: ${item.id}`);
      }
      return {
        quantity: item.quantity,
        price_data: {
          currency,
          unit_amount: Math.round(product.price * 100),
          product_data: {
            name: product.name,
            description: product.category,
            images: product.images.length > 0 ? [product.images[0]] : undefined,
          },
        },
      };
    });

    const origin = getOrigin(req);
    const checkout = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cart?payment=cancelled`,
    });

    if (!checkout.url) {
      return NextResponse.json(
        { success: false, message: "Stripe could not create a checkout session." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, url: checkout.url });
  } catch (error) {
    console.error("[api/checkout] error:", error);
    const message =
      error instanceof Error && error.message.startsWith("Unknown product")
        ? "One of the items in your cart is no longer available."
        : "Something went wrong. Please try again.";
    return NextResponse.json({ success: false, message }, { status: 400 });
  }
}

function getOrigin(req: NextRequest): string {
  const proto =
    req.headers.get("x-forwarded-proto")?.split(",")[0]?.trim() ?? "http";
  const host =
    req.headers.get("x-forwarded-host")?.split(",")[0]?.trim() ??
    req.headers.get("host") ??
    "localhost:3000";
  return `${proto}://${host}`;
}