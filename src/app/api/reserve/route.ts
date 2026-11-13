import { after, type NextRequest, NextResponse } from "next/server";
import FounderNotice from "@/emails/FounderNotice";
import { choiceLabel, REF_COOKIE } from "@/lib/reserve";
import { stripe } from "@/lib/server/clients";
import { logged, notifyFounders } from "@/lib/server/email";
import { attachSession, createReservation } from "@/lib/server/reservations";
import { ipHash, isRateLimited, isSameSite, saveSubmission } from "@/lib/server/submissions";
import { firstError, reserveSchema } from "@/lib/validation";

export async function POST(req: NextRequest) {
  if (!isSameSite(req)) return NextResponse.json({ error: "Forbidden." }, { status: 403 });
  const parsed = reserveSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: firstError(parsed.error) }, { status: 400 });
  const input = parsed.data;
  if (input.website) return NextResponse.json({ url: "/reserve" });

  try {
    const hash = ipHash(req);
    if (await isRateLimited(hash)) {
      return NextResponse.json({ error: "Too many attempts. Please wait a few minutes and try again." }, { status: 429 });
    }

    const r = await createReservation(input, req.cookies.get(REF_COOKIE)?.value);
    const label = choiceLabel(r.choice);
    await saveSubmission("reserve", { reservation_id: r.id, ...input, website: undefined }, hash);

    const metadata = {
      reservation_id: r.id,
      choice: r.choice,
      name: r.name,
      company: r.company,
      email: r.email,
      phone: r.phone,
      country: r.country,
      use_case: r.use_case,
      referral_code: r.referral_code,
      referred_by: r.referred_by ?? "",
    };
    const origin = req.nextUrl.origin;
    const session = await stripe().checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: 10_000,
            product_data: { name: `Blitz deposit: ${label}`, description: "Fully refundable. Holds your place in line." },
          },
        },
      ],
      customer_email: r.email,
      client_reference_id: r.id,
      metadata,
      payment_intent_data: { metadata, description: `Blitz deposit: ${label} (${r.name}, ${r.company})` },
      success_url: `${origin}/reserve?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/reserve?cancelled=1&choice=${r.choice}`,
    });
    await attachSession(r.id, session.id);

    after(() =>
      logged(
        "reservation started email",
        notifyFounders(
          `New reservation started: ${r.name}, ${r.company}, ${label}`,
          FounderNotice({
            title: `New reservation started: ${r.name}, ${r.company}, ${label}`,
            fields: [
              { label: "Option", value: label },
              { label: "Name", value: r.name },
              { label: "Company", value: r.company },
              { label: "Email", value: r.email, href: `mailto:${r.email}` },
              { label: "Phone", value: r.phone, href: `tel:${r.phone.replace(/[^+\d]/g, "")}` },
              { label: "Country", value: r.country },
              { label: "Use", value: r.use_case },
              { label: "Referred by", value: r.referred_by ?? "" },
              { label: "Status", value: "Sent to Stripe Checkout, not paid yet" },
            ],
          }),
          r.email,
        ),
      ),
    );

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("[kovio] reserve failed", err);
    return NextResponse.json({ error: "We could not start checkout. Please try again, or email hello@kovio.dev." }, { status: 500 });
  }
}
