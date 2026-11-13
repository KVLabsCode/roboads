import type { Metadata } from "next";
import { type Choice, type ReserveStatus, SESSION_ID_RE } from "@/lib/reserve";
import { reservationStatus } from "@/lib/server/reservations";
import ReserveClient from "./ReserveClient";
import "./reserve.css";

export const metadata: Metadata = {
  title: "Reserve",
  description: "Reserve Blitz with a $100 refundable deposit. Buy for $34,900 or rent for $2,990 a month.",
};

type Search = { session_id?: string; cancelled?: string; choice?: string };

export default async function ReservePage({ searchParams }: { searchParams: Promise<Search> }) {
  const sp = await searchParams;
  const choice: Choice = sp.choice === "rent" ? "rent" : "buy";
  const sessionId = sp.session_id && SESSION_ID_RE.test(sp.session_id) ? sp.session_id : null;

  let status: ReserveStatus | null = null;
  if (sessionId) {
    try {
      status = await reservationStatus(sessionId);
    } catch (err) {
      console.error("[kovio] could not load checkout session", err);
      status = { state: "pending" };
    }
  }

  return (
    <>
      <main className="rs-main">
        <ReserveClient initialChoice={choice} cancelled={sp.cancelled === "1"} sessionId={sessionId} initialStatus={status} />
      </main>

      <section className="kv-section kv-section-last rs-faq" aria-labelledby="faq-title">
        <h2 id="faq-title">Questions</h2>
        <details className="kv-details">
          <summary>Is the deposit refundable?</summary>
          <p>Yes, fully.</p>
        </details>
        <details className="kv-details">
          <summary>When does Blitz ship?</summary>
          <p>4 to 8 weeks after order.</p>
        </details>
        <details className="kv-details">
          <summary>What does renting include?</summary>
          <p>The robot, Kovio OS, the ad network, maintenance and a replacement unit if it breaks. $2,990 a month, 12 month minimum.</p>
        </details>
      </section>
    </>
  );
}
