# Kovio Homepage Redesign — Design Spec

**Date:** 2026-04-12
**Status:** Approved — ready for implementation plan
**Scope:** Complete replacement of the existing Kovio marketing site with a single-page, light-mode, editorial-premium experience.

## 1. Goals and Non-Goals

### Goals
- Replace every piece of the current dark-styled Kovio site with a warm, light, editorial-magazine-meets-ad-tech aesthetic.
- Position Kovio as the first serious programmatic ad platform for autonomous robot fleets.
- Make robot photography the visual hero of the page.
- Give any brand a single clear path: land → understand the category → pick a fleet → open a campaign enquiry.

### Non-Goals
- No backend API, email delivery, or CRM integration for the enquiry form (frontend-only with a TODO marker).
- No CMS — fleet data is typed TypeScript in `src/lib/fleets.ts`.
- No analytics, i18n, or dark-mode toggle.
- No subpage rebuilds. The old `/brands`, `/oem`, and `/contact` routes are deleted; their links become on-page anchors.
- No scroll-jacking, parallax, or heavy motion effects.

## 2. Architecture

### Route layout
- `/` — single long-scrolling page containing all sections.
- `/brands`, `/oem`, `/contact` — **deleted**. Any inbound link to these paths should 404 (acceptable for this scope — no redirects needed since the site isn't yet in production traffic).

### Framework
- Next.js 14 App Router (already installed).
- Tailwind CSS for styling (already installed).
- Framer Motion for scroll-in animations (already installed).
- `next/font/google` for Playfair Display and DM Mono.

### File structure (new)

```
src/app/
  layout.tsx                      # font loading + metadata
  globals.css                     # design tokens, grid texture, base resets
  page.tsx                        # composes all sections in order
src/components/
  Nav.tsx                         # sticky nav with blur-on-scroll
  Hero.tsx                        # headline, subheading, CTAs, stats, grid texture
  Advantages.tsx                  # 6-card 3-col grid
  AdvantageCard.tsx               # single card (icon + title + body)
  HowItWorks.tsx                  # 4-step horizontal flow with connector line
  StepCard.tsx                    # single step (faded numeral + title + body)
  FleetDirectory.tsx              # groups + intro text + CTA
  FleetCategory.tsx               # dot + label + 4-col card grid
  FleetCard.tsx                   # photo card with initial-fallback on error
  QuoteStrip.tsx                  # the one dark band
  BottomCTA.tsx
  Footer.tsx
  CampaignModal.tsx               # portal, backdrop blur, focus trap
  ModalProvider.tsx               # context + useCampaignModal() hook
  icons/                          # 6 line-drawn advantage icons (inline SVG)
    EyeLevel.tsx
    Programmable.tsx
    TapToConvert.tsx
    VerifiedImpressions.tsx
    OneBuy.tsx
    FullAttribution.tsx
src/lib/
  fleets.ts                       # typed fleet data
```

### Existing components and routes to replace

All of the current components are fully rewritten — either deleted or overwritten in place. None of the existing dark-mode markup, classes, or copy survives.

- `src/components/CTAButton.tsx` — delete
- `src/components/ContactForm.tsx` — delete (enquiry form now lives in `CampaignModal`)
- `src/components/Footer.tsx` — overwrite with the new light-mode footer
- `src/components/KovioLogo.tsx` — delete (logo rendered inline in `Nav` and `Footer`)
- `src/components/Navbar.tsx` — delete (replaced by `Nav.tsx`)
- `src/components/ScrollReveal.tsx` — delete (replaced by framer-motion `whileInView`)
- `src/app/brands/` — delete directory
- `src/app/oem/` — delete directory
- `src/app/contact/` — delete directory
- `src/app/page.tsx` — overwrite
- `src/app/layout.tsx` — overwrite (new font loading + warm bg)
- `src/app/globals.css` — overwrite (new tokens, base styles)

## 3. Design Tokens

### Colors (Tailwind extended palette)

| Token | Hex | Usage |
|---|---|---|
| `bg` | `#F5F0E8` | Warm off-white page background |
| `ink` | `#0E0D0A` | Primary text, near-black |
| `gold` | `#C9920A` | Accent — CTAs, logo "v", hover states, category dots |
| `line` | `#E0D8CC` | Borders and dividers (soft warm grey) |
| `mute` | `#6B6258` | Secondary/muted text |
| `cream` | `#FAF6EF` | Card background (slightly lighter than `bg`) |
| `dark` | `#16130E` | Quote strip only — the single dark element |

No purple. No blue. No cool greys.

### Typography

- Headings: **Playfair Display** — variable weight, italics allowed. Loaded as `--font-display` via `next/font/google`.
- Body and labels: **DM Mono** — 400/500. Loaded as `--font-mono` via `next/font/google`.
- Tailwind: `fontFamily.display` → Playfair, `fontFamily.mono` → DM Mono.
- Default body: DM Mono 14-15px with relaxed leading.
- Section headings: Playfair 48-72px, often italic.

### Spacing and rhythm

- Section vertical padding: `py-24` (96px) minimum, `py-32` on desktop for hero, CTA, fleet directory.
- Max content width: `max-w-6xl` centered with `px-6` gutters.
- Every section breathes — avoid dense text blocks.

## 4. Section-by-Section Content

### 4.1 Nav (`Nav.tsx`)
- Fixed to top, full-width.
- Left: "Kovio" in Playfair Display, the **v** in `text-gold`. Click → scrolls to top.
- Center: three anchor links — "Why Kovio" (→ `#why`), "How it Works" (→ `#how`), "Robot Fleets" (→ `#fleets`). DM Mono, uppercase, letter-spaced.
- Right: solid gold "Start a campaign" button — opens campaign modal with no prefilled fleet.
- Scroll state: `useEffect` attaches scroll listener; when `scrollY > 20` add class `scrolled` → `backdrop-blur-md bg-bg/80 border-b border-line`.
- Mobile: links collapse into a hamburger; acceptable to use a simple dropdown (no fancy drawer).

### 4.2 Hero (`Hero.tsx`) — `#top`
- Full viewport height (`min-h-screen`).
- Headline in Playfair Display, italic, split across three lines:
  > *The world's robots*
  > are now
  > *advertising.*
  Line 1 and 3 italic; line 2 roman. Large — around `text-7xl` to `text-8xl` on desktop, scales down on mobile.
- Subheading (DM Mono, `text-mute`, max-w-2xl): "Kovio is the first programmatic ad platform for autonomous robot fleets. One brief, every fleet, full attribution."
- Two buttons:
  - Primary gold "Start a campaign" → opens modal.
  - Ghost "See how it works" → scrolls to `#how`.
- Stats row, inline, Playfair numerals (`text-5xl`) with DM Mono micro-labels underneath:
  - **40,000+** active units
  - **18** cities
  - **12** fleet operators
- Background: warm grid texture. Implementation: CSS-only. A `::before` pseudo-element on the hero with:
  ```css
  background-image:
    linear-gradient(to right, #E0D8CC 1px, transparent 1px),
    linear-gradient(to bottom, #E0D8CC 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse at center top, black 0%, transparent 75%);
  opacity: 0.35;
  ```
- No dark backgrounds. No gradients (other than the fade mask).

### 4.3 Advantages (`Advantages.tsx`) — `#why`
- Section heading (Playfair, italic optional): "Why robots outperform every other OOH format."
- 3-column grid on desktop, 2 on tablet, 1 on mobile. Six cards total.
- Card styling:
  - Background: `bg-cream`
  - Border: `border border-line`
  - Padding: `p-8`
  - Rounded corners: `rounded-sm` (keep it editorial, not bubbly)
  - Hover: `border-gold`, icon color shifts to `text-gold`, subtle `translate-y-[-2px]`
- Card structure: line-drawn SVG icon (24-32px, `stroke-ink`) → Playfair bold title → DM Mono body (2-3 sentences).

**The six cards:**

1. **Eye-level not rooftop** — Robot screens sit at chest height, not up on a roof rack. Pedestrians actually look at them. We see 3x higher dwell time than taxi-top inventory.
2. **Programmable placement** — Unlike a taxi that follows the driver, robots can be directed to a specific street corner or venue at a specific time. You bid on where, when, and who.
3. **Tap to convert** — A haptic touch layer lets passers-by tap for coupons, QR codes, or product pages. That unlocks CPC and CPA pricing, not just CPM.
4. **Verified impressions** — Onboard edge AI measures crowd density and dwell time locally. Every impression is verified by the device, not estimated from a panel.
5. **One buy, all fleets** — A single campaign brief reaches delivery robots, humanoids, autonomous vehicles, and retail bots through one platform. One creative, every form factor.
6. **Full attribution** — Impression to tap to purchase, tracked end to end. DSP-compatible reporting plugs into the rest of your stack.

### 4.4 How It Works (`HowItWorks.tsx`) — `#how`
- Section heading: "Launch a campaign in four steps."
- Horizontal 4-step flow on desktop; stacks vertically on mobile.
- Each step has:
  - Large faded Playfair numeral behind the card: `01`, `02`, `03`, `04` — `text-9xl text-line opacity-60` absolutely positioned behind the content.
  - Title in Playfair bold.
  - 1-2 sentence body in DM Mono.
- Thin horizontal connector line (`border-t border-line` with gold dots at each step) runs behind all four step cards on desktop.

**Steps:**

1. **Define your audience** — Set geography, time of day, demographic, and robot category. Bid however granular you want.
2. **Choose your fleets** — Pick from delivery robots, humanoids, autonomous vehicles, retail bots, and aerial drones.
3. **Upload your creative** — 16:9 video or static image. One spec runs across every fleet in the buy.
4. **Measure and optimise** — Real-time dashboard with verified impressions, tap-through rate, and full attribution.

- Below the steps, centered: large gold button "Start your first campaign." → opens modal.

### 4.5 Fleet Directory (`FleetDirectory.tsx`) — `#fleets`
- Section heading: "Robot fleets available today."
- Intro line in DM Mono: "Click any fleet to start a campaign."
- Five category groups, each rendered by `FleetCategory.tsx`. Category header: small colored dot + category name in DM Mono uppercase.
- Category dot colors (subtle, not primary brand colors — all warm/earthy):
  - Delivery: `#C9920A` (gold)
  - Autonomous Vehicles: `#8B5E3C` (warm brown)
  - Humanoid: `#4A5D3A` (olive)
  - Retail & Cleaning: `#A14D3A` (terracotta)
  - Aerial: `#9C8F7B` (warm stone)
- 4-column responsive grid of fleet cards within each category (2 on tablet, 1 on mobile).

**`FleetCard.tsx` structure:**
- Aspect ratio box `aspect-[4/5]` — photo fills the top 75%, text block below.
- Photo: plain `<img src={imageUrl} alt={company} loading="lazy" onError={...} />` with `object-fit: cover`. On error, the card swaps to a fallback view showing the company's 1-2 letter initials in `text-8xl font-display text-line` centered on a cream background.
- Below photo: company name in Playfair Display (`text-xl`), then coverage + fleet size in DM Mono `text-xs text-mute` on a single line.
- Toborlife card shows a small gold badge ("Design Partner") in the top-right corner of the photo area.
- Click the card → opens modal prefilled with that fleet name.
- Hover: subtle border gold + photo scales 1.02.

**Fleet data (`src/lib/fleets.ts`):**

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
```

**Categories and companies (content for the data file):**

**Delivery Robots** — dot `#C9920A`
- Starship Technologies — US, UK, EU — 6,000+ units
- Serve Robotics — Los Angeles — 2,000+ units
- Kiwibot — US campuses — 1,000+ units
- Coco — US cities — 800+ units

**Autonomous Vehicles** — dot `#8B5E3C`
- Waymo — SF and Phoenix — 700+ vehicles
- Nuro — TX and CA — 500+ units

**Humanoid Robots** — dot `#4A5D3A`
- Unitree Robotics — Global — 10,000+ units
- **Toborlife** — US and Asia — 500+ units — *Design Partner* (gold badge)
- Agility Robotics — US — 300+ units
- Simba Robotics — Global — coverage TBC

**Retail and Cleaning Robots** — dot `#A14D3A`
- Badger Technologies — US grocery retail — 800+ units
- Brain Corp — US retail (Walmart and others) — 15,000+ units
- Bossa Nova Robotics — US retail shelf-scanning — units undisclosed
- Aethon — US hospital and logistics — units undisclosed

**Aerial** — dot `#9C8F7B`
- Zipline — US and Africa — 1,000+ drones
- Wing (Google) — US, Australia, Finland — 600+ drones

**Image sourcing:** Use Wikipedia Commons direct file URLs where available (e.g. `https://upload.wikimedia.org/...`). Where no suitable Commons image exists, use the company's press-kit URL or leave the card to fall back to initials. The fallback guarantees the grid always looks full.

### 4.6 Quote Strip (`QuoteStrip.tsx`)
- Full-bleed width, `bg-dark` (`#16130E`) — the **only** dark band on the page.
- Vertical padding `py-32`.
- Centered editorial quote in Playfair Display italic, `text-4xl md:text-5xl`, `text-bg` (warm off-white on dark):
  > "The next generation of out-of-home advertising doesn't wait for an audience to walk past. It goes to them."
- Attribution below in DM Mono `text-gold`: "— Kovio, 2025".

### 4.7 Bottom CTA (`BottomCTA.tsx`)
- `text-center`, generous padding `py-32`.
- Playfair heading (`text-6xl`): "Ready to put your brand in motion?"
- DM Mono subtext: "No minimum spend. Campaign live in 48 hours."
- Large gold button "Start a campaign" → opens modal.
- Below button, `text-mute text-xs`: team@kovio.dev (as a `mailto:` link).

### 4.8 Footer (`Footer.tsx`)
- Single `border-t border-line` at the top.
- Background `bg-bg` (same as page).
- Three-column row:
  - Left: Kovio logo (same treatment as nav, gold v).
  - Center: "The monetisation layer for autonomous robot fleets." (DM Mono, `text-mute`).
  - Right: `© 2026 Kovio` (DM Mono, `text-mute`).
- Stacks on mobile.

## 5. Campaign Modal (`CampaignModal.tsx` + `ModalProvider.tsx`)

### Trigger contract
- `ModalProvider` at the root of `app/layout.tsx`.
- Exposes hook: `const { open } = useCampaignModal();` with signature `open(fleetName?: string)`.
- Any CTA button anywhere on the page calls `open()` or `open("Starship Technologies")` etc.

### Appearance
- Backdrop: fixed, full-screen, `bg-ink/40 backdrop-blur-md`.
- Dialog: centered, `max-w-lg`, `bg-cream`, `border border-line`, `rounded-sm`, `p-10`.
- Slide-in animation: Framer Motion, `opacity + translateY(16)` → `1 + 0`, `duration: 0.25`.

### Content
- Header: Playfair `text-3xl` — "Start a campaign". If `fleetName` was passed, show a second line in DM Mono `text-gold`: `// ${fleetName}`.
- Form fields:
  - Brand name (text input, required)
  - Email (email input, required)
  - Monthly budget (select: "< $10k", "$10k–$50k", "$50k–$250k", "$250k+")
  - Campaign goals (textarea, 4 rows)
- Submit button: gold primary, full width, "Send enquiry".
- Close X in top-right.

### Behavior
- Close on Esc, backdrop click, or X.
- Focus trap while open (first input gets focus on mount).
- Submit handler: `preventDefault`, swap the form for a success state ("Thanks — we'll be in touch within 24 hours."), log payload to `console.info`, mark `// TODO: wire to /api/campaign-enquiry`.

## 6. Animations

- Scroll-in: Framer Motion `whileInView={{ opacity: 1, y: 0 }}` from `initial={{ opacity: 0, y: 16 }}` with `viewport={{ once: true, amount: 0.2 }}`.
- Staggered children on card grids (`Advantages`, `FleetCategory`) using `staggerChildren: 0.06`.
- Nav blur transition: `transition-all duration-200`.
- No parallax, no scroll-jacking, no marquee.

## 7. Accessibility

- Color contrast: ink on bg = ~17:1, more than sufficient. Gold on bg for buttons ≥ 4.5:1 achieved by using gold as a background with ink text, not gold text on bg. Verify.
- All interactive elements have focus-visible rings in `outline-gold`.
- Modal focus trap + Esc close.
- Images have meaningful `alt` text (company + "robot photo").
- Anchor nav links use real `<a href="#id">` so keyboard and screen readers work.
- Respect `prefers-reduced-motion`: disable framer-motion animations and nav blur transition when set.

## 8. Testing and Verification

UI correctness is verified by running `npm run dev` and walking the page in a browser. Checklist:

- [ ] Nav is sticky and gains blur/border on scroll past 20px.
- [ ] All three center nav links jump to correct sections.
- [ ] Hero headline renders across three lines with correct italic treatment.
- [ ] Hero grid texture fades out and is not visible below the fold.
- [ ] All 6 advantage cards render with icons and hover-gold works.
- [ ] How-it-works shows 4 steps with faded numerals and a connector line on desktop.
- [ ] Every fleet card either loads an image or shows the initials fallback — no blank gaps, grid never looks broken.
- [ ] Toborlife shows gold Design Partner badge.
- [ ] Quote strip is the only dark element on the page.
- [ ] Clicking any fleet card opens modal with that fleet name prefilled.
- [ ] Clicking any "Start a campaign" CTA opens modal without prefill.
- [ ] Modal closes on Esc, backdrop click, and X.
- [ ] Modal form shows success state on submit.
- [ ] Mobile viewport (375px): nav collapses, hero text scales, advantage cards stack, fleet grid becomes 1-column, no horizontal scroll.
- [ ] No console errors.
- [ ] `npm run build` succeeds.
- [ ] Any image URLs that 404 are reported back so they can be swapped.

No unit tests in this scope — this is a marketing page whose correctness is visual.

## 9. Open Questions

None. All ambiguities were resolved during brainstorming:
- Old routes (`/brands`, `/oem`, `/contact`) are deleted (not kept, not redirected).
- Robot images use plain `<img>` with `onError` fallback, not Next `<Image>`.
- Modal form is frontend-only with a TODO marker for a future backend wire-up.
