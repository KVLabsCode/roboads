"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { NAV_LINKS } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const ref = useRef<HTMLElement>(null);

  // Pinned scroll sections sit just under the header; on phones the header wraps to two rows.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const root = document.documentElement;
    const sync = () => root.style.setProperty("--kv-header-h", `${Math.round(el.offsetHeight)}px`);
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <header ref={ref} className="kv-header">
      <div className="kv-header-inner kv-nav">
        <Link href="/" className="kv-logo" aria-label="Kovio home">
          KOVIO<sup>®</sup>
        </Link>
        <nav className="kv-links" aria-label="Main">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} aria-current={pathname === l.href ? "page" : undefined}>
              {l.label}
            </Link>
          ))}
        </nav>
        <Link href="/reserve" className="kv-btn kv-btn-dark kv-btn-sm">
          Reserve
        </Link>
      </div>
    </header>
  );
}
