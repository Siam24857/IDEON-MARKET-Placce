# IDEONS Marketplace

A production-grade **freelance marketplace and digital services e-commerce platform**. Buy and sell digital services & products — websites, SaaS apps, e-commerce stores, UI/UX design, AI development and more.

> **Disclaimer:** IDEONS Marketplace is an original product. It is inspired by the general concept of freelance marketplaces but does not copy any third-party branding, source code, UI, or assets.

---

## Overview

- **Buyers** discover, purchase, review and manage digital services.
- **Freelancers** create profiles, publish services with pricing packages, deliver work and receive payouts.
- **Admins** moderate services, manage users, orders, payments, disputes and platform settings.
- **AI assistant** (planned, Phase 16) guides buyers through the marketplace using a controlled server-side tool layer.

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 16 (App Router, React Server Components) |
| UI | React 19, TypeScript (strict), Tailwind CSS v4, shadcn-style components, Framer Motion, Recharts |
| Data | PostgreSQL, Prisma ORM 7 (driver adapters) |
| Auth | Better Auth (email/password + Google OAuth, auth.js-compatible plugins, protected routes, RBAC) |
| Payments | Stripe (Checkout, Payment Intents, Connect, Webhooks) |
| State | TanStack Query, React Hook Form + Zod |
| Infra | Vercel-ready, Docker-ready, environment-variable driven |

## Project Structure

```
ideons-marketplace/
  prisma/
    schema.prisma          # Full normalized schema (40+ models)
    seed.ts                # Demo categories/services/users/settings
    migrations/            # SQL migrations
  src/
    app/
      (auth)/              # /login /register /forgot-password /reset-password /verify-email
      api/auth/[...all]    # Better Auth route handler
      page.tsx             # Landing page
    components/
      ui/                  # button, input, card, badge, avatar, field, ...
      marketplace/         # navbar, service cards, etc.
      dashboard/
      admin/
      chat/
      forms/
    lib/
      auth/                # Better Auth server + client
      db/                  # Prisma client (singleton)
      stripe/              # (Phase 8)
      storage/             # (Phase 5)
      email/               # Provider abstraction + templates
      search/              # (Phase 4)
      ai/                  # (Phase 16)
    server/                # services / repositories / permissions
    schemas/               # Zod schemas
    types/
    hooks/
    utils/
```

## Getting Started

### 1. Prerequisites

- Node.js 20+
- PostgreSQL 14+ running locally (or a hosted instance)
- npm

### 2. Install

```bash
npm install
```

### 3. Environment variables

```bash
cp .env.example .env
```

Set at minimum:

- `DATABASE_URL` — PostgreSQL connection string
- `AUTH_SECRET` — run `openssl rand -base64 32` to generate

See [docs/auth.md](docs/auth.md) and [docs/deployment.md](docs/deployment.md) for Google OAuth and Stripe setup.

### 4. Database

```bash
npm run db:generate   # generate the Prisma client (src/generated/prisma)
npm run db:migrate    # apply migrations (prisma migrate dev)
npm run db:seed       # seed demo data
```

> The `prisma7.config.ts` file holds the Prisma 7 configuration (schema path, migration path, seed command, datasource URL). Secrets live only in `.env`.

### 5. Run

```bash
npm run dev       # http://localhost:3000
npm run build     # production build
npm start         # serve production build
```

### 6. Checks

```bash
npm run typecheck
npm run lint
prisma validate    # via npm run db:validate
```

## Demo accounts (seed)

| Role | Email | Purpose |
| --- | --- | --- |
| Buyer | `demo.buyer@ideons.local` | Placeholder buyer profile |
| Freelancer | `demo.freelancer@ideons.local` | Demo freelancer with services |
| Freelancer | `demo.freelancer2@ideons.local` | Demo freelancer with services |
| Admin | `admin@ideons.local` | Admin role |

Seeded users are clearly marked as demo/test records and are **not** usable for password login out of the box — they exist to populate catalog data. Create your own account through `/register`.

## Development Phases

The platform is built in 20 phases. Implemented so far:

- **Phase 1** — Project scaffold: Next.js 16, TypeScript, Tailwind v4, shadcn-style UI primitives, Prisma, PostgreSQL.
- **Phase 2** — Database: full normalized Prisma schema (40+ models), migration SQL, seed script.
- **Phase 3** — Authentication: Better Auth (email/password, Google OAuth wiring, verification, reset), RBAC, session helpers, auth pages.

Remaining phases build the marketplace, cart, checkout, Stripe, orders, chat, reviews, admin, analytics, disputes, gamification, AI assistant, security hardening, testing, SEO and production deployment (see [docs/architecture.md](docs/architecture.md)).

## Environment variables

See [.env.example](.env.example) for the full list and inline descriptions.

## Security model

- Passwords are hashed by Better Auth (never stored in plain text).
- Prices, roles, order statuses and payment statuses are **never trusted from the client** — verified server-side from the database.
- Only Stripe webhooks (with signature validation) finalize payment state.
- Zod validation on the server for every input surface.
- RBAC enforced server-side via `requireRole` / `requireFreelancer` / `requireAdmin`.
- Audit log captures administrative and security-relevant actions.

## Documentation

- [docs/architecture.md](docs/architecture.md) — system architecture & phases
- [docs/database.md](docs/database.md) — schema, models, indexes
- [docs/auth.md](docs/auth.md) — authentication setup (Better Auth, Google, RBAC)
- [docs/payments.md](docs/payments.md) — Stripe integration plan & commission model
- [docs/deployment.md](docs/deployment.md) — Vercel & Docker deployment