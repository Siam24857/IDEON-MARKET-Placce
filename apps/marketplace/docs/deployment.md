# Deployment

## Vercel (recommended)

1. Push the repo to GitHub.
2. Import the project in Vercel (framework preset: Next.js).
3. Add environment variables from `.env.example` (see below for the mandatory set).
4. Provision PostgreSQL (Neon / Supabase / RDS). Use the pooled `DATABASE_URL`; set `DIRECT_URL` when using a transaction/session pooler.
5. Run `npx prisma migrate deploy` (`npm run db:deploy`) against the production database.
6. Deploy.

Required env vars in production:

```
DATABASE_URL, DIRECT_URL (if pooling)
AUTH_SECRET
AUTH_BASE_URL (https://your-domain.com)
NEXT_PUBLIC_APP_URL (https://your-domain.com)
GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET
STRIPE_SECRET_KEY, NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY, STRIPE_WEBHOOK_SECRET
STORAGE_PROVIDER, STORAGE_BUCKET, STORAGE_ACCESS_KEY, STORAGE_SECRET_KEY (if remote storage)
AI_API_KEY (Phase 16)
EMAIL_API_KEY (transactional email)
```

## Docker

The project is Docker-ready. A production image:

```dockerfile
FROM node:22-alpine AS base
FROM base AS deps
  WORKDIR /app
  COPY package*.json ./
  RUN npm ci
FROM base AS builder
  WORKDIR /app
  COPY --from=deps /app/node_modules ./node_modules
  COPY . .
  RUN npx prisma generate && npm run build
FROM base AS runner
  WORKDIR /app
  ENV NODE_ENV=production
  COPY --from=builder /app/.next ./.next
  COPY --from=builder /app/node_modules ./node_modules
  COPY --from=builder /app/public ./public
  COPY --from=builder /app/package.json ./package.json
  EXPOSE 3000
  CMD ["npm", "start"]
```

## Database migrations in CI/CD

Never run `prisma migrate dev` in production. Use:

```bash
npm run db:generate   # generate client at build time
npx prisma migrate deploy  # apply migrations, then start
npm run db:seed       # only once for the initial catalog
```

## Security/ops checklist

- [ ] `AUTH_SECRET` is a strong random value
- [ ] Production cookies are `secure`
- [ ] Stripe webhook secret configured and endpoint secured
- [ ] Rate limiting enabled
- [ ] Remote object storage with signed URLs for uploads (Phase 5+)
- [ ] Static GeoRegion/headers reviewed (Phase 17 hardening)
- [ ] Sentry or similar error reporting wired to log production errors (no stack traces to users)