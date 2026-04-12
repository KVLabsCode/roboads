"use client";

import { motion } from "framer-motion";

export function QuoteStrip() {
  return (
    <section className="relative bg-dark py-40 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9 }}
          className="font-display italic text-4xl md:text-5xl leading-[1.15] text-bg"
        >
          &ldquo;The next generation of out-of-home advertising doesn&rsquo;t
          wait for an audience to walk past. It goes to them.&rdquo;
        </motion.blockquote>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-10 text-[11px] uppercase tracking-[0.25em] text-gold"
        >
          — Kovio, 2025
        </motion.p>
      </div>
    </section>
  );
}
