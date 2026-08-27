# Contributing — roboads (the Kovio marketing site)

Despite the repo name, this is the Kovio marketing site serving kovio.dev.
Engineering rules live in the hub repo: [docs/engineering](https://github.com/KVLabsCode/kovio-cloud/blob/main/docs/engineering).

## Setup

```bash
nvm use && npm ci
npm run dev       # :3000
npm run build     # also the type check — no ignoreBuildErrors is set
```

## Gotchas specific to this repo

- **There are no tests and no test runner.** CI says so explicitly rather than
  pretending otherwise. The first test should cover
  `src/app/api/lead/route.ts` — it is public, unauthenticated, writes to
  production and sends two emails per call.
- **`/api/lead` has no CAPTCHA, honeypot, origin check, or server-side length
  caps.** Its only abuse defense is rate limiting inside `kovio_submit_lead`,
  a database function whose body exists **only in production Supabase** —
  `kovio-web/supabase/migrations/20260709_marketing_leads.sql` is eight lines
  of comment and zero SQL. You cannot review or test that defense from a clone.
- **The Supabase URL and anon key are hardcoded** in `route.ts` rather than read
  from env, while `kovio-web` reads the same credential from env. Anon keys are
  public by design, so this is not a leak — but it cannot be rotated without a
  code change and redeploy.
- **`docs/early-access-sheet-setup.md` describes a system that no longer
  exists** (Web3Forms + Google Sheets). `.env.example` documents three dead
  variables and omits `RESEND_API_KEY`, the only one actually required.
- **`src/lib/case-studies.tsx` holds metrics hand-copied from the production
  database** with no link back to the source. Re-verify before changing them.
- **The lead `kind` enum lives in six places across two repos.** Adding one
  means editing all six.
