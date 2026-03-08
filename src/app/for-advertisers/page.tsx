"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import CTAButton from "@/components/CTAButton";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0, 0, 0.2, 1] as const },
  }),
};

/* ═══════════════════════════════════════════════════════════════
   HERO — Retail robot + shopper aisle scene
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      <div className="absolute top-20 right-[10%] w-[500px] h-[500px] orb-accent animate-float-slow" />
      <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] orb-warm" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-24 pb-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
              className="inline-flex items-center gap-2 text-sm font-medium text-amber bg-amber-light px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
              For Brands &amp; CPGs
            </motion.div>
            <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible"
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-foreground leading-[1.1] mb-6">
              Activate brands through{" "}
              <span className="text-gradient-primary">retail robots</span>
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
              className="text-lg text-text-body leading-relaxed mb-10 max-w-lg">
              Kovio connects brands to real-world shopper interactions inside stores. Influence purchase decisions. Measure everything.
            </motion.p>
            <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap gap-4">
              <CTAButton href="/contact">Request Brand Access</CTAButton>
              <CTAButton href="#how-brands-launch" variant="secondary">See How It Works</CTAButton>
            </motion.div>
          </div>

          {/* Hero Scene — Robot in aisle with shopper */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}>
            <div className="rounded-3xl bg-gradient-to-b from-amber-light/30 to-white border border-border p-6 shadow-soft-lg overflow-hidden relative">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-soft-green" />
                <span className="text-[11px] font-medium text-text-muted">Live — FreshMart, Aisle 4</span>
              </div>

              {/* Aisle scene */}
              <div className="relative h-56 bg-gradient-to-b from-amber-light/20 to-bg-soft rounded-2xl flex items-end justify-center overflow-hidden mb-4">
                {/* Shelf lines */}
                <div className="absolute left-2 top-2 w-8 h-full flex flex-col gap-[6px] opacity-15">
                  {[...Array(8)].map((_, i) => <div key={i} className={`h-3 rounded-sm ${["bg-amber", "bg-teal", "bg-accent", "bg-soft-green"][i % 4]}`} />)}
                </div>
                <div className="absolute right-2 top-2 w-8 h-full flex flex-col gap-[6px] opacity-15">
                  {[...Array(8)].map((_, i) => <div key={i} className={`h-3 rounded-sm ${["bg-teal", "bg-amber", "bg-soft-green", "bg-accent"][i % 4]}`} />)}
                </div>

                {/* Robot */}
                <div className="relative z-10 mr-6 mb-0">
                  <div className="w-20 h-28">
                    <div className="absolute bottom-0 w-20 h-24 bg-foreground/6 rounded-t-2xl border border-foreground/10">
                      <div className="absolute top-3 left-3 right-3 h-10 bg-white rounded-lg border border-border flex items-center justify-center">
                        <div className="flex gap-2"><div className="w-2.5 h-2.5 rounded-full bg-accent" /><div className="w-2.5 h-2.5 rounded-full bg-accent" /></div>
                      </div>
                      <div className="absolute bottom-2 left-3 right-3 h-6 bg-amber/10 rounded flex items-center justify-center gap-1">
                        <div className="w-4 h-3 bg-amber/50 rounded-sm" />
                        <div className="w-6 h-1.5 bg-foreground/10 rounded-sm" />
                      </div>
                    </div>
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-4 bg-foreground/10 rounded-full">
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent/25 animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Shopper */}
                <div className="relative z-10 mb-0">
                  <div className="w-10 h-10 rounded-full bg-foreground/8 border border-foreground/5" />
                  <div className="w-14 h-18 bg-foreground/4 rounded-t-lg mt-1" />
                </div>

                {/* Floating badges */}
                <div className="absolute top-3 right-3 flex flex-col gap-1.5">
                  <div className="bg-white rounded-lg px-2.5 py-1 shadow-soft-sm border border-border flex items-center gap-1.5 animate-float-slow">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber" />
                    <span className="text-[9px] font-medium text-foreground">Product Recommendation</span>
                  </div>
                  <div className="bg-white rounded-lg px-2.5 py-1 shadow-soft-sm border border-border flex items-center gap-1.5 animate-float" style={{ animationDelay: "0.8s" }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-[9px] font-medium text-foreground">Brand Message</span>
                  </div>
                  <div className="bg-white rounded-lg px-2.5 py-1 shadow-soft-sm border border-border flex items-center gap-1.5 animate-float-slow" style={{ animationDelay: "0.4s" }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-soft-green" />
                    <span className="text-[9px] font-medium text-foreground">Engagement Tracked</span>
                  </div>
                </div>
              </div>

              {/* Live data */}
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-bg-soft rounded-xl p-2.5 text-center">
                  <p className="text-[10px] text-text-muted">Interactions</p>
                  <p className="text-sm font-bold text-foreground">2,847</p>
                </div>
                <div className="bg-bg-soft rounded-xl p-2.5 text-center">
                  <p className="text-[10px] text-text-muted">Engagement</p>
                  <p className="text-sm font-bold text-amber">38%</p>
                </div>
                <div className="bg-bg-soft rounded-xl p-2.5 text-center">
                  <p className="text-[10px] text-text-muted">Conv. Signal</p>
                  <p className="text-sm font-bold text-soft-green">12%</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


/* ═══════════════════════════════════════════════════════════════
   HOW BRANDS LAUNCH — 3-step visual flow
   ═══════════════════════════════════════════════════════════════ */
function HowBrandsLaunch() {
  return (
    <section id="how-brands-launch" className="py-24 sm:py-32 bg-section-alt">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <p className="text-center text-sm font-medium text-accent tracking-wide uppercase mb-4">3 simple steps</p>
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-foreground mb-16">
            How brands launch campaigns
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Step 1 — Campaign setup */}
          <ScrollReveal delay={0}>
            <div className="card-soft overflow-hidden h-full">
              <div className="bg-gradient-to-b from-amber-light/40 to-white p-5">
                <div className="bg-white rounded-xl border border-border p-4 shadow-soft-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-5 h-5 rounded bg-amber/20 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-amber">1</span>
                    </div>
                    <span className="text-[11px] font-semibold text-foreground">Campaign Setup</span>
                  </div>
                  {/* Form mockup */}
                  <div className="space-y-2 mb-3">
                    <div>
                      <p className="text-[8px] text-text-muted mb-0.5">Product</p>
                      <div className="h-7 bg-bg-soft rounded-lg flex items-center px-2.5 border border-border">
                        <div className="w-3 h-3 rounded bg-amber/30 mr-1.5" />
                        <span className="text-[10px] text-foreground">Organic Milk — 64oz</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-[8px] text-text-muted mb-0.5">Store Locations</p>
                      <div className="h-7 bg-bg-soft rounded-lg flex items-center px-2.5 border border-border">
                        <span className="text-[10px] text-foreground">12 stores — Bay Area</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-[8px] text-text-muted mb-0.5">Objective</p>
                      <div className="flex gap-1.5">
                        <div className="h-6 bg-accent/10 border border-accent/30 rounded-md flex items-center px-2">
                          <span className="text-[9px] font-medium text-accent">Awareness</span>
                        </div>
                        <div className="h-6 bg-bg-soft border border-border rounded-md flex items-center px-2">
                          <span className="text-[9px] text-text-muted">Trial</span>
                        </div>
                        <div className="h-6 bg-bg-soft border border-border rounded-md flex items-center px-2">
                          <span className="text-[9px] text-text-muted">Conversion</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5 pt-4">
                <h3 className="text-base font-semibold text-foreground mb-1">Choose your product and goals</h3>
                <p className="text-xs text-text-body">Select product, store locations, and campaign objective.</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Step 2 — Deploy */}
          <ScrollReveal delay={0.12}>
            <div className="card-soft overflow-hidden h-full">
              <div className="bg-gradient-to-b from-accent-light/40 to-white p-5">
                <div className="bg-white rounded-xl border border-border p-4 shadow-soft-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-5 h-5 rounded bg-accent/15 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-accent">2</span>
                    </div>
                    <span className="text-[11px] font-semibold text-foreground">Deploying to Fleet</span>
                  </div>
                  {/* Fleet deployment visual */}
                  <div className="space-y-2">
                    {[
                      { store: "FreshMart #12", robots: 3, status: "Active", color: "bg-soft-green" },
                      { store: "FreshMart #8", robots: 2, status: "Active", color: "bg-soft-green" },
                      { store: "GreenGrocer #5", robots: 4, status: "Deploying", color: "bg-amber" },
                      { store: "SuperSave #19", robots: 2, status: "Queued", color: "bg-text-muted" },
                    ].map((s) => (
                      <div key={s.store} className="flex items-center justify-between py-1.5 border-b border-border-light last:border-0">
                        <div className="flex items-center gap-1.5">
                          <div className={`w-1.5 h-1.5 rounded-full ${s.color}`} />
                          <span className="text-[10px] text-foreground">{s.store}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] text-text-muted">{s.robots} robots</span>
                          <span className="text-[8px] font-medium text-text-muted">{s.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-5 pt-4">
                <h3 className="text-base font-semibold text-foreground mb-1">Deploy across robot networks</h3>
                <p className="text-xs text-text-body">Kovio pushes campaigns to retail robots instantly.</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Step 3 — Measure */}
          <ScrollReveal delay={0.24}>
            <div className="card-soft overflow-hidden h-full">
              <div className="bg-gradient-to-b from-soft-green-light/40 to-white p-5">
                <div className="bg-white rounded-xl border border-border p-4 shadow-soft-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-5 h-5 rounded bg-soft-green/15 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-soft-green">3</span>
                    </div>
                    <span className="text-[11px] font-semibold text-foreground">Real-Time Results</span>
                  </div>
                  {/* Metrics mockup */}
                  <div className="space-y-2.5">
                    {[
                      { label: "Shopper Interactions", value: "2,847", bar: 85, color: "bg-accent" },
                      { label: "Product Engagement", value: "38%", bar: 38, color: "bg-amber" },
                      { label: "Conversion Signals", value: "12%", bar: 12, color: "bg-soft-green" },
                    ].map((m) => (
                      <div key={m.label}>
                        <div className="flex justify-between mb-0.5">
                          <span className="text-[9px] text-text-muted">{m.label}</span>
                          <span className="text-[9px] font-bold text-foreground">{m.value}</span>
                        </div>
                        <div className="h-1.5 bg-border-light rounded-full overflow-hidden">
                          <div className={`h-full ${m.color} rounded-full transition-all`} style={{ width: `${m.bar}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-5 pt-4">
                <h3 className="text-base font-semibold text-foreground mb-1">Measure real-world engagement</h3>
                <p className="text-xs text-text-body">See shopper interactions, engagement, and conversion.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}


/* ═══════════════════════════════════════════════════════════════
   BRAND DASHBOARD — Full analytics mockup
   ═══════════════════════════════════════════════════════════════ */
function BrandDashboard() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <p className="text-center text-sm font-medium text-accent tracking-wide uppercase mb-4">Brand Analytics</p>
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-foreground mb-4">
            See how shoppers interact with your brand
          </h2>
          <p className="text-center text-text-body text-lg max-w-2xl mx-auto mb-14">
            Real-world engagement analytics. Not impressions — actual shopper behavior.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="card-soft p-5 sm:p-7 max-w-4xl mx-auto">
            {/* Dashboard header */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" /></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Organic Milk — Spring Campaign</p>
                  <p className="text-[11px] text-text-muted">12 stores — Bay Area</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-soft-green" />
                <span className="text-[11px] text-text-muted">Live — 11 robots active</span>
              </div>
            </div>

            {/* KPI row */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
              {[
                { label: "Shopper Interactions", value: "12,480", change: "+24%", up: true },
                { label: "Product Engagement", value: "34%", change: "+8%", up: true },
                { label: "Avg Dwell Time", value: "18s", change: "+3s", up: true },
                { label: "Store Performance", value: "92%", change: "+5%", up: true },
                { label: "Campaign ROI", value: "4.2x", change: "+1.1x", up: true },
              ].map((m) => (
                <div key={m.label} className="bg-bg-soft rounded-xl p-3 text-center">
                  <p className="text-[9px] text-text-muted mb-0.5">{m.label}</p>
                  <p className="text-lg font-bold text-foreground">{m.value}</p>
                  <p className="text-[9px] font-medium text-soft-green">{m.change}</p>
                </div>
              ))}
            </div>

            {/* Chart + store list */}
            <div className="grid md:grid-cols-5 gap-5">
              {/* Chart */}
              <div className="md:col-span-3 bg-bg-soft rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-medium text-foreground">Weekly Engagement</span>
                  <div className="flex gap-3">
                    <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-accent" /><span className="text-[9px] text-text-muted">Interactions</span></div>
                    <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-amber" /><span className="text-[9px] text-text-muted">Engagement</span></div>
                  </div>
                </div>
                <div className="flex items-end gap-2 h-28">
                  {[
                    { a: 45, b: 28 }, { a: 52, b: 32 }, { a: 48, b: 30 }, { a: 68, b: 42 },
                    { a: 72, b: 48 }, { a: 85, b: 55 }, { a: 90, b: 62 },
                  ].map((d, i) => (
                    <div key={i} className="flex-1 flex items-end gap-px">
                      <div className="flex-1 bg-accent/20 rounded-t-sm" style={{ height: `${d.a}%` }} />
                      <div className="flex-1 bg-amber/25 rounded-t-sm" style={{ height: `${d.b}%` }} />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-2">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                    <span key={d} className="text-[8px] text-text-muted flex-1 text-center">{d}</span>
                  ))}
                </div>
              </div>

              {/* Store performance */}
              <div className="md:col-span-2 bg-bg-soft rounded-xl p-4">
                <span className="text-[11px] font-medium text-foreground block mb-3">Top Stores</span>
                <div className="space-y-2.5">
                  {[
                    { name: "FreshMart #12", interactions: "2,140", rate: "41%" },
                    { name: "FreshMart #8", interactions: "1,890", rate: "38%" },
                    { name: "GreenGrocer #5", interactions: "1,640", rate: "36%" },
                    { name: "SuperSave #3", interactions: "1,420", rate: "33%" },
                    { name: "FreshMart #15", interactions: "1,280", rate: "31%" },
                  ].map((s, i) => (
                    <div key={s.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] text-text-muted w-3">{i + 1}</span>
                        <span className="text-[10px] text-foreground">{s.name}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[9px] text-text-muted">{s.interactions}</span>
                        <span className="text-[9px] font-semibold text-accent">{s.rate}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}


/* ═══════════════════════════════════════════════════════════════
   RETAIL ROBOT MOMENTS — 4 scene cards
   ═══════════════════════════════════════════════════════════════ */
function RetailMoments() {
  const moments = [
    {
      title: "Store Aisle",
      desc: "Robot suggests a product while scanning shelves.",
      badge: "Product Suggestion",
      badgeColor: "bg-amber",
      gradient: "from-amber-light/30",
    },
    {
      title: "Endcap Promotion",
      desc: "Robot highlights a product display to nearby shoppers.",
      badge: "Brand Highlight",
      badgeColor: "bg-accent",
      gradient: "from-accent-light/30",
    },
    {
      title: "Product Discovery",
      desc: "Robot guides a shopper to a new brand in the aisle.",
      badge: "Brand Discovery",
      badgeColor: "bg-teal",
      gradient: "from-teal-light/30",
    },
    {
      title: "Restock Interaction",
      desc: "Robot recommends alternatives when shelves are empty.",
      badge: "Alternative Rec",
      badgeColor: "bg-soft-green",
      gradient: "from-soft-green-light/30",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-section-warm">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <p className="text-center text-sm font-medium text-accent tracking-wide uppercase mb-4">Retail moments</p>
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-foreground mb-16">
            How robots influence shoppers
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {moments.map((m, i) => (
            <ScrollReveal key={m.title} delay={i * 0.1}>
              <div className="card-soft overflow-hidden h-full group">
                <div className={`bg-gradient-to-b ${m.gradient} to-white h-44 relative flex items-end justify-center overflow-hidden`}>
                  {/* Shelf backdrop */}
                  <div className="absolute left-2 top-2 w-6 h-full flex flex-col gap-1 opacity-10">
                    {[...Array(6)].map((_, j) => <div key={j} className="h-3 bg-foreground rounded-sm" />)}
                  </div>
                  <div className="absolute right-2 top-2 w-6 h-full flex flex-col gap-1 opacity-10">
                    {[...Array(6)].map((_, j) => <div key={j} className="h-3 bg-foreground rounded-sm" />)}
                  </div>
                  {/* Robot + person */}
                  <div className="flex items-end gap-4 mb-0 relative z-10">
                    <div className="w-12 h-16 bg-foreground/5 rounded-t-xl border border-foreground/8 flex flex-col items-center pt-2">
                      <div className="flex gap-1"><div className="w-1.5 h-1.5 rounded-full bg-accent/40" /><div className="w-1.5 h-1.5 rounded-full bg-accent/40" /></div>
                      <div className="mt-1 w-8 h-3 bg-accent/8 rounded-sm" />
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 rounded-full bg-foreground/8" />
                      <div className="w-8 h-10 bg-foreground/4 rounded-t-md mt-0.5" />
                    </div>
                  </div>
                  <div className={`absolute top-3 right-3 ${m.badgeColor} text-white text-[9px] font-semibold px-2 py-0.5 rounded-full shadow-soft-sm`}>
                    {m.badge}
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-base font-semibold text-foreground mb-1">{m.title}</h4>
                  <p className="text-xs text-text-body">{m.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ═══════════════════════════════════════════════════════════════
   BRAND ONBOARDING — Visual step flow
   ═══════════════════════════════════════════════════════════════ */
function BrandOnboarding() {
  const steps = [
    { num: "1", label: "Connect brand account", icon: "🔗", desc: "Link your brand profile and product catalog." },
    { num: "2", label: "Choose campaign objectives", icon: "🎯", desc: "Awareness, trial, or conversion." },
    { num: "3", label: "Select retail locations", icon: "📍", desc: "Pick stores where robots operate." },
    { num: "4", label: "Launch robot interactions", icon: "🚀", desc: "Go live across the fleet." },
  ];

  return (
    <section className="py-24 sm:py-32 bg-section-alt">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <p className="text-center text-sm font-medium text-accent tracking-wide uppercase mb-4">Getting started</p>
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-foreground mb-16">
            Launch campaigns in minutes
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 0.1}>
              <div className="card-soft p-6 text-center h-full relative">
                <div className="w-10 h-10 rounded-full bg-accent-light text-accent flex items-center justify-center text-sm font-bold mx-auto mb-4">{s.num}</div>
                <div className="text-2xl mb-3">{s.icon}</div>
                <h4 className="text-sm font-semibold text-foreground mb-1">{s.label}</h4>
                <p className="text-[11px] text-text-muted">{s.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-3 text-text-muted">
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ═══════════════════════════════════════════════════════════════
   CTA
   ═══════════════════════════════════════════════════════════════ */
function BrandCTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <div className="relative rounded-3xl bg-gradient-to-br from-amber to-amber/80 p-12 sm:p-16 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Reach shoppers where they shop.
              </h2>
              <p className="text-white/80 text-lg max-w-lg mx-auto mb-10">
                Be the first brand to activate robot-powered retail interactions.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-medium text-sm bg-white text-amber hover:bg-white/90 transition-all shadow-soft-lg">
                  Request Brand Access
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}


/* ═══════════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function ForAdvertisersPage() {
  return (
    <>
      <HeroSection />
      <HowBrandsLaunch />
      <BrandDashboard />
      <RetailMoments />
      <BrandOnboarding />
      <BrandCTA />
    </>
  );
}
