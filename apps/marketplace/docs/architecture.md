# Architecture

IDEONS Marketplace is a monolith-deployed Next.js 16 application (App Router) with a clear modular structure that can scale to serverless, multiple services, or dedicated microservices as needed.

## High-level diagram

```
Browser
  │  (React Server Components + Client Components)
  ▼
Next.js App Router
  ├── app/(auth)        Auth pages
  ├── app/(marketplace) Public pages (Phase 4+)
  ├── app/dashboard     Buyer/Freelancer dashboards (Phase 5/6)
  ├── app/admin         Admin dashboard (Phase 12)
  └── app/api/*         Route handlers / API
        │
  ┌─────┴──────────────────────────────────────────────┐
  │ server layer                                        │
  │  lib/auth (Better Auth)   lib/email (provider)      │
  │  server/services          server/repositories       │
  │  server/permissions (RBAC)                          │
  └─────┬──────────────────────────────────────────────┘
        ▼
  Prisma ORM (driver adapter: @prisma/adapter-pg)
        ▼
  PostgreSQL
```

External integrations (each behind an abstraction):

- **Stripe** — payments, payouts, webhooks (`lib/stripe`)
- **Email** — transactional mail (`lib/email`, provider-swappable)
- **Storage** — images/uploads (`lib/storage`)
- **AI** — marketplace assistant (`lib/ai`, Phase 16)
- **Search** — PostgreSQL search now, Elasticsearch/OpenSearch later (`lib/search`)

## Architectural rules

1. **Server-side trust boundary.** Never trust client-supplied prices, roles, statuses, payment results, or quantities. Re-derive from the database on the server.
2. **Consistent API shape.** Every API route returns:

```ts
{ success: true, data, message }   // or
{ success: false, message, code }  // errors
```

3. **Repository/service split.** Database access lives in repositories/services, not inline in route handlers. Business logic is reusable and testable.
4. **Zod at the edge.** Request bodies are validated with Zod in route handlers before touching the DB.
5. **Transactions for money.** Multi-step operations (checkout, webhook finalization) run inside Prisma transactions.
6. **Authorization everywhere.** Role checks (`requireUser`, `requireRole`, `requireFreelancer`, `requireAdmin`) gate both pages and API routes.

## Rendering strategy

- **Static** — landing content, documentation, help pages
- **Dynamic** — anything touching the session or user-specific data (uses `headers()`/`getSession`)
- **Server Components** for reads; Client Components only where interactivity is required (forms, chat, charts)
- Collections are paginated server-side (`?page=1&limit=20`)

## Folder conventions

| Path | Purpose |
| --- | --- |
| `src/app` | Routes, route handlers, page components |
| `src/components/ui` | Design-system primitives |
| `src/components/{domain}` | Feature components (marketplace, dashboard, admin, chat, forms) |
| `src/lib` | Cross-cutting infrastructure (auth, db, stripe, storage, email, search, ai) |
| `src/server` | Services, repositories, permissions (RPC-style business logic) |
| `src/schemas` | Zod schemas shared by server & client-ish code |
| `prisma` | Schema, migrations, seed |

## Security

- Better Auth session cookies: `httpOnly`, `sameSite=lax`, `secure` in production.
- No plain-text passwords (hashed by Better Auth).
- Stripe webhook signature verification is mandatory before processing events.
- Rate limiting (Better Auth built-in + route-level where needed).
- Security headers are part of the production config (Phase 17 hardening).

## Roadmap (phases)

1. Scaffold ✅
2. Database schema/migrations/seed ✅
3. Authentication + RBAC ✅
4–11. Marketplace, dashboards, cart, checkout, Stripe, orders, chat, reviews
12–16. Admin, analytics, disputes/reports, gamification, AI assistant
17–20. Security hardening, testing, SEO, deployment