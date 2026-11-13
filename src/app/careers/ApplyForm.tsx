"use client";

import { useEffect, useRef, useState } from "react";
import Honeypot from "@/components/forms/Honeypot";
import { ROLE_TITLES } from "@/lib/roles";
import { formValues, useFormSubmit } from "@/lib/useFormSubmit";

export const APPLY_ROLE_EVENT = "kv:apply-role";

function withScheme(v: string) {
  const t = v.trim();
  if (!t || /^[a-z][a-z0-9+.-]*:\/\//i.test(t)) return t;
  return `https://${t}`;
}

export default function ApplyForm() {
  const { state, error, submit, sending } = useFormSubmit("/api/contact");
  const [role, setRole] = useState<string>(ROLE_TITLES[0]);
  const statusRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const onPick = (e: Event) => {
      const r = (e as CustomEvent<string>).detail;
      if (ROLE_TITLES.includes(r)) setRole(r);
    };
    window.addEventListener(APPLY_ROLE_EVENT, onPick);
    return () => window.removeEventListener(APPLY_ROLE_EVENT, onPick);
  }, []);

  useEffect(() => {
    if (state === "sent") statusRef.current?.focus();
  }, [state]);

  if (state === "sent") {
    return (
      <p ref={statusRef} tabIndex={-1} role="status" className="kv-form-status">
        Thanks. We read every one.
      </p>
    );
  }

  return (
    <form
      className="kv-form-stack"
      onSubmit={(e) => {
        e.preventDefault();
        const v = formValues(e.currentTarget);
        submit({ form: "careers", ...v, link: withScheme(v.link ?? "") });
      }}
    >
      <Honeypot />
      <div className="kv-field">
        <label htmlFor="c-name">Name</label>
        <input id="c-name" name="name" type="text" required autoComplete="name" className="kv-input" />
      </div>
      <div className="kv-field">
        <label htmlFor="c-email">Email</label>
        <input id="c-email" name="email" type="email" required autoComplete="email" inputMode="email" className="kv-input" />
      </div>
      <div className="kv-field">
        <label htmlFor="c-role">Role</label>
        <select id="c-role" name="role" className="kv-input" value={role} onChange={(e) => setRole(e.target.value)}>
          {ROLE_TITLES.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </div>
      <div className="kv-field">
        <label htmlFor="c-link">LinkedIn, GitHub or portfolio</label>
        <input
          id="c-link"
          name="link"
          type="url"
          required
          inputMode="url"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
          placeholder="https://"
          className="kv-input"
          onBlur={(e) => {
            e.currentTarget.value = withScheme(e.currentTarget.value);
          }}
        />
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
