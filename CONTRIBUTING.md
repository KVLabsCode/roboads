# Contributing — roboads (the Kovio marketing site)

Despite the repo name, this is the Kovio marketing site serving kovio.dev.
Engineering rules live in the hub repo: [docs/engineering](https://github.com/KVLabsCode/kovio-cloud/blob/main/docs/engineering).

## Setup

```bash
nvm use && npm ci
npm run dev       # :3000
npm run build     # also the type check — no ignoreBuildErrors is set
npm test          # vitest — covers the lead route's abuse defenses
```

## Gotchas specific to this repo

- **Tests exist and CI runs them.** `src/app/api/lead/route.ts` is public,
  unauthenticated, writes to production and sends two emails per call — its
  defenses (honeypot, same-site check, length caps) are covered in
  `src/app/api/lead/__tests__/route.test.ts`. Extend there first.
- **`/api/lead` now has app-layer defenses** (honeypot, same-site check,
  server-side length caps) — but still no CAPTCHA, and the rate limit inside
  `kovio_submit_lead` is a database function whose body exists **only in
  production Supabase** — `kovio-web/supabase/migrations/20260709_marketing_leads.sql`
  is eight lines of comment and zero SQL. You cannot review or test that
  defense from a clone.
- **The Supabase URL and anon key are read from env**
  (`NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY`), with the
  current production values as in-code fallbacks so nothing breaks before the
  Vercel env is set. Set the env vars so the credential can be rotated without
  a redeploy.
- **`docs/early-access-sheet-setup.md` is superseded** (retired Web3Forms +
  Google Sheets pipeline; kept with a header note for history). `.env.example`
  documents the real requirements: `RESEND_API_KEY` plus the two Supabase vars.
- **`src/lib/case-studies.tsx` holds metrics hand-copied from the production
  database** with no link back to the source. Re-verify before changing them.
- **The lead `kind` enum lives in six places across two repos.** Adding one
  means editing all six.
