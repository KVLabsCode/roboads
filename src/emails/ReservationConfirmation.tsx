import { Heading, Link, Text } from "@react-email/components";
import Layout, { INK, MUTED } from "./Layout";

type Props = { name: string; place: number; choiceTitle: string; shareUrl: string };

export default function ReservationConfirmation({ name, place, choiceTitle, shareUrl }: Props) {
  const first = name.split(/\s+/)[0] || name;
  return (
    <Layout preview={`You are #${place} in line for Blitz.`}>
      <Text style={{ fontSize: 13, letterSpacing: "0.08em", color: MUTED, margin: 0 }}>YOU ARE IN LINE</Text>
      <Heading as="h1" style={{ fontSize: 72, lineHeight: "76px", fontWeight: 300, letterSpacing: "-0.06em", margin: "8px 0 16px", color: INK }}>
        #{place}
      </Heading>
      <Text style={{ fontSize: 17, lineHeight: "26px", margin: "0 0 16px", color: INK }}>
        Thanks, {first}. {choiceTitle}. Your $100 deposit holds your place, and it is fully refundable. Just reply to this email if you change your mind.
      </Text>
      <Text style={{ fontSize: 17, lineHeight: "26px", margin: "0 0 8px", color: INK, fontWeight: 600 }}>Every referral moves you up the line.</Text>
      <Text style={{ fontSize: 15, lineHeight: "22px", margin: 0 }}>
        <Link href={shareUrl} style={{ color: INK, textDecoration: "underline" }}>
          {shareUrl}
        </Link>
      </Text>
      <Text style={{ fontSize: 15, lineHeight: "22px", color: MUTED, margin: "24px 0 0" }}>Full reveal January 5, 2027. We will be in touch before then.</Text>
    </Layout>
  );
}
