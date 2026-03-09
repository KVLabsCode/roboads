"use client";

import ScrollReveal from "@/components/ScrollReveal";
import CTAButton from "@/components/CTAButton";

/* ═══════════════════════════════════════════════════════════
   OEM PAGE — The Kovio Layer
   No SDK. No hardware. No technical details.
   Only the economic layer, monetisation, and opportunity.
   ═══════════════════════════════════════════════════════════ */

/* ── Small robot icon for cards ── */
function RobotIcon({ gold }: { gold?: boolean }) {
  return (
    <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
      <rect x="10" y="6" width="28" height="22" rx="6" fill={gold ? "#2C2418" : "#D4CFC6"} />
      <circle cx="20" cy="17" r="3" fill={gold ? "#C4993D" : "#B8B0A6"} />
      <circle cx="28" cy="17" r="3" fill={gold ? "#C4993D" : "#B8B0A6"} />
      <rect x="16" y="30" width="16" height="6" rx="2" fill={gold ? "#3D3224" : "#D4CFC6"} />
      <rect x="14" y="38" width="6" height="4" rx="1.5" fill={gold ? "#5C5346" : "#D4CFC6"} />
      <rect x="28" y="38" width="6" height="4" rx="1.5" fill={gold ? "#5C5346" : "#D4CFC6"} />
      {gold && <circle cx="24" cy="17" r="18" fill="none" stroke="#C4993D" strokeWidth="1" opacity="0.25" />}
    </svg>
  );
}

/* ── Hero Visual: HTML card layout ── */
function MonetisationVisual() {
  return (
    <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-6">

      {/* ═══ LEFT CARD: WITHOUT KOVIO ═══ */}
      <div>
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#2C2418] text-[#FAF8F5] text-xs font-semibold tracking-wide mb-4">WITHOUT KOVIO</span>
        <div className="rounded-2xl border border-[#E8E2D9] bg-[#F5F1EC] p-6 sm:p-8">
          {/* No brand connections */}
          <div className="rounded-lg border border-dashed border-[#D4CFC6] bg-white/60 py-3 px-4 text-center mb-6">
            <span className="text-sm text-[#D4CFC6]">No brand connections</span>
          </div>

          {/* Robot with red X */}
          <div className="flex justify-center mb-6 relative">
            <div className="bg-white rounded-xl p-4 shadow-sm inline-block">
              <RobotIcon />
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#D4756A] flex items-center justify-center" style={{ right: "calc(50% - 40px)" }}>
              <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>
            </div>
          </div>

          {/* Labels */}
          <p className="text-center text-sm text-[#9C9488] font-medium mb-2">One function. Zero revenue.</p>
          <p className="text-center text-4xl font-bold text-[#D4CFC6] mb-1">$0</p>
          <p className="text-center text-xs text-[#9C9488] mb-6">earned per interaction</p>

          {/* Bullet points */}
          <div className="space-y-2.5 pt-4 border-t border-[#E8E2D9]">
            {["No monetisation strategy", "Wasted attention data", "Limited business model"].map((t) => (
              <div key={t} className="flex items-center gap-2.5">
                <svg viewBox="0 0 16 16" className="w-4 h-4 shrink-0" fill="none"><circle cx="8" cy="8" r="7" fill="#D4756A" opacity="0.15" /><path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="#D4756A" strokeWidth="1.5" strokeLinecap="round" /></svg>
                <span className="text-sm text-[#5C5346]">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ MIDDLE: Arrow ═══ */}
      <div className="flex flex-col items-center justify-center py-4 md:py-0">
        {/* Mobile: vertical arrow */}
        <div className="md:hidden flex flex-col items-center gap-2">
          <span className="inline-block px-4 py-2 rounded-full bg-[#C4993D] text-white text-xs font-bold tracking-wide">ADD KOVIO</span>
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#C4993D]" fill="none"><path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        {/* Desktop: horizontal arrow */}
        <div className="hidden md:flex flex-col items-center gap-2">
          <span className="inline-block px-4 py-2 rounded-full bg-[#C4993D] text-white text-xs font-bold tracking-wide">ADD KOVIO</span>
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#C4993D]" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
      </div>

      {/* ═══ RIGHT CARD: WITH KOVIO ═══ */}
      <div>
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#C4993D] text-white text-xs font-semibold tracking-wide mb-4">WITH KOVIO</span>
        <div className="rounded-2xl border border-[#C4993D]/20 p-6 sm:p-8" style={{ background: "linear-gradient(180deg, #FBF4E4 0%, #F5EDD6 100%)" }}>

          {/* ── Brand Marketplace ── */}
          <div className="rounded-xl bg-white/80 border border-[#E8E2D9] p-4 mb-3">
            <p className="text-xs font-semibold text-[#5C5346] tracking-wider text-center mb-3">BRAND MARKETPLACE</p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Restaurant", "CPG", "Retail", "App", "D2C"].map((b) => (
                <span key={b} className="px-3 py-1 rounded-full bg-[#C4993D] text-white text-xs font-medium">{b}</span>
              ))}
            </div>
          </div>

          {/* Arrow down */}
          <div className="flex justify-center py-1.5">
            <svg viewBox="0 0 20 20" className="w-5 h-5 text-[#C4993D]" fill="none"><path d="M10 4v12M5 11l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>

          {/* ── Kovio Monetisation Engine ── */}
          <div className="rounded-xl bg-[#2C2418] p-4 mb-3">
            <p className="text-center text-base font-bold text-[#C4993D] mb-2">Kovio Monetisation Engine</p>
            <div className="flex justify-center gap-3">
              {["Auctions", "Commerce", "Attribution"].map((c) => (
                <span key={c} className="px-3 py-1 rounded-full bg-[#C4993D]/15 text-[#C4993D] text-xs font-medium">{c}</span>
              ))}
            </div>
          </div>

          {/* Arrow down */}
          <div className="flex justify-center py-1.5">
            <svg viewBox="0 0 20 20" className="w-5 h-5 text-[#C4993D]" fill="none"><path d="M10 4v12M5 11l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>

          {/* ── Your Autonomous Fleet ── */}
          <div className="rounded-xl bg-white/80 border border-[#E8E2D9] p-4 mb-5">
            <p className="text-xs font-semibold text-[#5C5346] tracking-wider text-center mb-3">YOUR AUTONOMOUS FLEET</p>
            <div className="flex justify-center gap-6">
              {["Retail", "Cleaning", "Humanoid"].map((r) => (
                <div key={r} className="flex flex-col items-center gap-1">
                  <RobotIcon gold />
                  <span className="text-xs text-[#5C5346]">{r}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Revenue number */}
          <p className="text-center text-4xl font-bold text-[#C4993D] mb-1">$847</p>
          <p className="text-center text-sm text-[#A67C2E] mb-6">per robot / month</p>

          {/* Bullet points */}
          <div className="space-y-2.5 pt-4 border-t border-[#C4993D]/15">
            {["Real-time monetisation", "Multi-brand marketplace", "Full attribution tracking"].map((t) => (
              <div key={t} className="flex items-center gap-2.5">
                <svg viewBox="0 0 16 16" className="w-4 h-4 shrink-0" fill="none"><circle cx="8" cy="8" r="7" fill="#C4993D" opacity="0.15" /><path d="M5 8.5l2 2 4-4.5" stroke="#C4993D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span className="text-sm font-medium text-[#2C2418]">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Multipurpose Robot Potential ── */
function MultipurposeVisual() {
  const robots = [
    {
      type: "Retail",
      primary: "Scans shelves",
      unlocked: "Scans shelves + drives product discovery",
    },
    {
      type: "Hospitality",
      primary: "Serves guests",
      unlocked: "Serves guests + surfaces curated experiences",
    },
    {
      type: "Cleaning",
      primary: "Cleans floors",
      unlocked: "Cleans floors + captures foot traffic data",
    },
    {
      type: "Humanoid",
      primary: "Assists customers",
      unlocked: "Assists customers + delivers brand moments",
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {robots.map((r) => (
        <div key={r.type} className="card-soft p-6 group">
          {/* Robot icon */}
          <svg viewBox="0 0 56 56" className="w-14 h-14 mb-4" fill="none">
            <rect x="12" y="8" width="32" height="24" rx="6" fill="#2C2418" />
            <circle cx="22" cy="20" r="3.5" fill="#C4993D" />
            <circle cx="34" cy="20" r="3.5" fill="#C4993D" />
            <rect x="18" y="34" width="20" height="8" rx="3" fill="#3D3224" />
            <rect x="16" y="44" width="8" height="5" rx="2" fill="#5C5346" />
            <rect x="32" y="44" width="8" height="5" rx="2" fill="#5C5346" />
            <circle cx="28" cy="20" r="22" fill="none" stroke="#C4993D" strokeWidth="1" opacity="0.2" className="kovio-border-animated" />
          </svg>

          <p className="text-sm font-semibold text-foreground mb-2">{r.type} Robot</p>

          <div className="mb-3">
            <p className="text-xs text-text-muted mb-1">Today</p>
            <p className="text-xs text-text-body">{r.primary}</p>
          </div>

          <div className="border-t border-border pt-3">
            <p className="text-xs font-semibold text-accent mb-1">With Kovio</p>
            <p className="text-xs text-foreground">{r.unlocked}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Interaction Analytics Dashboard ── */
function InteractionDashboard() {
  return (
    <div className="card-soft p-6 md:p-8 max-w-4xl mx-auto">
      <svg viewBox="0 0 700 340" fill="none" className="w-full" preserveAspectRatio="xMidYMid meet">
        <rect width="700" height="340" rx="12" fill="#FFFFFF" />

        {/* Header */}
        <rect x="0" y="0" width="700" height="46" rx="12" fill="#2C2418" />
        <rect x="0" y="30" width="700" height="16" fill="#2C2418" />
        <text x="24" y="30" fill="#C4993D" fontSize="12" fontWeight="700" fontFamily="sans-serif">Kovio Fleet Overview</text>
        <circle cx="664" cy="24" r="4" fill="#7D8C6E" />
        <text x="656" y="28" textAnchor="end" fill="#7D8C6E" fontSize="8" fontFamily="sans-serif">Live</text>

        {/* Top metric cards */}
        <rect x="20" y="62" width="155" height="70" rx="8" fill="#FBF4E4" />
        <text x="36" y="84" fill="#5C5346" fontSize="9" fontFamily="sans-serif">Monthly Fleet Revenue</text>
        <text x="36" y="112" fill="#2C2418" fontSize="24" fontWeight="700" fontFamily="sans-serif">$42.3K</text>

        <rect x="190" y="62" width="155" height="70" rx="8" fill="#FBF4E4" />
        <text x="206" y="84" fill="#5C5346" fontSize="9" fontFamily="sans-serif">Interactions This Month</text>
        <text x="206" y="112" fill="#2C2418" fontSize="24" fontWeight="700" fontFamily="sans-serif">284K</text>

        <rect x="360" y="62" width="155" height="70" rx="8" fill="#FBF4E4" />
        <text x="376" y="84" fill="#5C5346" fontSize="9" fontFamily="sans-serif">Active Campaigns</text>
        <text x="376" y="112" fill="#2C2418" fontSize="24" fontWeight="700" fontFamily="sans-serif">47</text>

        <rect x="530" y="62" width="155" height="70" rx="8" fill="#FBF4E4" />
        <text x="546" y="84" fill="#5C5346" fontSize="9" fontFamily="sans-serif">Avg. Engagement Rate</text>
        <text x="546" y="112" fill="#C4993D" fontSize="24" fontWeight="700" fontFamily="sans-serif">12.4%</text>

        {/* Revenue chart */}
        <rect x="20" y="150" width="440" height="172" rx="8" fill="#FAF8F5" />
        <text x="36" y="174" fill="#5C5346" fontSize="9" fontWeight="500" fontFamily="sans-serif">Revenue Growth — Last 12 Months</text>

        <text x="42" y="198" fill="#9C9488" fontSize="7" fontFamily="sans-serif">$50K</text>
        <text x="42" y="230" fill="#9C9488" fontSize="7" fontFamily="sans-serif">$30K</text>
        <text x="42" y="262" fill="#9C9488" fontSize="7" fontFamily="sans-serif">$10K</text>
        <text x="42" y="294" fill="#9C9488" fontSize="7" fontFamily="sans-serif">$0</text>

        <polyline
          points="66,290 96,286 126,280 156,272 186,265 216,256 246,244 276,230 306,215 336,200 366,184 396,170 426,156"
          stroke="#C4993D"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polygon
          points="66,290 96,286 126,280 156,272 186,265 216,256 246,244 276,230 306,215 336,200 366,184 396,170 426,156 426,298 66,298"
          fill="#C4993D"
          opacity="0.06"
        />
        {[
          [66, 290], [96, 286], [126, 280], [156, 272], [186, 265],
          [216, 256], [246, 244], [276, 230], [306, 215], [336, 200],
          [366, 184], [396, 170], [426, 156],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3" fill="#C4993D" opacity={0.5 + i * 0.04} />
        ))}

        {/* Right panel — top performing robots */}
        <rect x="480" y="150" width="200" height="172" rx="8" fill="#FAF8F5" />
        <text x="496" y="174" fill="#5C5346" fontSize="9" fontWeight="500" fontFamily="sans-serif">Top Revenue by Robot Type</text>

        {[
          { name: "Retail Fleet (24 units)", rev: "$18,200" },
          { name: "Delivery Fleet (31 units)", rev: "$12,400" },
          { name: "Hotel Fleet (12 units)", rev: "$7,800" },
          { name: "Cleaning Fleet (8 units)", rev: "$3,900" },
        ].map((c, i) => (
          <g key={i}>
            <circle cx="502" cy={195 + i * 34} r="3" fill="#C4993D" opacity={0.8 - i * 0.15} />
            <text x="512" y={198 + i * 34} fill="#2C2418" fontSize="9" fontFamily="sans-serif">{c.name}</text>
            <text x="664" y={198 + i * 34} textAnchor="end" fill="#A67C2E" fontSize="9" fontWeight="600" fontFamily="sans-serif">{c.rev}</text>
            {i < 3 && <line x1="496" y1={207 + i * 34} x2="664" y2={207 + i * 34} stroke="#E8E2D9" strokeWidth="0.5" />}
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   OEM PAGE EXPORT
   ═══════════════════════════════════════════════════════════ */

export default function OEMPage() {
  return (
    <div className="min-h-screen">
      {/* ── HERO: THE TRANSFORMATION ── */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div className="orb-warm absolute top-10 left-[-8%] w-[400px] h-[400px]" />
        <div className="orb-accent absolute bottom-0 right-[-5%] w-[300px] h-[300px]" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-14">
              <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-4">For Robot Companies</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight leading-[1.1] mb-5">
                Your robots already reach millions.
                <br />
                <span className="text-gradient-primary">Now they can earn.</span>
              </h1>
              <p className="text-lg text-text-body max-w-xl mx-auto">
                Kovio turns robot interactions into revenue.
                Every delivery, greeting, or store interaction becomes a monetisable moment.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <MonetisationVisual />
          </ScrollReveal>
        </div>
      </section>

      {/* ── EVERY ROBOT IS A REVENUE ROBOT ── */}
      <section className="py-20 md:py-28 bg-section-alt">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Every robot type. New value unlocked.
              </h2>
              <p className="text-text-body text-lg max-w-xl mx-auto">
                Whatever your fleet does today, Kovio adds an economic layer on top — turning routine operations into monetisable moments without changing your core function.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <MultipurposeVisual />
          </ScrollReveal>
        </div>
      </section>

      {/* ── WHAT YOU SEE ── */}
      <section className="py-20 md:py-28 bg-section-warm">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Watch your fleet generate revenue.
              </h2>
              <p className="text-text-body text-lg max-w-xl mx-auto">
                Revenue per robot. Interaction data. Campaign performance. Attribution. All visible in real time through the Kovio dashboard.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <InteractionDashboard />
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <div className="grid sm:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
              {[
                { label: "70%", desc: "Revenue share to your fleet" },
                { label: "$0", desc: "Upfront cost" },
                { label: "Real-time", desc: "Interaction analytics" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold text-accent mb-1">{stat.label}</p>
                  <p className="text-sm text-text-muted">{stat.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-5">
                Ready to monetise your fleet?
              </h2>
              <p className="text-text-body text-lg max-w-lg mx-auto mb-8">
                Join the robot companies already turning interactions into income. Let&apos;s explore what Kovio can do for your fleet.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CTAButton href="/contact">
                  Talk to Us
                </CTAButton>
                <CTAButton href="/brands" variant="secondary">
                  See the Brand Side
                </CTAButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
