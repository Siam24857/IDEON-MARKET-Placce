# Authentication

Authentication uses **Better Auth v1** over the Prisma adapter (PostgreSQL), with email/password and Google OAuth.

## How it works

- **Server** — `src/lib/auth.ts` declares the Better Auth instance (providers, session settings, roles, email hooks, rate limiting).
- **Route handler** — `src/app/api/auth/[...all]/route.ts` exposes `GET`/`POST` at `/api/auth/*`.
- **Client** — `src/lib/auth-client.ts` creates the React client with inferred additional fields so `signUp.email({ username })`, roles, etc. are fully typed.
- **Session helpers** — `src/lib/session.ts`: `getSession()`, `requireUser()`, `requireRole()`, `requireFreelancer()`, `requireAdmin()` (server-side only).

## Roles (RBAC)

Roles are stored on the `User` model as a string and constrained server-side:

| Role | Purpose |
| --- | --- |
| `BUYER` | Default — browse, purchase, order |
| `FREELANCER` | Sell services, deliver orders, receive payouts |
| `ADMIN` | Manage users, services, orders, settings |
| `SUPER_ADMIN` | Full platform control |

Role values on the client are **never trusted**; every protected page/API checks the session on the server.

## Configuration

Required env vars:

```
AUTH_SECRET="generate-with: openssl rand -base64 32"
AUTH_BASE_URL="http://localhost:3000"
```

### Email/password

- Enabled with `requireEmailVerification: true`.
- New accounts receive a verification email (`sendVerificationEmail` hook → `src/lib/email/`).
- Password resets use the `sendResetPassword` hook and a 1h token.
- On registration, hooks provision `Profile`, `BuyerProfile`, `UserXP` and write an `AuditLog`.

### Google OAuth

1. Google Cloud Console → APIs & Services → Credentials → **OAuth client ID (Web application)**.
2. Authorized redirect URI: `http://localhost:3000/api/auth/callback/google` (and the production equivalent).
3. Fill in:

```
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

4. If credentials are empty the provider is effectively disabled — everything else still works.

### Email provider abstraction

`src/lib/email/provider.ts` exposes `send()`. In development, without `EMAIL_API_KEY`, emails are **logged to the console** (safe dev mode). Add `EMAIL_API_KEY` with a real provider (Resend/SES/Postmark) later without touching business code.

## Pages

| Route | Purpose |
| --- | --- |
| `/login` | Email/password + Google sign-in |
| `/register` | Name, username, email, password, terms |
| `/forgot-password` | Request reset link |
| `/reset-password` | Set new password (token from email) |
| `/verify-email` | Check-inbox state + token exchange |

Protected routes redirect to `/login` via `requireUser` etc.

## Security

- Hashed passwords (Better Auth), `httpOnly`/`sameSite=lax`/`secure` cookies.
- Built-in rate limiting on auth endpoints.
- Server-side validation with Zod on all auth forms.
- Verification-token based email confirmation; users must verify before first sign-in.