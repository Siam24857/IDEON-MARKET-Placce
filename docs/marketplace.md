# Marketplace

Live implementation: `apps/marketplace` (Next.js 16, Phases 1–4 complete).

## What works today

- **Catalog** from PostgreSQL: 9 categories / 36 subcategories, 5 demo services with packages, FAQ, seller profiles.
- **Home page** (`/`): live category grid + trending services.
- **Explore** (`/marketplace`): keyword search, category sidebar with subcategory drill-down, sort (recommended / newest / popular / top rated / price), active-filter pills, shareable GET links, pagination.
- **Service detail** (`/services/[slug]`): gallery with thumbnails, reviews, tech/tag chips, FAQ accordion, package selector (basic/standard/premium), seller card with level + verification + stats, related services.
- **Auth foundation**: login/register/forgot/reset/verify + RBAC helpers + shared session.

## Planned (next phases)

- Phase 5: user dashboards (buyer + freelancer), unified `/dashboard`, profile setup, favorites, become-a-freelancer flow.
- Phase 6: cart + orders + storage-backed image upload.
- Phase 7: Stripe checkout, webhooks, platform commission (10%), freelancer payouts.
- Phase 8: messaging (buyer ↔ freelancer) for orders.
- Admin module: users, services, orders, payments, disputes, reviews, settings, audit log.

## Model notes

- Prices in cents (`minPrice`/`maxPrice` on `Service`, `price` on `ServicePackage`).
- Only `PUBLISHED` services are queryable; the client can never bypass status filtering.
- Search/filter/pagination runs server-side (`src/lib/queries.ts`) — no N+1, single indexed queries.

## Commands

```bash
npm run dev -w ideons-marketplace   # or: npm run dev from repo root
npm run db:migrate
npm run db:seed
```