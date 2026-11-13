import { type NextRequest, NextResponse } from "next/server";
import type Stripe from "stripe";
import FounderNotice from "@/emails/FounderNotice";
import ReservationConfirmation from "@/emails/ReservationConfirmation";
import { choiceLabel, choiceTitle } from "@/lib/reserve";
import { db, stripe } from "@/lib/server/clients";
import { env } from "@/lib/server/env";
import { logged, notifyFounders, sendEmail } from "@/lib/server/email";
import { findByCode, markPaid, markRefunded, placeInLine, shareUrl } from "@/lib/server/reservations";

const HANDLED = new Set(["checkout.session.completed", "checkout.session.async_payment_succeeded", "charge.refunded"]);

async function onDepositPaid(session: Stripe.Checkout.Session, livemode: boolean) {
  const r = await markPaid(session);
  if (!r) throw new Error(`No reservation for checkout session ${session.id}`);
  if (r.status !== "paid") return;

  const place = await placeInLine(r);
  const label = choiceLabel(r.choice);
  const referrer = r.referred_by ? await findByCode(r.referred_by) : null;
  const share = shareUrl(r.referral_code);
  const pi = r.stripe_payment_intent;
  const paymentLink = pi ? `https://dashboard.stripe.com/${livemode ? "" : "test/"}payments/${pi}` : "";
  const title = `💰 Deposit paid: ${r.name}, ${r.company}, ${label}, place #${place}`;

  // Email failures are logged, not retried: the payment is already recorded and Stripe would re-send this event.
  await Promise.all([
    logged(
      "deposit paid email",
      notifyFounders(
        title,
        FounderNotice({
          title,
          fields: [
            { label: "Place in line", value: `#${place}` },
            { label: "Option", value: label },
            { label: "Name", value: r.name },
            { label: "Company", value: r.company },
            { label: "Email", value: r.email, href: `mailto:${r.email}` },
            { label: "Phone", value: r.phone, href: `tel:${r.phone.replace(/[^+\d]/g, "")}` },
            { label: "Country", value: r.country },
            { label: "Use", value: r.use_case },
            { label: "Stripe payment", value: paymentLink ? "Open in Stripe" : "Not available", href: paymentLink || undefined },
            { label: "Referred by", value: referrer ? `${referrer.name}, ${referrer.company} (${referrer.email}, code ${referrer.referral_code})` : "" },
            { label: "Their referral link", value: share, href: share },
          ],
        }),
        r.email,
      ),
    ),
    logged(
      "customer confirmation email",
      sendEmail({
        to: r.email,
        subject: `You are #${place} in line for Blitz`,
        react: ReservationConfirmation({ name: r.name, place, choiceTitle: choiceTitle(r.choice), shareUrl: share }),
      }),
    ),
  ]);
}

export async function POST(req: NextRequest) {
  const body = await req.text();
  let event: Stripe.Event;
  try {
    event = stripe().webhooks.constructEvent(body, req.headers.get("stripe-signature") ?? "", env("STRIPE_WEBHOOK_SECRET"));
  } catch (err) {
    console.error("[kovio] webhook signature check failed", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }
  if (!HANDLED.has(event.type)) return NextResponse.json({ received: true });

  const claim = await db().from("stripe_events").insert({ id: event.id });
  if (claim.error) {
    if (claim.error.code === "23505") return NextResponse.json({ received: true, duplicate: true });
    console.error("[kovio] could not record stripe event", claim.error);
    return NextResponse.json({ error: "Database unavailable" }, { status: 500 });
  }

  try {
    if (event.type === "charge.refunded") {
      const charge = event.data.object as Stripe.Charge;
      const pi = typeof charge.payment_intent === "string" ? charge.payment_intent : charge.payment_intent?.id;
      if (charge.refunded && pi) await markRefunded(pi);
    } else {
      const session = event.data.object as Stripe.Checkout.Session;
      if (session.payment_status === "paid") await onDepositPaid(session, event.livemode);
    }
  } catch (err) {
    console.error(`[kovio] handling ${event.type} failed`, err);
    await db().from("stripe_events").delete().eq("id", event.id);
    return NextResponse.json({ error: "Handler failed" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
