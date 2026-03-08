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
   HERO — Single-purpose → multipurpose robot transformation
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      <div className="absolute top-20 left-[10%] w-[500px] h-[500px] orb-teal animate-float-slow" />
      <div className="absolute bottom-20 right-[5%] w-[400px] h-[400px] orb-accent" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-24 pb-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
              className="inline-flex items-center gap-2 text-sm font-medium text-teal bg-teal-light px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              For Robot OEMs
            </motion.div>
            <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible"
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-foreground leading-[1.1] mb-6">
              Turn retail robots into{" "}
              <span className="text-gradient-primary">revenue platforms</span>
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
              className="text-lg text-text-body leading-relaxed mb-10 max-w-lg">
              You built incredible hardware. Kovio adds a monetization and attribution layer that turns every deployed robot into recurring revenue — without touching the user experience.
            </motion.p>
            <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap gap-4">
              <CTAButton href="/contact">Start Integration</CTAButton>
              <CTAButton href="#before-after" variant="secondary">See the Difference</CTAButton>
            </motion.div>
          </div>

          {/* Hero visual — Robot transformation */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}>
            <div className="rounded-3xl bg-gradient-to-b from-teal-light/30 to-white border border-border p-6 shadow-soft-lg overflow-hidden relative">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-soft-green" />
                <span className="text-[11px] font-medium text-text-muted">Fleet Overview — 48 robots active</span>
              </div>

              {/* Transformation visual: single → multi */}
              <div className="relative flex items-center justify-center gap-4 mb-4">
                {/* Before: plain robot */}
                <div className="flex flex-col items-center">
                  <div className="w-20 h-28 relative">
                    <div className="absolute bottom-0 w-20 h-24 bg-foreground/5 rounded-t-2xl border border-foreground/8">
                      <div className="absolute top-3 left-3 right-3 h-10 bg-white rounded-lg border border-border flex items-center justify-center">
                        <div className="flex gap-2"><div className="w-2.5 h-2.5 rounded-full bg-foreground/15" /><div className="w-2.5 h-2.5 rounded-full bg-foreground/15" /></div>
                      </div>
                      <div className="absolute bottom-2 left-3 right-3 h-4 bg-foreground/4 rounded" />
                    </div>
                  </div>
                  <span className="text-[9px] text-text-muted mt-2">Single-purpose</span>
                </div>

                {/* Arrow */}
                <div className="flex flex-col items-center gap-1">
                  <div className="w-12 h-[2px] bg-gradient-to-r from-foreground/10 to-accent/50 relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-accent/50" />
                  </div>
                  <span className="text-[8px] text-accent font-medium">+ Kovio</span>
                </div>

                {/* After: revenue robot */}
                <div className="flex flex-col items-center">
                  <div className="w-20 h-28 relative">
                    <div className="absolute bottom-0 w-20 h-24 bg-foreground/6 rounded-t-2xl border border-accent/20">
                      <div className="absolute top-3 left-3 right-3 h-10 bg-white rounded-lg border border-border flex items-center justify-center">
                        <div className="flex gap-2"><div className="w-2.5 h-2.5 rounded-full bg-accent" /><div className="w-2.5 h-2.5 rounded-full bg-accent" /></div>
                      </div>
                      <div className="absolute bottom-2 left-3 right-3 h-4 bg-accent/10 rounded flex items-center justify-center gap-1">
                        <div className="w-3 h-2 bg-accent/30 rounded-sm" />
                        <div className="w-4 h-1 bg-foreground/10 rounded-sm" />
                      </div>
                    </div>
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-4 bg-foreground/10 rounded-full">
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent/25 animate-pulse" />
                    </div>
                    {/* Floating revenue badges */}
                    <div className="absolute -right-12 top-0 bg-white rounded-lg px-2 py-0.5 shadow-soft-sm border border-border animate-float-slow">
                      <span className="text-[8px] font-medium text-soft-green">+$2.40</span>
                    </div>
                    <div className="absolute -right-14 top-8 bg-white rounded-lg px-2 py-0.5 shadow-soft-sm border border-border animate-float" style={{ animationDelay: "0.6s" }}>
                      <span className="text-[8px] font-medium text-accent">attribution</span>
                    </div>
                  </div>
                  <span className="text-[9px] text-accent font-medium mt-2">Revenue platform</span>
                </div>
              </div>

              {/* Fleet stats */}
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-bg-soft rounded-xl p-2.5 text-center">
                  <p className="text-[10px] text-text-muted">Monthly Rev</p>
                  <p className="text-sm font-bold text-foreground">$14.2K</p>
                </div>
                <div className="bg-bg-soft rounded-xl p-2.5 text-center">
                  <p className="text-[10px] text-text-muted">Per Robot</p>
                  <p className="text-sm font-bold text-teal">$296</p>
                </div>
                <div className="bg-bg-soft rounded-xl p-2.5 text-center">
                  <p className="text-[10px] text-text-muted">Uptime</p>
                  <p className="text-sm font-bold text-soft-green">99.2%</p>
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
   BEFORE / AFTER — Today's Robot vs Robot with Kovio
   ═══════════════════════════════════════════════════════════════ */
function BeforeAfterSection() {
  return (
    <section id="before-after" className="py-24 sm:py-32 bg-section-alt">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <p className="text-center text-sm font-medium text-accent tracking-wide uppercase mb-4">The transformation</p>
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-foreground mb-16">
            From cost center to profit center
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Before */}
          <ScrollReveal delay={0}>
            <div className="card-soft overflow-hidden h-full">
              <div className="bg-gradient-to-b from-red-50 to-white p-5 pb-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 rounded bg-red-100 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-red-500">✕</span>
                  </div>
                  <span className="text-[11px] font-semibold text-foreground">Today&apos;s Robot</span>
                </div>
                {/* Robot illustration - plain */}
                <div className="flex justify-center mb-4">
                  <div className="w-24 h-32 relative">
                    <div className="absolute bottom-0 w-24 h-28 bg-foreground/4 rounded-t-2xl border border-foreground/8 border-dashed">
                      <div className="absolute top-4 left-4 right-4 h-12 bg-white/80 rounded-lg border border-foreground/5 flex items-center justify-center">
                        <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-foreground/10" /><div className="w-3 h-3 rounded-full bg-foreground/10" /></div>
                      </div>
                      <div className="absolute bottom-3 left-4 right-4 h-5 bg-foreground/3 rounded" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5 space-y-3">
                {[
                  { label: "Revenue Model", value: "One-time hardware sale", bad: true },
                  { label: "Post-Sale Value", value: "Maintenance fees only", bad: true },
                  { label: "Data Monetization", value: "None", bad: true },
                  { label: "Recurring Revenue", value: "$0 / robot / month", bad: true },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-1 border-b border-border-light last:border-0">
                    <span className="text-xs text-text-muted">{item.label}</span>
                    <span className="text-xs font-medium text-red-400">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* After */}
          <ScrollReveal delay={0.15}>
            <div className="card-soft overflow-hidden h-full border-accent/20">
              <div className="bg-gradient-to-b from-accent-light/40 to-white p-5 pb-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 rounded bg-accent/15 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-accent">✓</span>
                  </div>
                  <span className="text-[11px] font-semibold text-foreground">Robot + Kovio</span>
                </div>
                {/* Robot illustration - enhanced */}
                <div className="flex justify-center mb-4 relative">
                  <div className="w-24 h-32 relative">
                    <div className="absolute bottom-0 w-24 h-28 bg-foreground/6 rounded-t-2xl border border-accent/25">
                      <div className="absolute top-4 left-4 right-4 h-12 bg-white rounded-lg border border-border flex items-center justify-center">
                        <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-accent" /><div className="w-3 h-3 rounded-full bg-accent" /></div>
                      </div>
                      <div className="absolute bottom-3 left-4 right-4 h-5 bg-accent/10 rounded flex items-center justify-center gap-1">
                        <div className="w-4 h-2.5 bg-accent/25 rounded-sm" />
                        <div className="w-6 h-1.5 bg-foreground/10 rounded-sm" />
                      </div>
                    </div>
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-4 bg-foreground/10 rounded-full">
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent/25 animate-pulse" />
                    </div>
                  </div>
                  {/* Floating indicators */}
                  <div className="absolute top-0 right-6 bg-white rounded-lg px-2 py-0.5 shadow-soft-sm border border-border animate-float-slow">
                    <span className="text-[8px] font-medium text-soft-green">+$2.40/interaction</span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white rounded-lg px-2 py-0.5 shadow-soft-sm border border-border animate-float" style={{ animationDelay: "0.5s" }}>
                    <span className="text-[8px] font-medium text-accent">attribution active</span>
                  </div>
                </div>
              </div>
              <div className="p-5 space-y-3">
                {[
                  { label: "Revenue Model", value: "Hardware + recurring monetization" },
                  { label: "Post-Sale Value", value: "Growing revenue stream" },
                  { label: "Data Monetization", value: "Attribution & insights" },
                  { label: "Recurring Revenue", value: "$200–500 / robot / month" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-1 border-b border-border-light last:border-0">
                    <span className="text-xs text-text-muted">{item.label}</span>
                    <span className="text-xs font-medium text-accent">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}


/* ═══════════════════════════════════════════════════════════════
   PLATFORM LAYER — Infrastructure diagram
   ═══════════════════════════════════════════════════════════════ */
function PlatformLayer() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <p className="text-center text-sm font-medium text-accent tracking-wide uppercase mb-4">How it works</p>
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Kovio sits between brands and your robots
          </h2>
          <p className="text-center text-text-body text-lg max-w-2xl mx-auto mb-14">
            A lightweight SDK connects your fleet to brand demand. You keep full control of the robot experience.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="card-soft p-6 sm:p-8 max-w-3xl mx-auto">
            {/* Layer stack */}
            <div className="space-y-3">
              {/* Brands layer */}
              <div className="rounded-xl bg-amber-light/40 border border-amber/20 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-amber" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4z" clipRule="evenodd" /></svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Brands & CPGs</p>
                      <p className="text-[10px] text-text-muted">Campaign budgets, product data, objectives</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {["Nike", "P&G", "Nestlé"].map((b) => (
                      <div key={b} className="bg-white rounded px-2 py-0.5 border border-border">
                        <span className="text-[8px] font-medium text-foreground">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <div className="w-[2px] h-4 bg-border" />
              </div>

              {/* Kovio layer */}
              <div className="rounded-xl bg-accent-light/50 border-2 border-accent/30 p-4 relative">
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-accent text-white text-[9px] font-bold px-3 py-0.5 rounded-full">
                  KOVIO PLATFORM
                </div>
                <div className="grid grid-cols-3 gap-3 mt-2">
                  {[
                    { label: "Auction Engine", desc: "Real-time bidding" },
                    { label: "Attribution", desc: "Interaction tracking" },
                    { label: "Revenue Split", desc: "Automated payouts" },
                  ].map((item) => (
                    <div key={item.label} className="bg-white rounded-lg p-2.5 border border-border text-center">
                      <p className="text-[10px] font-semibold text-accent">{item.label}</p>
                      <p className="text-[8px] text-text-muted">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <div className="w-[2px] h-4 bg-border" />
              </div>

              {/* SDK layer */}
              <div className="rounded-xl bg-teal-light/30 border border-teal/20 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal/15 flex items-center justify-center">
                      <svg className="w-4 h-4 text-teal" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Kovio SDK</p>
                      <p className="text-[10px] text-text-muted">Lightweight integration — 3 API calls</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg px-2.5 py-1 border border-border">
                    <code className="text-[9px] text-teal font-mono">npm i @kovio/sdk</code>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <div className="w-[2px] h-4 bg-border" />
              </div>

              {/* Robot fleet layer */}
              <div className="rounded-xl bg-bg-soft border border-border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-foreground/5 flex items-center justify-center">
                      <svg className="w-4 h-4 text-foreground/50" viewBox="0 0 20 20" fill="currentColor"><path d="M13 7H7v6h6V7z" /><path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" /></svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Your Robot Fleet</p>
                      <p className="text-[10px] text-text-muted">Retail, hospitality, warehouse — any environment</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <div key={n} className="w-5 h-5 rounded bg-foreground/5 border border-foreground/10 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-soft-green" />
                      </div>
                    ))}
                  </div>
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
   FLEET DASHBOARD — Revenue analytics for OEMs
   ═══════════════════════════════════════════════════════════════ */
function FleetDashboard() {
  return (
    <section className="py-24 sm:py-32 bg-section-alt">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <p className="text-center text-sm font-medium text-accent tracking-wide uppercase mb-4">Fleet Analytics</p>
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Track revenue across your entire fleet
          </h2>
          <p className="text-center text-text-body text-lg max-w-2xl mx-auto mb-14">
            Real-time visibility into how every deployed robot generates recurring revenue.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="card-soft p-5 sm:p-7 max-w-4xl mx-auto">
            {/* Dashboard header */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" /></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Fleet Revenue Dashboard</p>
                  <p className="text-[11px] text-text-muted">48 robots — 12 retail locations</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-soft-green" />
                <span className="text-[11px] text-text-muted">All systems online</span>
              </div>
            </div>

            {/* KPI row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {[
                { label: "Revenue / Robot", value: "$296", change: "+18%", color: "text-soft-green" },
                { label: "Monetized Interactions", value: "34,820", change: "+31%", color: "text-soft-green" },
                { label: "Active Campaigns", value: "12", change: "+4", color: "text-soft-green" },
                { label: "Engagement Rate", value: "38%", change: "+6%", color: "text-soft-green" },
              ].map((m) => (
                <div key={m.label} className="bg-bg-soft rounded-xl p-3 text-center">
                  <p className="text-[9px] text-text-muted mb-0.5">{m.label}</p>
                  <p className="text-lg font-bold text-foreground">{m.value}</p>
                  <p className={`text-[9px] font-medium ${m.color}`}>{m.change}</p>
                </div>
              ))}
            </div>

            {/* Chart + robot list */}
            <div className="grid md:grid-cols-5 gap-5">
              {/* Revenue chart */}
              <div className="md:col-span-3 bg-bg-soft rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-medium text-foreground">Monthly Fleet Revenue</span>
                  <div className="flex gap-3">
                    <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-teal" /><span className="text-[9px] text-text-muted">Revenue</span></div>
                    <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-accent" /><span className="text-[9px] text-text-muted">Robots</span></div>
                  </div>
                </div>
                <div className="flex items-end gap-2 h-28">
                  {[
                    { rev: 30, bots: 20 }, { rev: 38, bots: 28 }, { rev: 45, bots: 35 }, { rev: 52, bots: 40 },
                    { rev: 60, bots: 48 }, { rev: 75, bots: 55 }, { rev: 88, bots: 65 }, { rev: 95, bots: 72 },
                  ].map((d, i) => (
                    <div key={i} className="flex-1 flex items-end gap-px">
                      <div className="flex-1 bg-teal/25 rounded-t-sm" style={{ height: `${d.rev}%` }} />
                      <div className="flex-1 bg-accent/15 rounded-t-sm" style={{ height: `${d.bots}%` }} />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-2">
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((m) => (
                    <span key={m} className="text-[8px] text-text-muted flex-1 text-center">{m}</span>
                  ))}
                </div>
              </div>

              {/* Top robots */}
              <div className="md:col-span-2 bg-bg-soft rounded-xl p-4">
                <span className="text-[11px] font-medium text-foreground block mb-3">Top Performing Robots</span>
                <div className="space-y-2.5">
                  {[
                    { id: "RB-012", location: "FreshMart #12", rev: "$412" },
                    { id: "RB-007", location: "FreshMart #8", rev: "$388" },
                    { id: "RB-034", location: "GreenGrocer #5", rev: "$356" },
                    { id: "RB-019", location: "SuperSave #3", rev: "$324" },
                    { id: "RB-041", location: "FreshMart #15", rev: "$298" },
                  ].map((r, i) => (
                    <div key={r.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] text-text-muted w-3">{i + 1}</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-soft-green" />
                        <div>
                          <span className="text-[10px] text-foreground font-medium">{r.id}</span>
                          <span className="text-[9px] text-text-muted ml-1">{r.location}</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-semibold text-teal">{r.rev}/mo</span>
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
   SDK INTEGRATION — Visual integration flow
   ═══════════════════════════════════════════════════════════════ */
function SDKIntegration() {
  const steps = [
    {
      num: "1",
      label: "Install SDK",
      desc: "Add the Kovio package to your robot software stack.",
      visual: (
        <div className="bg-foreground rounded-xl p-3 font-mono text-[10px] leading-relaxed">
          <p className="text-text-muted/60">$ npm install @kovio/sdk</p>
          <p className="text-soft-green mt-1">✓ @kovio/sdk@2.1.0 installed</p>
          <p className="text-text-muted/40 mt-2"># or</p>
          <p className="text-text-muted/60">$ pip install kovio-sdk</p>
        </div>
      ),
    },
    {
      num: "2",
      label: "Register robot events",
      desc: "Tell Kovio about customer interactions your robot handles.",
      visual: (
        <div className="bg-foreground rounded-xl p-3 font-mono text-[10px] leading-relaxed">
          <p><span className="text-accent/80">kovio</span><span className="text-text-muted/60">.registerEvents([</span></p>
          <p className="ml-3"><span className="text-amber/80">&quot;product_recommendation&quot;</span><span className="text-text-muted/60">,</span></p>
          <p className="ml-3"><span className="text-amber/80">&quot;aisle_navigation&quot;</span><span className="text-text-muted/60">,</span></p>
          <p className="ml-3"><span className="text-amber/80">&quot;brand_display&quot;</span></p>
          <p><span className="text-text-muted/60">]);</span></p>
        </div>
      ),
    },
    {
      num: "3",
      label: "Start earning",
      desc: "Kovio handles auction, attribution, and revenue distribution automatically.",
      visual: (
        <div className="bg-foreground rounded-xl p-3 font-mono text-[10px] leading-relaxed">
          <p><span className="text-accent/80">kovio</span><span className="text-text-muted/60">.onInteraction(</span><span className="text-amber/80">&quot;recommend&quot;</span><span className="text-text-muted/60">, (ctx) =&gt; {`{`}</span></p>
          <p className="ml-3"><span className="text-text-muted/40">{`// Your existing robot logic`}</span></p>
          <p className="ml-3"><span className="text-teal/80">robot</span><span className="text-text-muted/60">.showProduct(ctx.product);</span></p>
          <p className="ml-3"><span className="text-text-muted/40">{`// Revenue logged automatically`}</span></p>
          <p><span className="text-text-muted/60">{`}`});</span></p>
        </div>
      ),
    },
  ];

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <p className="text-center text-sm font-medium text-accent tracking-wide uppercase mb-4">Integration</p>
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Three API calls to revenue
          </h2>
          <p className="text-center text-text-body text-lg max-w-2xl mx-auto mb-16">
            Minimal integration. No changes to your robot&apos;s core behavior. Full control stays with you.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <ScrollReveal key={step.label} delay={i * 0.12}>
              <div className="card-soft overflow-hidden h-full">
                <div className="p-4 pb-3">
                  {step.visual}
                </div>
                <div className="p-5 pt-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 rounded bg-teal/15 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-teal">{step.num}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-foreground">{step.label}</h3>
                  </div>
                  <p className="text-xs text-text-body">{step.desc}</p>
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
   RETAIL USE CASE — Step-by-step walkthrough
   ═══════════════════════════════════════════════════════════════ */
function RetailUseCase() {
  const steps = [
    { icon: "🔍", title: "Robot scans aisle", desc: "Robot performs routine shelf scan in store aisle.", color: "bg-bg-soft", borderColor: "border-border" },
    { icon: "👋", title: "Customer approaches", desc: "Shopper asks the robot for help finding running shoes.", color: "bg-amber-light/30", borderColor: "border-amber/20" },
    { icon: "💬", title: "Robot recommends", desc: "Kovio runs a real-time auction. Robot suggests the winning brand's product.", color: "bg-accent-light/30", borderColor: "border-accent/20" },
    { icon: "📊", title: "Interaction logged", desc: "Every engagement, dwell time, and outcome is tracked via attribution.", color: "bg-teal-light/30", borderColor: "border-teal/20" },
    { icon: "💰", title: "Brand pays", desc: "Winning brand is charged for the verified interaction.", color: "bg-amber-light/40", borderColor: "border-amber/20" },
    { icon: "📈", title: "Revenue flows to you", desc: "Your share hits the fleet dashboard in real time. Recurring, automated.", color: "bg-soft-green-light/30", borderColor: "border-soft-green/20" },
  ];

  return (
    <section className="py-24 sm:py-32 bg-section-warm">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <p className="text-center text-sm font-medium text-accent tracking-wide uppercase mb-4">In action</p>
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How a single interaction generates revenue
          </h2>
          <p className="text-center text-text-body text-lg max-w-2xl mx-auto mb-16">
            From shelf scan to brand payment in seconds.
          </p>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 0.08}>
              <div className="flex gap-4 mb-4 last:mb-0">
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full ${step.color} border ${step.borderColor} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-sm">{step.icon}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-[2px] h-full min-h-[24px] bg-border mt-1" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-4">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[10px] font-medium text-text-muted">Step {i + 1}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">{step.title}</h4>
                  <p className="text-xs text-text-body">{step.desc}</p>
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
   WHY INTEGRATE — Benefits grid
   ═══════════════════════════════════════════════════════════════ */
function WhyIntegrate() {
  const benefits = [
    {
      title: "First-Mover Revenue",
      desc: "Early integrators capture the highest auction premiums as brands compete for limited robot inventory.",
      color: "text-accent",
      bg: "bg-accent-light/40",
    },
    {
      title: "Zero Risk",
      desc: "No upfront costs. No minimum commitments. We only earn when you earn.",
      color: "text-soft-green",
      bg: "bg-soft-green-light/30",
    },
    {
      title: "Investor Signal",
      desc: "Show your board a clear path to recurring revenue that scales with every robot deployed.",
      color: "text-teal",
      bg: "bg-teal-light/30",
    },
    {
      title: "Shape the Standard",
      desc: "Help define how robot monetization works. Your input shapes our SDK and auction rules.",
      color: "text-amber",
      bg: "bg-amber-light/40",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-section-alt">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <p className="text-center text-sm font-medium text-accent tracking-wide uppercase mb-4">Why now</p>
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-foreground mb-16">
            Why integrate early
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {benefits.map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 0.1}>
              <div className="card-soft p-6 h-full">
                <div className={`w-10 h-10 rounded-xl ${b.bg} flex items-center justify-center mb-4`}>
                  <span className={`text-sm font-bold ${b.color}`}>{i + 1}</span>
                </div>
                <h4 className={`text-base font-semibold ${b.color} mb-2`}>{b.title}</h4>
                <p className="text-sm text-text-body leading-relaxed">{b.desc}</p>
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
function ManufacturerCTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <div className="relative rounded-3xl bg-gradient-to-br from-teal to-accent p-12 sm:p-16 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Your robots are already doing the work.
              </h2>
              <p className="text-white/80 text-lg max-w-lg mx-auto mb-10">
                Let them earn for you too. Start generating recurring revenue from every deployed robot.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-medium text-sm bg-white text-teal hover:bg-white/90 transition-all shadow-soft-lg">
                  Start Integration
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
export default function ForManufacturersPage() {
  return (
    <>
      <HeroSection />
      <BeforeAfterSection />
      <PlatformLayer />
      <FleetDashboard />
      <SDKIntegration />
      <RetailUseCase />
      <WhyIntegrate />
      <ManufacturerCTA />
    </>
  );
}
