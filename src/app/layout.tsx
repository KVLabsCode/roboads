import type { Metadata } from "next";
import { Playfair_Display, DM_Mono } from "next/font/google";
import { ModalProvider } from "@/components/ModalProvider";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kovio | Programmatic advertising for autonomous robot fleets",
  description:
    "The first programmatic ad platform for autonomous robot fleets. One brief, every fleet, full attribution.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${dmMono.variable} bg-bg text-ink font-mono antialiased`}
      >
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}
