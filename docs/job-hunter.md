# Job Hunter

Job Hunter is the second module rebuilt on the shared IDEONS stack (`apps/job-hunter`).
It uses the shared `@ideons/auth` identity and the shared PostgreSQL models
`Company`, `Job`, `JobApplication`, `Resume` and `ResumeScore`.

The legacy implementation (Next.js JS app + Express/Mongo API) is preserved at
`apps/job-hunter-legacy` and `services/job-hunter-server` for reference, and is
superseded by this module.

## Routes

| Route | Purpose |
|---|---|
| `/` | Landing page with live ecosystem counts and latest openings |
| `/jobs` | Browse open jobs, filtered by keyword / type / level / remote |
| `/jobs/[slug]` | Job details + apply form (creates `Resume` + `JobApplication`) |
| `/jobs/new` | Post a job (create or reuse a company profile) |
| `/companies` | Company directory with open-job counts |
| `/companies/[slug]` | Company profile and its open positions |
| `/my-postings` | Recruiter dashboard: your jobs and their applicants |
| `/login`, `/register` | Shared sign-in / sign-up |
| `/api/auth/[...all]` | Better Auth handler (shared account) |

## Data model

- `Company` — employer profile, `ownerId` links to the creating `User`.
- `Job` — an opening; slug-unique, money stored as integer `salaryMin`/`salaryMax`
  with a `currency` code; status `OPEN` → filter for public listings.
- `JobApplication` — `@@unique([jobId, applicantId])` prevents duplicate applications.
- `Resume` — a candidate's resume (title, skills) captured at application time,
  owned by the `User`, linked by `JobApplication.resumeId`.
- `ResumeScore` — reserved for ATS-style scoring (Ingetic AI can populate later).

## Server actions

Server actions (`src/lib/actions.ts`) do all writes with `"use server"` and
Zod validation:

- `postJob(formData)` — creates a company (if needed) then a `Job`; requires sign-in.
- `applyToJob(jobId, formData)` — creates a `Resume` + `JobApplication`; rejects
  duplicates and unauthenticated callers.

Related: [Architecture](architecture.md) · [Database](database.md) · [Authentication](authentication.md)