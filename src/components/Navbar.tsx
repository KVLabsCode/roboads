"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

/* Dropdown items for the "Brands" nav link */
const BRANDS_DROPDOWN = [
  {
    label: "Retail Robots",
    href: "/brands",
    enabled: true,
  },
  {
    label: "More environments coming soon",
    href: "#",
    enabled: false,
  },
];

/* Small chevron-down icon */
function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 4.5L6 7.5L9 4.5"
      />
    </svg>
  );
}

/* Small robot icon for the Retail Robots item */
function RobotIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      className="shrink-0"
    >
      <rect
        x="4"
        y="6"
        width="8"
        height="7"
        rx="1.5"
        strokeWidth={1.3}
      />
      <rect
        x="5.5"
        y="3"
        width="5"
        height="3.5"
        rx="1"
        strokeWidth={1.3}
      />
      <circle cx="7" cy="5" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="9" cy="5" r="0.6" fill="currentColor" stroke="none" />
      <line x1="8" y1="1.5" x2="8" y2="3" strokeWidth={1.3} strokeLinecap="round" />
      <circle cx="8" cy="1.2" r="0.7" fill="currentColor" stroke="none" />
      <line x1="2.5" y1="9" x2="4" y2="9" strokeWidth={1.3} strokeLinecap="round" />
      <line x1="12" y1="9" x2="13.5" y2="9" strokeWidth={1.3} strokeLinecap="round" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close dropdown when clicking outside */
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setBrandsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setBrandsOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setBrandsOpen(false), 150);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-light border-b border-border shadow-soft-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
              <span className="text-background font-bold text-sm">K</span>
            </div>
            <span className="text-lg font-semibold text-foreground">
              {SITE_NAME}
            </span>
          </Link>

          {/* ── Desktop nav ── */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) =>
              link.label === "Brands" ? (
                /* Brands link with dropdown */
                <div
                  key={link.href}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    onClick={() => setBrandsOpen((v) => !v)}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${
                      pathname === link.href || pathname?.startsWith("/brands")
                        ? "text-foreground"
                        : "text-text-body hover:text-foreground"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      className={`transition-transform duration-200 ${
                        brandsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {brandsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-60 rounded-xl border border-[#E8E2D9] bg-[#FBF8F3] shadow-lg overflow-hidden"
                      >
                        <div className="py-2">
                          {BRANDS_DROPDOWN.map((item) =>
                            item.enabled ? (
                              <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setBrandsOpen(false)}
                                className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-text-body hover:text-foreground hover:bg-[#F3EDE3] transition-colors duration-150"
                              >
                                <RobotIcon />
                                {item.label}
                              </Link>
                            ) : (
                              <span
                                key={item.label}
                                className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-text-body/50 cursor-default select-none"
                              >
                                <span className="w-4 h-4 flex items-center justify-center text-text-body/30">
                                  &bull;
                                </span>
                                {item.label}
                              </span>
                            )
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                /* Other nav links (OEMs, etc.) rendered normally */
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    pathname === link.href
                      ? "text-foreground"
                      : "text-text-body hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className="btn-primary px-5 py-2.5 text-sm font-medium rounded-full"
            >
              Get in Touch
            </Link>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-light border-b border-border overflow-hidden"
          >
            <div className="px-5 py-5 flex flex-col gap-4">
              {NAV_LINKS.map((link) =>
                link.label === "Brands" ? (
                  <div key={link.href} className="flex flex-col gap-2">
                    {/* Section label */}
                    <span className="text-sm font-medium text-foreground">
                      {link.label}
                    </span>
                    {/* Sub-items indented */}
                    <div className="flex flex-col gap-2 pl-4 border-l-2 border-[#E8E2D9]">
                      {BRANDS_DROPDOWN.map((item) =>
                        item.enabled ? (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className={`flex items-center gap-2 text-sm font-medium ${
                              pathname === item.href
                                ? "text-foreground"
                                : "text-text-body"
                            }`}
                          >
                            <RobotIcon />
                            {item.label}
                          </Link>
                        ) : (
                          <span
                            key={item.label}
                            className="flex items-center gap-2 text-sm text-text-body/50"
                          >
                            <span className="w-4 h-4 flex items-center justify-center text-text-body/30">
                              &bull;
                            </span>
                            {item.label}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-sm font-medium ${
                      pathname === link.href
                        ? "text-foreground"
                        : "text-text-body"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary px-5 py-2.5 text-sm font-medium rounded-full text-center mt-1"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
