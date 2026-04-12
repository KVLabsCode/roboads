"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  isOpen: boolean;
  fleetName?: string;
  onClose: () => void;
};

export function CampaignModal({ isOpen, fleetName, onClose }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const t = setTimeout(() => firstInputRef.current?.focus(), 50);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = {
      fleet: fleetName ?? null,
      brand: data.get("brand"),
      email: data.get("email"),
      budget: data.get("budget"),
      goals: data.get("goals"),
    };
    // TODO: wire to /api/campaign-enquiry
    console.info("[kovio] campaign enquiry:", payload);
    setSubmitted(true);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-md"
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="campaign-modal-title"
            className="relative w-full max-w-lg bg-cream border border-line rounded-sm p-10 shadow-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-mute hover:text-ink transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </svg>
            </button>

            {submitted ? (
              <div className="py-8 text-center">
                <h2 className="font-display text-3xl text-ink mb-3">Thank you.</h2>
                <p className="text-mute">We&rsquo;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <>
                <h2
                  id="campaign-modal-title"
                  className="font-display text-3xl text-ink"
                >
                  Start a campaign
                </h2>
                {fleetName && (
                  <p className="mt-1 text-xs uppercase tracking-widest text-gold">
                    {`// ${fleetName}`}
                  </p>
                )}

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <Field label="Brand name">
                    <input
                      ref={firstInputRef}
                      name="brand"
                      type="text"
                      required
                      className="w-full bg-bg border border-line px-4 py-3 text-ink placeholder:text-mute focus:border-gold outline-none"
                      placeholder="Acme Co."
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full bg-bg border border-line px-4 py-3 text-ink placeholder:text-mute focus:border-gold outline-none"
                      placeholder="you@company.com"
                    />
                  </Field>
                  <Field label="Monthly budget">
                    <select
                      name="budget"
                      required
                      defaultValue=""
                      className="w-full bg-bg border border-line px-4 py-3 text-ink focus:border-gold outline-none"
                    >
                      <option value="" disabled>
                        Select a range
                      </option>
                      <option>&lt; $10k</option>
                      <option>$10k – $50k</option>
                      <option>$50k – $250k</option>
                      <option>$250k+</option>
                    </select>
                  </Field>
                  <Field label="Campaign goals">
                    <textarea
                      name="goals"
                      rows={4}
                      className="w-full bg-bg border border-line px-4 py-3 text-ink placeholder:text-mute focus:border-gold outline-none resize-none"
                      placeholder="Tell us what you want to achieve…"
                    />
                  </Field>
                  <button
                    type="submit"
                    className="w-full bg-gold hover:bg-gold-deep text-ink font-mono uppercase tracking-widest text-xs py-4 transition-colors"
                  >
                    Send enquiry
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[10px] uppercase tracking-widest text-mute mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}
