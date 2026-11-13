import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import Stripe from "stripe";
import { env } from "./env";

let supabase: SupabaseClient | null = null;
let stripeClient: Stripe | null = null;
let resendClient: Resend | null = null;

export function db(): SupabaseClient {
  return (supabase ??= createClient(env("SUPABASE_URL"), env("SUPABASE_SERVICE_ROLE_KEY"), {
    auth: { persistSession: false, autoRefreshToken: false },
  }));
}

export function stripe(): Stripe {
  return (stripeClient ??= new Stripe(env("STRIPE_SECRET_KEY")));
}

export function resend(): Resend {
  return (resendClient ??= new Resend(env("RESEND_API_KEY")));
}
