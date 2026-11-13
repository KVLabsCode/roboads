import "server-only";
import { randomBytes } from "node:crypto";
import type Stripe from "stripe";
import { type Choice, REF_CODE_RE, type ReserveStatus } from "@/lib/reserve";
import { siteUrl } from "@/lib/site";
import type { ReserveInput } from "@/lib/validation";
import { db, stripe } from "./clients";

export type Reservation = {
  id: string;
  created_at: string;
  choice: Choice;
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  use_case: string;
  referral_code: string;
  referred_by: string | null;
  status: "pending" | "paid" | "refunded";
  stripe_session_id: string | null;
  stripe_payment_intent: string | null;
  paid_at: string | null;
};

const UNIQUE_VIOLATION = "23505";

function referralCode(name: string): string {
  const base =
    name
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[^a-z0-9]/g, "")
      .slice(0, 8) || "kovio";
  const alphabet = "abcdefghijkmnpqrstuvwxyz23456789";
  const suffix = Array.from(randomBytes(5), (b) => alphabet[b % alphabet.length]).join("");
  return base + suffix;
}

export function shareUrl(code: string) {
  return `${siteUrl()}/r/${code}`;
}

export async function findByCode(code: string): Promise<Reservation | null> {
  const { data } = await db().from("reservations").select("*").eq("referral_code", code).maybeSingle();
  return (data as Reservation | null) ?? null;
}

async function resolveReferrer(cookieCode: string | undefined, email: string): Promise<string | null> {
  const code = cookieCode?.toLowerCase();
  if (!code || !REF_CODE_RE.test(code)) return null;
  const referrer = await findByCode(code);
  if (!referrer || referrer.email === email) return null;
  return code;
}

export async function createReservation(input: ReserveInput, cookieCode: string | undefined): Promise<Reservation> {
  const referred_by = await resolveReferrer(cookieCode, input.email);
  for (let attempt = 0; attempt < 5; attempt++) {
    const { data, error } = await db()
      .from("reservations")
      .insert({
        choice: input.choice,
        name: input.name,
        company: input.company,
        email: input.email,
        phone: input.phone,
        country: input.country,
        use_case: input.useCase,
        referral_code: referralCode(input.name),
        referred_by,
      })
      .select("*")
      .single();
    if (!error) return data as Reservation;
    if (error.code !== UNIQUE_VIOLATION) throw new Error(`Creating reservation failed: ${error.message}`);
  }
  throw new Error("Could not generate a unique referral code");
}

export async function attachSession(id: string, sessionId: string) {
  const { error } = await db().from("reservations").update({ stripe_session_id: sessionId }).eq("id", id);
  if (error) throw new Error(`Saving checkout session failed: ${error.message}`);
}

function paymentIntentId(pi: string | Stripe.PaymentIntent | null): string | null {
  if (!pi) return null;
  return typeof pi === "string" ? pi : pi.id;
}

// Moves a pending reservation to paid. Safe to call from both the webhook and the return page.
export async function markPaid(session: Stripe.Checkout.Session): Promise<Reservation | null> {
  const id = session.client_reference_id;
  if (!id) return null;
  const { data, error } = await db()
    .from("reservations")
    .update({
      status: "paid",
      paid_at: new Date().toISOString(),
      stripe_session_id: session.id,
      stripe_payment_intent: paymentIntentId(session.payment_intent),
    })
    .eq("id", id)
    .eq("status", "pending")
    .select("*")
    .maybeSingle();
  if (error) throw new Error(`Marking reservation paid failed: ${error.message}`);
  if (data) return data as Reservation;
  const existing = await db().from("reservations").select("*").eq("id", id).maybeSingle();
  if (existing.error) throw new Error(`Loading reservation failed: ${existing.error.message}`);
  return (existing.data as Reservation | null) ?? null;
}

export async function markRefunded(paymentIntent: string) {
  const { error } = await db().from("reservations").update({ status: "refunded" }).eq("stripe_payment_intent", paymentIntent);
  if (error) throw new Error(`Marking reservation refunded failed: ${error.message}`);
}

// Paid deposits made before yours put you behind them; every paid referral moves you up one place.
export async function placeInLine(r: Reservation): Promise<number> {
  const [ahead, referrals] = await Promise.all([
    db().from("reservations").select("id", { count: "exact", head: true }).eq("status", "paid").lt("created_at", r.created_at),
    db().from("reservations").select("id", { count: "exact", head: true }).eq("status", "paid").eq("referred_by", r.referral_code),
  ]);
  if (ahead.error) throw new Error(`Counting reservations failed: ${ahead.error.message}`);
  if (referrals.error) throw new Error(`Counting referrals failed: ${referrals.error.message}`);
  return placeFromCounts(ahead.count ?? 0, referrals.count ?? 0);
}

export function placeFromCounts(paidAhead: number, paidReferrals: number): number {
  return Math.max(1, paidAhead + 1 - paidReferrals);
}

export async function reservationStatus(sessionId: string): Promise<ReserveStatus> {
  const session = await stripe().checkout.sessions.retrieve(sessionId);
  if (session.payment_status !== "paid") return { state: session.status === "expired" ? "expired" : "pending" };
  const r = await markPaid(session);
  if (!r) return { state: "pending" };
  if (r.status === "refunded") return { state: "refunded" };
  return { state: "paid", place: await placeInLine(r), choice: r.choice, shareUrl: shareUrl(r.referral_code) };
}
