# Kovio Blitz website

The marketing and reservation site for Blitz, at [kovio.dev](https://kovio.dev).

- **Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS, three.js
- **Payments:** Stripe Checkout, $100 refundable deposit
- **Email:** Resend, with React Email templates
- **Database:** Supabase Postgres

| Route | What it is |
|---|---|
| `/` | Blitz landing page |
| `/reserve` | Reservation form, Stripe return page, place in line |
| `/advertise` | Advertiser page and campaign form |
| `/mission` | Mission page |
| `/careers` | Open roles and application form |
| `/r/<code>` | Referral link: sets a 30-day `kovio_ref` cookie, then redirects to `/reserve` |
| `POST /api/reserve` | Validates the form, saves a pending reservation, creates a Checkout Session |
| `GET /api/reserve/status` | Checks a Checkout Session; used by the return page while it waits |
| `POST /api/stripe/webhook` | Marks deposits paid or refunded and sends emails |
| `POST /api/contact` | Advertise and Careers forms |
| `POST /api/lead` | Legacy waitlist/lead endpoint, kept working for existing callers (see `CONTRIBUTING.md`) |

Team conventions, CI and repo gotchas are in [`CONTRIBUTING.md`](CONTRIBUTING.md). Retired pages are parked in [`disabled-pages/`](disabled-pages/README.md).

## Local setup

1. Install dependencies (Node 22, see `.nvmrc`):

   ```bash
   nvm use && npm ci
   ```

2. Copy the env file and fill it in (see the sections below for where each value comes from):

   ```bash
   cp .env.example .env.local
   ```

   For local work set `NEXT_PUBLIC_SITE_URL=http://localhost:3000`. It is only used to build share links (`/r/<code>`); Stripe's return URLs always use the address you are browsing on.

3. Create the database tables. Either run the migration with the [Supabase CLI](https://supabase.com/docs/guides/cli):

   ```bash
   supabase link --project-ref <your-project-ref>
   supabase db push
   ```

   or paste `supabase/migrations/20261113000000_init.sql` into the SQL editor in the Supabase dashboard and run it.

   The tables have row level security on and no policies, so only the service role key (server side) can read or write them. Never expose `SUPABASE_SERVICE_ROLE_KEY` to the browser.

4. Forward Stripe webhooks to your machine with the [Stripe CLI](https://docs.stripe.com/stripe-cli), in test mode:

   ```bash
   stripe login
   stripe listen --forward-to localhost:3000/api/stripe/webhook
   ```

   Copy the `whsec_...` secret it prints into `STRIPE_WEBHOOK_SECRET`.

5. Start the site:

   ```bash
   npm run dev
   ```

6. Reserve at `http://localhost:3000/reserve` and pay with test card `4242 4242 4242 4242`, any future expiry and any CVC. You should land on "You are in line" with a place number. Both founders get a "reservation started" email and a "deposit paid" email, and the customer gets a confirmation.

### Environment variables

| Name | Where it comes from |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://kovio.dev` in production |
| `STRIPE_SECRET_KEY` | Stripe dashboard → Developers → API keys. Use `sk_test_...` until launch. |
| `STRIPE_WEBHOOK_SECRET` | `stripe listen` locally; the webhook endpoint's signing secret in production |
| `RESEND_API_KEY` | Resend dashboard → API Keys (sending access is enough) |
| `EMAIL_FROM` | A sender on a domain verified in Resend, e.g. `"Kovio <hello@kovio.dev>"` |
| `NOTIFY_EMAILS` | Comma-separated founder inboxes that receive every form submission |
| `SUPABASE_URL` | Supabase dashboard → Project Settings → API → Project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Same page, `service_role` key |
| `LAUNCH_PARTNER_SLOTS_LEFT` | Number shown on `/advertise` (default 20). Redeploy after changing it. |

## How reservations work

1. The form posts to `/api/reserve`. The server validates it with zod, saves a `pending` row in `reservations` with a fresh referral code, reads `referred_by` from the `kovio_ref` cookie, and creates a Stripe Checkout Session for $100.00 ("Blitz deposit: Buy" or "Blitz deposit: Rent"). The browser goes to Stripe in the same tab.
2. Stripe sends `checkout.session.completed` to the webhook. The webhook verifies the signature, records the event id in `stripe_events` (so a retried event is ignored), marks the reservation `paid`, and sends the emails.
3. Stripe sends the buyer back to `/reserve?session_id=...`. The page asks Stripe for the session and only shows the place in line when `payment_status` is `paid`; otherwise it shows "confirming payment" and polls for up to 30 seconds.
4. **Place in line** = paid, non-refunded reservations created before yours, plus one, minus one for every paid reservation made through your referral link. It never goes below 1.
5. **Refunds:** issue them from the Stripe dashboard. The `charge.refunded` webhook marks the reservation `refunded`, which takes it out of the line and out of anyone's referral count.

Every form also has a hidden honeypot field and a limit of 5 submissions per IP every 10 minutes. Advertise and Careers submissions are saved to the `submissions` table before the email is sent, so nothing is lost if an email fails.

## Production setup

### Stripe webhook

1. Stripe dashboard → Developers → Webhooks → **Add endpoint**.
2. Endpoint URL: `https://kovio.dev/api/stripe/webhook`
3. Events: `checkout.session.completed`, `checkout.session.async_payment_succeeded`, `charge.refunded`.
4. Copy the endpoint's signing secret into `STRIPE_WEBHOOK_SECRET` in Vercel.
5. Do this once in test mode for staging and again in live mode at launch. Live mode has its own `sk_live_...` key and its own signing secret.

### Verify kovio.dev in Resend (SPF and DKIM)

Resend will only send from a domain you have verified.

1. Resend dashboard → **Domains** → **Add Domain** → `kovio.dev`.
2. Resend shows the DNS records to add. Add them exactly as shown at your DNS provider. They are usually:
   - **MX** on `send.kovio.dev` pointing to Resend's feedback server (for bounces).
   - **TXT** (SPF) on `send.kovio.dev`: `v=spf1 include:amazonses.com ~all`.
   - **TXT** (DKIM) on `resend._domainkey.kovio.dev`: the long public key Resend gives you.
3. Recommended: add a DMARC record, **TXT** on `_dmarc.kovio.dev`: `v=DMARC1; p=none; rua=mailto:dmarc@kovio.dev`.
4. Click **Verify** in Resend. DNS can take a few minutes to a few hours.
5. Until the domain is verified you can test with Resend's `onboarding@resend.dev` sender, which only delivers to the email on your Resend account.

### Deploy to Vercel

1. Import the GitHub repo in Vercel. The defaults for Next.js are right; no build settings need changing.
2. Project → Settings → Environment Variables: add every variable from `.env.example` for Production (and Preview, with test-mode Stripe keys). Redeploy after changing variables; they only apply to new deployments.
3. Project → Settings → Domains: add `kovio.dev` (and `www.kovio.dev` redirecting to it) and follow Vercel's DNS instructions.
4. Deploy, then add the Stripe webhook endpoint above and send a test event from the Stripe dashboard to check it returns 200.

## Scripts

```bash
npm run dev     # local dev server
npm run build   # production build (type-checks)
npm run lint    # ESLint
npm test        # vitest (CI runs lint, build, tsc and tests on every push and PR)
```
