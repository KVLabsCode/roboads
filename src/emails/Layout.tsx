import { Body, Container, Head, Hr, Html, Preview, Text } from "@react-email/components";
import type { ReactNode } from "react";

export const INK = "#111110";
export const MUTED = "#595751";
export const LINE = "#D5D3CC";
const FONT = "'Helvetica Neue', Helvetica, Arial, sans-serif";

export default function Layout({ preview, children }: { preview: string; children: ReactNode }) {
  return (
    <Html lang="en">
      <Head />
      <Preview>{preview}</Preview>
      <Body style={{ margin: 0, padding: 0, backgroundColor: "#F2F2EF", color: INK, fontFamily: FONT }}>
        <Container style={{ maxWidth: 560, margin: "0 auto", padding: "40px 24px" }}>
          <Text style={{ fontSize: 18, fontWeight: 600, letterSpacing: "0.2em", margin: "0 0 32px", color: INK }}>KOVIO</Text>
          {children}
          <Hr style={{ borderColor: LINE, margin: "40px 0 16px" }} />
          <Text style={{ fontSize: 13, lineHeight: "20px", color: MUTED, margin: 0 }}>Kovio Labs. Built in San Francisco. Shipping worldwide.</Text>
        </Container>
      </Body>
    </Html>
  );
}
