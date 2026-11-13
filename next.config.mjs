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
};

export default nextConfig;
