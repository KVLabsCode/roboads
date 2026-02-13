"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MARKET_STATS } from "@/lib/constants";

export default function MarketStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {MARKET_STATS.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
          className="glass border border-border-glow rounded-xl p-4 sm:p-5 text-center corner-accents hover:shadow-glow-sm transition-all group"
        >
          <div className="font-mono text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient-cyan mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-foreground font-medium mb-1">
            {stat.label}
          </div>
          {stat.growth && (
            <div className="inline-flex items-center gap-1 text-xs font-mono text-accent-green bg-accent-green/10 px-2 py-0.5 rounded-full mb-1.5">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                <path d="M6 9V3M6 3L3 6M6 3l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {stat.growth}
            </div>
          )}
          <div className="text-[10px] text-muted mt-1 opacity-60 group-hover:opacity-100 transition-opacity">
            Source: {stat.source} ({stat.year})
          </div>
        </motion.div>
      ))}
    </div>
  );
}
