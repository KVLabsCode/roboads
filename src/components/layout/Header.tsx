"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { getRevealText } from "@/lib/countdown";
import { NAV_LINKS } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const ref = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  // The sheet grows out of the menu button, wherever it currently sits on screen.
  const openMenu = () => {
    const btn = toggleRef.current;
    const menu = panelRef.current;
    if (btn && menu) {
      const r = btn.getBoundingClientRect();
      const x = r.left + r.width / 2;
      const y = r.top + r.height / 2;
      const reach = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
      menu.style.setProperty("--kv-menu-x", `${Math.round(x)}px`);
      menu.style.setProperty("--kv-menu-y", `${Math.round(y)}px`);
      menu.style.setProperty("--kv-menu-r", `${Math.ceil(reach) + 2}px`);
    }
    setOpen(true);
  };

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
              onClick={openMenu}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Sibling of the header: its backdrop-filter would otherwise trap position: fixed inside it. */}
      <div
        ref={panelRef}
        id="kv-menu"
        className={`kv-menu${open ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!open}
      >
        <div className="kv-menu-top">
          <Link href="/" className="kv-logo" aria-label="Kovio home" onClick={() => setOpen(false)}>
            KOVIO<sup>®</sup>
          </Link>
          <button type="button" className="kv-menu-close" aria-label="Close menu" onClick={() => setOpen(false)}>
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
        <div className="kv-menu-body">
          <nav className="kv-menu-links" aria-label="Main">
            {NAV_LINKS.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                data-stagger
                style={{ "--i": i } as React.CSSProperties}
                aria-current={pathname === l.href ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/reserve"
            className="kv-btn kv-btn-dark kv-menu-cta"
            data-stagger
            style={{ "--i": NAV_LINKS.length } as React.CSSProperties}
            onClick={() => setOpen(false)}
          >
            Reserve Blitz
          </Link>
        </div>
        <p className="kv-menu-foot" data-stagger style={{ "--i": NAV_LINKS.length + 2 } as React.CSSProperties}>
          Full reveal Jan 5, 2027 · <span suppressHydrationWarning>{getRevealText().replace(/\.$/, "")}</span>
        </p>
      </div>
    </>
  );
}
