# Database

## Single shared PostgreSQL database

All IDEONS modules use **one** PostgreSQL database. No per-app databases.

- **Engine**: PostgreSQL (live on Neon)
- **ORM**: Prisma 7 (`prisma-client` generator, `@prisma/adapter-pg` driver adapter)
- **Canonical schema**: `prisma/schema.prisma` at repo root (`prisma7.config.ts`)
- **Shared client**: `@ideons/database` (`packages/database`) — singleton, adapter, client types
- **Migrations**: `prisma/migrations/` at repo root (init + `20260912000001_ecosystem_models`)
- **Seed**: `prisma/seed.ts` (reference/demo data for the marketplace module)

## Model groups

| Group | Models |
|---|---|
| Identity & auth | User, Account, Session, Verification, Profile, BuyerProfile, FreelancerProfile, UserRole, Role, RolePermission, Permission |
| Marketplace | Category, Subcategory, Service, ServicePackage, ServiceImage, ServiceFAQ, Portfolio, Favorite |
| E-commerce | Product, ProductCategory, ProductImage, ProductReview, Coupon, CouponUsage, Cart, CartItem |
| Orders & payments | Order, OrderItem, OrderRequirement, OrderDelivery, Revision, Payment, PaymentTransaction, Refund, Payout |
| Messaging | Conversation, ConversationParticipant, Message, MessageAttachment |
| Engagement | Review, Notification, Report, Dispute |
| Job hunter | Company, Job, JobApplication, Resume, ResumeScore |
| E-books | Book, BookCategory, BookChapter, BookPurchase, BookReview |
| Resources | Resource, ResourceCategory, ResourceFile |
| Portfolio | PortfolioProject |
| Company ID | Company, Employee |
| AI | AIConversation, AIMessage |
| Gamification & admin | Achievement, UserAchievement, UserXP, AuditLog, PlatformSetting, SearchHistory |

## Rules

- Money is stored as integer **cents** (`Int`).
- Statuses/enums are stored as strings (Prisma `enum` blocks are deprecated in Prisma 7); the canonical value sets live in `apps/marketplace/src/lib/constants.ts` and migrate to `@ideons/config`.
- `@@index` on frequently filtered columns (status, category, createdAt).
- FKs are enforced in the schema; cascades chosen intentionally (orders and financial records use `Restrict`). Ecosystem relations on `User` cascade.

## CLI (run from repo root)

```bash
npm run db:generate  # regenerate client into packages/database
npm run db:validate  # validate schema
npm run db:migrate   # dev migrations (requires a write-capable shadow DB)
npm run db:deploy    # apply pending migrations to target env
npm run db:seed      # seed reference/demo data
npm run db:studio    # Prisma Studio
npm run db:diff      # prisma migrate diff
```

The Prisma CLI loads `prisma7.config.ts` from the repo root and reads `DATABASE_URL` from `.env` (repo root). `shadowDatabaseUrl` defaults to a sibling `ideons_shadow` database derived from `DATABASE_URL` (override with `SHADOW_DATABASE_URL`); grant `CREATE DATABASE` to the DB role if you run `db:migrate`/`db:diff`.

## Current deployment

Live on **Neon** (managed Postgres). `DATABASE_URL` (direct) and `DIRECT_URL` are set in `.env` (see `.env.example`). Applied via `PRISMA migrate deploy`: `20260912000000_init` + `20260912000001_ecosystem_models`. Seed verified (9 categories, 36 subcategories, 5 services, 15 packages, 4 users, 9 settings).

## Using the shared client

```ts
import { prisma } from "@ideons/database";
const services = await prisma.service.findMany({ include: { category: true } });
```