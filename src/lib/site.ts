export const NAV_LINKS = [
  { href: "/", label: "Blitz" },
  { href: "/advertise", label: "Advertise" },
  { href: "/mission", label: "Mission" },
  { href: "/careers", label: "Careers" },
] as const;

export function siteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL || "https://www.kovio.dev").replace(/\/$/, "");
}
