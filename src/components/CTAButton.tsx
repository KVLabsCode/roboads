"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200";
  const variants = {
    primary:
      "cta-glow-primary text-black",
    secondary:
      "cta-glow-secondary bg-surface text-foreground hover:text-accent",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
    >
      <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
        {children}
      </Link>
    </motion.div>
  );
}
