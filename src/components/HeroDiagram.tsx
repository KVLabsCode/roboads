"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TargetIcon, ZapIcon, BotIcon, UserIcon, TrendingUpIcon } from "./Icons";

const NODES = [
  { Icon: TargetIcon,    label: "Brand",       sub: "Launches campaign",   highlight: false },
  { Icon: ZapIcon,       label: "Kovio",       sub: "Routes & measures",   highlight: true  },
  { Icon: BotIcon,       label: "Robot",       sub: "Delivers campaign",   highlight: false },
  { Icon: UserIcon,      label: "Consumer",    sub: "Interaction captured", highlight: false },
  { Icon: TrendingUpIcon,label: "Attribution", sub: "Loop closed",         highlight: false },
];

const DOT_DUR = [2.8, 2.4, 2.6, 2.5];

export default function HeroDiagram() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass border border-border-glow rounded-2xl p-6 sm:p-10 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent/[0.04] via-transparent to-accent-green/[0.04] pointer-events-none" />

        <p className="text-center text-[11px] font-mono text-muted uppercase tracking-[0.2em] mb-8 sm:mb-10">
          Every Interaction — Monetized and Measured
        </p>

        {/* ── Desktop: horizontal ───────────────────────── */}
        <div className="hidden md:block">
          <div className="flex items-center">
            {NODES.map((node, i) => (
              <div key={node.label} className="flex items-center flex-1">
                {/* Node */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex flex-col items-center text-center flex-shrink-0 w-[90px]"
                >
                  <div
                    className={`w-[60px] h-[60px] glass border rounded-xl flex items-center justify-center mb-3 transition-all ${
                      node.highlight
                        ? "border-accent/60 shadow-glow-sm text-accent"
                        : "border-border-glow text-muted"
                    }`}
                  >
                    <node.Icon className="w-6 h-6" />
                  </div>
                  <p className={`text-xs font-semibold mb-0.5 ${node.highlight ? "text-accent" : "text-foreground"}`}>
                    {node.label}
                  </p>
                  <p className="text-[10px] text-muted leading-snug">{node.sub}</p>
                </motion.div>

                {/* Connector */}
                {i < NODES.length - 1 && (
                  <div className="flex-1 relative mx-1 overflow-hidden" style={{ height: 60 }}>
                    <div className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 bg-border-glow" />
                    <div
                      className="absolute right-0 top-1/2 -translate-y-1/2"
                      style={{ width: 0, height: 0, borderTop: "4px solid transparent", borderBottom: "4px solid transparent", borderLeft: "6px solid rgba(0,212,255,0.3)" }}
                    />
                    <div
                      className="dot-flow-right top-1/2 -translate-y-1/2"
                      style={{ animationDuration: `${DOT_DUR[i]}s`, animationDelay: "0s" }}
                    />
                    <div
                      className="dot-flow-right top-1/2 -translate-y-1/2"
                      style={{ animationDuration: `${DOT_DUR[i]}s`, animationDelay: `${DOT_DUR[i] / 2}s` }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Attribution return lane */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="relative mt-3 overflow-hidden"
            style={{ height: 34 }}
          >
            <div
              className="absolute top-1/2 -translate-y-1/2"
              style={{
                left: 45, right: 45, height: 1,
                background: "repeating-linear-gradient(270deg, rgba(0,255,136,0.45) 0, rgba(0,255,136,0.45) 6px, transparent 6px, transparent 14px)",
              }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2"
              style={{ left: 45, width: 0, height: 0, borderTop: "4px solid transparent", borderBottom: "4px solid transparent", borderRight: "6px solid rgba(0,255,136,0.45)" }}
            />
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-background/90 px-3 py-0.5 rounded-full border border-accent-green/20 z-10">
              <span className="text-[10px] font-mono text-accent-green/70">
                ← attribution signal returns to brand
              </span>
            </div>
            <div className="dot-flow-left top-1/2 -translate-y-1/2" style={{ animationDuration: "3.2s", animationDelay: "0s" }} />
            <div className="dot-flow-left top-1/2 -translate-y-1/2" style={{ animationDuration: "3.2s", animationDelay: "1.6s" }} />
          </motion.div>
        </div>

        {/* ── Mobile: vertical ─────────────────────────── */}
        <div className="md:hidden space-y-0">
          {NODES.map((node, i) => (
            <div key={node.label}>
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4"
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
                  <p className="text-xs text-muted">{node.sub}</p>
                </div>
              </motion.div>
              {i < NODES.length - 1 && <div className="ml-5 h-5 w-px bg-border-glow my-1" />}
            </div>
          ))}
          <p className="mt-4 pt-3 border-t border-border-glow text-[11px] font-mono text-accent-green flex items-center gap-2">
            <span>&#8592;</span> Attribution returns to Brand in real time
          </p>
        </div>
      </motion.div>
    </div>
  );
}
