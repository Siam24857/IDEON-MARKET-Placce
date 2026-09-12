# Database

**PostgreSQL + Prisma ORM 7** (driver adapters, Rust-free client generated to `src/generated/prisma`).

## Prisma 7 notes

- Config lives in `prisma7.config.ts` (schema path, migrations path, seed command, datasource URL).
- The client requires the **Pg driver adapter** at runtime — see `src/lib/prisma.ts`.
- `enum` blocks are avoided; enum-like values are stored as `String` and centralized in `src/lib/constants.ts`. This keeps the schema future-proof and the values queryable/extensible.
- Money is stored as **integer minor units** (cents) to avoid floating-point errors.

## Models (40)

| Area | Models |
| --- | --- |
| Auth | `User`, `Account`, `Session`, `Verification` (Better Auth compatible) |
| Profiles | `Profile`, `FreelancerProfile`, `BuyerProfile`, `Portfolio` |
| Catalog | `Category`, `Subcategory`, `Service`, `ServicePackage`, `ServiceImage`, `ServiceFAQ` |
| Commerce | `Order`, `OrderItem`, `OrderRequirement`, `OrderDelivery`, `Revision`, `Review`, `Favorite`, `Cart`, `CartItem` |
| Payments | `Payment`, `PaymentTransaction`, `Refund`, `Payout`, `Coupon`, `CouponUsage` |
| Communication | `Conversation`, `ConversationParticipant`, `Message`, `MessageAttachment` |
| Engagement | `Notification`, `Achievement`, `UserAchievement`, `UserXP`, `SearchHistory` |
| Admin | `Dispute`, `Report`, `PlatformSetting`, `AuditLog` |

## Conventions

- `id` — cuid() primary key everywhere.
- `createdAt` / `updatedAt` on all mutable models.
- `String` statuses with constants in `src/lib/constants.ts`:
  - Roles: `BUYER`, `FREELANCER`, `ADMIN`, `SUPER_ADMIN`
  - Service: `DRAFT`, `PENDING_REVIEW`, `PUBLISHED`, `REJECTED`, `PAUSED`
  - Order: `PENDING_PAYMENT`, `PAID`, `IN_PROGRESS`, `DELIVERED`, `REVISION_REQUESTED`, `COMPLETED`, `CANCELLED`, `REFUNDED`, `DISPUTED`
  - Payment: `PENDING`, `SUCCEEDED`, `FAILED`, `REFUNDED`
- `String[]` columns (Postgres native arrays) for `skills`, `tags`, `technologies`, `features`, etc.
- Sensitive relations use `onDelete: Restrict` (e.g. orders → users); owned data uses `onDelete: Cascade`.

## Indexes

Hot query paths are indexed:

- `Service(categoryId, status)`, `Service(userId, status)`, `Service(status, minPrice)`
- `Order(buyerId, status)`, `Order(freelancerId, status)`, `Order(status, createdAt)`
- `Message(conversationId, createdAt)`, `Notification(userId, read)`
- `Review(serviceId)`, `Review(revieweeId)`
- Unique guards prevent duplicates: email, username, slug, `Favorite(userId+targetType+targetId)`, `Review(orderId)`.

## Migrations

```bash
npm run db:migrate   # prisma migrate dev — generates + applies
npm run db:deploy    # prisma migrate deploy — CI/production
npm run db:seed      # prisma db seed
```

Initial `SQL migration` is checked in at `prisma/migrations/20260912000000_init/migration.sql`.

## Seed

`prisma/seed.ts` creates:

- 9 categories + subcategories
- 8 achievements
- 9 platform settings (commission %, currency, min/max price, approval mode…)
- 2 demo freelancers + 1 demo buyer + 1 admin (clearly marked demo)
- 5 realistic demo services with 3 packages each, gallery images (generated SVG placeholders), FAQs

Demo accounts can't be used to log in directly (they exist for catalog data); register normally for a real login.

## Extensibility

- **Digital products** — `Service.type` = `SERVICE | DIGITAL_PRODUCT` with fields for `demoUrl`, `repositoryUrl`, `license`, `supportPeriod`, `pages`.
- **Search** — current search targets `title`/`description`/`tags`/`technologies`/`category` via Postgres; the `SearchHistory` model and service layer are ready for Elasticsearch/OpenSearch later.