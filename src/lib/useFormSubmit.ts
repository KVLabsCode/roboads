"use client";

import { useCallback, useState } from "react";

export type SubmitState = "idle" | "sending" | "sent" | "error";

const FALLBACK_ERROR = "Something went wrong. Please try again, or email hello@kovio.dev.";

export function useFormSubmit<T = unknown>(endpoint: string) {
  const [state, setState] = useState<SubmitState>("idle");
  const [error, setError] = useState<string | null>(null);

  const submit = useCallback(
    async (payload: Record<string, unknown>): Promise<T | null> => {
      setState("sending");
      setError(null);
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(typeof data?.error === "string" ? data.error : FALLBACK_ERROR);
        setState("sent");
        return data as T;
      } catch (e) {
        setError(e instanceof Error && e.message ? e.message : FALLBACK_ERROR);
        setState("error");
        return null;
      }
    },
    [endpoint],
  );

  return { state, error, submit, sending: state === "sending" };
}

export function formValues(form: HTMLFormElement): Record<string, string> {
  const out: Record<string, string> = {};
  new FormData(form).forEach((v, k) => {
    if (typeof v === "string") out[k] = v.trim();
  });
  return out;
}
