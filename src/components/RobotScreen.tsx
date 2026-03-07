"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { UserIcon, BotIcon } from "./Icons";

const METRICS = [
  { label: "Interactions",        value: "2,847", color: "#00d4ff" },
  { label: "Purchases Attributed", value: "512",   color: "#00ff88" },
  { label: "Conversion Lift",      value: "+18%",  color: "#00ff88" },
  { label: "ROAS",                 value: "4.2x",  color: "#00d4ff" },
];

export default function RobotScreen() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="flex flex-col gap-4 h-full">
      {/* Robot Campaign Card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="glass border border-accent/20 rounded-xl overflow-hidden shadow-neon-border flex-1"
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-border-subtle">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
            <span className="text-xs font-mono text-muted">Robot Screen · Aisle 4</span>
          </div>
          <span className="text-[10px] font-mono text-accent uppercase tracking-wider">via Kovio</span>
        </div>

        {/* Campaign content */}
        <div className="p-5">
          {/* Robot + screen layout */}
          <div className="flex items-center gap-4 mb-5">
            <div className="flex-shrink-0 w-10 h-10 glass border border-border-glow rounded-xl flex items-center justify-center text-muted">
              <BotIcon className="w-5 h-5" />
            </div>
            <div className="h-px flex-1 bg-border-glow" />
            <div className="flex-shrink-0 w-10 h-10 glass border border-border-glow rounded-xl flex items-center justify-center text-muted">
              <UserIcon className="w-5 h-5" />
            </div>
          </div>

          {/* Campaign card on robot screen */}
          <div className="bg-background/80 border border-accent/15 rounded-xl p-4">
            <p className="text-[10px] font-mono text-accent mb-2 uppercase tracking-wider">Brand Campaign</p>
            <p className="text-base font-bold text-foreground mb-0.5">Product X</p>
            <p className="text-xs text-muted mb-4">Greek Yogurt · Dairy Aisle 4</p>
            <div className="flex items-center justify-between bg-accent/10 border border-accent/20 rounded-lg px-4 py-2.5">
              <span className="text-accent font-bold text-sm">$1.00 OFF</span>
              <span className="text-xs text-muted">Today only</span>
            </div>
          </div>
        </div>

        {/* Interaction confirmation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-between px-5 py-3 border-t border-border-subtle"
        >
          <p className="text-xs text-foreground">Consumer interaction detected</p>
          <p className="text-[10px] font-mono text-muted">14:23:06</p>
        </motion.div>
      </motion.div>

      {/* Attribution results */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4 }}
        className="glass border border-border-glow rounded-xl p-5"
      >
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs font-mono text-muted uppercase tracking-wider">Attribution Report</p>
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-accent">
            <div className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
            Loop Closed
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {METRICS.map((m) => (
            <div key={m.label} className="bg-background/50 rounded-lg p-3">
              <p className="font-mono font-bold text-xl mb-0.5" style={{ color: m.color }}>{m.value}</p>
              <p className="text-[10px] text-muted">{m.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
