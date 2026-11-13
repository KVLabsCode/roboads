import Link from "next/link";
import { NAV_LINKS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="kv-footer">
      <div className="kv-footer-inner kv-nav">
        <span className="kv-footer-mark">KOVIO</span>
        <nav aria-label="Footer" className="kv-footer-nav">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>
        <span className="kv-footer-meta">
          <span>Built in San Francisco. Shipping worldwide.</span>
          <span>© 2026 Kovio Labs</span>
        </span>
      </div>
    </footer>
  );
}
