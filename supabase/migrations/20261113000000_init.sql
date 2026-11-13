-- Kovio Blitz: reservations, form submissions, and Stripe webhook idempotency.
-- Only the server (service role) touches these tables: RLS is on and there are no public policies.

create extension if not exists pgcrypto;

create table public.reservations (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  choice text not null check (choice in ('buy', 'rent')),
  name text not null,
  company text not null,
  email text not null,
  phone text not null,
  country text not null,
  use_case text not null,
  referral_code text not null unique,
  referred_by text,
  status text not null default 'pending' check (status in ('pending', 'paid', 'refunded')),
  stripe_session_id text unique,
  stripe_payment_intent text,
  paid_at timestamptz
);

create index reservations_status_created_idx on public.reservations (status, created_at);
create index reservations_referred_by_idx on public.reservations (referred_by) where status = 'paid';
create index reservations_payment_intent_idx on public.reservations (stripe_payment_intent);

create table public.submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  form text not null,
  payload jsonb not null,
  ip_hash text
);

create index submissions_ip_created_idx on public.submissions (ip_hash, created_at);

create table public.stripe_events (
  id text primary key,
  received_at timestamptz not null default now()
);

alter table public.reservations enable row level security;
alter table public.submissions enable row level security;
alter table public.stripe_events enable row level security;

revoke all on public.reservations, public.submissions, public.stripe_events from anon, authenticated;
