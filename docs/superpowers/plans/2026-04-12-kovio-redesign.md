# Kovio Homepage Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the existing dark-mode Kovio site with a warm, light, editorial-premium single-page experience that showcases robot fleets and drives campaign enquiries.

**Architecture:** Next.js 14 App Router single-page site at `/`. All sections composed in `page.tsx`. A `ModalProvider` context lets any CTA open the campaign enquiry modal. Fleet data lives in a typed TS file. Photos hotlink Wikipedia Commons URLs with an `onError` fallback to an initials placeholder. Framer Motion handles scroll-in fades. Playfair Display + DM Mono loaded via `next/font/google`.

**Tech Stack:** Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion, `next/font/google`.

**Verification model:** This is a marketing page whose correctness is visual. Each task ends with a `npm run build` sanity check (where relevant) and a commit. Full visual QA happens in the final task via `npm run dev`.

---

## Task 0: Clean slate — delete old code

**Files:**
- Delete: `src/app/brands/page.tsx`
- Delete: `src/app/oem/page.tsx`
- Delete: `src/app/contact/page.tsx`
- Delete: `src/components/CTAButton.tsx`
- Delete: `src/components/ContactForm.tsx`
- Delete: `src/components/KovioLogo.tsx`
- Delete: `src/components/Navbar.tsx`
- Delete: `src/components/ScrollReveal.tsx`

Leave `Footer.tsx` in place for now — Task 17 overwrites it. Leave `page.tsx`, `layout.tsx`, `globals.css` in place — later tasks overwrite them.

- [ ] **Step 1: Delete the old files and directories**

```bash
cd /Users/koushikkodukula/Desktop/blitzmode/roboads
rm -rf src/app/brands src/app/oem src/app/contact
rm -f src/components/CTAButton.tsx src/components/ContactForm.tsx src/components/KovioLogo.tsx src/components/Navbar.tsx src/components/ScrollReveal.tsx
```

- [ ] **Step 2: Commit**

```bash
git add -A
git commit -m "chore: remove old Kovio site code before redesign"
```

---

## Task 1: Tailwind config — new tokens and font families

**Files:**
- Modify: `tailwind.config.ts`

- [ ] **Step 1: Overwrite the Tailwind config**

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F5F0E8",
        cream: "#FAF6EF",
        ink: "#0E0D0A",
        gold: "#C9920A",
        "gold-deep": "#A67A08",
        line: "#E0D8CC",
        mute: "#6B6258",
        dark: "#16130E",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
```

- [ ] **Step 2: Commit**

```bash
git add tailwind.config.ts
git commit -m "feat(kovio): new warm Tailwind palette and display/mono font families"
```

---

## Task 2: Rewrite globals.css

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Overwrite globals.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-bg: #F5F0E8;
  --color-ink: #0E0D0A;
  --color-gold: #C9920A;
  --color-line: #E0D8CC;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--color-bg);
  color: var(--color-ink);
  font-family: var(--font-mono), ui-monospace, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 15px;
  line-height: 1.6;
}

::selection {
  background: rgba(201, 146, 10, 0.25);
  color: #0E0D0A;
}

/* Hero grid texture — fades out toward the bottom */
.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, #E0D8CC 1px, transparent 1px),
    linear-gradient(to bottom, #E0D8CC 1px, transparent 1px);
  background-size: 56px 56px;
  -webkit-mask-image: radial-gradient(ellipse at center top, black 0%, transparent 75%);
          mask-image: radial-gradient(ellipse at center top, black 0%, transparent 75%);
  opacity: 0.38;
  pointer-events: none;
}

/* Scrollbar */
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: #F5F0E8; }
::-webkit-scrollbar-thumb { background: #E0D8CC; border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: #C9BBA8; }

/* Focus ring */
*:focus-visible {
  outline: 2px solid #C9920A;
  outline-offset: 2px;
  border-radius: 2px;
}

/* Reduced motion — disable all animations */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/globals.css
git commit -m "feat(kovio): new warm globals.css with grid texture and focus ring"
```

---

## Task 3: Rewrite layout.tsx — fonts, ModalProvider placeholder

**Files:**
- Modify: `src/app/layout.tsx`

Note: this task references `ModalProvider` which doesn't exist yet. We import it now and create it in Task 4. Between this task and Task 4 the build will fail — that's intentional; commit happens after Task 4 creates the provider.

- [ ] **Step 1: Overwrite layout.tsx**

```tsx
import type { Metadata } from "next";
import { Playfair_Display, DM_Mono } from "next/font/google";
import { ModalProvider } from "@/components/ModalProvider";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kovio | Programmatic advertising for autonomous robot fleets",
  description:
    "The first programmatic ad platform for autonomous robot fleets. One brief, every fleet, full attribution.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${dmMono.variable} bg-bg text-ink font-mono antialiased`}>
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Do not commit yet.** Task 4 creates `ModalProvider` — commit after that.

---

## Task 4: ModalProvider — context and hook

**Files:**
- Create: `src/components/ModalProvider.tsx`

- [ ] **Step 1: Create ModalProvider.tsx**

```tsx
"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { CampaignModal } from "./CampaignModal";

type ModalState = {
  isOpen: boolean;
  fleetName?: string;
};

type ModalContextValue = {
  open: (fleetName?: string) => void;
  close: () => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ModalState>({ isOpen: false });

  const open = useCallback((fleetName?: string) => {
    setState({ isOpen: true, fleetName });
  }, []);

  const close = useCallback(() => {
    setState({ isOpen: false });
  }, []);

  return (
    <ModalContext.Provider value={{ open, close }}>
      {children}
      <CampaignModal isOpen={state.isOpen} fleetName={state.fleetName} onClose={close} />
    </ModalContext.Provider>
  );
}

export function useCampaignModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useCampaignModal must be used inside <ModalProvider>");
  return ctx;
}
```

- [ ] **Step 2: Do not commit yet.** Task 5 creates `CampaignModal` which this imports — commit after that.

---

## Task 5: CampaignModal — dialog UI and form

**Files:**
- Create: `src/components/CampaignModal.tsx`

- [ ] **Step 1: Create CampaignModal.tsx**

```tsx
"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  isOpen: boolean;
  fleetName?: string;
  onClose: () => void;
};

export function CampaignModal({ isOpen, fleetName, onClose }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const t = setTimeout(() => firstInputRef.current?.focus(), 50);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = {
      fleet: fleetName ?? null,
      brand: data.get("brand"),
      email: data.get("email"),
      budget: data.get("budget"),
      goals: data.get("goals"),
    };
    // TODO: wire to /api/campaign-enquiry
    console.info("[kovio] campaign enquiry:", payload);
    setSubmitted(true);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-md"
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="campaign-modal-title"
            className="relative w-full max-w-lg bg-cream border border-line rounded-sm p-10 shadow-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-mute hover:text-ink transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </svg>
            </button>

            {submitted ? (
              <div className="py-8 text-center">
                <h2 className="font-display text-3xl text-ink mb-3">Thank you.</h2>
                <p className="text-mute">We&rsquo;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <>
                <h2 id="campaign-modal-title" className="font-display text-3xl text-ink">
                  Start a campaign
                </h2>
                {fleetName && (
                  <p className="mt-1 text-xs uppercase tracking-widest text-gold">
                    // {fleetName}
                  </p>
                )}

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <Field label="Brand name">
                    <input
                      ref={firstInputRef}
                      name="brand"
                      type="text"
                      required
                      className="w-full bg-bg border border-line px-4 py-3 text-ink placeholder:text-mute focus:border-gold outline-none"
                      placeholder="Acme Co."
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full bg-bg border border-line px-4 py-3 text-ink placeholder:text-mute focus:border-gold outline-none"
                      placeholder="you@company.com"
                    />
                  </Field>
                  <Field label="Monthly budget">
                    <select
                      name="budget"
                      required
                      defaultValue=""
                      className="w-full bg-bg border border-line px-4 py-3 text-ink focus:border-gold outline-none"
                    >
                      <option value="" disabled>Select a range</option>
                      <option>&lt; $10k</option>
                      <option>$10k – $50k</option>
                      <option>$50k – $250k</option>
                      <option>$250k+</option>
                    </select>
                  </Field>
                  <Field label="Campaign goals">
                    <textarea
                      name="goals"
                      rows={4}
                      className="w-full bg-bg border border-line px-4 py-3 text-ink placeholder:text-mute focus:border-gold outline-none resize-none"
                      placeholder="Tell us what you want to achieve…"
                    />
                  </Field>
                  <button
                    type="submit"
                    className="w-full bg-gold hover:bg-gold-deep text-ink font-mono uppercase tracking-widest text-xs py-4 transition-colors"
                  >
                    Send enquiry
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[10px] uppercase tracking-widest text-mute mb-2">{label}</span>
      {children}
    </label>
  );
}
```

- [ ] **Step 2: Sanity-build**

```bash
cd /Users/koushikkodukula/Desktop/blitzmode/roboads && npm run build
```

Expected: Success. The current `page.tsx` still references deleted components, so this may fail — in that case skip the build and commit anyway; Task 17 rewrites `page.tsx`.

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.tsx src/components/ModalProvider.tsx src/components/CampaignModal.tsx
git commit -m "feat(kovio): modal provider, context, and campaign enquiry modal"
```

---

## Task 6: Fleet data

**Files:**
- Create: `src/lib/fleets.ts`

- [ ] **Step 1: Create fleets.ts**

```ts
export type Fleet = {
  name: string;
  coverage: string;
  fleetSize: string;
  imageUrl: string;
  initials: string;
  designPartner?: boolean;
};

export type FleetCategory = {
  id: string;
  label: string;
  dotColor: string;
  fleets: Fleet[];
};

export const fleetCategories: FleetCategory[] = [
  {
    id: "delivery",
    label: "Delivery Robots",
    dotColor: "#C9920A",
    fleets: [
      {
        name: "Starship Technologies",
        coverage: "US · UK · EU",
        fleetSize: "6,000+ units",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Starship_Technologies_delivery_robot_in_Milton_Keynes.jpg/960px-Starship_Technologies_delivery_robot_in_Milton_Keynes.jpg",
        initials: "ST",
      },
      {
        name: "Serve Robotics",
        coverage: "Los Angeles",
        fleetSize: "2,000+ units",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Serve_Robotics_delivery_robot.jpg/960px-Serve_Robotics_delivery_robot.jpg",
        initials: "SR",
      },
      {
        name: "Kiwibot",
        coverage: "US campuses",
        fleetSize: "1,000+ units",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Kiwibot_food_delivery_robot.jpg/960px-Kiwibot_food_delivery_robot.jpg",
        initials: "KB",
      },
      {
        name: "Coco",
        coverage: "US cities",
        fleetSize: "800+ units",
        imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
        initials: "CO",
      },
    ],
  },
  {
    id: "av",
    label: "Autonomous Vehicles",
    dotColor: "#8B5E3C",
    fleets: [
      {
        name: "Waymo",
        coverage: "SF · Phoenix",
        fleetSize: "700+ vehicles",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Waymo_Chrysler_Pacifica_in_Los_Altos%2C_2017.jpg/960px-Waymo_Chrysler_Pacifica_in_Los_Altos%2C_2017.jpg",
        initials: "WM",
      },
      {
        name: "Nuro",
        coverage: "TX · CA",
        fleetSize: "500+ units",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Nuro_R2_autonomous_delivery_vehicle.jpg/960px-Nuro_R2_autonomous_delivery_vehicle.jpg",
        initials: "NU",
      },
    ],
  },
  {
    id: "humanoid",
    label: "Humanoid Robots",
    dotColor: "#4A5D3A",
    fleets: [
      {
        name: "Unitree Robotics",
        coverage: "Global",
        fleetSize: "10,000+ units",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Unitree_H1_humanoid_robot.jpg/960px-Unitree_H1_humanoid_robot.jpg",
        initials: "UR",
      },
      {
        name: "Toborlife",
        coverage: "US · Asia",
        fleetSize: "500+ units",
        imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800",
        initials: "TL",
        designPartner: true,
      },
      {
        name: "Agility Robotics",
        coverage: "US",
        fleetSize: "300+ units",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Agility_Robotics_Digit.jpg/960px-Agility_Robotics_Digit.jpg",
        initials: "AR",
      },
      {
        name: "Simba Robotics",
        coverage: "Global",
        fleetSize: "Emerging",
        imageUrl: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800",
        initials: "SB",
      },
    ],
  },
  {
    id: "retail",
    label: "Retail & Cleaning Robots",
    dotColor: "#A14D3A",
    fleets: [
      {
        name: "Badger Technologies",
        coverage: "US grocery",
        fleetSize: "800+ units",
        imageUrl: "https://images.unsplash.com/photo-1581091870622-7cdc21e0a0d3?w=800",
        initials: "BT",
      },
      {
        name: "Brain Corp",
        coverage: "US retail (Walmart +)",
        fleetSize: "15,000+ units",
        imageUrl: "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=800",
        initials: "BC",
      },
      {
        name: "Bossa Nova Robotics",
        coverage: "US retail",
        fleetSize: "Shelf-scanning",
        imageUrl: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800",
        initials: "BN",
      },
      {
        name: "Aethon",
        coverage: "US hospitals · logistics",
        fleetSize: "Enterprise",
        imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
        initials: "AE",
      },
    ],
  },
  {
    id: "aerial",
    label: "Aerial",
    dotColor: "#9C8F7B",
    fleets: [
      {
        name: "Zipline",
        coverage: "US · Africa",
        fleetSize: "1,000+ drones",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Zipline_drone_launch.jpg/960px-Zipline_drone_launch.jpg",
        initials: "ZP",
      },
      {
        name: "Wing (Google)",
        coverage: "US · AU · Finland",
        fleetSize: "600+ drones",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Wing_drone_delivery.jpg/960px-Wing_drone_delivery.jpg",
        initials: "WG",
      },
    ],
  },
];
```

- [ ] **Step 2: Commit**

```bash
git add src/lib/fleets.ts
git commit -m "feat(kovio): typed fleet directory data for 5 categories"
```

---

## Task 7: Nav component

**Files:**
- Create: `src/components/Nav.tsx`

- [ ] **Step 1: Create Nav.tsx**

```tsx
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
        scrolled ? "backdrop-blur-md bg-bg/80 border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-2xl tracking-tight">
          Ko<span className="text-gold italic">v</span>io
        </a>
        <div className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.2em] text-mute">
          <a href="#why" className="hover:text-ink transition-colors">Why Kovio</a>
          <a href="#how" className="hover:text-ink transition-colors">How it Works</a>
          <a href="#fleets" className="hover:text-ink transition-colors">Robot Fleets</a>
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
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Nav.tsx
git commit -m "feat(kovio): sticky nav with blur-on-scroll and gold CTA"
```

---

## Task 8: Hero component

**Files:**
- Create: `src/components/Hero.tsx`

- [ ] **Step 1: Create Hero.tsx**

```tsx
"use client";

import { motion } from "framer-motion";
import { useCampaignModal } from "./ModalProvider";

const stats = [
  { value: "40,000+", label: "Active units" },
  { value: "18", label: "Cities" },
  { value: "12", label: "Fleet operators" },
];

export function Hero() {
  const { open } = useCampaignModal();

  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      <div className="hero-grid" aria-hidden />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-[clamp(2.75rem,8vw,7rem)] leading-[0.95] tracking-tight text-ink"
        >
          <span className="italic block">The world&rsquo;s robots</span>
          <span className="block">are now</span>
          <span className="italic block">advertising.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-10 max-w-xl text-mute text-[15px] leading-relaxed"
        >
          Kovio is the first programmatic ad platform for autonomous robot fleets.
          One brief, every fleet, full attribution.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            type="button"
            onClick={() => open()}
            className="bg-gold hover:bg-gold-deep text-ink text-xs uppercase tracking-[0.2em] font-medium px-8 py-4 transition-colors"
          >
            Start a campaign
          </button>
          <a
            href="#how"
            className="border border-line hover:border-ink text-ink text-xs uppercase tracking-[0.2em] font-medium px-8 py-4 transition-colors"
          >
            See how it works
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20 flex flex-wrap gap-12 md:gap-20 pt-10 border-t border-line max-w-2xl"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-5xl text-ink">{stat.value}</div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-mute">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "feat(kovio): hero section with split headline, stats, grid texture"
```

---

## Task 9: Advantage icons

**Files:**
- Create: `src/components/icons/AdvantageIcons.tsx`

Combine all six icons in one file for simplicity — each is a small named export.

- [ ] **Step 1: Create AdvantageIcons.tsx**

```tsx
type IconProps = { className?: string };

const base = "w-8 h-8";

export function EyeLevelIcon({ className }: IconProps) {
  return (
    <svg className={`${base} ${className ?? ""}`} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="10" width="20" height="12" rx="1.5" />
      <line x1="10" y1="22" x2="10" y2="27" />
      <line x1="22" y1="22" x2="22" y2="27" />
      <line x1="16" y1="6" x2="16" y2="10" />
      <circle cx="16" cy="4" r="1.5" />
    </svg>
  );
}

export function ProgrammableIcon({ className }: IconProps) {
  return (
    <svg className={`${base} ${className ?? ""}`} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="16" r="10" />
      <path d="M16 6 L22 16 L16 26 L10 16 Z" />
      <circle cx="16" cy="16" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function TapToConvertIcon({ className }: IconProps) {
  return (
    <svg className={`${base} ${className ?? ""}`} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 14 V8 a3 3 0 0 1 6 0 v10" />
      <path d="M17 14 a3 3 0 0 1 6 0 v7 a6 6 0 0 1 -6 6 h-3 a6 6 0 0 1 -6 -6 v-3" />
      <path d="M7 12 L4 9" />
      <path d="M9 6 L7 3" />
    </svg>
  );
}

export function VerifiedImpressionsIcon({ className }: IconProps) {
  return (
    <svg className={`${base} ${className ?? ""}`} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4 L27 9 v8 c0 6 -5 11 -11 12 c-6 -1 -11 -6 -11 -12 V9 Z" />
      <path d="M11 16 L15 20 L22 12" />
    </svg>
  );
}

export function OneBuyIcon({ className }: IconProps) {
  return (
    <svg className={`${base} ${className ?? ""}`} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="8" r="3" />
      <circle cx="7" cy="22" r="3" />
      <circle cx="25" cy="22" r="3" />
      <path d="M16 11 L16 18" />
      <path d="M16 18 L9 21" />
      <path d="M16 18 L23 21" />
    </svg>
  );
}

export function FullAttributionIcon({ className }: IconProps) {
  return (
    <svg className={`${base} ${className ?? ""}`} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 22 L10 16 L14 19 L20 11 L26 16" />
      <circle cx="4" cy="22" r="1.5" />
      <circle cx="10" cy="16" r="1.5" />
      <circle cx="14" cy="19" r="1.5" />
      <circle cx="20" cy="11" r="1.5" />
      <circle cx="26" cy="16" r="1.5" />
    </svg>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/icons/AdvantageIcons.tsx
git commit -m "feat(kovio): six line-drawn advantage icons"
```

---

## Task 10: Advantages section

**Files:**
- Create: `src/components/Advantages.tsx`

- [ ] **Step 1: Create Advantages.tsx**

```tsx
"use client";

import { motion } from "framer-motion";
import {
  EyeLevelIcon,
  ProgrammableIcon,
  TapToConvertIcon,
  VerifiedImpressionsIcon,
  OneBuyIcon,
  FullAttributionIcon,
} from "./icons/AdvantageIcons";

type Advantage = {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
};

const advantages: Advantage[] = [
  {
    Icon: EyeLevelIcon,
    title: "Eye-level, not rooftop",
    body: "Robot screens sit at chest height, not up on a roof rack. Pedestrians actually look at them. We see 3x higher dwell time than taxi-top inventory.",
  },
  {
    Icon: ProgrammableIcon,
    title: "Programmable placement",
    body: "Unlike a taxi that follows the driver, robots can be directed to a specific street corner or venue at a specific time. You bid on where, when, and who.",
  },
  {
    Icon: TapToConvertIcon,
    title: "Tap to convert",
    body: "A haptic touch layer lets passers-by tap for coupons, QR codes, or product pages. That unlocks CPC and CPA pricing, not just CPM.",
  },
  {
    Icon: VerifiedImpressionsIcon,
    title: "Verified impressions",
    body: "Onboard edge AI measures crowd density and dwell time locally. Every impression is verified by the device, not estimated from a panel.",
  },
  {
    Icon: OneBuyIcon,
    title: "One buy, all fleets",
    body: "A single campaign brief reaches delivery robots, humanoids, autonomous vehicles, and retail bots through one platform. One creative, every form factor.",
  },
  {
    Icon: FullAttributionIcon,
    title: "Full attribution",
    body: "Impression to tap to purchase, tracked end to end. DSP-compatible reporting plugs into the rest of your stack.",
  },
];

export function Advantages() {
  return (
    <section id="why" className="relative py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold">// Why Kovio</p>
          <h2 className="mt-4 font-display italic text-5xl md:text-6xl text-ink max-w-3xl leading-[1.05]">
            Why robots outperform every other OOH format.
          </h2>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group bg-cream border border-line p-8 transition-all duration-200 hover:border-gold hover:-translate-y-0.5"
            >
              <a.Icon className="text-ink group-hover:text-gold transition-colors" />
              <h3 className="mt-6 font-display text-2xl text-ink leading-tight">{a.title}</h3>
              <p className="mt-3 text-[13px] text-mute leading-relaxed">{a.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Advantages.tsx
git commit -m "feat(kovio): six-card advantages grid with hover gold accent"
```

---

## Task 11: HowItWorks section

**Files:**
- Create: `src/components/HowItWorks.tsx`

- [ ] **Step 1: Create HowItWorks.tsx**

```tsx
"use client";

import { motion } from "framer-motion";
import { useCampaignModal } from "./ModalProvider";

const steps = [
  {
    n: "01",
    title: "Define your audience",
    body: "Set geography, time of day, demographic, and robot category. Bid as granular as you want.",
  },
  {
    n: "02",
    title: "Choose your fleets",
    body: "Pick from delivery robots, humanoids, autonomous vehicles, retail bots, and aerial drones.",
  },
  {
    n: "03",
    title: "Upload your creative",
    body: "16:9 video or static image. One spec runs across every fleet in the buy.",
  },
  {
    n: "04",
    title: "Measure and optimise",
    body: "Real-time dashboard with verified impressions, tap-through rate, and full attribution.",
  },
];

export function HowItWorks() {
  const { open } = useCampaignModal();

  return (
    <section id="how" className="relative py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold">// How it Works</p>
          <h2 className="mt-4 font-display italic text-5xl md:text-6xl text-ink max-w-3xl leading-[1.05]">
            Launch a campaign in four steps.
          </h2>
        </motion.div>

        <div className="relative mt-24">
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] border-t border-dashed border-line" aria-hidden />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -top-8 left-0 font-display italic text-[7rem] leading-none text-line select-none pointer-events-none" aria-hidden>
                  {s.n}
                </div>
                <div className="relative bg-bg pt-16 pr-4">
                  <div className="w-3 h-3 rounded-full bg-gold mb-6" />
                  <h3 className="font-display text-2xl text-ink leading-tight">{s.title}</h3>
                  <p className="mt-3 text-[13px] text-mute leading-relaxed max-w-[18rem]">
                    {s.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-24 flex justify-center">
          <button
            type="button"
            onClick={() => open()}
            className="bg-gold hover:bg-gold-deep text-ink text-xs uppercase tracking-[0.2em] font-medium px-10 py-4 transition-colors"
          >
            Start your first campaign
          </button>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/HowItWorks.tsx
git commit -m "feat(kovio): four-step how-it-works with faded numerals"
```

---

## Task 12: FleetCard component

**Files:**
- Create: `src/components/FleetCard.tsx`

- [ ] **Step 1: Create FleetCard.tsx**

```tsx
"use client";

import { useState } from "react";
import type { Fleet } from "@/lib/fleets";
import { useCampaignModal } from "./ModalProvider";

type Props = { fleet: Fleet };

export function FleetCard({ fleet }: Props) {
  const { open } = useCampaignModal();
  const [errored, setErrored] = useState(false);

  return (
    <button
      type="button"
      onClick={() => open(fleet.name)}
      className="group text-left bg-cream border border-line hover:border-gold transition-all duration-200 focus-visible:outline-gold"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-bg">
        {!errored ? (
          <img
            src={fleet.imageUrl}
            alt={`${fleet.name} robot`}
            loading="lazy"
            onError={() => setErrored(true)}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-cream">
            <span className="font-display text-8xl text-line select-none">
              {fleet.initials}
            </span>
          </div>
        )}
        {fleet.designPartner && (
          <span className="absolute top-3 right-3 bg-gold text-ink text-[9px] uppercase tracking-widest font-medium px-2 py-1">
            Design Partner
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg text-ink leading-snug">{fleet.name}</h3>
        <p className="mt-1 text-[10px] uppercase tracking-widest text-mute">
          {fleet.coverage} · {fleet.fleetSize}
        </p>
      </div>
    </button>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/FleetCard.tsx
git commit -m "feat(kovio): fleet card with image + initials fallback"
```

---

## Task 13: FleetDirectory section

**Files:**
- Create: `src/components/FleetDirectory.tsx`

- [ ] **Step 1: Create FleetDirectory.tsx**

```tsx
"use client";

import { motion } from "framer-motion";
import { fleetCategories } from "@/lib/fleets";
import { FleetCard } from "./FleetCard";

export function FleetDirectory() {
  return (
    <section id="fleets" className="relative py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold">// Fleet Directory</p>
          <h2 className="mt-4 font-display italic text-5xl md:text-6xl text-ink max-w-3xl leading-[1.05]">
            Robot fleets available today.
          </h2>
          <p className="mt-6 text-mute text-[14px]">Click any fleet to start a campaign.</p>
        </motion.div>

        <div className="mt-20 space-y-24">
          {fleetCategories.map((cat) => (
            <div key={cat.id}>
              <div className="flex items-center gap-3 mb-10">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: cat.dotColor }}
                  aria-hidden
                />
                <span className="text-[11px] uppercase tracking-[0.25em] text-ink">
                  {cat.label}
                </span>
                <span className="flex-1 border-t border-line ml-4" aria-hidden />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {cat.fleets.map((f, i) => (
                  <motion.div
                    key={f.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                  >
                    <FleetCard fleet={f} />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/FleetDirectory.tsx
git commit -m "feat(kovio): fleet directory with 5 category groups"
```

---

## Task 14: QuoteStrip section

**Files:**
- Create: `src/components/QuoteStrip.tsx`

- [ ] **Step 1: Create QuoteStrip.tsx**

```tsx
"use client";

import { motion } from "framer-motion";

export function QuoteStrip() {
  return (
    <section className="relative bg-dark py-40 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9 }}
          className="font-display italic text-4xl md:text-5xl leading-[1.15] text-bg"
        >
          &ldquo;The next generation of out-of-home advertising doesn&rsquo;t wait for an audience to walk past. It goes to them.&rdquo;
        </motion.blockquote>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-10 text-[11px] uppercase tracking-[0.25em] text-gold"
        >
          — Kovio, 2025
        </motion.p>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/QuoteStrip.tsx
git commit -m "feat(kovio): dark editorial quote strip"
```

---

## Task 15: BottomCTA section

**Files:**
- Create: `src/components/BottomCTA.tsx`

- [ ] **Step 1: Create BottomCTA.tsx**

```tsx
"use client";

import { motion } from "framer-motion";
import { useCampaignModal } from "./ModalProvider";

export function BottomCTA() {
  const { open } = useCampaignModal();

  return (
    <section className="relative py-40 border-t border-line">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="font-display text-5xl md:text-6xl italic text-ink leading-[1.05]"
        >
          Ready to put your brand in motion?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 text-mute text-[14px]"
        >
          No minimum spend. Campaign live in 48 hours.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-12"
        >
          <button
            type="button"
            onClick={() => open()}
            className="bg-gold hover:bg-gold-deep text-ink text-xs uppercase tracking-[0.2em] font-medium px-12 py-5 transition-colors"
          >
            Start a campaign
          </button>
          <p className="mt-6 text-[11px] tracking-wider text-mute">
            <a href="mailto:team@kovio.dev" className="hover:text-ink transition-colors">
              team@kovio.dev
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/BottomCTA.tsx
git commit -m "feat(kovio): bottom CTA section with gold button and email"
```

---

## Task 16: Footer component (overwrite)

**Files:**
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Overwrite Footer.tsx**

```tsx
export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center gap-6 md:gap-0 md:justify-between">
        <a href="#top" className="font-display text-xl tracking-tight">
          Ko<span className="text-gold italic">v</span>io
        </a>
        <p className="text-[11px] uppercase tracking-[0.2em] text-mute text-center">
          The monetisation layer for autonomous robot fleets.
        </p>
        <p className="text-[11px] uppercase tracking-[0.2em] text-mute">© 2026 Kovio</p>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat(kovio): new minimal footer"
```

---

## Task 17: Assemble page.tsx

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Overwrite page.tsx**

```tsx
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Advantages } from "@/components/Advantages";
import { HowItWorks } from "@/components/HowItWorks";
import { FleetDirectory } from "@/components/FleetDirectory";
import { QuoteStrip } from "@/components/QuoteStrip";
import { BottomCTA } from "@/components/BottomCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Advantages />
        <HowItWorks />
        <FleetDirectory />
        <QuoteStrip />
        <BottomCTA />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Run the build**

```bash
cd /Users/koushikkodukula/Desktop/blitzmode/roboads && npm run build
```

Expected: Success. If TypeScript errors occur, fix them in the referenced files before moving on. If the build passes, proceed.

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat(kovio): compose redesigned single-page site"
```

---

## Task 18: Dev walkthrough + visual verification

**Files:** None (verification only).

- [ ] **Step 1: Start dev server in the background**

```bash
cd /Users/koushikkodukula/Desktop/blitzmode/roboads && npm run dev
```

Wait for "Ready in" message.

- [ ] **Step 2: Open http://localhost:3000 in a browser and walk the checklist**

- Nav sticky, gains blur and border when scrolling past 20px.
- Three center nav links jump to `#why`, `#how`, `#fleets`.
- Hero headline renders three lines with italic on lines 1 and 3.
- Hero grid texture is visible near the top and fades by mid-hero.
- Two hero buttons work (gold opens modal, ghost scrolls to `#how`).
- Three stats render with large Playfair numerals.
- Advantages: 6 cards in 3-col grid, icons present, hover turns border and icon gold.
- How it works: 4 steps with faded numerals, gold dots, dashed connector line, gold CTA below.
- Fleet directory: 5 category groups with colored dots, grid of photo cards. Any failed image falls back to initials cleanly — no blank gaps.
- Toborlife card shows gold "Design Partner" badge.
- Clicking any fleet card opens modal with fleet name prefilled as `// FleetName`.
- Quote strip is the only dark band.
- Bottom CTA button opens modal (no prefill). Email link is clickable.
- Footer: logo, tagline, copyright.
- Modal: Esc closes, backdrop click closes, X button closes, submit shows "Thank you" state.
- Mobile (375px emulated): nav collapses cleanly, hero text scales, all grids become 1-column, no horizontal scroll.
- No console errors.

- [ ] **Step 3: Report broken images**

Note any fleet images that fell back to initials so they can be swapped later. This is informational only — the fallback is the designed behavior.

- [ ] **Step 4: Stop dev server**

Kill the background process.

- [ ] **Step 5: Final commit if any image URL swaps were made during the walkthrough**

```bash
git add -A
git commit -m "fix(kovio): swap broken fleet image URLs found during QA"
```

(Skip if no changes were needed.)

---

## Self-review notes

Spec coverage check:
- Nav, hero, advantages (6), how-it-works (4), fleet directory (5 categories incl. Toborlife badge), quote strip, bottom CTA, footer, modal — all have dedicated tasks.
- Design tokens, fonts, grid texture — Task 1-2.
- Old code removal — Task 0.
- Assembly + build — Task 17.
- Visual verification — Task 18.

Placeholders scan: no TBD/TODO in step contents. (`// TODO: wire to /api/campaign-enquiry` is an intentional code marker from the spec, not a plan placeholder.)

Type consistency: `FleetCard` consumes `Fleet` from `@/lib/fleets`. `useCampaignModal().open(fleetName?)` signature is consistent across Nav, Hero, HowItWorks, FleetCard, BottomCTA.
