import { Heading, Link, Section, Text } from "@react-email/components";
import Layout, { INK, LINE, MUTED } from "./Layout";

export type Field = { label: string; value: string; href?: string };

export default function FounderNotice({ title, fields }: { title: string; fields: Field[] }) {
  return (
    <Layout preview={title}>
      <Heading as="h1" style={{ fontSize: 24, lineHeight: "30px", fontWeight: 500, letterSpacing: "-0.02em", margin: "0 0 24px", color: INK }}>
        {title}
      </Heading>
      <Section>
        {fields.map((f) => (
          <Section key={f.label} style={{ borderTop: `1px solid ${LINE}`, padding: "10px 0" }}>
            <Text style={{ fontSize: 13, lineHeight: "18px", color: MUTED, margin: 0 }}>{f.label}</Text>
            <Text style={{ fontSize: 16, lineHeight: "24px", color: INK, margin: "2px 0 0", whiteSpace: "pre-wrap" }}>
              {f.href ? (
                <Link href={f.href} style={{ color: INK, textDecoration: "underline" }}>
                  {f.value}
                </Link>
              ) : (
                f.value || "—"
              )}
            </Text>
          </Section>
        ))}
      </Section>
      <Text style={{ fontSize: 14, lineHeight: "20px", color: MUTED, margin: "24px 0 0" }}>Hit reply to answer them directly.</Text>
    </Layout>
  );
}
