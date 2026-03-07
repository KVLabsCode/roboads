"use client";

import Hero from "@/components/Hero";
import HeroDiagram from "@/components/HeroDiagram";
import SectionHeading from "@/components/SectionHeading";
import HowItWorks from "@/components/HowItWorks";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import RetailScenario from "@/components/RetailScenario";
import RobotScreen from "@/components/RobotScreen";
import SurfaceGrid from "@/components/SurfaceGrid";
import SplitPanel from "@/components/SplitPanel";
import ScrollReveal from "@/components/ScrollReveal";
import MarketStats from "@/components/MarketStats";
import GrowthChart from "@/components/GrowthChart";
import MarketMilestones from "@/components/MarketMilestones";
import FirstMoverBanner from "@/components/FirstMoverBanner";
import VisionSection from "@/components/VisionSection";
import TimelineBar from "@/components/TimelineBar";
import CTAButton from "@/components/CTAButton";
import { Icon } from "@/components/Icons";
import {
  HOW_IT_WORKS_STEPS,
  CONSUMER_ROBOT_ENVIRONMENTS,
  KOVIO_CAMPAIGN_SURFACES,
} from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* ─────────────────────────────────────────────────
          HERO
      ───────────────────────────────────────────────── */}
      <Hero
        eyebrow="MONETIZATION & ATTRIBUTION FOR THE ROBOT ECONOMY"
        headline="Infrastructure for the Robot Economy"
        subtext="Brands reach consumers through robots. Kovio monetizes every interaction and closes the loop at checkout."
        ctas={[
          { label: "Get Early Access", href: "/contact" },
          { label: "See How It Works", href: "#how-it-works", variant: "secondary" },
        ]}
        badges={[
          { value: "Any Fleet",    label: "Hardware-Agnostic" },
          { value: "Real-Time",    label: "Attribution"        },
          { value: "Closed Loop",  label: "Measurement"        },
          { value: "$111B+",       label: "Market by 2030"     },
        ]}
      />

      {/* ─────────────────────────────────────────────────
          FLOW DIAGRAM — Brand → Kovio → Robot → Consumer → Attribution
      ───────────────────────────────────────────────── */}
      <HeroDiagram />

      {/* ─────────────────────────────────────────────────
          THE SHIFT — robots as the new consumer interface
      ───────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          title="Robots Are Becoming the New Consumer Interface"
          subtitle="Every major platform shift created a new advertising paradigm. Physical AI is next — and it's moving faster than mobile did."
          className="mb-10 sm:mb-16"
        />
        <TimelineBar />
      </section>

      {/* ─────────────────────────────────────────────────
          WITHOUT / WITH KOVIO
      ───────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          title="The Interaction Happens. Nothing Is Captured."
          subtitle="Robots interact with millions of consumers every day. Without Kovio, every one of those moments is invisible to brands."
          className="mb-10 sm:mb-14"
        />

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {/* Without */}
          <ScrollReveal className="h-full">
            <div className="h-full glass border border-border-subtle rounded-2xl p-7 sm:p-9 flex flex-col">
              <div className="inline-flex items-center gap-2 mb-7">
                <div className="w-2 h-2 rounded-full bg-muted/40" />
                <span className="text-xs font-mono text-muted uppercase tracking-widest">Without Kovio</span>
              </div>

              <div className="flex-1 space-y-6">
                <div>
                  <p className="text-lg sm:text-xl font-bold text-foreground/60 mb-2">Robot interacts with shopper.</p>
                  <p className="text-sm text-muted/60">The moment happens in the physical world.</p>
                </div>
                <div className="h-px bg-border-subtle" />
                <div>
                  <p className="text-lg sm:text-xl font-bold text-foreground/60 mb-2">Brands see nothing.</p>
                  <p className="text-sm text-muted/60">No campaign was running. No data was captured. No measurement exists.</p>
                </div>
                <div className="h-px bg-border-subtle" />
                <div>
                  <p className="text-lg sm:text-xl font-bold text-foreground/60 mb-2">Shopper purchases. No attribution.</p>
                  <p className="text-sm text-muted/60">The sale happened. Nobody knows the robot influenced it.</p>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-border-subtle">
                <p className="text-xs font-mono text-muted/50">Result: Revenue left on the table. Every day.</p>
              </div>
            </div>
          </ScrollReveal>

          {/* With Kovio */}
          <ScrollReveal delay={0.1} className="h-full">
            <div className="h-full glass border border-accent/25 rounded-2xl p-7 sm:p-9 flex flex-col shadow-neon-border relative overflow-hidden">
              <div className="absolute top-0 right-0 w-56 h-56 bg-accent/6 rounded-full blur-[80px] pointer-events-none" />

              <div className="inline-flex items-center gap-2 mb-7 relative">
                <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                <span className="text-xs font-mono text-accent uppercase tracking-widest">With Kovio</span>
              </div>

              <div className="flex-1 space-y-6 relative">
                <div>
                  <p className="text-lg sm:text-xl font-bold text-foreground mb-2">Brand campaign runs on the robot.</p>
                  <p className="text-sm text-muted">The right campaign, at the right moment, in the right aisle.</p>
                </div>
                <div className="h-px bg-border-glow" />
                <div>
                  <p className="text-lg sm:text-xl font-bold text-foreground mb-2">Interaction captured in real time.</p>
                  <p className="text-sm text-muted">Kovio logs the moment — who, where, when, and what campaign ran.</p>
                </div>
                <div className="h-px bg-border-glow" />
                <div>
                  <p className="text-lg sm:text-xl font-bold text-foreground mb-2">Purchase attributed. Loop closed.</p>
                  <p className="text-sm text-muted">Checkout data is matched to the interaction. Brands see proven ROI.</p>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-accent/20 relative">
                <p className="text-xs font-mono text-accent-green">Result: Every robot moment becomes measurable brand revenue.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          HOW IT WORKS — 4-step flow
      ───────────────────────────────────────────────── */}
      <section
        id="how-it-works"
        className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <SectionHeading
          title="From Campaign to Checkout — Fully Closed."
          subtitle="Kovio is the infrastructure layer that connects brand intent to real-world purchase outcomes through any robot fleet."
          className="mb-10 sm:mb-16"
        />
        <HowItWorks steps={HOW_IT_WORKS_STEPS} />
      </section>

      {/* ─────────────────────────────────────────────────
          RETAIL SCENARIO — step-by-step story
      ───────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          title="A Brand Campaign. A Robot. A Purchase. Proven."
          subtitle="See exactly how a brand campaign runs from launch to attribution through a retail robot."
          className="mb-10 sm:mb-14"
        />
        <RetailScenario />

        {/* Campaign report panel */}
        <div className="mt-8 grid lg:grid-cols-2 gap-8 items-stretch">
          <ScrollReveal className="h-full">
            <div className="h-full glass border border-border-glow rounded-2xl p-7 sm:p-8 flex flex-col justify-between">
              <div>
                <p className="text-xs font-mono text-muted uppercase tracking-widest mb-5">Live Campaign View</p>
                <div className="space-y-4">
                  {[
                    { label: "Campaign",     value: "Product X — Dairy Aisle"  },
                    { label: "Environment",  value: "Grocery — Retail"         },
                    { label: "Robot Fleet",  value: "In-store shelf robots"    },
                    { label: "Status",       value: "Active",   accent: true   },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between border-b border-border-subtle pb-3 last:border-0 last:pb-0">
                      <span className="text-xs text-muted">{row.label}</span>
                      <span className={`text-xs font-mono ${(row as {accent?: boolean}).accent ? "text-accent-green" : "text-foreground"}`}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-5 border-t border-border-subtle">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
                  <span className="text-[10px] font-mono text-muted">Kovio routing in real time</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.12} className="h-full">
            <RobotScreen />
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          ARCHITECTURE — Brand → Kovio → Robot → Consumer → Attribution
      ───────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          title="The Infrastructure Layer for Robot Advertising"
          subtitle="Kovio sits between brands and any robot network — the way a DSP sits between advertisers and publishers."
          className="mb-10 sm:mb-14"
        />
        <ScrollReveal>
          <ArchitectureDiagram />
        </ScrollReveal>
      </section>

      {/* ─────────────────────────────────────────────────
          ONE PLATFORM, EVERY ROBOT
      ───────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          title="If a Robot Interacts With a Consumer, Kovio Can Monetize It."
          subtitle="One platform. Any robot fleet. Any environment. Hardware-agnostic by design."
          className="mb-10 sm:mb-14"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {CONSUMER_ROBOT_ENVIRONMENTS.map((env, i) => (
            <ScrollReveal key={env.env} delay={i * 0.07}>
              <div className="glass border border-border-glow rounded-xl p-5 text-center hover:shadow-glow-sm hover:border-accent/30 transition-all h-full flex flex-col items-center">
                <div className="w-10 h-10 flex items-center justify-center text-muted mb-3">
                  <Icon name={env.icon} className="w-6 h-6" />
                </div>
                <p className="text-sm font-semibold text-foreground mb-1.5">{env.env}</p>
                <p className="text-[11px] text-muted leading-relaxed">{env.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          THE BIGGER VISION — Robot Attention Network
      ───────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          title="The Robot Economy Needs Rails. This Is Kovio."
          subtitle="The internet needed payment infrastructure. Mobile needed an ad network. The robot economy needs a monetization and attribution layer — built from the ground up."
          className="mb-10 sm:mb-14"
        />
        <ScrollReveal>
          <VisionSection />
        </ScrollReveal>
      </section>

      {/* ─────────────────────────────────────────────────
          WHAT KOVIO ENABLES — campaign surfaces
      ───────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          title="What Kovio Makes Possible"
          subtitle="Brand touchpoints that live inside the robot interaction — not beside it."
          className="mb-12"
        />
        <SurfaceGrid items={KOVIO_CAMPAIGN_SURFACES} />
      </section>

      {/* ─────────────────────────────────────────────────
          MARKET SCALE
      ───────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          title="The Largest Untapped Consumer Media Channel"
          subtitle="Millions of consumer-facing robots. Zero monetization infrastructure. Until now."
          className="mb-10 sm:mb-16"
        />
        <MarketStats />
        <div className="mt-10 sm:mt-14 grid lg:grid-cols-2 gap-6 items-stretch">
          <ScrollReveal className="h-full">
            <GrowthChart />
          </ScrollReveal>
          <ScrollReveal delay={0.12} className="h-full">
            <MarketMilestones />
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          FOR BRANDS / FOR ROBOT COMPANIES
      ───────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          title="Built for Both Sides of the Network"
          subtitle="Kovio creates value for brands and robot companies equally."
          className="mb-12"
        />
        <SplitPanel
          left={{
            title: "For Brands",
            description: "Run targeted campaigns through any consumer-facing robot fleet. Measure purchase lift. Prove ROI on every interaction.",
            points: [
              "Target by environment, robot type, and consumer context",
              "Closed-loop attribution from interaction to purchase",
              "Real-time campaign dashboard with full reporting",
              "First-mover access to the robot media channel",
            ],
            cta: { label: "Request Brand Access", href: "/for-advertisers" },
          }}
          right={{
            title: "For Robot Companies",
            description: "Unlock a new revenue stream from your existing fleet. No extra hardware. No dev overhead. Plug in Kovio.",
            points: [
              "Monetize every consumer interaction your robots have",
              "70% revenue share on all campaigns",
              "Zero impact on robot UX or performance",
              "Works with any robot OS or hardware stack",
            ],
            cta: { label: "Partner Your Fleet", href: "/for-manufacturers" },
          }}
        />
      </section>

      {/* ─────────────────────────────────────────────────
          WHY NOW
      ───────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FirstMoverBanner />
      </section>

      {/* ─────────────────────────────────────────────────
          FOOTER CTA
      ───────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-xs font-mono text-muted uppercase tracking-widest mb-4">
              Robot Interactions Are the New Impressions.
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-cyan-white mb-5">
              The Robot Media Channel Is Being Built Now.
            </h2>
            <p className="text-muted text-base sm:text-lg max-w-xl mx-auto mb-10">
              The brands and robot companies that move first will define the category.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton href="/contact">Get Early Access</CTAButton>
              <CTAButton href="/contact" variant="secondary">Request a Demo</CTAButton>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
