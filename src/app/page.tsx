"use client";

import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import TimelineBar from "@/components/TimelineBar";
import ScenarioBlock from "@/components/ScenarioBlock";
import AuctionSimulation from "@/components/AuctionSimulation";
import SurfaceGrid from "@/components/SurfaceGrid";
import SplitPanel from "@/components/SplitPanel";
import ScrollReveal from "@/components/ScrollReveal";
import MarketStats from "@/components/MarketStats";
import GrowthChart from "@/components/GrowthChart";
import MarketMilestones from "@/components/MarketMilestones";
import FirstMoverBanner from "@/components/FirstMoverBanner";
import CTAButton from "@/components/CTAButton";
import {
  ROBOT_TYPES_2030,
  KITCHEN_AUCTION_STEPS,
  AUCTION_BIDS,
  NEW_AD_SURFACES,
} from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero
        eyebrow="$50B MARKET TODAY | $111B+ BY 2030"
        headline="When Robots Decide, Revenue Auctions Begin."
        subtext="The physical AI market is exploding at 22% CAGR (ABI Research). Robots are already transforming manufacturing, logistics, and homes. Kovio is the programmatic auction infrastructure that captures revenue from every robot decision: what to buy, where to go, what to recommend."
        ctas={[
          { label: "Integrate Today", href: "/contact" },
          {
            label: "See How It Works",
            href: "/for-manufacturers",
            variant: "secondary",
          },
        ]}
        badges={[
          { value: "$111B+", label: "Market by 2030" },
          { value: "22%", label: "CAGR" },
          { value: "600M+", label: "Robots by 2030" },
          { value: "$5T", label: "Humanoid TAM (2050)" },
        ]}
      />

      {/* The Inevitable Shift */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          title="The Inevitable Shift"
          subtitle="Every major platform shift created a new advertising paradigm. Physical AI is next, and it's growing faster than mobile did."
          className="mb-10 sm:mb-16"
        />
        <TimelineBar />

        {/* Market Data Stats */}
        <div className="mt-12 sm:mt-20">
          <ScrollReveal>
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground text-center mb-3">
              The Market Is{" "}
              <span className="text-gradient-cyan">Already Here</span>
            </h3>
            <p className="text-sm sm:text-base text-muted text-center max-w-2xl mx-auto mb-8">
              Don&apos;t wait for 2030. The physical AI and robotics market is
              exploding now. Every dollar of growth represents untapped
              decision-layer revenue.
            </p>
          </ScrollReveal>
          <MarketStats />
        </div>

        {/* Growth Chart + Milestones */}
        <div className="mt-12 sm:mt-16 grid lg:grid-cols-2 gap-6">
          <ScrollReveal className="h-full">
            <GrowthChart />
          </ScrollReveal>
          <ScrollReveal className="h-full" delay={0.15}>
            <MarketMilestones />
          </ScrollReveal>
        </div>

        {/* Robot Types Grid */}
        <div className="mt-12 sm:mt-20">
          <ScrollReveal>
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground text-center mb-2">
              600M+ Robots Making Decisions by 2030
            </h3>
            <p className="text-xs text-muted text-center mb-8">
              Each one a monetizable decision surface. Sources: ABI Research,
              McKinsey, IFR, Grand View Research.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {ROBOT_TYPES_2030.map((robot, i) => (
              <ScrollReveal key={robot.name} delay={i * 0.08}>
                <div className="glass border border-border-glow rounded-lg p-4 text-center corner-accents hover:shadow-glow-sm transition-all">
                  <div className="text-2xl mb-2">{robot.icon}</div>
                  <div className="font-mono text-accent text-sm mb-1">
                    {robot.count}
                  </div>
                  <div className="text-xs text-muted mb-1">{robot.name}</div>
                  <div className="text-[9px] text-muted/50">{robot.source}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Kovio, Why Now */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FirstMoverBanner />
      </section>

      {/* The Kitchen Decision */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          title={`"The Kitchen Decision"`}
          subtitle="Your home robot notices you're out of milk. What happens next is a billion-dollar question."
          className="mb-10 sm:mb-16"
        />

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <ScenarioBlock steps={KITCHEN_AUCTION_STEPS} title="How It Works" />
          <AuctionSimulation bids={AUCTION_BIDS} title="Milk Restock Auction" />
        </div>
      </section>

      {/* The New Ad Format */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          title="Decision-Based Monetization"
          subtitle="Forget impressions. Forget clicks. The new currency is decisions. Every time a robot chooses, brands compete."
          className="mb-12"
        />
        <SurfaceGrid items={NEW_AD_SURFACES} />
      </section>

      {/* Two Sides, One Infrastructure */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          title="Two Sides, One Infrastructure"
          subtitle="Whether you build robots or sell products, Kovio is your bridge to the robot economy."
          className="mb-12"
        />
        <SplitPanel
          left={{
            title: "For Manufacturers",
            description:
              "Turn every robot you build into a revenue-generating platform.",
            points: [
              "Unlock recurring revenue from deployed robots",
              "Drop-in SDK: three lines of code to integrate",
              "70% revenue share on all auctions",
              "Zero impact on user experience",
            ],
            cta: { label: "Start Earning", href: "/for-manufacturers" },
          }}
          right={{
            title: "For Advertisers",
            description:
              "Reach consumers at the exact moment decisions are being made. Not impressions, decisions.",
            points: [
              "Bid on robot decision moments in real-time",
              "94% decision-to-action rate",
              "First-mover advantage in a $111B+ channel",
              "Transparent, measurable ROI per decision",
            ],
            cta: { label: "Claim Early Access", href: "/for-advertisers" },
          }}
        />
      </section>

      {/* Bottom CTA */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-cyan-white mb-4">
              The Robot Economy Won&apos;t Wait.
            </h2>
            <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto mb-8">
              $50B today. $111B+ by 2030. $5T by 2050. Every robot decision is
              a revenue event. Own the auction layer before anyone else does.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton href="/contact">
                Get Your SDK Access
              </CTAButton>
              <CTAButton href="/contact" variant="secondary">
                Request a Demo
              </CTAButton>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
