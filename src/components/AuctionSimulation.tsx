"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";

interface Bid {
  brand: string;
  bid: number;
  color: string;
}

interface AuctionSimulationProps {
  bids: Bid[];
  title?: string;
}

export default function AuctionSimulation({
  bids,
  title = "Live Auction",
}: AuctionSimulationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentBids, setCurrentBids] = useState<
    { brand: string; bid: number; color: string; targetBid: number }[]
  >([]);
  const [auctionPhase, setAuctionPhase] = useState<
    "waiting" | "bidding" | "sold"
  >("waiting");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAuction = useCallback(() => {
    setAuctionPhase("bidding");
    setCurrentBids(
      bids.map((b) => ({ ...b, bid: 0, targetBid: b.bid }))
    );

    let tick = 0;
    const totalTicks = 30;

    intervalRef.current = setInterval(() => {
      tick++;
      setCurrentBids((prev) =>
        prev
          .map((b) => {
            const progress = Math.min(tick / totalTicks, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const jitter = (Math.random() - 0.5) * 0.02;
            const newBid = Math.min(
              b.targetBid,
              b.targetBid * eased + jitter
            );
            return { ...b, bid: Math.max(0, newBid) };
          })
          .sort((a, b) => b.bid - a.bid)
      );

      if (tick >= totalTicks) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setCurrentBids((prev) =>
          prev
            .map((b) => ({ ...b, bid: b.targetBid }))
            .sort((a, b) => b.bid - a.bid)
        );
        setAuctionPhase("sold");
      }
    }, 80);
  }, [bids]);

  useEffect(() => {
    if (isInView && auctionPhase === "waiting") {
      const timer = setTimeout(startAuction, 500);
      return () => clearTimeout(timer);
    }
  }, [isInView, auctionPhase, startAuction]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const maxBid = Math.max(...bids.map((b) => b.bid));

  return (
    <div
      ref={ref}
      className="glass border border-border-glow rounded-xl p-4 sm:p-6 font-mono scanlines shadow-neon-border"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-6 gap-2">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div
            className={`w-2 h-2 rounded-full flex-shrink-0 ${
              auctionPhase === "bidding"
                ? "bg-accent-green animate-pulse shadow-glow-green-sm"
                : auctionPhase === "sold"
                ? "bg-accent shadow-glow-sm"
                : "bg-muted"
            }`}
          />
          <span className="text-xs sm:text-sm text-muted truncate">{title}</span>
        </div>
        <span className="text-[10px] sm:text-xs text-muted uppercase tracking-wider flex-shrink-0">
          {auctionPhase === "waiting" && "Initializing..."}
          {auctionPhase === "bidding" && "Bids Active"}
          {auctionPhase === "sold" && "Auction Complete"}
        </span>
      </div>

      {/* Bids */}
      <div className="space-y-3">
        {currentBids.map((bid, i) => (
          <motion.div
            key={bid.brand}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="relative"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-foreground flex items-center gap-2">
                {bid.brand}
                {auctionPhase === "sold" && i === 0 && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-[10px] bg-accent text-black px-1.5 py-0.5 rounded font-sans font-medium"
                  >
                    WINNER
                  </motion.span>
                )}
              </span>
              <span className="text-sm tabular-nums" style={{ color: bid.color }}>
                ${bid.bid.toFixed(2)}
              </span>
            </div>

            {/* Bar */}
            <div className="h-2 bg-background rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  backgroundColor: bid.color,
                  boxShadow: `0 0 10px ${bid.color}60, 0 0 20px ${bid.color}30`,
                }}
                initial={{ width: "0%" }}
                animate={{
                  width: `${(bid.bid / maxBid) * 100}%`,
                }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      {auctionPhase === "sold" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 pt-4 border-t border-border-subtle flex items-center justify-between"
        >
          <span className="text-xs text-muted">Auction resolved in 2.4s</span>
          <span className="text-xs text-accent" style={{ filter: "drop-shadow(0 0 6px rgba(0, 212, 255, 0.6))" }}>Revenue captured</span>
        </motion.div>
      )}
    </div>
  );
}
