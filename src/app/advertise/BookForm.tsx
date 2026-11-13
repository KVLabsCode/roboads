"use client";

import { useEffect, useRef } from "react";
import Honeypot from "@/components/forms/Honeypot";
import { formValues, useFormSubmit } from "@/lib/useFormSubmit";

export default function BookForm() {
  const { state, error, submit, sending } = useFormSubmit("/api/contact");
  const statusRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (state === "sent") statusRef.current?.focus();
  }, [state]);

  if (state === "sent") {
    return (
      <p ref={statusRef} tabIndex={-1} role="status" className="kv-form-status">
        Got it. We will be in touch.
      </p>
    );
  }

  return (
    <form
      className="kv-form-stack"
      onSubmit={(e) => {
        e.preventDefault();
        submit({ form: "advertise", ...formValues(e.currentTarget) });
      }}
    >
      <Honeypot />
      <div className="kv-field">
        <label htmlFor="ad-name">Name</label>
        <input id="ad-name" name="name" type="text" required autoComplete="name" className="kv-input" />
      </div>
      <div className="kv-field">
        <label htmlFor="ad-company">Brand or agency</label>
        <input id="ad-company" name="company" type="text" required autoComplete="organization" className="kv-input" />
      </div>
      <div className="kv-field">
        <label htmlFor="ad-email">Work email</label>
        <input id="ad-email" name="email" type="email" required autoComplete="email" inputMode="email" className="kv-input" />
      </div>
      <div className="kv-field">
        <label htmlFor="ad-msg">Dates and city</label>
        <textarea id="ad-msg" name="details" rows={2} className="kv-input" />
      </div>
      {error && (
        <p className="kv-form-error" role="alert">
          {error}
        </p>
      )}
      <button type="submit" className="kv-btn kv-btn-dark" disabled={sending}>
        {sending ? "Sending…" : "Send"}
      </button>
    </form>
  );
}
