"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FIRST_MOVER_STATS } from "@/lib/constants";
import CTAButton from "./CTAButton";

export default function FirstMoverBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative glass border border-accent/20 rounded-2xl p-6 sm:p-10 overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-green/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-mono text-accent bg-accent/10 px-3 py-1.5 rounded-full mb-6 border border-accent/20"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
            NO MAJOR COMPETITORS YET
          </motion.div>

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3">
            Why Kovio. Why{" "}
            <span className="text-gradient-cyan">Now.</span>
          </h3>
          <p className="text-muted text-sm sm:text-base max-w-2xl mb-8">
            The robot decision auction market is nascent. No one owns it yet.
            Kovio is the bridge for manufacturers to monetize deployed robots
            and for advertisers to bid on decisions, not impressions.
            First-mover advantage is everything.
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {FIRST_MOVER_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className="bg-background/50 border border-border-glow rounded-lg p-3 sm:p-4 text-center"
              >
                <div className="font-mono text-2xl sm:text-3xl font-bold text-accent mb-0.5">
                  {stat.metric}
                </div>
                <div className="text-xs text-foreground font-medium mb-0.5">
                  {stat.label}
                </div>
                <div className="text-[10px] text-muted">{stat.detail}</div>
              </motion.div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-3">
            <CTAButton href="/contact">
              Integrate Today. Auctions Start Tomorrow
            </CTAButton>
            <CTAButton href="/for-manufacturers" variant="secondary">
              Claim Your Revenue Share Before 2030 Scale
            </CTAButton>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
