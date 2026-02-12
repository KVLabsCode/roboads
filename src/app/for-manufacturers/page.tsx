"use client";

import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import ScenarioBlock from "@/components/ScenarioBlock";
import AuctionSimulation from "@/components/AuctionSimulation";
import ScrollReveal from "@/components/ScrollReveal";
import CTAButton from "@/components/CTAButton";
import {
  MANUFACTURER_PAIN_POINTS,
  MANUFACTURER_FEATURES,
  MONETIZABLE_SURFACES,
  SHOE_AUCTION_STEPS,
  SHOE_AUCTION_BIDS,
} from "@/lib/constants";

export default function ForManufacturersPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        headline="Turn Every Robot Into a Revenue Engine"
        subtext="You spent years building incredible hardware. Kovio helps you monetize every commercial decision your robots make, without compromising user experience."
        ctas={[{ label: "Get in Touch", href: "mailto:hello@kovio.ai" }]}
      />

      {/* The Problem */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          title="The Hardware Trap"
          subtitle="Robotics companies face a brutal economic reality."
          className="mb-12"
        />
        <div className="grid md:grid-cols-3 gap-6">
          {MANUFACTURER_PAIN_POINTS.map((point, i) => (
            <ScrollReveal key={point.title} delay={i * 0.1}>
              <div className="glass border border-red-500/20 rounded-xl p-6 h-full hover:shadow-[0_0_20px_rgba(239,68,68,0.15)] transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-red-400 mb-2">
                  {point.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* What Kovio Provides */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          title="What Kovio Provides"
          subtitle="Everything you need to turn deployed robots into recurring revenue streams."
          className="mb-12"
        />
        <div className="grid md:grid-cols-3 gap-6">
          {MANUFACTURER_FEATURES.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={i * 0.1}
            />
          ))}
        </div>
      </section>

      {/* Monetizable Surfaces */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          title="Monetizable Decision Surfaces"
          subtitle="Every commercial decision a robot makes is a monetization opportunity."
          className="mb-12"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {MONETIZABLE_SURFACES.map((surface, i) => (
            <ScrollReveal key={surface} delay={i * 0.06}>
              <div className="glass border border-border-glow rounded-lg p-4 flex items-center gap-3 hover:border-accent/30 transition-colors">
                <span className="text-accent font-mono text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-foreground">{surface}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Retail Floor Robot Example */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          title="See It In Action"
          subtitle="A shopper approaches a retail floor robot looking for running shoes."
          className="mb-10 sm:mb-16"
        />
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <ScenarioBlock
            steps={SHOE_AUCTION_STEPS}
            title="The Retail Floor Auction"
          />
          <AuctionSimulation
            bids={SHOE_AUCTION_BIDS}
            title="Running Shoes Auction"
          />
        </div>
      </section>

      {/* Why Integrate Early */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="glass-strong border border-border-glow rounded-2xl p-5 sm:p-8 md:p-12 text-center shadow-neon-border">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-cyan-white mb-4 sm:mb-6">
              Why Integrate Early
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10 text-left">
              {[
                {
                  title: "First-Mover Revenue",
                  desc: "Early integrators capture the highest auction premiums as advertisers compete for limited inventory.",
                },
                {
                  title: "Shape the Standard",
                  desc: "Help define how robot monetization works. Your input shapes our SDK and auction rules.",
                },
                {
                  title: "Zero Risk",
                  desc: "No upfront costs. No minimum commitments. We only earn when you earn.",
                },
                {
                  title: "Investor Signal",
                  desc: "Show your board a clear path to recurring revenue that scales with deployment.",
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
