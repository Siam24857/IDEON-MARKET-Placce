# E-commerce

Module: `apps/ecommerce` — adopted from `E-comarcewebsite` (Next.js + Framer Motion + GSAP).

## Target feature set (Phase 5)

- Products + product images, categories, search, filters
- Cart, checkout, orders, reviews, wishlist, coupons
- Physical & digital product support
- User dashboard + admin dashboard
- Payment via the shared `@ideons/payments` layer — webhook-verified only

## Migration note

The adopted codebase is standalone today. Before it joins the shared pipeline it must be
rewired to `@ideons/database`, `@ideons/auth`, `@ideons/ui` and `@ideons/payments`, and its
data moved from any legacy store onto the single PostgreSQL schema (`Product`, `ProductImage`,
`Cart`, `CartItem`, `Order`, `Payment`, `Coupon`, `CouponUsage`).