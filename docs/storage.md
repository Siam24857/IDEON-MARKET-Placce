# Storage

Module: `@ideons/storage` (Phase 6).

## Scope (`packages/storage`)

Provider abstraction over **local disk** and **S3-compatible** storage (Cloudflare R2). One
upload API used by every app:

- Profile / service / product / portfolio images
- Company ID images
- Résumés, e-books, resource files
- Chat attachments

## New uploads require

- **Type allowlist** (per content kind)
- **Size limit** (per content kind)
- **Extension validation** against the allowlist (never trust the client filename)
- **Storage key generated server-side** (never accept a client-chosen path)

## Access

Private files are never served by static URL — access is authorized on the server and
delivered via short-lived signed URLs (R2/S3) or a guarded route (local).
`packages/storage` exposes `put`, `getSignedUrl`, `delete` and `validateUpload`.