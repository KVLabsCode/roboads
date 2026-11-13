"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const ref = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  // Pinned scroll sections sit just under the header, so expose its real height.
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

  // Close the menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const toggle = toggleRef.current;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel?.querySelector<HTMLElement>(".kv-menu-close")?.focus();

    const focusables = () => Array.from(panel?.querySelectorAll<HTMLElement>("a, button") ?? []);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return setOpen(false);
      if (e.key !== "Tab") return;
      const items = focusables();
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };
    // If the window grows past the phone breakpoint, the panel is hidden by CSS; close it so scroll unlocks.
    const mq = window.matchMedia("(min-width: 821px)");
    const onMq = () => mq.matches && setOpen(false);

    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
      toggle?.focus();
    };
  }, [open]);

  return (
    <>
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
          <div className="kv-header-actions">
            <Link href="/reserve" className="kv-btn kv-btn-dark kv-btn-sm">
              Reserve
            </Link>
            <button
              ref={toggleRef}
              type="button"
              className="kv-menu-toggle"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="kv-menu"
              onClick={() => setOpen(true)}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Sibling of the header: its backdrop-filter would otherwise trap position: fixed inside it. */}
      <div className={`kv-menu${open ? " is-open" : ""}`} inert={!open}>
        <div className="kv-menu-backdrop" onClick={() => setOpen(false)} />
        <div ref={panelRef} id="kv-menu" className="kv-menu-panel" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="kv-menu-top">
            <Link href="/" className="kv-logo" aria-label="Kovio home" onClick={() => setOpen(false)}>
              KOVIO<sup>®</sup>
            </Link>
            <button type="button" className="kv-menu-close" aria-label="Close menu" onClick={() => setOpen(false)}>
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
          <nav className="kv-menu-links" aria-label="Main">
            {NAV_LINKS.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={pathname === l.href ? "page" : undefined}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${80 + i * 40}ms` : "0ms" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Link href="/reserve" className="kv-btn kv-btn-dark kv-menu-cta" onClick={() => setOpen(false)}>
            Reserve Blitz
          </Link>
        </div>
      </div>
    </>
  );
}
