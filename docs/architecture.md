# IDEONS ECOSYSTEM — Architecture

## Goal

One unified platform: **Website + Marketplace + E-commerce + Job Hunter + Ingetic AI + E-Book Platform + Hello Resources + Portfolio + Company ID**, sharing one authentication, one PostgreSQL database, one Prisma layer, one design system, one notification system, one chat system, one payment architecture, one admin system, and one user account.

## Monorepo

- **npm workspaces** for shared packages (`packages/*`).
- **Turborepo** for task orchestration (build → typecheck → lint → test) with caching.
- Adopted applications (`apps/*`, `services/*`, `resources/*`) keep their own toolchains today; they join the workspace pipeline as they are migrated onto the shared stack.

```
apps/
  marketplace/    Next.js 16 — live (Phases 1–4). Landing + marketplace.
  portfolio/      Adopted from "Company IDEON Portfolio"
  ecommerce/      Adopted from "E-comarcewebsite"
  job-hunter/     Adopted from "job-hunter-project"
  ingetic-ai/     Adopted from "Agentic ai/ai-career-mentor"
  ebook-platform/ Adopted from "FAB-E-Book-platform"
  company-id/     (planned)
  web/            (planned — dedicated main website shell)
services/
  job-hunter-server/  Adopted Express + MongoDB
packages/
  ui/             Shared design system (Button, Card, Badge, Avatar, Input, Label, Field…)
  validation/     Shared Zod schemas
  config/         Shared constants + env parsing
  database/       (Phase 2) Prisma client + shared schema
  auth/           (Phase 3) Better Auth server shared by all apps
  payments/       (Phase 7) Stripe: checkout, intents, webhooks, refunds, payouts
  storage/        (Phase 6) Uploads + access control
  chat/           (Phase 8) Messaging + realtime transport abstraction
  ai/             (Phase 9) Ingetic AI tools (DB access only via permissioned tools)
resources/
  hello-resources/ Adopted Figma/assets from "hireloop-resources"
```

## Principles

- **ONE account.** Better Auth sessions are shared; no per-app accounts.
- **ONE database.** A single PostgreSQL schema (`apps/marketplace/prisma` today, canonical `prisma/` + `@ideons/database` in Phase 2).
- **Trust nothing from the client.** Roles, prices, and payment status are validated/extracted server-side; every payment is confirmed via verified Stripe webhooks; client-side values are never authoritative.
- **RBAC.** Role checks and permission gating happen in server code (`@ideons/auth` helpers), never by hiding UI.
- **AI safety.** Ingetic AI only touches the database through explicit, permissioned tools implemented server-side.

## Routing model

All modules are served from one host and one domain (e.g. `ideons.com`):

```
/              → Website (shell) → routes to every module
/marketplace   → freelance marketplace
/portfolio     → portfolio
/ecommerce     → e-commerce
/ebooks        → e-book platform
/resources     → hello resources
/jobs          → job hunter
/ai            → ingetic AI
/company       → company ID
/dashboard     → unified user dashboard
```

## Data flow

```
Next.js Server Components / Route Handlers
        │
        ├── @ideons/auth      → session / RBAC
        ├── @ideons/database  → Prisma (single Postgres)
        ├── @ideons/payments  → Stripe (server-only, webhook-verified)
        ├── @ideons/storage   → uploads (validated, signed access)
        ├── @ideons/chat      → messages (realtime transport abstraction)
        ├── @ideons/ai        → tools (permissioned)
        └── @ideons/ui        → design system
```

## Detailed module specs

- [Database](database.md)
- [Authentication](authentication.md)
- [Marketplace](marketplace.md)
- [Payments](payments.md)
- [Deployment](deployment.md)

Deeper, current implementation notes live inside `apps/marketplace/docs/*.md`.