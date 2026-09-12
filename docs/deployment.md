# Deployment

## Environment

Copy `.env.example` → `.env`. Required variables:

- `DATABASE_URL` / `DIRECT_URL` — PostgreSQL (Neon). Use the **direct** connection for migrations, the pooled one for runtime when needed.
- `AUTH_SECRET` — random 32+ bytes. Generate with `openssl rand -base64 32`.
- `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` — Google OAuth app.
- `STRIPE_*` — live/test keys + webhook secret.
- `STORAGE_*`, `AI_API_KEY`, `EMAIL_*` — filled in as those phases ship.

`.env` is gitignored. Never commit secrets.

## Database migrations

```bash
npm run db:migrate    # dev (creates shadow db)
npm run db:deploy     # CI / prod — applies committed migrations
npm run db:seed       # demo data
```

## Build & check

```bash
npm run typecheck
npm run lint
npm run build         # turbo (shared packages) + apps
```

## Hosting targets

- **App**: Vercel (Next.js). Set all env vars in the project dashboard.
- **Database**: Neon (managed Postgres) — already live for Marketplace.
- **Storage** (Phase 6): Cloudflare R2 / local.
- **AI** (Phase 9): provider via `AI_PROVIDER`/`AI_API_KEY`.

## Production checklist

- [ ] `AUTH_SECRET` unique per environment
- [ ] `STRIPE_WEBHOOK_SECRET` configured and endpoints verify signatures
- [ ] Exact role checks enforced server-side on every mutating route
- [ ] Rate limiting on auth + checkout endpoints
- [ ] Audit logging enabled for money/admin actions
- [ ] `.env` excluded from all artifacts; key rotation process documented