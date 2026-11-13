import Link from "next/link";

export default function NotFound() {
  return (
    <main className="kv-section kv-section-last kv-center" style={{ gap: 18, minHeight: "50vh", justifyContent: "center" }}>
      <p className="kv-mono" style={{ margin: 0, fontSize: 13, letterSpacing: "0.08em", color: "var(--kv-muted)" }}>
        404
      </p>
      <h1 className="kv-h2">This page walked off.</h1>
      <p className="kv-lead">The link may be old, or the page has moved.</p>
      <div className="kv-btn-row" style={{ marginTop: 8 }}>
        <Link href="/" className="kv-btn kv-btn-dark">
          Meet Blitz
        </Link>
        <Link href="/reserve" className="kv-btn kv-btn-ghost">
          Reserve
        </Link>
      </div>
    </main>
  );
}
