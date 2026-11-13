"use client";

import Image from "next/image";
import Link from "next/link";
import { type KeyboardEvent, useEffect, useRef, useState } from "react";
import Honeypot from "@/components/forms/Honeypot";
import { CHOICES, type Choice, choiceTitle, type ReserveStatus, USE_CASES } from "@/lib/reserve";
import { formValues, useFormSubmit } from "@/lib/useFormSubmit";

type Props = {
  initialChoice: Choice;
  cancelled: boolean;
  sessionId: string | null;
  initialStatus: ReserveStatus | null;
};

const POLL_MS = 2000;
const POLL_TRIES = 15;

export default function ReserveClient({ initialChoice, cancelled, sessionId, initialStatus }: Props) {
  const [status, setStatus] = useState<ReserveStatus | null>(initialStatus);
  const [gaveUp, setGaveUp] = useState(false);

  useEffect(() => {
    if (!sessionId || status?.state !== "pending") return;
    let tries = 0;
    let timer = 0;
    let stopped = false;
    const poll = async () => {
      tries++;
      try {
        const res = await fetch(`/api/reserve/status?session_id=${encodeURIComponent(sessionId)}`, { cache: "no-store" });
        const next = (await res.json()) as ReserveStatus;
        if (stopped) return;
        if (next.state !== "pending") return setStatus(next);
      } catch {
        // keep polling
      }
      if (tries >= POLL_TRIES) setGaveUp(true);
      else timer = window.setTimeout(poll, POLL_MS);
    };
    timer = window.setTimeout(poll, POLL_MS);
    return () => {
      stopped = true;
      window.clearTimeout(timer);
    };
  }, [sessionId, status?.state]);

  if (status?.state === "paid") return <Done status={status} />;
  if (status?.state === "pending") return <Confirming gaveUp={gaveUp} />;
  return (
    <ReserveForm
      initialChoice={initialChoice}
      notice={
        status?.state === "expired"
          ? "That checkout expired before payment. Nothing was charged."
          : status?.state === "refunded"
            ? "This deposit was refunded. You can reserve again any time."
            : cancelled
              ? "Payment cancelled. Nothing was charged, and your place is not held yet."
              : null
      }
    />
  );
}

function ReserveForm({ initialChoice, notice }: { initialChoice: Choice; notice: string | null }) {
  const [choice, setChoice] = useState<Choice>(initialChoice);
  const [redirecting, setRedirecting] = useState(false);
  const { error, submit, sending } = useFormSubmit<{ url?: string }>("/api/reserve");
  const radios = useRef<(HTMLButtonElement | null)[]>([]);

  // Coming back from Stripe with the back button restores this page from the bfcache mid-redirect.
  useEffect(() => {
    const onShow = (e: PageTransitionEvent) => {
      if (e.persisted) setRedirecting(false);
    };
    window.addEventListener("pageshow", onShow);
    return () => window.removeEventListener("pageshow", onShow);
  }, []);

  const onRadioKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const dir = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (i + dir + CHOICES.length) % CHOICES.length;
    setChoice(CHOICES[next].id);
    radios.current[next]?.focus();
  };

  const busy = sending || redirecting;

  return (
    <>
      <h1>Reserve your robot.</h1>
      <p className="kv-lead rs-sub">$100 holds your place in line. Fully refundable.</p>
      {notice && (
        <p className="rs-notice" role="status">
          {notice}
        </p>
      )}

      <div className="rs-choices" role="radiogroup" aria-label="Choose an option">
        {CHOICES.map((c, i) => {
          const on = c.id === choice;
          return (
            <button
              key={c.id}
              ref={(el) => {
                radios.current[i] = el;
              }}
              type="button"
              role="radio"
              aria-checked={on}
              tabIndex={on ? 0 : -1}
              className="rs-choice"
              onClick={() => setChoice(c.id)}
              onKeyDown={(e) => onRadioKey(e, i)}
            >
              <span aria-hidden="true" className="rs-ring" />
              <Image src="/images/reserve-blitz-thumb.webp" alt="" width={40} height={76} className="rs-thumb" />
              <span className="rs-choice-text">
                <span className="rs-choice-title">{c.title}</span>
                <span className="rs-choice-detail">{c.detail}</span>
              </span>
              <span className="rs-choice-price">$100 today</span>
            </button>
          );
        })}
      </div>

      <form
        className="rs-form"
        onSubmit={async (e) => {
          e.preventDefault();
          const data = await submit({ choice, ...formValues(e.currentTarget) });
          if (data?.url) {
            setRedirecting(true);
            window.location.assign(data.url);
          }
        }}
      >
        <Honeypot />
        <div className="kv-field">
          <label htmlFor="r-name">Name</label>
          <input id="r-name" name="name" type="text" required autoComplete="name" className="kv-input" />
        </div>
        <div className="kv-field">
          <label htmlFor="r-company">Company</label>
          <input id="r-company" name="company" type="text" required autoComplete="organization" className="kv-input" />
        </div>
        <div className="kv-field">
          <label htmlFor="r-email">Email</label>
          <input id="r-email" name="email" type="email" required autoComplete="email" inputMode="email" className="kv-input" />
        </div>
        <div className="kv-field">
          <label htmlFor="r-phone">Phone</label>
          <input id="r-phone" name="phone" type="tel" required autoComplete="tel" inputMode="tel" className="kv-input" />
        </div>
        <div className="kv-field">
          <label htmlFor="r-country">Country</label>
          <input id="r-country" name="country" type="text" required autoComplete="country-name" className="kv-input" />
        </div>
        <div className="kv-field">
          <label htmlFor="r-use">What will you use it for?</label>
          <select id="r-use" name="useCase" required className="kv-input" defaultValue={USE_CASES[0]}>
            {USE_CASES.map((u) => (
              <option key={u}>{u}</option>
            ))}
          </select>
        </div>
        <div className="rs-submit">
          {error && (
            <p className="kv-form-error" role="alert">
              {error}
            </p>
          )}
          <button type="submit" className="kv-btn kv-btn-dark" disabled={busy}>
            {redirecting ? "Opening Stripe…" : sending ? "One moment…" : "Continue to $100 deposit"}
          </button>
          <span>Secure payment on Stripe.</span>
        </div>
      </form>
    </>
  );
}

function Confirming({ gaveUp }: { gaveUp: boolean }) {
  return (
    <div className="rs-done" role="status" aria-live="polite">
      {!gaveUp && <span className="rs-spinner" aria-hidden="true" />}
      <p className="rs-eyebrow">{gaveUp ? "STILL CONFIRMING" : "CONFIRMING PAYMENT"}</p>
      <h1>{gaveUp ? "Almost there." : "One moment."}</h1>
      <p className="kv-lead" style={{ maxWidth: "30em" }}>
        {gaveUp
          ? "Stripe is taking longer than usual. If you paid, your confirmation email with your place in line is on its way."
          : "We are confirming your deposit with Stripe."}
      </p>
      {gaveUp && (
        <Link href="/" className="kv-btn kv-btn-ghost">
          Back to Blitz
        </Link>
      )}
    </div>
  );
}

function Done({ status }: { status: Extract<ReserveStatus, { state: "paid" }> }) {
  const [copied, setCopied] = useState(false);
  const [canShare, setCanShare] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.focus();
    setCanShare(typeof navigator.share === "function" && window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(status.shareUrl);
    } catch {
      const range = document.createRange();
      const el = document.getElementById("rs-share-url");
      if (el) {
        range.selectNodeContents(el);
        window.getSelection()?.removeAllRanges();
        window.getSelection()?.addRange(range);
      }
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2500);
  };

  const share = () =>
    navigator.share({ title: "Reserve Blitz", text: "I just reserved Blitz, the robot that pays for itself.", url: status.shareUrl }).catch(() => {});

  return (
    <div className="rs-done" ref={ref} tabIndex={-1} aria-labelledby="rs-place">
      <p className="rs-eyebrow">YOU ARE IN LINE</p>
      <p id="rs-place" className="rs-place">
        #{status.place}
      </p>
      <p className="kv-lead" style={{ maxWidth: "30em" }}>
        {choiceTitle(status.choice)}. Your $100 deposit is fully refundable.
      </p>
      <h2>Every referral moves you up the line.</h2>
      <div className="rs-share">
        <span id="rs-share-url" className="rs-share-url">
          {status.shareUrl}
        </span>
        {canShare ? (
          <button type="button" className="kv-btn kv-btn-dark" onClick={share}>
            Share link
          </button>
        ) : (
          <button type="button" className="kv-btn kv-btn-dark" onClick={copy} aria-live="polite">
            {copied ? "Copied" : "Copy link"}
          </button>
        )}
      </div>
    </div>
  );
}
