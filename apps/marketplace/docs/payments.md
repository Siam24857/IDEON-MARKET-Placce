# Payments (Stripe)

The payments module is currently at the **architecture stage** — Phase 8. The schema (`Payment`, `PaymentTransaction`, `Refund`, `Payout`, `Coupon`) and client/keys abstraction are in place; the Stripe integration code follows.

## Design

### Checkout flow (planned)

```
Cart → Checkout → Create Order (PENDING_PAYMENT) → Stripe Checkout
   └─ price re-derived from DB ServicePackage (never from client)
        → webhook checkout.session.completed / payment_intent.succeeded
            → transaction → Order PAID → notify
```

### Commission model (planned)

```
Service = $220
Platform commission = 10% (configurable in PlatformSetting: platform.commissionPercent)
Freelancer receives = $198
Platform keeps = $22
```

- Commission is **never hardcoded** — read from `PlatformSetting`.
- Payouts use **Stripe Connect** (freelancers connect an account via onboarding; `stripeAccountId` on the `User` model).

### Webhooks (planned path)

`/api/stripe/webhook` will:

1. Verify the Stripe signature against `STRIPE_WEBHOOK_SECRET`.
2. Handle `checkout.session.completed`, `payment_intent.succeeded`, `payment_intent.payment_failed`, `charge.refunded`, `account.updated`.
3. Only the webhook may mark an order `PAID`. Frontend payment status is never trusted.

## Data model

| Model | Purpose | Fields (highlights) |
| --- | --- | --- |
| `Payment` | One per order | amount (cents), status, provider, providerSessionId, providerIntentId, paidAt |
| `PaymentTransaction` | Event trail | type (PAYMENT/REFUND/PAYOUT/FEE), amount, status, providerReference |
| `Refund` | Full/partial refunds | amount, status, providerRefundId, createdBy |
| `Payout` | Freelancer payouts | amount, platformFee, status, providerPayoutId, period |
| `Coupon` / `CouponUsage` | Discounts | type (PERCENT/FIXED), value, usage limits |

## Configuration

```
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_CURRENCY="usd"
```

Without keys the app runs in a **safe development mode** — no fake payments are recorded. Integration is added in Phase 8 with real credential-backed flows + webhooks.