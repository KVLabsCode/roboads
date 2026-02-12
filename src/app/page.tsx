"use client";

import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import TimelineBar from "@/components/TimelineBar";
import ScenarioBlock from "@/components/ScenarioBlock";
import AuctionSimulation from "@/components/AuctionSimulation";
import SurfaceGrid from "@/components/SurfaceGrid";
import SplitPanel from "@/components/SplitPanel";
import ScrollReveal from "@/components/ScrollReveal";
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
        headline="When Robots Make Decisions, Revenue Moves With Them."
        subtext="Kovio is the programmatic auction infrastructure for the robot economy. Every time a robot makes a commercial decision: what to buy, where to go, what to recommend. There's an auction. We run it."
        ctas={[
          { label: "For Manufacturers", href: "/for-manufacturers" },
          {
            label: "For Advertisers",
            href: "/for-advertisers",
            variant: "secondary",
          },
        ]}
      />

      {/* The Inevitable Shift */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          title="The Inevitable Shift"
          subtitle="Every major platform shift created a new advertising paradigm. Physical AI is next."
          className="mb-10 sm:mb-16"
        />
        <TimelineBar />

        {/* Robot Types Grid */}
        <div className="mt-12 sm:mt-20">
          <ScrollReveal>
            <h3 className="text-xl font-semibold text-foreground text-center mb-8">
              By 2030, robots will be everywhere
            </h3>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {ROBOT_TYPES_2030.map((robot, i) => (
              <ScrollReveal key={robot.name} delay={i * 0.08}>
                <div className="glass border border-border-glow rounded-lg p-4 text-center corner-accents hover:shadow-glow-sm transition-all">
                  <div className="text-2xl mb-2">{robot.icon}</div>
                  <div className="font-mono text-accent text-sm mb-1">
                    {robot.count}
                  </div>
                  <div className="text-xs text-muted">{robot.name}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
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
              "Drop-in SDK. Three lines of code",
              "70% revenue share on all auctions",
              "Zero impact on user experience",
            ],
            cta: { label: "Learn More", href: "/for-manufacturers" },
          }}
          right={{
            title: "For Advertisers",
            description:
              "Reach consumers at the exact moment decisions are being made.",
            points: [
              "Bid on robot decision moments",
              "94% decision-to-action rate",
              "First-mover advantage in a new channel",
              "Transparent, measurable ROI",
            ],
            cta: { label: "Learn More", href: "/for-advertisers" },
          }}
        />
      </section>
    </>
  );
}
