"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MARKET_MILESTONES } from "@/lib/constants";

export default function MarketMilestones() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className="glass border border-border-glow rounded-xl p-4 sm:p-6 scanlines shadow-neon-border"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse-glow" />
        <span className="text-xs sm:text-sm text-muted font-mono">
          Robot Deployment Timeline
        </span>
      </div>

      {/* Timeline */}
      <div className="relative pl-8 sm:pl-10">
        {/* Background track */}
        <div className="absolute left-[11px] sm:left-[13px] top-2 bottom-2 w-[2px] bg-white/5 rounded-full" />
        {/* Animated fill */}
        <motion.div
          className="absolute left-[11px] sm:left-[13px] top-2 w-[2px] rounded-full bg-gradient-to-b from-accent via-accent to-accent-green"
          initial={{ height: 0 }}
          animate={isInView ? { height: "calc(100% - 16px)" } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        <div className="space-y-6 sm:space-y-7">
          {MARKET_MILESTONES.map((milestone, i) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: -15 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
              className="relative flex items-start gap-4 sm:gap-5"
            >
              {/* Dot — centered on the vertical line */}
              <div className="absolute left-[-20px] sm:left-[-24px] top-[2px] z-10 flex items-center justify-center w-6 h-6 sm:w-[26px] sm:h-[26px]">
                <div className="w-[10px] h-[10px] rounded-full border-2 border-accent bg-background flex items-center justify-center">
                  <div className="w-[4px] h-[4px] rounded-full bg-accent" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-sm text-accent font-bold">
                    {milestone.year}
                  </span>
                  <span className="text-[9px] text-muted bg-surface-light px-1.5 py-0.5 rounded font-mono shrink-0">
                    {milestone.source}
                  </span>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {milestone.event}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
