# IDEONS ECOSYSTEM

One unified platform — **ONE account, ONE PostgreSQL database, ONE design system, ONE payment architecture.**

The ecosystem brings together every IDEONS product concept into a single scalable monorepo:

| Module | App | Status |
|---|---|---|
| IDEONS Website (main entry) | `apps/web` | ✅ Phase 3 (auth + dashboard shell) |
| IDEONS Marketplace | `apps/marketplace` | ✅ Live (Phases 1–4) |
| E-commerce Website | `apps/ecommerce` | Adopted from `E-comarcewebsite` |
| Job Hunter | `apps/job-hunter` | ✅ Phase 4 (rebuilt on shared DB + auth) |
| Job Hunter Server | `services/job-hunter-server` | Legacy (superseded by `apps/job-hunter`) |
| Ingetic AI | `apps/ingetic-ai` | Adopted from `Agentic ai/ai-career-mentor` |
| E-Book Platform | `apps/ebook-platform` | Adopted from `FAB-E-Book-platform` |
| Hello Resources | `resources/hello-resources` | Adopted from `hireloop-resources` |
| Portfolio | `apps/portfolio` | Adopted from `Company IDEON Portfolio` |
| Company ID | `apps/company-id` | Phase 3+ |

## Repository layout

```
.
├── apps/            # Frontend applications (one per product)
├── services/        # Backend services
├── packages/        # Shared libraries (ui, database, auth, payments, …)
├── resources/       # Non-code assets (design files, guides)
├── prisma/          # # Phase 2: shared Prisma schema (canonical DB layer)
├── docs/            # Architecture & module documentation
└── *.config.*       # Root monorepo configuration
```

## Architecture

See [`docs/architecture.md`](docs/architecture.md) for the full design.

- **Monorepo**: npm workspaces + Turborepo. Root commands orchestrate every module.
- **Orchestration**: `npm run <script>` at the root delegates to the relevant apps/packages.
- **Shared database**: one PostgreSQL database behind a single canonical Prisma schema at `prisma/` (repo root), exposed to all apps via `@ideons/database`.
- **Shared auth**: Better Auth, one account across every module.
- **Shared UI**: `packages/ui` — a single design system used by all apps.
- **Shared payments**: Stripe via `packages/payments` (scaffold) — never trust client prices/status, verify webhooks server-side.

## Getting started

```bash
npm install                 # install root tooling + shared packages
npm run db:migrate          # apply migrations to the shared PostgreSQL database
npm run db:seed             # seed demo data
npm run dev                 # run all shared apps (see Dev servers below)
npm run build               # generate Prisma client + build all workspace apps
```

Workspace apps (all rebuilt on the shared stack): `apps/marketplace` (:3000),
`apps/web` (:3001), `apps/job-hunter` (:3002). Run them individually with
`npm run dev -w ideons-<app>` (e.g. `npm run dev -w ideons-job-hunter`).

Apps not yet migrated keep their own `package.json` and toolchain; they join the shared
workspace pipeline as they are migrated onto the shared database/auth/UI.

## Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Dev server (marketplace) |
| `npm run build` | Prisma generate + build all workspace apps (turbo) |
| `npm run typecheck` | Type-check packages + apps |
| `npm run lint` | Lint packages + apps |
| `npm run db:*` | Prisma migrations / seed / studio |

## Environment

Copy `.env.example` → `.env` and fill in credentials (see `docs/deployment.md`).
`.env` files are never committed.

## Documentation

- [Architecture](docs/architecture.md)
- [Database](docs/database.md)
- [Authentication](docs/authentication.md)
- [Marketplace](docs/marketplace.md)
- [Job Hunter](docs/job-hunter.md)
- [Payments](docs/payments.md)
- [Deployment](docs/deployment.md)