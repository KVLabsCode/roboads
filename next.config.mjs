import path from "node:path";
import { fileURLToPath } from "node:url";

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: path.dirname(fileURLToPath(import.meta.url)),
  images: {
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  // Keep <title> and <meta> in the <head> on dynamic pages instead of streaming them into the body.
  htmlLimitedBots: /.*/,
  // URLs from earlier versions of the site. The old pages are parked in /disabled-pages (see its README).
  async redirects() {
    return [
      { source: "/oems", destination: "/", permanent: true },
      { source: "/oem", destination: "/", permanent: true },
      { source: "/platform", destination: "/", permanent: true },
      { source: "/docs", destination: "/", permanent: true },
      { source: "/early-access", destination: "/reserve", permanent: false },
      { source: "/brands", destination: "/advertise", permanent: false },
      { source: "/agencies", destination: "/advertise", permanent: false },
      { source: "/contact", destination: "/advertise#book", permanent: false },
      { source: "/fleets", destination: "/", permanent: false },
      { source: "/case-studies", destination: "/", permanent: false },
      { source: "/case-studies/:slug", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
