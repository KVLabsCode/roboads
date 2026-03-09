"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

/* Dropdown items for the "Brands" nav link */
const BRANDS_DROPDOWN = [
  { label: "Retail Robots", href: "/brands", enabled: true, icon: "retail" },
  { label: "Delivery Robots", href: "#", enabled: false, icon: "delivery" },
  { label: "Humanoid Robots", href: "#", enabled: false, icon: "humanoid" },
  { label: "Cleaning Robots", href: "#", enabled: false, icon: "cleaning" },
];

/* Small chevron-down icon */
function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4.5L6 7.5L9 4.5" />
    </svg>
  );
}

/* Distinct icons per robot type */
function DropdownIcon({ type }: { type: string }) {
  const cls = "w-5 h-5 shrink-0";
  switch (type) {
    case "retail":
      return (
        <svg className={cls} viewBox="0 0 20 20" fill="none">
          <rect x="3" y="5" width="14" height="10" rx="2.5" fill="currentColor" opacity="0.15" />
          <rect x="5" y="7" width="10" height="6" rx="1.5" fill="currentColor" opacity="0.8" />
          <circle cx="8" cy="10" r="1" fill="#C4993D" />
          <circle cx="12" cy="10" r="1" fill="#C4993D" />
          <line x1="10" y1="3" x2="10" y2="5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="10" cy="2.5" r="0.8" fill="currentColor" />
        </svg>
      );
    case "delivery":
      return (
        <svg className={cls} viewBox="0 0 20 20" fill="none">
          <rect x="4" y="8" width="12" height="6" rx="2" fill="currentColor" opacity="0.8" />
          <rect x="5" y="6" width="10" height="3" rx="1.5" fill="currentColor" opacity="0.4" />
          <circle cx="7" cy="10.5" r="0.8" fill="#C4993D" />
          <circle cx="13" cy="10.5" r="0.8" fill="#C4993D" />
          <circle cx="7" cy="15" r="1.5" fill="currentColor" opacity="0.6" />
          <circle cx="13" cy="15" r="1.5" fill="currentColor" opacity="0.6" />
          <line x1="14" y1="4" x2="14" y2="6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          <rect x="14" y="3" width="3" height="2" rx="0.5" fill="#C4993D" opacity="0.5" />
        </svg>
      );
    case "humanoid":
      return (
        <svg className={cls} viewBox="0 0 20 20" fill="none">
          <ellipse cx="10" cy="4" rx="3" ry="3.5" fill="currentColor" opacity="0.8" />
          <circle cx="8.5" cy="3.5" r="0.7" fill="#C4993D" />
          <circle cx="11.5" cy="3.5" r="0.7" fill="#C4993D" />
          <rect x="8" y="7.5" width="4" height="6" rx="1.5" fill="currentColor" opacity="0.8" />
          <rect x="5" y="8" width="3" height="5" rx="1.5" fill="currentColor" opacity="0.5" />
          <rect x="12" y="8" width="3" height="5" rx="1.5" fill="currentColor" opacity="0.5" />
          <rect x="8.5" y="13.5" width="1.5" height="4" rx="0.7" fill="currentColor" opacity="0.5" />
          <rect x="10" y="13.5" width="1.5" height="4" rx="0.7" fill="currentColor" opacity="0.5" />
        </svg>
      );
    case "cleaning":
      return (
        <svg className={cls} viewBox="0 0 20 20" fill="none">
          <ellipse cx="10" cy="11" rx="6" ry="2.5" fill="currentColor" opacity="0.8" />
          <ellipse cx="10" cy="9.5" rx="5" ry="2" fill="currentColor" opacity="0.5" />
          <circle cx="8" cy="9.5" r="0.8" fill="#C4993D" />
          <circle cx="12" cy="9.5" r="0.8" fill="#C4993D" />
          <path d="M6 14 L5 15.5" stroke="#C4993D" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
          <path d="M10 14 L10 15.5" stroke="#C4993D" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
          <path d="M14 14 L15 15.5" stroke="#C4993D" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
        </svg>
      );
    default:
      return <span className="w-5 h-5 shrink-0" />;
  }
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
            <Image src="/logo.png" alt="Kovio" width={40} height={40} className="w-10 h-10 rounded-lg" />
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
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 rounded-xl border border-[#E8E2D9] bg-[#FBF8F3] shadow-lg overflow-hidden"
                      >
                        <div className="py-1.5">
                          {BRANDS_DROPDOWN.map((item) =>
                            item.enabled ? (
                              <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setBrandsOpen(false)}
                                className="flex items-center gap-2.5 px-4 py-2 text-sm font-medium text-text-body hover:text-foreground hover:bg-[#F3EDE3] transition-colors duration-150"
                              >
                                <DropdownIcon type={item.icon} />
                                {item.label}
                              </Link>
                            ) : (
                              <span
                                key={item.label}
                                className="flex items-center justify-between px-4 py-2 cursor-default select-none"
                              >
                                <span className="flex items-center gap-2.5 text-sm text-text-body/40">
                                  <DropdownIcon type={item.icon} />
                                  {item.label}
                                </span>
                                <span className="text-[10px] font-medium text-text-muted bg-[#F0EBE3] px-1.5 py-0.5 rounded">Soon</span>
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
                    <div className="flex flex-col gap-1.5 pl-4 border-l-2 border-[#E8E2D9]">
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
                            <DropdownIcon type={item.icon} />
                            {item.label}
                          </Link>
                        ) : (
                          <span
                            key={item.label}
                            className="flex items-center justify-between text-sm text-text-body/40"
                          >
                            <span className="flex items-center gap-2">
                              <DropdownIcon type={item.icon} />
                              {item.label}
                            </span>
                            <span className="text-[10px] font-medium text-text-muted bg-[#F0EBE3] px-1.5 py-0.5 rounded">Soon</span>
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
