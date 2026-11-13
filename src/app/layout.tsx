import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import localFont from "next/font/local";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { getRevealText } from "@/lib/countdown";
import { siteUrl } from "@/lib/site";
import "./globals.css";

// Fonts are self-hosted: next/font/google crashed on Vercel's builder when Google served extensionless font URLs.
const doto = localFont({
  src: "./fonts/Doto-latin.woff2",
  weight: "700 900",
  variable: "--font-doto",
  preload: false,
});

export const revalidate = 3600;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: "Blitz, the Kovio robot",
    template: "%s | Kovio",
  },
  description:
    "Meet Blitz: the most interactive robot you can buy, with monetization built in. Buy for $34,900 or rent for $2,990/mo. $100 refundable deposit.",
  openGraph: {
    type: "website",
    siteName: "Kovio",
    title: "Blitz, the Kovio robot",
    description: "The robot that pays for itself. Reserve with a $100 refundable deposit.",
    images: [{ url: "/images/case-times-square.jpg", width: 1086, height: 1448, alt: "Blitz in Times Square" }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#F2F2EF",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} ${doto.variable}`}>
      <body>
        <a href="#main" className="kv-skip">
          Skip to main content
        </a>
        <div id="top" className="kv-page">
          <AnnouncementBar initialText={getRevealText()} />
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
