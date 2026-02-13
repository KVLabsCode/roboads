"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GROWTH_CHART_DATA } from "@/lib/constants";

export default function GrowthChart() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const yLabels = ["$0B", "$30B", "$60B", "$90B", "$120B"];

  // SVG dimensions
  const svgWidth = 600;
  const svgHeight = 280;
  const padLeft = 50;
  const padRight = 20;
  const padTop = 20;
  const padBottom = 40;
  const chartW = svgWidth - padLeft - padRight;
  const chartH = svgHeight - padTop - padBottom;
  const maxVal = 120;

  // Map data to SVG coordinates
  const points = GROWTH_CHART_DATA.map((d, i) => ({
    x: padLeft + (i / (GROWTH_CHART_DATA.length - 1)) * chartW,
    y: padTop + chartH - (d.value / maxVal) * chartH,
    ...d,
  }));

  // Build SVG path for the line
  const linePath = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  // Build SVG path for the filled area
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${padTop + chartH} L ${points[0].x} ${padTop + chartH} Z`;

  // Horizontal grid Y positions
  const gridYs = [0, 30, 60, 90, 120].map(
    (v) => padTop + chartH - (v / maxVal) * chartH
  );

  return (
    <div
      ref={ref}
      className="glass border border-border-glow rounded-xl p-4 sm:p-6 scanlines shadow-neon-border h-full"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
          <span className="text-xs sm:text-sm text-muted font-mono">
            Physical AI & Robotics Market Size
          </span>
        </div>
        <span className="text-[10px] sm:text-xs text-accent font-mono uppercase tracking-wider">
          22% CAGR
        </span>
      </div>

      {/* SVG Chart */}
      <svg
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Gradient for area fill */}
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(0, 212, 255, 0.35)" />
            <stop offset="100%" stopColor="rgba(0, 212, 255, 0.02)" />
          </linearGradient>
          {/* Glow filter for the line */}
          <filter id="lineGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Glow filter for highlight dots */}
          <filter id="dotGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Horizontal grid lines */}
        {gridYs.map((gy, i) => (
          <line
            key={i}
            x1={padLeft}
            y1={gy}
            x2={svgWidth - padRight}
            y2={gy}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth={1}
          />
        ))}

        {/* Y-axis labels */}
        {yLabels.map((label, i) => (
          <text
            key={label}
            x={padLeft - 8}
            y={gridYs[i] + 3}
            textAnchor="end"
            className="fill-muted/60"
            fontSize={10}
            fontFamily="monospace"
          >
            {label}
          </text>
        ))}

        {/* Area fill */}
        <motion.path
          d={areaPath}
          fill="url(#areaGrad)"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        />

        {/* Line */}
        <motion.path
          d={linePath}
          fill="none"
          stroke="#00d4ff"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#lineGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
        />

        {/* Data points & labels */}
        {points.map((p, i) => (
          <g key={p.year}>
            {/* Vertical dashed line from point to x-axis for highlights */}
            {p.highlight && (
              <motion.line
                x1={p.x}
                y1={p.y}
                x2={p.x}
                y2={padTop + chartH}
                stroke="rgba(0, 212, 255, 0.2)"
                strokeWidth={1}
                strokeDasharray="3 3"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 + i * 0.08 }}
              />
            )}

            {/* Dot */}
            <motion.circle
              cx={p.x}
              cy={p.y}
              r={p.highlight ? 5 : 3.5}
              fill={p.highlight ? "#00d4ff" : "#0a1628"}
              stroke="#00d4ff"
              strokeWidth={p.highlight ? 2.5 : 1.5}
              filter={p.highlight ? "url(#dotGlow)" : undefined}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
            />

            {/* Value label above point */}
            <motion.text
              x={p.x}
              y={p.y - (p.highlight ? 14 : 10)}
              textAnchor="middle"
              fontSize={p.highlight ? 12 : 10}
              fontFamily="monospace"
              fontWeight={p.highlight ? 700 : 400}
              className={p.highlight ? "fill-accent" : "fill-muted"}
              initial={{ opacity: 0, y: 5 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 + i * 0.08 }}
            >
              {p.label}
            </motion.text>

            {/* Year label on x-axis */}
            <motion.text
              x={p.x}
              y={padTop + chartH + 20}
              textAnchor="middle"
              fontSize={p.highlight ? 11 : 10}
              fontFamily="monospace"
              fontWeight={p.highlight ? 600 : 400}
              className={p.highlight ? "fill-foreground" : "fill-muted"}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 + i * 0.08 }}
            >
              {p.year}
            </motion.text>
          </g>
        ))}
      </svg>

      {/* Footer annotation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="mt-3 pt-3 border-t border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2"
      >
        <span className="text-[10px] text-muted">
          Source: ABI Research, Goldman Sachs, Morgan Stanley projections
        </span>
        <span
          className="text-[10px] text-accent font-mono"
          style={{
            filter: "drop-shadow(0 0 6px rgba(0, 212, 255, 0.6))",
          }}
        >
          Kovio captures this growth
        </span>
      </motion.div>
    </div>
  );
}
