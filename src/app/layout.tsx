import type { Metadata, Viewport } from "next";
import { Doto, Geist, Geist_Mono } from "next/font/google";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { getRevealText } from "@/lib/countdown";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-geist-mono",
});

const doto = Doto({
  subsets: ["latin"],
  weight: ["700", "900"],
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
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${doto.variable}`}>
      <body>
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
