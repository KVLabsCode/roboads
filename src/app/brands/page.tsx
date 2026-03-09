"use client";

import ScrollReveal from "@/components/ScrollReveal";
import CTAButton from "@/components/CTAButton";

/* ═══════════════════════════════════════════════════════════
   BRANDS PAGE — 3 sections
   ═══════════════════════════════════════════════════════════ */

/* ── Section 1: Retail Robot Hero Scene ── */
function RetailHeroScene() {
  return (
    <div className="max-w-3xl mx-auto">
      <svg viewBox="0 0 600 320" fill="none" className="w-full" preserveAspectRatio="xMidYMid meet">
        {/* Store interior */}
        <rect width="600" height="320" rx="12" fill="#F5F1EC" />

        {/* Ceiling lights with warm glow */}
        <rect x="100" y="10" width="80" height="4" rx="2" fill="#F5E6C0" />
        <ellipse cx="140" cy="16" rx="50" ry="18" fill="#F5E6C0" opacity="0.15" />
        <rect x="260" y="10" width="80" height="4" rx="2" fill="#F5E6C0" />
        <ellipse cx="300" cy="16" rx="50" ry="18" fill="#F5E6C0" opacity="0.15" />
        <rect x="420" y="10" width="80" height="4" rx="2" fill="#F5E6C0" />
        <ellipse cx="460" cy="16" rx="50" ry="18" fill="#F5E6C0" opacity="0.15" />

        {/* Aisle shelves — left */}
        <rect x="30" y="40" width="100" height="180" rx="4" fill="#FFFFFF" stroke="#E8E2D9" />
        <rect x="38" y="52" width="30" height="12" rx="2" fill="#E8544E" opacity="0.75" />
        <rect x="74" y="52" width="30" height="12" rx="2" fill="#4A9E4A" opacity="0.7" />
        <rect x="38" y="72" width="30" height="12" rx="2" fill="#5B8ECC" opacity="0.7" />
        <rect x="74" y="72" width="30" height="12" rx="2" fill="#E8A44E" opacity="0.75" />
        <rect x="38" y="92" width="30" height="12" rx="2" fill="#4A9E4A" opacity="0.65" />
        <rect x="74" y="92" width="30" height="12" rx="2" fill="#E8544E" opacity="0.7" />
        {/* Promoted products — gold highlight */}
        <rect x="38" y="112" width="30" height="12" rx="2" fill="#C4993D" opacity="0.35" />
        <rect x="36" y="110" width="34" height="16" rx="3" fill="#C4993D" opacity="0.1" />
        <rect x="74" y="112" width="30" height="12" rx="2" fill="#C4993D" opacity="0.35" />
        <rect x="72" y="110" width="34" height="16" rx="3" fill="#C4993D" opacity="0.1" />
        <rect x="38" y="132" width="30" height="12" rx="2" fill="#5B8ECC" opacity="0.65" />
        <rect x="74" y="132" width="30" height="12" rx="2" fill="#E8A44E" opacity="0.7" />

        {/* Aisle shelves — right */}
        <rect x="470" y="40" width="100" height="180" rx="4" fill="#FFFFFF" stroke="#E8E2D9" />
        <rect x="478" y="52" width="30" height="12" rx="2" fill="#E8A44E" opacity="0.75" />
        <rect x="514" y="52" width="30" height="12" rx="2" fill="#5B8ECC" opacity="0.7" />
        <rect x="478" y="72" width="30" height="12" rx="2" fill="#E8544E" opacity="0.7" />
        <rect x="514" y="72" width="30" height="12" rx="2" fill="#4A9E4A" opacity="0.7" />
        {/* Promoted products — gold highlight */}
        <rect x="478" y="92" width="30" height="12" rx="2" fill="#C4993D" opacity="0.35" />
        <rect x="476" y="90" width="34" height="16" rx="3" fill="#C4993D" opacity="0.1" />
        <rect x="514" y="92" width="30" height="12" rx="2" fill="#E8544E" opacity="0.65" />

        {/* Floor — warm wood tone */}
        <rect x="0" y="260" width="600" height="60" fill="#E8DFD2" />
        <line x1="0" y1="260" x2="600" y2="260" stroke="#D4CFC6" strokeWidth="1" />
        {/* Subtle wood grain lines */}
        <line x1="0" y1="280" x2="600" y2="280" stroke="#DDD5C8" strokeWidth="0.5" opacity="0.5" />
        <line x1="0" y1="300" x2="600" y2="300" stroke="#DDD5C8" strokeWidth="0.5" opacity="0.3" />

        {/* Shopper figure — with skin and clothing */}
        <circle cx="220" cy="170" r="10" fill="#B8734A" />
        <rect x="213" y="182" width="14" height="24" rx="4" fill="#5B8ECC" opacity="0.6" />
        <rect x="210" y="206" width="8" height="16" rx="3" fill="#4A6A8A" />
        <rect x="222" y="206" width="8" height="16" rx="3" fill="#4A6A8A" />
        {/* Shopping cart */}
        <rect x="236" y="196" width="24" height="16" rx="3" fill="#C8C4BC" stroke="#B0ACA4" strokeWidth="0.5" />
        {/* Colored items in cart */}
        <rect x="239" y="198" width="7" height="6" rx="1" fill="#E8544E" opacity="0.7" />
        <rect x="248" y="198" width="7" height="6" rx="1" fill="#4A9E4A" opacity="0.7" />
        <circle cx="240" cy="216" r="3" fill="#908A82" />
        <circle cx="256" cy="216" r="3" fill="#908A82" />

        {/* Robot — retail assistant */}
        <rect x="320" y="190" width="50" height="65" rx="12" fill="#2C2418" />
        {/* Screen face — brighter gold */}
        <rect x="328" y="198" width="34" height="22" rx="5" fill="#C4993D" opacity="0.4" />
        <rect x="330" y="200" width="30" height="18" rx="4" fill="#D4A843" opacity="0.15" />
        <circle cx="339" cy="208" r="3" fill="#D4A843" />
        <circle cx="353" cy="208" r="3" fill="#D4A843" />
        {/* Wheels */}
        <circle cx="333" cy="258" r="5" fill="#5C5346" />
        <circle cx="357" cy="258" r="5" fill="#5C5346" />

        {/* Interaction beam — robot to shopper */}
        <line x1="320" y1="210" x2="260" y2="200" stroke="#C4993D" strokeWidth="1.5" className="flow-line-animated" opacity="0.5" />

        {/* Campaign bubble above robot */}
        <rect x="300" y="145" width="90" height="36" rx="8" fill="#FFFFFF" stroke="#C4993D" strokeWidth="1" opacity="0.8" />
        {/* Green checkmark indicator */}
        <circle cx="314" cy="158" r="5" fill="#4A9E4A" opacity="0.2" />
        <path d="M311 158 L313 160 L317 155" stroke="#4A9E4A" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="350" y="160" textAnchor="middle" fill="#A67C2E" fontSize="8" fontWeight="500" fontFamily="sans-serif">Campaign active</text>
        <rect x="316" y="167" width="58" height="6" rx="3" fill="#C4993D" opacity="0.2" />
        <rect x="316" y="167" width="38" height="6" rx="3" fill="#4A9E4A" opacity="0.5" />

        {/* Kovio label */}
        <rect x="240" y="280" width="120" height="24" rx="6" fill="#2C2418" />
        <rect x="240" y="280" width="120" height="24" rx="6" fill="none" stroke="#C4993D" strokeWidth="1" className="kovio-border-animated" opacity="0.6" />
        <text x="300" y="296" textAnchor="middle" fill="#C4993D" fontSize="10" fontWeight="600" fontFamily="sans-serif">Powered by Kovio</text>
      </svg>
    </div>
  );
}

/* ── Section 2: Campaign Flow + Dashboard Mockup ── */
function CampaignFlow() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* 3-step flow */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          {
            step: "01",
            title: "Choose your product",
            desc: "Select the brand, SKU, and message you want shoppers to see.",
          },
          {
            step: "02",
            title: "Choose your stores",
            desc: "Target by retailer, region, aisle, or time of day.",
          },
          {
            step: "03",
            title: "Deploy to robots",
            desc: "Campaigns go live instantly across robot fleets in-store.",
          },
        ].map((item) => (
          <div key={item.step} className="text-center">
            <div className="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center mx-auto mb-4">
              <span className="text-accent font-bold text-sm">{item.step}</span>
            </div>
            <h3 className="text-base font-semibold text-foreground mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-text-muted">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Dashboard mockup */}
      <div className="card-soft p-6 md:p-8">
        <svg viewBox="0 0 700 280" fill="none" className="w-full" preserveAspectRatio="xMidYMid meet">
          {/* Dashboard frame */}
          <rect width="700" height="280" rx="10" fill="#FFFFFF" />

          {/* Top bar */}
          <rect x="0" y="0" width="700" height="40" rx="10" fill="#FAF8F5" />
          <rect x="0" y="30" width="700" height="10" fill="#FAF8F5" />
          <circle cx="20" cy="20" r="5" fill="#E8544E" />
          <circle cx="36" cy="20" r="5" fill="#E8A44E" />
          <circle cx="52" cy="20" r="5" fill="#4A9E4A" />
          <text x="350" y="24" textAnchor="middle" fill="#9C9488" fontSize="10" fontFamily="sans-serif">Kovio Brand Dashboard</text>

          {/* Sidebar */}
          <rect x="0" y="40" width="140" height="240" fill="#F5F1EC" />
          <rect x="16" y="56" width="80" height="8" rx="2" fill="#E8E2D9" />
          <rect x="10" y="72" width="120" height="16" rx="4" fill="#C4993D" opacity="0.12" />
          <rect x="16" y="76" width="96" height="8" rx="2" fill="#C4993D" opacity="0.6" />
          <rect x="16" y="96" width="72" height="8" rx="2" fill="#E8E2D9" />
          <rect x="16" y="116" width="88" height="8" rx="2" fill="#E8E2D9" />
          <rect x="16" y="136" width="64" height="8" rx="2" fill="#E8E2D9" />

          {/* Stats cards — distinct tints */}
          <rect x="160" y="56" width="120" height="60" rx="8" fill="#EDF3FA" />
          <text x="176" y="76" fill="#6B8BAE" fontSize="9" fontFamily="sans-serif">Interactions</text>
          <text x="176" y="100" fill="#2C2418" fontSize="18" fontWeight="700" fontFamily="sans-serif">12,847</text>

          <rect x="295" y="56" width="120" height="60" rx="8" fill="#EDF5ED" />
          <text x="311" y="76" fill="#5A8A5A" fontSize="9" fontFamily="sans-serif">Conversion</text>
          <text x="311" y="100" fill="#2C2418" fontSize="18" fontWeight="700" fontFamily="sans-serif">8.3%</text>

          <rect x="430" y="56" width="120" height="60" rx="8" fill="#FBF4E4" />
          <text x="446" y="76" fill="#9C9488" fontSize="9" fontFamily="sans-serif">Revenue Lift</text>
          <text x="446" y="100" fill="#C4993D" fontSize="18" fontWeight="700" fontFamily="sans-serif">+24%</text>

          <rect x="565" y="56" width="120" height="60" rx="8" fill="#F0EDF5" />
          <text x="581" y="76" fill="#8A7BAE" fontSize="9" fontFamily="sans-serif">Active Robots</text>
          <text x="581" y="100" fill="#2C2418" fontSize="18" fontWeight="700" fontFamily="sans-serif">342</text>

          {/* Chart area */}
          <rect x="160" y="130" width="525" height="130" rx="8" fill="#FAF8F5" />
          <text x="176" y="150" fill="#9C9488" fontSize="9" fontFamily="sans-serif">Interactions over time</text>
          {/* Chart bars — gradient from blue through green to gold */}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
            const heights = [40, 55, 48, 65, 72, 60, 80, 90, 85, 95, 88, 100];
            const h = heights[i];
            const barColors = [
              "#5B8ECC", "#5B8ECC", "#4A9EAA", "#4A9E8A",
              "#4A9E6A", "#4A9E4A", "#6A9E4A", "#8A9E3D",
              "#A69A3D", "#C4993D", "#C4993D", "#D4A843",
            ];
            return (
              <rect
                key={i}
                x={185 + i * 40}
                y={245 - h}
                width="24"
                height={h}
                rx="4"
                fill={barColors[i]}
                opacity={0.5 + (i / 11) * 0.4}
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
}

/* ── Section 3: Retail Micro-Environment Grid ── */
const retailScenes = [
  { name: "Aisle Assist", desc: "Robots guide shoppers to products and highlight promotions." },
  { name: "Endcap Display", desc: "Interactive product showcases at high-traffic endcaps." },
  { name: "Store Entrance", desc: "Welcome interactions with personalized offers on entry." },
  { name: "Product Discovery", desc: "Robots surface new products based on shopper context." },
];

function RetailSceneCard({ name, desc, index }: { name: string; desc: string; index: number }) {
  const colors = ["#C4993D", "#B8734A", "#7D8C6E", "#D4A843"];
  const color = colors[index % colors.length];

  return (
    <div className="card-soft p-5 flex flex-col items-center text-center">
      <svg viewBox="0 0 100 80" fill="none" className="w-20 h-16 mb-3">
        {/* Mini store scene */}
        <rect width="100" height="80" rx="6" fill="#F5F1EC" />
        {/* Colored floor tinted to accent */}
        <rect x="0" y="64" width="100" height="16" rx="0" fill={color} opacity="0.07" />
        <clipPath id={`floor-clip-${index}`}>
          <rect x="0" y="64" width="100" height="16" rx="6" />
        </clipPath>
        {/* Shelf */}
        <rect x="8" y="10" width="30" height="50" rx="3" fill="#FFFFFF" stroke="#E8E2D9" />
        <rect x="12" y="16" width="10" height="6" rx="1" fill={color} opacity="0.4" />
        <rect x="24" y="16" width="10" height="6" rx="1" fill={color} opacity="0.3" />
        <rect x="12" y="26" width="10" height="6" rx="1" fill={color} opacity="0.3" />
        <rect x="24" y="26" width="10" height="6" rx="1" fill={color} opacity="0.4" />
        {/* Person silhouette next to robot */}
        <circle cx="46" cy="40" r="4" fill="#B8734A" />
        <rect x="43" y="45" width="6" height="12" rx="2" fill="#5B8ECC" opacity="0.55" />
        <rect x="42" y="57" width="3.5" height="7" rx="1.5" fill="#4A6A8A" />
        <rect x="47" y="57" width="3.5" height="7" rx="1.5" fill="#4A6A8A" />
        {/* Robot */}
        <rect x="60" y="30" width="24" height="30" rx="6" fill="#2C2418" />
        <rect x="64" y="35" width="16" height="8" rx="2" fill={color} opacity="0.4" />
        <circle cx="69" cy="39" r="1.5" fill={color} />
        <circle cx="77" cy="39" r="1.5" fill={color} />
        <circle cx="67" cy="62" r="3" fill="#5C5346" />
        <circle cx="79" cy="62" r="3" fill="#5C5346" />
        {/* Interaction dot — bigger and brighter */}
        <circle cx="53" cy="38" r="4" fill={color} opacity="0.2" />
        <circle cx="53" cy="38" r="2.5" fill={color} opacity="0.55" />
      </svg>
      <h3 className="text-sm font-semibold text-foreground mb-1">{name}</h3>
      <p className="text-xs text-text-muted leading-relaxed">{desc}</p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   BRANDS PAGE EXPORT
   ═══════════════════════════════════════════════════════════ */

export default function BrandsPage() {
  return (
    <div className="min-h-screen">
      {/* ── SECTION 1: HERO ── */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div className="orb-accent absolute top-10 right-[-8%] w-[400px] h-[400px]" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-14">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight leading-[1.1] mb-5">
                Reach shoppers
                <br />
                <span className="text-gradient-primary">inside the store.</span>
              </h1>
              <p className="text-lg text-text-body max-w-lg mx-auto">
                Deploy brand campaigns to retail robots — where purchase decisions happen.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <RetailHeroScene />
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION 2: CAMPAIGN FLOW + DASHBOARD ── */}
      <section className="py-20 md:py-28 bg-section-alt">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Launch in three steps.
              </h2>
              <p className="text-text-body text-lg max-w-lg mx-auto">
                From product selection to live deployment — in minutes.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <CampaignFlow />
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION 3: RETAIL MICRO-ENVIRONMENTS ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Every aisle is a channel.
              </h2>
              <p className="text-text-body text-lg max-w-lg mx-auto">
                Robots meet shoppers at the moment of decision — not before, not after.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {retailScenes.map((scene, i) => (
              <ScrollReveal key={scene.name} delay={i * 0.1}>
                <RetailSceneCard name={scene.name} desc={scene.desc} index={i} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="text-center mt-14">
              <CTAButton href="/oem" variant="secondary">
                For OEMs
              </CTAButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
