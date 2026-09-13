import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

import { apiError, handleRouteError } from "@/lib/api";
import { env } from "@/lib/env";
import { finalizeCheckoutSession, getStripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const stripe = getStripe();
    if (!stripe) {
      return apiError(
        "Stripe is not configured yet.",
        "STRIPE_NOT_CONFIGURED",
        503
      );
    }

    const payload = await req.text();
    const signature = req.headers.get("stripe-signature") ?? "";
    const webhookSecret = env.STRIPE_WEBHOOK_SECRET;

    let event: Stripe.Event;
    if (webhookSecret && webhookSecret.startsWith("whsec_")) {
      event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);
    } else if (env.NODE_ENV === "development") {
      if (!signature) {
        console.warn(
          "[stripe:webhook] No STRIPE_WEBHOOK_SECRET configured — accepting unverified webhook in development mode only."
        );
      }
      event = JSON.parse(payload) as Stripe.Event;
    } else {
      return apiError(
        "Webhook signature verification is not configured.",
        "WEBHOOK_SECRET_MISSING",
        400
      );
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      const result = await finalizeCheckoutSession(session.id);
      console.log(
        `[stripe:webhook] checkout.session.completed ${session.id}:`,
        result
      );
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    return handleRouteError(error);
  }
}