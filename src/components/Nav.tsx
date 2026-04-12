"use client";

import { useEffect, useState } from "react";
import { useCampaignModal } from "./ModalProvider";

export function Nav() {
  const { open } = useCampaignModal();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-200 ${
        scrolled
          ? "backdrop-blur-md bg-bg/80 border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-2xl tracking-tight">
          Ko<span className="text-gold italic">v</span>io
        </a>
        <div className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.2em] text-mute">
          <a href="#why" className="hover:text-ink transition-colors">
            Why Kovio
          </a>
          <a href="#how" className="hover:text-ink transition-colors">
            How it Works
          </a>
          <a href="#fleets" className="hover:text-ink transition-colors">
            Robot Fleets
          </a>
        </div>
        <button
          type="button"
          onClick={() => open()}
          className="bg-gold hover:bg-gold-deep text-ink text-[11px] uppercase tracking-[0.18em] font-medium px-5 py-2.5 transition-colors"
        >
          Start a campaign
        </button>
      </div>
    </nav>
  );
}
