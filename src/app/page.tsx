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
   1. HERO — Retail robot scene + headline
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      <div className="absolute top-20 right-[15%] w-[500px] h-[500px] orb-accent animate-float-slow" />
      <div className="absolute bottom-10 left-[10%] w-[400px] h-[400px] orb-teal" />
      <div className="absolute top-[60%] right-[5%] w-[300px] h-[300px] orb-warm" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent bg-accent-light px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Monetization + Attribution for Robots
            </motion.div>

            <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible"
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.1] mb-6">
              The Monetization &amp; Attribution Layer for{" "}
              <span className="text-gradient-primary">Autonomous Robots</span>
            </motion.h1>

            <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
              className="text-lg sm:text-xl text-text-body leading-relaxed mb-10 max-w-lg">
              Kovio helps robot fleets generate revenue and understand every real-world interaction.
            </motion.p>

            <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap gap-4">
              <CTAButton href="#how-it-works">See How It Works</CTAButton>
              <CTAButton href="/for-manufacturers" variant="secondary">For Robot Companies</CTAButton>
            </motion.div>
          </div>

          {/* Hero visual — Retail robot scene */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }} className="relative">
            <HeroRetailScene />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* Hero illustration — A retail store scene with robot + shopper + data overlays */
function HeroRetailScene() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Store environment background */}
      <div className="rounded-3xl bg-gradient-to-b from-bg-soft to-white border border-border p-6 pb-8 shadow-soft-lg overflow-hidden">
        {/* Store aisle header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-soft-green" />
          <span className="text-[11px] font-medium text-text-muted">Live — Grocery Store, Aisle 7</span>
        </div>

        {/* Scene: Robot + Shopper */}
        <div className="relative h-52 bg-gradient-to-b from-accent-light/30 to-white rounded-2xl flex items-end justify-center overflow-hidden mb-4">
          {/* Shelf background */}
          <div className="absolute inset-x-0 top-0 h-full">
            <div className="absolute left-3 top-4 w-10 h-full flex flex-col gap-2 opacity-20">
              <div className="h-3 bg-amber rounded-sm" />
              <div className="h-3 bg-teal rounded-sm" />
              <div className="h-3 bg-accent rounded-sm" />
              <div className="h-3 bg-amber rounded-sm" />
              <div className="h-3 bg-soft-green rounded-sm" />
              <div className="h-3 bg-accent rounded-sm" />
            </div>
            <div className="absolute right-3 top-4 w-10 h-full flex flex-col gap-2 opacity-20">
              <div className="h-3 bg-teal rounded-sm" />
              <div className="h-3 bg-amber rounded-sm" />
              <div className="h-3 bg-soft-green rounded-sm" />
              <div className="h-3 bg-accent rounded-sm" />
              <div className="h-3 bg-amber rounded-sm" />
              <div className="h-3 bg-teal rounded-sm" />
            </div>
          </div>

          {/* Robot */}
          <div className="relative z-10 mr-8 mb-0">
            <div className="w-20 h-28 relative">
              {/* Robot body */}
              <div className="absolute bottom-0 w-20 h-24 bg-foreground/8 rounded-t-2xl border border-foreground/10">
                {/* Screen face */}
                <div className="absolute top-3 left-3 right-3 h-10 bg-white rounded-lg border border-border flex items-center justify-center">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                    <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                  </div>
                </div>
                {/* Promotion on robot screen */}
                <div className="absolute bottom-2 left-3 right-3 h-6 bg-accent/10 rounded flex items-center justify-center">
                  <div className="w-4 h-2.5 bg-amber/60 rounded-sm" />
                  <div className="w-8 h-1.5 bg-foreground/15 rounded-sm ml-1.5" />
                </div>
              </div>
              {/* Antenna */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-4 bg-foreground/15 rounded-full">
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent/30 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Shopper */}
          <div className="relative z-10 mb-0">
            <div className="flex flex-col items-center">
              <div className="w-9 h-9 rounded-full bg-foreground/10 border border-foreground/5" />
              <div className="w-12 h-16 bg-foreground/5 rounded-t-lg mt-1 border border-foreground/5" />
            </div>
          </div>

          {/* Interaction indicators */}
          <div className="absolute top-3 right-3 flex flex-col gap-1.5">
            <div className="bg-amber text-white text-[9px] font-semibold px-2 py-0.5 rounded-full animate-pulse-soft shadow-soft-sm">
              Product Suggestion
            </div>
            <div className="bg-accent text-white text-[9px] font-semibold px-2 py-0.5 rounded-full animate-pulse-soft shadow-soft-sm" style={{ animationDelay: "0.5s" }}>
              Brand Promotion
            </div>
          </div>

          {/* Wi-fi signal waves between robot and person */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-0.5 opacity-40">
            {[12, 16, 20, 16, 12].map((h, i) => (
              <div key={i} className="w-0.5 rounded-full bg-accent animate-pulse-soft" style={{ height: h, animationDelay: `${i * 0.15}s` }} />
            ))}
          </div>
        </div>

        {/* Live data overlay cards */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-bg-soft rounded-xl p-2.5 text-center">
            <p className="text-[10px] text-text-muted">Engagement</p>
            <p className="text-sm font-bold text-foreground">94%</p>
          </div>
          <div className="bg-bg-soft rounded-xl p-2.5 text-center">
            <p className="text-[10px] text-text-muted">Revenue</p>
            <p className="text-sm font-bold text-soft-green">$2.40</p>
          </div>
          <div className="bg-bg-soft rounded-xl p-2.5 text-center">
            <p className="text-[10px] text-text-muted">Attribution</p>
            <p className="text-sm font-bold text-accent">Linked</p>
          </div>
        </div>
      </div>

      {/* Floating Kovio badge */}
      <div className="absolute -top-3 -right-3 bg-white rounded-2xl shadow-soft-lg border border-border p-3 flex items-center gap-2 animate-float">
        <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
          <span className="text-white font-bold text-xs">K</span>
        </div>
        <div>
          <p className="text-[10px] font-semibold text-foreground">Kovio</p>
          <p className="text-[9px] text-text-muted">Processing</p>
        </div>
      </div>
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════════
   2. HOW IT WORKS — 5-step visual pipeline with UI mockups
   ═══════════════════════════════════════════════════════════════ */
function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-section-alt">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <p className="text-center text-sm font-medium text-accent tracking-wide uppercase mb-4">How it works</p>
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-foreground mb-4">
            From campaign to revenue in 5 steps
          </h2>
          <p className="text-center text-text-body text-lg max-w-2xl mx-auto mb-20">
            See exactly how brands reach consumers through robots.
          </p>
        </ScrollReveal>

        <div className="space-y-16 md:space-y-0 md:grid md:grid-cols-5 md:gap-4 lg:gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-20 left-[12%] right-[12%] h-[2px] bg-border z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-amber/30 via-accent/30 to-soft-green/30" />
          </div>

          {/* Step 1 — Brand defines campaign */}
          <ScrollReveal delay={0}>
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-amber-light text-amber flex items-center justify-center text-sm font-bold mb-4 shadow-soft-sm">1</div>
              <div className="w-full card-soft p-4 mb-4">
                {/* Mini brand dashboard */}
                <div className="bg-bg-soft rounded-xl p-3 mb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-4 h-4 rounded bg-amber/20" />
                    <div className="h-2 w-16 bg-foreground/10 rounded" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded border-2 border-accent bg-accent" />
                      <div className="h-1.5 w-20 bg-foreground/10 rounded" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded border-2 border-border" />
                      <div className="h-1.5 w-14 bg-foreground/10 rounded" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded border-2 border-border" />
                      <div className="h-1.5 w-18 bg-foreground/10 rounded" />
                    </div>
                  </div>
                </div>
                <div className="h-6 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-[9px] font-semibold text-white">Launch Campaign</span>
                </div>
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">Brands define campaigns</h3>
              <p className="text-xs text-text-muted">Select product, targeting, budget</p>
            </div>
          </ScrollReveal>

          {/* Step 2 — Kovio detects moments */}
          <ScrollReveal delay={0.1}>
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-accent-light text-accent flex items-center justify-center text-sm font-bold mb-4 shadow-soft-sm">2</div>
              <div className="w-full card-soft p-4 mb-4">
                <div className="bg-bg-soft rounded-xl p-3 space-y-2">
                  {/* Activity feed mockup */}
                  {[
                    { label: "Robot #12 — Aisle 3", status: "bg-soft-green", statusText: "Active" },
                    { label: "Robot #7 — Dairy", status: "bg-amber", statusText: "Moment" },
                    { label: "Robot #19 — Entry", status: "bg-text-muted", statusText: "Idle" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className={`w-1.5 h-1.5 rounded-full ${item.status}`} />
                        <span className="text-[9px] text-foreground">{item.label}</span>
                      </div>
                      <span className="text-[8px] text-text-muted">{item.statusText}</span>
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">Kovio detects moments</h3>
              <p className="text-xs text-text-muted">Identifies monetizable interactions</p>
            </div>
          </ScrollReveal>

          {/* Step 3 — Robot engages customer */}
          <ScrollReveal delay={0.2}>
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-teal-light text-teal flex items-center justify-center text-sm font-bold mb-4 shadow-soft-sm">3</div>
              <div className="w-full card-soft p-4 mb-4">
                {/* Mini retail scene */}
                <div className="bg-gradient-to-b from-accent-light/30 to-bg-soft rounded-xl p-3 h-[106px] flex items-end justify-center relative overflow-hidden">
                  {/* Mini robot */}
                  <div className="w-10 h-14 bg-foreground/6 rounded-t-xl border border-foreground/10 mr-3 flex flex-col items-center pt-1.5">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                    </div>
                    <div className="mt-1.5 w-6 h-3 bg-accent/10 rounded-sm" />
                  </div>
                  {/* Mini person */}
                  <div className="flex flex-col items-center">
                    <div className="w-5 h-5 rounded-full bg-foreground/8" />
                    <div className="w-7 h-9 bg-foreground/4 rounded-t-md mt-0.5" />
                  </div>
                  {/* Speech bubble */}
                  <div className="absolute top-2 right-2 bg-white rounded-lg px-2 py-1 shadow-soft-sm border border-border">
                    <span className="text-[8px] text-foreground font-medium">Try this!</span>
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">Robot engages customer</h3>
              <p className="text-xs text-text-muted">Suggestion, display, or recommendation</p>
            </div>
          </ScrollReveal>

          {/* Step 4 — Data captured + attribution */}
          <ScrollReveal delay={0.3}>
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-accent-light text-accent flex items-center justify-center text-sm font-bold mb-4 shadow-soft-sm">4</div>
              <div className="w-full card-soft p-4 mb-4">
                <div className="bg-bg-soft rounded-xl p-3 space-y-2">
                  {/* Metrics mockup */}
                  {[
                    { label: "Engagement", value: "94%", bar: 94, color: "bg-accent" },
                    { label: "Dwell Time", value: "12s", bar: 60, color: "bg-teal" },
                    { label: "Conversion", value: "38%", bar: 38, color: "bg-soft-green" },
                  ].map((m) => (
                    <div key={m.label}>
                      <div className="flex justify-between mb-0.5">
                        <span className="text-[9px] text-text-muted">{m.label}</span>
                        <span className="text-[9px] font-semibold text-foreground">{m.value}</span>
                      </div>
                      <div className="h-1.5 bg-border rounded-full overflow-hidden">
                        <div className={`h-full ${m.color} rounded-full`} style={{ width: `${m.bar}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">Interactions measured</h3>
              <p className="text-xs text-text-muted">Engagement, conversion, dwell time</p>
            </div>
          </ScrollReveal>

          {/* Step 5 — Revenue generated */}
          <ScrollReveal delay={0.4}>
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-soft-green-light text-soft-green flex items-center justify-center text-sm font-bold mb-4 shadow-soft-sm">5</div>
              <div className="w-full card-soft p-4 mb-4">
                <div className="bg-bg-soft rounded-xl p-3">
                  {/* Revenue chart mockup */}
                  <div className="flex items-end gap-1 h-14 mb-2">
                    {[28, 35, 24, 42, 38, 52, 48, 58, 64, 60, 72].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t-sm bg-soft-green/20 hover:bg-soft-green/40 transition-colors" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] text-text-muted">This week</span>
                    <span className="text-xs font-bold text-soft-green">+$4,280</span>
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">Revenue generated</h3>
              <p className="text-xs text-text-muted">Robot fleets earn new revenue</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}


/* ═══════════════════════════════════════════════════════════════
   3. REAL-WORLD ROBOT MOMENTS — Retail-first scenes
   ═══════════════════════════════════════════════════════════════ */
function RobotMomentsSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <p className="text-center text-sm font-medium text-accent tracking-wide uppercase mb-4">Real-world moments</p>
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Where robot interactions happen
          </h2>
          <p className="text-center text-text-body text-lg max-w-2xl mx-auto mb-16">
            Every time a robot meets a person, there&apos;s a monetization opportunity.
          </p>
        </ScrollReveal>

        {/* Retail — PRIMARY, large card */}
        <ScrollReveal>
          <div className="card-soft overflow-hidden mb-6">
            <div className="grid md:grid-cols-2">
              {/* Left — Retail scene illustration */}
              <div className="bg-gradient-to-br from-amber-light/50 to-bg-soft p-8 sm:p-10 relative min-h-[320px] flex items-end">
                {/* Store shelves */}
                <div className="absolute top-6 left-6 right-6 flex justify-between">
                  <div className="flex flex-col gap-2 w-16 opacity-30">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className={`h-4 rounded-sm ${["bg-amber", "bg-teal", "bg-accent", "bg-soft-green", "bg-amber", "bg-accent"][i]}`} />
                    ))}
                  </div>
                  <div className="flex flex-col gap-2 w-16 opacity-30">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className={`h-4 rounded-sm ${["bg-teal", "bg-amber", "bg-soft-green", "bg-accent", "bg-teal", "bg-amber"][i]}`} />
                    ))}
                  </div>
                </div>

                {/* Robot + Shopper center scene */}
                <div className="relative z-10 flex items-end justify-center w-full gap-6">
                  {/* Robot */}
                  <div className="relative">
                    <div className="w-24 h-32 bg-foreground/6 rounded-t-3xl border border-foreground/10 flex flex-col items-center pt-3">
                      <div className="w-16 h-12 bg-white rounded-lg border border-border flex items-center justify-center mb-2">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-accent" />
                          <div className="w-3 h-3 rounded-full bg-accent" />
                        </div>
                      </div>
                      <div className="w-16 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                        <div className="w-5 h-3 bg-amber/50 rounded-sm" />
                        <div className="w-7 h-1.5 bg-foreground/10 rounded-sm ml-1" />
                      </div>
                    </div>
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-1.5 h-5 bg-foreground/10 rounded-full">
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent/20 animate-pulse" />
                    </div>
                  </div>

                  {/* Shopper */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-foreground/8 border border-foreground/5" />
                    <div className="w-16 h-20 bg-foreground/4 rounded-t-lg mt-1" />
                  </div>
                </div>

                {/* Floating data badges */}
                <div className="absolute top-6 right-6 flex flex-col gap-2">
                  <div className="bg-white rounded-lg px-3 py-1.5 shadow-soft-sm border border-border flex items-center gap-2 animate-float-slow">
                    <div className="w-2 h-2 rounded-full bg-amber" />
                    <span className="text-[10px] font-medium text-foreground">Product Suggestion</span>
                  </div>
                  <div className="bg-white rounded-lg px-3 py-1.5 shadow-soft-sm border border-border flex items-center gap-2 animate-float" style={{ animationDelay: "1s" }}>
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-[10px] font-medium text-foreground">Shopper Engaged</span>
                  </div>
                  <div className="bg-white rounded-lg px-3 py-1.5 shadow-soft-sm border border-border flex items-center gap-2 animate-float-slow" style={{ animationDelay: "0.5s" }}>
                    <div className="w-2 h-2 rounded-full bg-soft-green" />
                    <span className="text-[10px] font-medium text-foreground">Revenue: $2.40</span>
                  </div>
                </div>
              </div>

              {/* Right — Description + metrics */}
              <div className="p-8 sm:p-10 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-xs font-medium text-amber bg-amber-light px-3 py-1.5 rounded-full mb-4 w-fit">
                  Primary Use Case
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Retail Store Aisle</h3>
                <p className="text-text-body mb-6">
                  Robots assist shoppers, recommend products, and deliver brand promotions — all measured and attributed.
                </p>
                {/* Inline metrics */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Store Traffic Exposure", value: "12K/day" },
                    { label: "Engagement Rate", value: "34%" },
                    { label: "Product Interactions", value: "2.8K" },
                    { label: "Assisted Purchases", value: "420" },
                  ].map((m) => (
                    <div key={m.label} className="bg-bg-soft rounded-xl p-3">
                      <p className="text-[10px] text-text-muted mb-0.5">{m.label}</p>
                      <p className="text-base font-bold text-foreground">{m.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Secondary environments — 3 cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Hotel Lobby",
              desc: "Concierge robots recommending services and products.",
              color: "from-accent-light/40",
              badge: "bg-accent",
              metrics: [{ l: "Guest Interactions", v: "850/day" }, { l: "Recommendation Rate", v: "72%" }],
            },
            {
              name: "Food Court",
              desc: "Delivery robots presenting promotions during service.",
              color: "from-teal-light/40",
              badge: "bg-teal",
              metrics: [{ l: "Order Interactions", v: "1.2K/day" }, { l: "Upsell Rate", v: "28%" }],
            },
            {
              name: "Airport Terminal",
              desc: "Navigation robots suggesting nearby retail and dining.",
              color: "from-soft-green-light/40",
              badge: "bg-soft-green",
              metrics: [{ l: "Passenger Reach", v: "6K/day" }, { l: "Brand Engagement", v: "41%" }],
            },
          ].map((env, i) => (
            <ScrollReveal key={env.name} delay={i * 0.1}>
              <div className="card-soft overflow-hidden h-full">
                <div className={`bg-gradient-to-b ${env.color} to-white p-6 h-36 relative flex items-end justify-center`}>
                  {/* Mini robot silhouette */}
                  <div className="w-12 h-16 bg-foreground/5 rounded-t-xl border border-foreground/8 flex flex-col items-center pt-2 mr-4">
                    <div className="flex gap-1"><div className="w-1.5 h-1.5 rounded-full bg-accent/40" /><div className="w-1.5 h-1.5 rounded-full bg-accent/40" /></div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-foreground/8" />
                    <div className="w-8 h-10 bg-foreground/4 rounded-t-md mt-0.5" />
                  </div>
                  <div className={`absolute top-3 right-3 ${env.badge} text-white text-[9px] font-medium px-2 py-0.5 rounded-full`}>
                    {env.name}
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-base font-semibold text-foreground mb-1">{env.name}</h4>
                  <p className="text-xs text-text-body mb-4">{env.desc}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {env.metrics.map((m) => (
                      <div key={m.l} className="bg-bg-soft rounded-lg p-2">
                        <p className="text-[9px] text-text-muted">{m.l}</p>
                        <p className="text-xs font-bold text-foreground">{m.v}</p>
                      </div>
                    ))}
                  </div>
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
   4. BUILT FOR RETAIL — Dashboard + metrics visuals
   ═══════════════════════════════════════════════════════════════ */
function RetailFocusSection() {
  return (
    <section className="py-24 sm:py-32 bg-section-warm">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Dashboard mockup */}
          <ScrollReveal>
            <div className="card-soft p-5 sm:p-6">
              {/* Dashboard header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center">
                    <span className="text-white font-bold text-[10px]">K</span>
                  </div>
                  <span className="text-xs font-semibold text-foreground">Retail Analytics</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-soft-green" />
                  <span className="text-[10px] text-text-muted">Live</span>
                </div>
              </div>

              {/* Top metrics row */}
              <div className="grid grid-cols-4 gap-2 mb-4">
                {[
                  { label: "Traffic", value: "12.4K", change: "+14%", up: true },
                  { label: "Engaged", value: "4.2K", change: "+23%", up: true },
                  { label: "Conversions", value: "1.1K", change: "+18%", up: true },
                  { label: "Revenue", value: "$4.8K", change: "+31%", up: true },
                ].map((m) => (
                  <div key={m.label} className="bg-bg-soft rounded-xl p-2.5 text-center">
                    <p className="text-[9px] text-text-muted">{m.label}</p>
                    <p className="text-sm font-bold text-foreground">{m.value}</p>
                    <p className={`text-[9px] font-medium ${m.up ? "text-soft-green" : "text-red-400"}`}>{m.change}</p>
                  </div>
                ))}
              </div>

              {/* Chart area */}
              <div className="bg-bg-soft rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-medium text-text-muted">Interactions This Week</span>
                  <div className="flex gap-3">
                    <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-accent" /><span className="text-[9px] text-text-muted">Engagement</span></div>
                    <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-soft-green" /><span className="text-[9px] text-text-muted">Revenue</span></div>
                  </div>
                </div>
                {/* Simplified chart bars */}
                <div className="flex items-end gap-1.5 h-24">
                  {[
                    { e: 55, r: 30 }, { e: 70, r: 45 }, { e: 60, r: 38 }, { e: 85, r: 58 },
                    { e: 75, r: 50 }, { e: 90, r: 65 }, { e: 95, r: 72 },
                  ].map((d, i) => (
                    <div key={i} className="flex-1 flex items-end gap-px">
                      <div className="flex-1 bg-accent/20 rounded-t-sm" style={{ height: `${d.e}%` }} />
                      <div className="flex-1 bg-soft-green/30 rounded-t-sm" style={{ height: `${d.r}%` }} />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-2">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                    <span key={d} className="text-[8px] text-text-muted flex-1 text-center">{d}</span>
                  ))}
                </div>
              </div>

              {/* Campaign list */}
              <div className="space-y-2">
                {[
                  { name: "Dairy Aisle — Product X", status: "Active", statusColor: "bg-soft-green", rev: "$1,240" },
                  { name: "Snack Section — Brand Y", status: "Active", statusColor: "bg-soft-green", rev: "$890" },
                  { name: "Entrance — Promo Z", status: "Scheduled", statusColor: "bg-amber", rev: "—" },
                ].map((c) => (
                  <div key={c.name} className="flex items-center justify-between py-2 border-b border-border-light last:border-0">
                    <div className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${c.statusColor}`} />
                      <span className="text-[11px] text-foreground">{c.name}</span>
                    </div>
                    <span className="text-[11px] font-semibold text-foreground">{c.rev}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Copy */}
          <ScrollReveal delay={0.15}>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-amber bg-amber-light px-3 py-1.5 rounded-full mb-4">
              Primary Vertical
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-tight">
              Built for retail robot fleets
            </h2>
            <p className="text-text-body text-lg leading-relaxed mb-8">
              Retail is where robots and consumers meet most often. Kovio is built from the ground up for in-store interactions.
            </p>
            <div className="space-y-4">
              {[
                "Real-time campaign performance across all stores",
                "Product-level interaction and conversion tracking",
                "Aisle-by-aisle engagement heatmaps",
                "Assisted purchase attribution at checkout",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent-light flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-accent" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-text-body">{point}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}


/* ═══════════════════════════════════════════════════════════════
   5. ATTRIBUTION & INSIGHTS — Data layer visual
   ═══════════════════════════════════════════════════════════════ */
function AttributionSection() {
  return (
    <section className="py-24 sm:py-32 bg-section-alt">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <ScrollReveal>
            <p className="text-sm font-medium text-accent tracking-wide uppercase mb-4">Beyond Advertising</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-tight">
              Understand every robot interaction
            </h2>
            <p className="text-text-body text-lg leading-relaxed mb-8">
              Kovio measures and attributes real-world interactions between robots, people, and brands. Not just ads — full interaction intelligence.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Engagement Heatmaps", "Interaction Paths", "Shopper Behavior", "Conversion Attribution"].map((tag) => (
                <span key={tag} className="bg-white px-4 py-2 rounded-full text-sm text-text-body border border-border shadow-soft-sm">
                  {tag}
                </span>
              ))}
            </div>
          </ScrollReveal>

          {/* Right — Analytics mockup */}
          <ScrollReveal delay={0.15}>
            <div className="card-soft p-5 sm:p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-foreground">Interaction Attribution</span>
                <span className="text-[10px] text-text-muted">Last 7 days</span>
              </div>

              {/* Data flow visual */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="bg-accent-light rounded-xl p-3 text-center">
                  <svg className="w-6 h-6 mx-auto mb-1 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="4" y="4" width="16" height="12" rx="2" /><path d="M8 20h8M12 16v4" />
                    <circle cx="9" cy="10" r="1" fill="currentColor" /><circle cx="15" cy="10" r="1" fill="currentColor" />
                  </svg>
                  <p className="text-[9px] text-accent font-medium">Robot Event</p>
                </div>
                <div className="flex items-center justify-center">
                  <svg className="w-8 h-8 text-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="bg-soft-green-light rounded-xl p-3 text-center">
                  <svg className="w-6 h-6 mx-auto mb-1 text-soft-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <p className="text-[9px] text-soft-green font-medium">Insights</p>
                </div>
              </div>

              {/* Attribution feed */}
              <div className="space-y-3">
                {[
                  { time: "2:34 PM", event: "Shopper engaged — Aisle 3", type: "Engagement", typeColor: "bg-accent text-white" },
                  { time: "2:35 PM", event: "Product interaction — Brand X", type: "Interaction", typeColor: "bg-amber text-white" },
                  { time: "2:41 PM", event: "Purchase completed — $24.99", type: "Conversion", typeColor: "bg-soft-green text-white" },
                  { time: "2:41 PM", event: "Revenue attributed — $2.40", type: "Revenue", typeColor: "bg-accent text-white" },
                ].map((e, i) => (
                  <div key={i} className="flex items-center gap-3 py-2 border-b border-border-light last:border-0">
                    <span className="text-[9px] text-text-muted w-12 shrink-0 font-mono">{e.time}</span>
                    <span className="text-[11px] text-foreground flex-1">{e.event}</span>
                    <span className={`text-[8px] font-semibold px-2 py-0.5 rounded-full ${e.typeColor}`}>{e.type}</span>
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
   6. BRAND + FLEET DASHBOARDS — Side by side
   ═══════════════════════════════════════════════════════════════ */
function BrandFleetSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-foreground mb-16">
            Built for both sides
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {/* For Brands — Campaign dashboard */}
          <ScrollReveal>
            <div className="card-soft overflow-hidden h-full">
              <div className="bg-gradient-to-b from-amber-light/40 to-white p-6">
                {/* Mini campaign setup UI */}
                <div className="bg-white rounded-xl border border-border p-4 shadow-soft-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-5 h-5 rounded bg-amber flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" viewBox="0 0 20 20" fill="currentColor"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" /></svg>
                    </div>
                    <span className="text-[11px] font-semibold text-foreground">New Campaign</span>
                  </div>
                  <div className="space-y-2 mb-3">
                    <div className="h-7 bg-bg-soft rounded-lg flex items-center px-3">
                      <span className="text-[10px] text-text-muted">Product: Organic Milk</span>
                    </div>
                    <div className="h-7 bg-bg-soft rounded-lg flex items-center px-3">
                      <span className="text-[10px] text-text-muted">Location: Dairy Aisle, 12 stores</span>
                    </div>
                    <div className="h-7 bg-bg-soft rounded-lg flex items-center px-3">
                      <span className="text-[10px] text-text-muted">Budget: $500/week</span>
                    </div>
                  </div>
                  <div className="h-7 bg-accent rounded-lg flex items-center justify-center">
                    <span className="text-[10px] font-semibold text-white">Launch on Robot Fleets</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">For Brands</h3>
                <p className="text-sm text-text-body mb-5">Launch campaigns across robot fleets in minutes.</p>
                <ul className="space-y-2.5 mb-6">
                  {["Select product and targeting", "Choose stores and environments", "Launch robot interactions", "Track attribution in real time"].map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-text-body">
                      <svg className="w-4 h-4 text-amber shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
                <CTAButton href="/for-advertisers" variant="secondary">Learn More</CTAButton>
              </div>
            </div>
          </ScrollReveal>

          {/* For Robot Companies — Fleet revenue dashboard */}
          <ScrollReveal delay={0.12}>
            <div className="card-soft overflow-hidden h-full">
              <div className="bg-gradient-to-b from-accent-light/40 to-white p-6">
                {/* Mini fleet dashboard */}
                <div className="bg-white rounded-xl border border-border p-4 shadow-soft-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-semibold text-foreground">Fleet Revenue</span>
                    <span className="text-[10px] text-soft-green font-medium">+31% this week</span>
                  </div>
                  <div className="flex items-end gap-1 h-16 mb-3">
                    {[30, 42, 38, 55, 48, 62, 58, 72, 68, 80, 85, 92].map((h, i) => (
                      <div key={i} className="flex-1 bg-accent/15 hover:bg-accent/30 rounded-t-sm transition-colors" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-bg-soft rounded-lg p-2 text-center">
                      <p className="text-[9px] text-text-muted">Revenue</p>
                      <p className="text-xs font-bold text-foreground">$4.2K</p>
                    </div>
                    <div className="bg-bg-soft rounded-lg p-2 text-center">
                      <p className="text-[9px] text-text-muted">Interactions</p>
                      <p className="text-xs font-bold text-foreground">8.4K</p>
                    </div>
                    <div className="bg-bg-soft rounded-lg p-2 text-center">
                      <p className="text-[9px] text-text-muted">Brands</p>
                      <p className="text-xs font-bold text-foreground">12</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">For Robot Companies</h3>
                <p className="text-sm text-text-body mb-5">Turn robot interactions into a new revenue stream.</p>
                <ul className="space-y-2.5 mb-6">
                  {["Revenue per interaction dashboard", "70% revenue share", "Zero impact on robot UX", "Works with any robot OS"].map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-text-body">
                      <svg className="w-4 h-4 text-accent shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
                <CTAButton href="/for-manufacturers" variant="secondary">Learn More</CTAButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}


/* ═══════════════════════════════════════════════════════════════
   7. INFRASTRUCTURE — Simple visual stack
   ═══════════════════════════════════════════════════════════════ */
function InfrastructureSection() {
  const layers = [
    { label: "Brands", sublabel: "Campaign intent, budgets, targeting", color: "bg-amber-light border-amber/20", text: "text-foreground" },
    { label: "Kovio Platform", sublabel: "Routing, matching, attribution", color: "bg-accent border-accent text-white", text: "text-white", highlight: true },
    { label: "Robot Fleets", sublabel: "Any hardware, any environment", color: "bg-accent-light border-accent/20", text: "text-foreground" },
    { label: "Real-World Interactions", sublabel: "Consumers in stores, airports, hospitals", color: "bg-teal-light border-teal/20", text: "text-foreground" },
    { label: "Attribution & Revenue", sublabel: "Measurement, insights, revenue share", color: "bg-soft-green-light border-soft-green/20", text: "text-foreground" },
  ];

  return (
    <section className="py-24 sm:py-32 bg-section-accent overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <p className="text-sm font-medium text-accent tracking-wide uppercase mb-4">Platform Infrastructure</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-tight">
              The operating layer between brands and robots
            </h2>
            <p className="text-text-body text-lg leading-relaxed mb-8">
              Not just advertising. Kovio is the infrastructure for robot interaction data, attribution, and monetization.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["Hardware-agnostic", "Real-time routing", "Closed-loop attribution"].map((tag) => (
                <span key={tag} className="bg-white px-4 py-2 rounded-full text-text-body border border-border shadow-soft-sm">{tag}</span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="flex flex-col items-center gap-2.5">
              {layers.map((layer, i) => (
                <div key={layer.label}>
                  <div className={`w-full max-w-sm mx-auto rounded-2xl border px-6 py-4 text-center transition-all ${layer.color} ${layer.highlight ? "shadow-glow-accent scale-105" : "shadow-soft-sm"}`}>
                    <p className={`font-semibold text-sm ${layer.text}`}>{layer.label}</p>
                    <p className={`text-[11px] mt-0.5 ${layer.highlight ? "text-white/70" : "text-text-muted"}`}>{layer.sublabel}</p>
                  </div>
                  {i < layers.length - 1 && (
                    <div className="flex justify-center py-0.5">
                      <svg className="w-4 h-4 text-text-muted" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}


/* ═══════════════════════════════════════════════════════════════
   8. STATS
   ═══════════════════════════════════════════════════════════════ */
function StatsSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <p className="text-center text-sm font-medium text-accent tracking-wide uppercase mb-4">Why now</p>
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-foreground mb-16">
            A massive market. Zero infrastructure.
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { value: "$111B+", label: "Robot market by 2030", source: "ABI Research" },
            { value: "600M+", label: "Robots making daily decisions", source: "ABI Research" },
            { value: "0", label: "Monetization layers exist today", source: "" },
          ].map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.12}>
              <div className="text-center p-8 card-soft">
                <p className="text-5xl sm:text-6xl font-bold text-gradient-primary mb-3">{stat.value}</p>
                <p className="text-base font-medium text-foreground mb-1">{stat.label}</p>
                {stat.source && <p className="text-xs text-text-muted">{stat.source}</p>}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ═══════════════════════════════════════════════════════════════
   9. FOOTER CTA
   ═══════════════════════════════════════════════════════════════ */
function FooterCTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <div className="relative rounded-3xl bg-gradient-to-br from-accent to-accent-dark p-12 sm:p-16 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                The robot economy is being built now.
              </h2>
              <p className="text-white/70 text-lg max-w-xl mx-auto mb-10">
                The brands and robot companies that move first will define the category.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-medium text-sm bg-white text-accent hover:bg-white/90 transition-all shadow-soft-lg">
                  Get Early Access
                </a>
                <a href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-medium text-sm text-white border border-white/30 hover:bg-white/10 transition-all">
                  Request a Demo
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
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <RobotMomentsSection />
      <RetailFocusSection />
      <AttributionSection />
      <InfrastructureSection />
      <BrandFleetSection />
      <StatsSection />
      <FooterCTA />
    </>
  );
}
