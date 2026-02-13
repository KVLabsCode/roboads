"use client";

import { useState, FormEvent } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";
type ContactType = "manufacturer" | "advertiser";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState<ContactType>("manufacturer");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name,
          email,
          type,
          message,
          botcheck: "",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setType("manufacturer");
        setMessage("");
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="glass border border-accent-green/30 rounded-2xl p-8 sm:p-12 text-center shadow-neon-border">
        <div className="w-16 h-16 rounded-full bg-accent-green/20 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-accent-green"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">
          Message Sent!
        </h3>
        <p className="text-muted text-sm max-w-md mx-auto">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-accent hover:text-accent/80 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass border border-border-glow rounded-2xl p-6 sm:p-8 shadow-neon-border"
    >
      {/* Honeypot */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {status === "error" && (
        <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
          {errorMsg}
        </div>
      )}

      {/* Name */}
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Name <span className="text-red-400">*</span>
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full px-4 py-3 rounded-lg bg-surface border border-border-glow text-foreground placeholder:text-muted/50 text-sm focus:outline-none focus:border-accent/50 focus:shadow-glow-sm transition-all"
        />
      </div>

      {/* Email */}
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Email <span className="text-red-400">*</span>
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="w-full px-4 py-3 rounded-lg bg-surface border border-border-glow text-foreground placeholder:text-muted/50 text-sm focus:outline-none focus:border-accent/50 focus:shadow-glow-sm transition-all"
        />
      </div>

      {/* Type toggle cards */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-foreground mb-2">
          I am a...
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setType("manufacturer")}
            className={`p-4 rounded-lg border text-sm font-medium transition-all duration-200 ${
              type === "manufacturer"
                ? "border-accent/50 bg-accent/10 text-accent shadow-glow-sm"
                : "border-border-glow bg-surface text-muted hover:border-accent/30 hover:text-foreground"
            }`}
          >
            Manufacturer
          </button>
          <button
            type="button"
            onClick={() => setType("advertiser")}
            className={`p-4 rounded-lg border text-sm font-medium transition-all duration-200 ${
              type === "advertiser"
                ? "border-accent/50 bg-accent/10 text-accent shadow-glow-sm"
                : "border-border-glow bg-surface text-muted hover:border-accent/30 hover:text-foreground"
            }`}
          >
            Advertiser
          </button>
        </div>
      </div>

      {/* Message */}
      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your robots or your campaign goals..."
          className="w-full px-4 py-3 rounded-lg bg-surface border border-border-glow text-foreground placeholder:text-muted/50 text-sm focus:outline-none focus:border-accent/50 focus:shadow-glow-sm transition-all resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full px-6 py-3 rounded-lg font-medium text-sm cta-glow-primary text-black transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === "submitting" ? (
          <>
            <svg
              className="w-4 h-4 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
