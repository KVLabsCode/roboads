"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TargetIcon, ZapIcon, BotIcon, UserIcon, TrendingUpIcon } from "./Icons";

const NODES = [
  { Icon: TargetIcon,     label: "Brands",        description: "Launch campaigns targeting any consumer-facing robot environment", highlight: false },
  { Icon: ZapIcon,        label: "Kovio",          description: "Routes campaigns to the right robots. Captures all interaction data.", highlight: true  },
  { Icon: BotIcon,        label: "Robot Network",  description: "Any consumer-facing fleet — retail, hotel, airport, healthcare", highlight: false },
  { Icon: UserIcon,       label: "Consumer",       description: "Shopper or guest interacts with the robot in a physical space", highlight: false },
  { Icon: TrendingUpIcon, label: "Attribution",    description: "Purchase matched to interaction. Brand sees the full closed loop.", highlight: false },
];

export default function ArchitectureDiagram() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="glass border border-border-glow rounded-2xl p-6 sm:p-10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[160px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

      {/* ── Desktop ────────────────────────────────────── */}
      <div className="hidden md:block">
        <div className="flex items-start justify-between">
          {NODES.map((node, i) => (
            <div key={node.label} className="flex items-center flex-1">
              {/* Node */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="flex flex-col items-center text-center flex-1 group"
              >
                <div
                  className={`w-14 h-14 glass border rounded-xl flex items-center justify-center mb-3 transition-all group-hover:shadow-glow-sm ${
                    node.highlight ? "border-accent/60 shadow-glow-sm text-accent" : "border-border-glow text-muted"
                  }`}
                >
                  <node.Icon className="w-6 h-6" />
                </div>
                <p className={`text-xs font-semibold mb-1 ${node.highlight ? "text-accent" : "text-foreground"}`}>
                  {node.label}
                </p>
                <p className="text-[10px] text-muted leading-relaxed max-w-[100px]">
                  {node.description}
                </p>
              </motion.div>

              {/* Arrow */}
              {i < NODES.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: i * 0.12 + 0.25 }}
                  className="flex-shrink-0 flex flex-col items-center mx-1"
                >
                  <div className="w-5 h-px bg-border-glow" />
                  <div style={{ width: 0, height: 0, borderTop: "3px solid transparent", borderBottom: "3px solid transparent", borderLeft: "5px solid rgba(0,212,255,0.3)" }} />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Attribution return */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.0 }}
          className="mt-6 pt-5 border-t border-border-glow flex items-center justify-center gap-3"
        >
          <span className="text-accent-green text-xs">&#8592;</span>
          <p className="text-[11px] font-mono text-muted">Attribution signal flows back to Brands in real time</p>
          <span className="text-accent-green text-xs">&#8592;</span>
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-accent bg-accent/10 px-2 py-1 rounded-full border border-accent/20">
            <span className="w-1 h-1 rounded-full bg-accent-green animate-pulse" />
            Closed Loop
          </div>
        </motion.div>
      </div>

      {/* ── Mobile ─────────────────────────────────────── */}
      <div className="md:hidden space-y-0">
        {NODES.map((node, i) => (
          <div key={node.label}>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4"
            >
              <div
                className={`w-10 h-10 glass border rounded-xl flex items-center justify-center flex-shrink-0 ${
                  node.highlight ? "border-accent/60 shadow-glow-sm text-accent" : "border-border-glow text-muted"
                }`}
              >
                <node.Icon className="w-5 h-5" />
              </div>
              <div>
                <p className={`text-sm font-semibold ${node.highlight ? "text-accent" : "text-foreground"}`}>{node.label}</p>
                <p className="text-xs text-muted mt-0.5 leading-relaxed">{node.description}</p>
              </div>
            </motion.div>
            {i < NODES.length - 1 && <div className="ml-5 my-2 h-4 w-px bg-border-glow" />}
          </div>
        ))}
        <p className="mt-5 pt-4 border-t border-border-glow text-[11px] font-mono text-muted flex items-center gap-2">
          <span className="text-accent-green">&#8592;</span> Attribution returns to Brands in real time
        </p>
      </div>
    </div>
  );
}
