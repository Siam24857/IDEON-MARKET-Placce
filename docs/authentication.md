# Authentication

## One account for the whole ecosystem

A user signs in **once** and uses Marketplace, Job Hunter, E-commerce, E-books, Resources, Portfolio and AI with that same account.

## Stack

- **Better Auth** (`apps/marketplace/src/lib/auth.ts`) — server + typed client.
- **PostgreSQL-backed sessions** via the shared `Session`/`Account`/`Verification` models.
- Extraction target: `@ideons/auth` (Phase 3) so every app imports the same server.

## Features

- Email + password
- Google OAuth (keys via env)
- Email verification (templates in `src/lib/email`)
- Password reset / forgot password
- Secure session cookies
- RBAC (roles on `User.role`; multi-capability roles planned)

## Authorization helpers (`src/lib/session.ts`)

- `getSession()` — current Better Auth session
- `requireUser()` — 401 if signed out
- `requireRole(...roles)` — 403 unless allowed
- `requireFreelancer()` / `requireAdmin()` — typed convenience wrappers

## Rules

- Never trust `role` sent by the client — always read from the server session / DB.
- Password hashing handled by Better Auth (never plaintext).
- Route handlers validate input with Zod (`@ideons/validation`) before use.
- API endpoints that mutate must be server-authorization-checked, not merely hidden in the UI.

## Pages

`/login`, `/register`, `/forgot-password`, `/reset-password`, `/verify-email` under `src/app/(auth)`.

## Env

`AUTH_SECRET`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `AUTH_BASE_URL`. See `.env.example`.