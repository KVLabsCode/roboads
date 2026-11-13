import { after, type NextRequest, NextResponse } from "next/server";
import FounderNotice from "@/emails/FounderNotice";
import { logged, notifyFounders } from "@/lib/server/email";
import { ipHash, isRateLimited, isSameSite, saveSubmission } from "@/lib/server/submissions";
import { type ContactInput, contactSchema, firstError } from "@/lib/validation";

function notice(input: ContactInput) {
  if (input.form === "advertise") {
    const subject = `Campaign enquiry: ${input.company}`;
    return {
      subject,
      email: FounderNotice({
        title: subject,
        fields: [
          { label: "Name", value: input.name },
          { label: "Brand or agency", value: input.company },
          { label: "Work email", value: input.email, href: `mailto:${input.email}` },
          { label: "Dates and city", value: input.details },
        ],
      }),
    };
  }
  const subject = `Application: ${input.role}, ${input.name}`;
  return {
    subject,
    email: FounderNotice({
      title: subject,
      fields: [
        { label: "Name", value: input.name },
        { label: "Email", value: input.email, href: `mailto:${input.email}` },
        { label: "Role", value: input.role },
        { label: "Link", value: input.link, href: input.link },
      ],
    }),
  };
}

export async function POST(req: NextRequest) {
  if (!isSameSite(req)) return NextResponse.json({ error: "Forbidden." }, { status: 403 });
  const parsed = contactSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: firstError(parsed.error) }, { status: 400 });
  const { website, ...input } = parsed.data;
  if (website) return NextResponse.json({ ok: true });

  const hash = ipHash(req);
  if (await isRateLimited(hash)) {
    return NextResponse.json({ error: "Too many messages. Please wait a few minutes and try again." }, { status: 429 });
  }

  const { subject, email } = notice(parsed.data);
  const send = () => notifyFounders(subject, email, input.email);

  const saved = await logged(`saving ${input.form} submission`, saveSubmission(input.form, input, hash));
  if (saved) {
    after(() => logged(`${input.form} email`, send()));
    return NextResponse.json({ ok: true });
  }
  // The database is the safety net for email; if it is down, only succeed when the email actually goes out.
  if (await logged(`${input.form} email`, send())) return NextResponse.json({ ok: true });
  return NextResponse.json({ error: "We could not send that. Please try again, or email hello@kovio.dev." }, { status: 500 });
}
