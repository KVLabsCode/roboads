"use client";

import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import SurfaceGrid from "@/components/SurfaceGrid";
import ScenarioBlock from "@/components/ScenarioBlock";
import AuctionSimulation from "@/components/AuctionSimulation";
import ScrollReveal from "@/components/ScrollReveal";
import CTAButton from "@/components/CTAButton";
import {
  TODAY_METRICS,
  TOMORROW_METRICS,
  ADVERTISER_AD_UNITS,
  TARGET_WALMART_STEPS,
  TARGET_WALMART_BIDS,
} from "@/lib/constants";

function MetricCard({
  metric,
  value,
  label,
  color,
  delay,
}: {
  metric: string;
  value: string;
  label: string;
  color: string;
  delay: number;
}) {
  return (
    <ScrollReveal delay={delay}>
      <div className="glass border border-border-glow rounded-lg p-4 text-center hover:shadow-glow-sm transition-shadow duration-300">
        <div className="font-mono text-xs text-muted mb-1">{metric}</div>
        <div className={`text-2xl font-bold mb-1 ${color}`}>{value}</div>
        <div className="text-xs text-muted">{label}</div>
      </div>
    </ScrollReveal>
  );
}

export default function ForAdvertisersPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        headline="Soon, You Won't Just Market to Humans. You'll Market to Robots."
        subtext="The next generation of consumers won't browse, click, or scroll. They'll delegate decisions to robots. Kovio gives you a seat at the table when those decisions are made."
        ctas={[{ label: "Get in Touch", href: "mailto:hello@kovio.ai" }]}
      />

      {/* The Shift */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          title="The Metrics Are Changing"
          subtitle="Everything you know about digital advertising is about to be rewritten."
          className="mb-12"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Today */}
          <ScrollReveal>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-muted mb-1">
                Today&apos;s Metrics
              </h3>
              <p className="text-xs text-muted">
                What you optimize for now
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {TODAY_METRICS.map((m, i) => (
                <MetricCard
                  key={m.metric}
                  {...m}
                  color="text-foreground/60"
                  delay={i * 0.08}
                />
              ))}
            </div>
          </ScrollReveal>

          {/* Tomorrow */}
          <ScrollReveal delay={0.2}>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-accent mb-1">
                Tomorrow&apos;s Metrics
              </h3>
              <p className="text-xs text-muted">
                What you&apos;ll optimize for with Kovio
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {TOMORROW_METRICS.map((m, i) => (
                <MetricCard
                  key={m.metric}
                  {...m}
                  color="text-accent"
                  delay={0.2 + i * 0.08}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* New Ad Units */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          title="New Ad Units for a New World"
          subtitle="Decision-based ad formats that didn't exist before. Be the first to use them."
          className="mb-12"
        />
        <SurfaceGrid items={ADVERTISER_AD_UNITS} />
      </section>

      {/* Target vs Walmart Example */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          title="See the Auction in Action"
          subtitle="A home robot needs to restock paper towels. Watch how brands compete for the decision."
          className="mb-10 sm:mb-16"
        />
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <ScenarioBlock
            steps={TARGET_WALMART_STEPS}
            title="The Restock Auction"
          />
          <AuctionSimulation
            bids={TARGET_WALMART_BIDS}
            title="Paper Towels Auction"
          />
        </div>
      </section>

      {/* Why Move Early */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="glass-strong border border-border-glow rounded-2xl p-5 sm:p-8 md:p-12 text-center shadow-neon-border">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-cyan-white mb-4 sm:mb-6">
              Why Move Early
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10 text-left">
              {[
                {
                  title: "Lower CPDs",
                  desc: "Early advertisers lock in the lowest cost-per-decision rates before competition drives prices up.",
                },
                {
                  title: "Data Advantage",
                  desc: "Start learning robot decision patterns now. Build optimization models before competitors enter.",
                },
                {
                  title: "Category Exclusivity",
                  desc: "Secure exclusive category positions in early-stage auctions across robot platforms.",
                },
                {
                  title: "Brand Pioneer Status",
                  desc: "Be known as the brand that understood the robot economy first. Press, case studies, and credibility.",
                },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <div>
                    <h4 className="text-sm font-semibold text-accent mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <CTAButton href="mailto:hello@kovio.ai">
              Start the Conversation
            </CTAButton>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
