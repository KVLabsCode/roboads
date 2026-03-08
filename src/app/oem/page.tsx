"use client";

import ScrollReveal from "@/components/ScrollReveal";
import CTAButton from "@/components/CTAButton";

/* ═══════════════════════════════════════════════════════════
   OEM PAGE — 3 sections
   ═══════════════════════════════════════════════════════════ */

/* ── Section 1: Transformation Visual ── */
function TransformationVisual() {
  return (
    <div className="max-w-4xl mx-auto">
      <svg viewBox="0 0 800 300" fill="none" className="w-full" preserveAspectRatio="xMidYMid meet">
        {/* Left side — single-purpose */}
        <rect x="20" y="40" width="320" height="220" rx="12" fill="#F5F1EC" />
        <text x="180" y="30" textAnchor="middle" fill="#5C5346" fontSize="12" fontWeight="500" fontFamily="sans-serif">Before</text>

        {/* Single purpose robot */}
        <rect x="130" y="70" width="100" height="80" rx="14" fill="#E8E2D9" />
        <circle cx="165" cy="100" r="6" fill="#D4CFC6" />
        <circle cx="195" cy="100" r="6" fill="#D4CFC6" />
        <rect x="155" y="118" width="50" height="4" rx="2" fill="#D4CFC6" />

        {/* Single arrow down */}
        <line x1="180" y1="160" x2="180" y2="195" stroke="#D4CFC6" strokeWidth="2" />
        <polygon points="174,190 180,203 186,190" fill="#D4CFC6" />

        {/* Single task */}
        <rect x="120" y="206" width="120" height="32" rx="8" fill="#FFFFFF" stroke="#E8E2D9" />
        <text x="180" y="226" textAnchor="middle" fill="#5C5346" fontSize="10" fontFamily="sans-serif">One function only</text>

        {/* Arrow in the middle */}
        <line x1="365" y1="150" x2="415" y2="150" stroke="#C4993D" strokeWidth="2.5" />
        <polygon points="410,143 425,150 410,157" fill="#C4993D" />

        {/* Right side — multipurpose with Kovio */}
        <rect x="440" y="40" width="340" height="220" rx="12" fill="#FBF4E4" />
        <text x="610" y="30" textAnchor="middle" fill="#A67C2E" fontSize="12" fontWeight="600" fontFamily="sans-serif">After — with Kovio</text>

        {/* Enhanced robot */}
        <rect x="560" y="60" width="100" height="70" rx="14" fill="#2C2418" />
        <circle cx="595" cy="86" r="5" fill="#C4993D" />
        <circle cx="625" cy="86" r="5" fill="#C4993D" />
        <rect x="585" y="102" width="50" height="4" rx="2" fill="#C4993D" opacity="0.4" />

        {/* Kovio SDK layer */}
        <rect x="535" y="140" width="150" height="24" rx="6" fill="#C4993D" opacity="0.2" />
        <rect x="535" y="140" width="150" height="24" rx="6" fill="none" stroke="#C4993D" strokeWidth="1" className="kovio-border-animated" opacity="0.6" />
        <text x="610" y="156" textAnchor="middle" fill="#A67C2E" fontSize="9" fontWeight="600" fontFamily="sans-serif">KOVIO SDK</text>

        {/* Multiple outputs */}
        <line x1="565" y1="164" x2="510" y2="196" stroke="#C4993D" strokeWidth="1.5" className="flow-line-animated" opacity="0.6" />
        <line x1="610" y1="164" x2="610" y2="196" stroke="#C4993D" strokeWidth="1.5" className="flow-line-animated" opacity="0.6" />
        <line x1="655" y1="164" x2="710" y2="196" stroke="#C4993D" strokeWidth="1.5" className="flow-line-animated" opacity="0.6" />

        {/* Revenue streams */}
        <rect x="472" y="198" width="76" height="26" rx="6" fill="#FFFFFF" />
        <text x="510" y="215" textAnchor="middle" fill="#5C5346" fontSize="8" fontFamily="sans-serif">Campaigns</text>

        <rect x="572" y="198" width="76" height="26" rx="6" fill="#FFFFFF" />
        <text x="610" y="215" textAnchor="middle" fill="#5C5346" fontSize="8" fontFamily="sans-serif">Revenue</text>

        <rect x="672" y="198" width="76" height="26" rx="6" fill="#FFFFFF" />
        <text x="710" y="215" textAnchor="middle" fill="#5C5346" fontSize="8" fontFamily="sans-serif">Insights</text>

        {/* Value indicators */}
        <circle cx="510" cy="236" r="4" fill="#C4993D" opacity="0.3" />
        <circle cx="610" cy="236" r="4" fill="#C4993D" opacity="0.4" />
        <circle cx="710" cy="236" r="4" fill="#C4993D" opacity="0.3" />
      </svg>
    </div>
  );
}

/* ── Section 2: Platform Layer Architecture ── */
function PlatformArchitecture() {
  const brands = ["Nike", "P&G", "Coca-Cola", "Unilever", "PepsiCo", "L'Oréal"];

  return (
    <div className="max-w-4xl mx-auto">
      <svg viewBox="0 0 700 300" fill="none" className="w-full" preserveAspectRatio="xMidYMid meet">
        {/* Brands layer */}
        <rect x="20" y="16" width="660" height="70" rx="10" fill="#FFFFFF" stroke="#E8E2D9" strokeWidth="1.5" />
        <text x="350" y="34" textAnchor="middle" fill="#5C5346" fontSize="9" fontWeight="600" fontFamily="sans-serif" letterSpacing="1">BRANDS &amp; CPGs</text>

        {/* Brand name chips */}
        {brands.map((brand, i) => {
          const x = 68 + i * 100;
          return (
            <g key={brand}>
              <rect x={x} y={44} width={84} height={26} rx={6} fill="#FBF4E4" />
              <text x={x + 42} y={61} textAnchor="middle" fill="#2C2418" fontSize="9" fontWeight="500" fontFamily="sans-serif">{brand}</text>
            </g>
          );
        })}

        {/* Multiple arrows down from brands */}
        {[180, 290, 410, 520].map((x) => (
          <g key={x}>
            <line x1={x} y1={90} x2={x} y2={110} stroke="#C4993D" strokeWidth="1.5" className="flow-line-animated" />
            <polygon points={`${x - 4},106 ${x},115 ${x + 4},106`} fill="#C4993D" />
          </g>
        ))}

        {/* Kovio SDK layer */}
        <rect x="80" y="118" width="540" height="56" rx="10" fill="#2C2418" />
        <rect x="80" y="118" width="540" height="56" rx="10" fill="none" stroke="#C4993D" strokeWidth="1.5" className="kovio-border-animated" opacity="0.5" />
        <text x="350" y="142" textAnchor="middle" fill="#C4993D" fontSize="14" fontWeight="700" fontFamily="sans-serif">Kovio SDK</text>
        <text x="350" y="160" textAnchor="middle" fill="#D4CFC6" fontSize="10" fontFamily="sans-serif">Monetization + Attribution + Analytics</text>

        {/* Multiple arrows down to fleet */}
        {[180, 290, 410, 520].map((x) => (
          <g key={x}>
            <line x1={x} y1={178} x2={x} y2={198} stroke="#C4993D" strokeWidth="1.5" className="flow-line-animated" />
            <polygon points={`${x - 4},194 ${x},203 ${x + 4},194`} fill="#C4993D" />
          </g>
        ))}

        {/* Fleet layer */}
        <rect x="20" y="206" width="660" height="70" rx="10" fill="#FFFFFF" stroke="#E8E2D9" strokeWidth="1.5" />
        <text x="350" y="224" textAnchor="middle" fill="#5C5346" fontSize="9" fontWeight="600" fontFamily="sans-serif" letterSpacing="1">YOUR ROBOT FLEET</text>

        {/* Robot icons with labels */}
        {[
          { x: 80, label: "Retail" },
          { x: 200, label: "Delivery" },
          { x: 320, label: "Cleaning" },
          { x: 440, label: "Hospitality" },
          { x: 560, label: "Warehouse" },
        ].map(({ x, label }) => (
          <g key={label}>
            <rect x={x} y={234} width="60" height="28" rx="6" fill="#F0EBE3" />
            <circle cx={x + 18} cy={248} r="3" fill="#C4993D" opacity="0.5" />
            <circle cx={x + 42} cy={248} r="3" fill="#C4993D" opacity="0.5" />
            <text x={x + 30} y={272} textAnchor="middle" fill="#5C5346" fontSize="8" fontFamily="sans-serif">{label}</text>
          </g>
        ))}

        {/* Attribution feedback loop */}
        <path d="M 620 230 Q 680 160 620 118" stroke="#C4993D" strokeWidth="1.5" className="flow-line-animated" opacity="0.4" fill="none" />
        <text x="672" y="178" fill="#5C5346" fontSize="8" fontWeight="500" fontFamily="sans-serif" textAnchor="middle">Attribution</text>
      </svg>
    </div>
  );
}

/* ── Section 3: Fleet Revenue Dashboard ── */
function FleetDashboard() {
  return (
    <div className="card-soft p-6 md:p-8 max-w-4xl mx-auto">
      <svg viewBox="0 0 700 320" fill="none" className="w-full" preserveAspectRatio="xMidYMid meet">
        {/* Dashboard frame */}
        <rect width="700" height="320" rx="10" fill="#FFFFFF" />

        {/* Header */}
        <rect x="0" y="0" width="700" height="44" rx="10" fill="#2C2418" />
        <rect x="0" y="30" width="700" height="14" fill="#2C2418" />
        <text x="350" y="28" textAnchor="middle" fill="#C4993D" fontSize="12" fontWeight="600" fontFamily="sans-serif">Fleet Revenue Dashboard</text>

        {/* Top metric cards */}
        <rect x="20" y="60" width="155" height="70" rx="8" fill="#FBF4E4" />
        <text x="36" y="82" fill="#9C9488" fontSize="9" fontFamily="sans-serif">Revenue / Robot</text>
        <text x="36" y="108" fill="#2C2418" fontSize="22" fontWeight="700" fontFamily="sans-serif">$847</text>
        <text x="112" y="108" fill="#7D8C6E" fontSize="10" fontFamily="sans-serif">/mo</text>

        <rect x="190" y="60" width="155" height="70" rx="8" fill="#FBF4E4" />
        <text x="206" y="82" fill="#9C9488" fontSize="9" fontFamily="sans-serif">Total Interactions</text>
        <text x="206" y="108" fill="#2C2418" fontSize="22" fontWeight="700" fontFamily="sans-serif">284K</text>

        <rect x="360" y="60" width="155" height="70" rx="8" fill="#FBF4E4" />
        <text x="376" y="82" fill="#9C9488" fontSize="9" fontFamily="sans-serif">Active Campaigns</text>
        <text x="376" y="108" fill="#2C2418" fontSize="22" fontWeight="700" fontFamily="sans-serif">47</text>

        <rect x="530" y="60" width="155" height="70" rx="8" fill="#FBF4E4" />
        <text x="546" y="82" fill="#9C9488" fontSize="9" fontFamily="sans-serif">Engagement Rate</text>
        <text x="546" y="108" fill="#C4993D" fontSize="22" fontWeight="700" fontFamily="sans-serif">12.4%</text>

        {/* Revenue chart */}
        <rect x="20" y="145" width="440" height="160" rx="8" fill="#FAF8F5" />
        <text x="36" y="168" fill="#9C9488" fontSize="9" fontFamily="sans-serif">Monthly Fleet Revenue</text>

        {/* Chart line */}
        <polyline
          points="50,280 90,268 130,260 170,250 210,238 250,225 290,210 330,195 370,178 410,160 440,148"
          stroke="#C4993D"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Chart area fill */}
        <polygon
          points="50,280 90,268 130,260 170,250 210,238 250,225 290,210 330,195 370,178 410,160 440,148 440,290 50,290"
          fill="#C4993D"
          opacity="0.08"
        />
        {/* Data points */}
        {[
          [50, 280], [90, 268], [130, 260], [170, 250], [210, 238],
          [250, 225], [290, 210], [330, 195], [370, 178], [410, 160], [440, 148],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3" fill="#C4993D" opacity={0.6 + i * 0.04} />
        ))}

        {/* Right side — top brands */}
        <rect x="480" y="145" width="200" height="160" rx="8" fill="#FAF8F5" />
        <text x="496" y="168" fill="#9C9488" fontSize="9" fontFamily="sans-serif">Top Campaigns</text>

        {[
          { name: "Nike — Spring Launch", rev: "$12,400" },
          { name: "P&G — Aisle Promo", rev: "$9,800" },
          { name: "Coca-Cola — Endcap", rev: "$8,200" },
          { name: "Unilever — Discovery", rev: "$6,900" },
        ].map((c, i) => (
          <g key={i}>
            <text x="496" y={192 + i * 30} fill="#5C5346" fontSize="9" fontFamily="sans-serif">{c.name}</text>
            <text x="660" y={192 + i * 30} textAnchor="end" fill="#A67C2E" fontSize="9" fontWeight="600" fontFamily="sans-serif">{c.rev}</text>
            {i < 3 && <line x1="496" y1={200 + i * 30} x2="660" y2={200 + i * 30} stroke="#E8E2D9" strokeWidth="0.5" />}
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
      {/* ── SECTION 1: TRANSFORMATION ── */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div className="orb-warm absolute top-10 left-[-8%] w-[400px] h-[400px]" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-14">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight leading-[1.1] mb-5">
                Turn every robot into
                <br />
                <span className="text-gradient-primary">a revenue platform.</span>
              </h1>
              <p className="text-lg text-text-body max-w-lg mx-auto">
                Integrate once. Earn from every interaction your fleet delivers.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <TransformationVisual />
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION 2: PLATFORM LAYER ── */}
      <section className="py-20 md:py-28 bg-section-alt">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                One SDK. Full monetization stack.
              </h2>
              <p className="text-text-body text-lg max-w-lg mx-auto">
                Brands connect through Kovio. Your robots deliver. You earn.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <PlatformArchitecture />
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <div className="grid sm:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
              {[
                { label: "70%", desc: "Revenue share to you" },
                { label: "3 lines", desc: "Of code to integrate" },
                { label: "$0", desc: "Upfront cost" },
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

      {/* ── SECTION 3: FLEET REVENUE DASHBOARD ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                See what your fleet earns.
              </h2>
              <p className="text-text-body text-lg max-w-lg mx-auto">
                Revenue per robot. Interactions. Campaigns. All in real time.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <FleetDashboard />
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-14">
              <CTAButton href="/brands" variant="secondary">
                For Brands
              </CTAButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
