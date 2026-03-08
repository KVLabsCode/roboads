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
      <div className="card-soft p-8 sm:p-12 text-center">
        <div className="w-16 h-16 rounded-full bg-soft-green-light flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-soft-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
        <p className="text-text-body text-sm max-w-md mx-auto">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-accent hover:text-accent-dark transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-soft p-6 sm:p-8">
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      {status === "error" && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">
          {errorMsg}
        </div>
      )}

      <div className="mb-5">
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full px-4 py-3 rounded-xl bg-white border border-border text-foreground placeholder:text-text-muted text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="w-full px-4 py-3 rounded-xl bg-white border border-border text-foreground placeholder:text-text-muted text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
        />
      </div>

      <div className="mb-5">
        <label className="block text-sm font-medium text-foreground mb-2">I am a...</label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setType("manufacturer")}
            className={`p-4 rounded-xl border text-sm font-medium transition-all duration-200 ${
              type === "manufacturer"
                ? "border-accent bg-accent-light text-accent"
                : "border-border bg-white text-text-body hover:border-accent/30"
            }`}
          >
            Robot Company
          </button>
          <button
            type="button"
            onClick={() => setType("advertiser")}
            className={`p-4 rounded-xl border text-sm font-medium transition-all duration-200 ${
              type === "advertiser"
                ? "border-accent bg-accent-light text-accent"
                : "border-border bg-white text-text-body hover:border-accent/30"
            }`}
          >
            Brand / Advertiser
          </button>
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your robots or your campaign goals..."
          className="w-full px-4 py-3 rounded-xl bg-white border border-border text-foreground placeholder:text-text-muted text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full btn-primary px-6 py-3 rounded-xl font-medium text-sm disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === "submitting" ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
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
