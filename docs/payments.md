# Payments

Shared Stripe layer — **one payment architecture for Marketplace and E-commerce**.

## Design (`@ideons/payments`, Phase 7)

- **Stripe Checkout / Payment Intents** for orders.
- **Webhook-verified** payment confirmation. Client-side payment status is never trusted.
- **Marketplace commission**: configurable platform fee (default 10%, `@ideons/config`) taken from seller earnings.
- **Freelancer payouts** via Stripe Connect.
- **Refunds** recorded in `Payment`/`Refund`/`PaymentTransaction`.

## Money model

- All amounts in integer **cents**.
- Price is chosen on the *server* from the selected `ServicePackage` (or `Product`) — the client submits an id, never a price.

## Webhook discipline

- Incoming Stripe events verified with `STRIPE_WEBHOOK_SECRET` signature check.
- Idempotency: each `Payment` is created once; duplicate webhook events are no-ops.
- Only after `payment_intent.succeeded` does the order move `PENDING_PAYMENT → PAID`.

## Env

`STRIPE_SECRET_KEY`, `STRIPE_PUBLISHABLE_KEY`, `STRIPE_WEBHOOK_SECRET`. See `.env.example`. Keys are **not** committed.