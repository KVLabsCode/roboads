import type { Metadata } from "next";
import { ROLES } from "@/lib/roles";
import ApplyForm from "./ApplyForm";
import ApplyLink from "./ApplyLink";
import "./careers.css";

export const metadata: Metadata = {
  title: "Careers",
  description: "Build robots that pay for themselves. A small team in San Francisco, hands on and on site.",
};

export default function CareersPage() {
  return (
    <main id="main">
      <section className="kv-section kv-center cr-hero">
        <h1>Build robots that pay for themselves.</h1>
        <p className="kv-lead">A small team in San Francisco. Hands on, on site, shipping robots people walk up to every day.</p>
      </section>

      <section className="kv-section cr-roles">
        <h2 className="kv-h2">Open roles</h2>
        {ROLES.map((r) => (
          <details key={r.title} className="kv-details cr-role">
            <summary>
              <span className="cr-role-head">
                <span className="cr-role-title">{r.title}</span>
                <span className="cr-role-loc">{r.location}</span>
              </span>
            </summary>
            <div className="cr-role-body">
              <p className="cr-role-summary">{r.summary}</p>
              <ul>
                {r.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <p className="cr-muted">{r.fit}</p>
              <ApplyLink role={r.title} />
            </div>
          </details>
        ))}
      </section>

      <section id="apply" className="kv-section kv-section-last kv-narrow">
        <h2 className="kv-h2" style={{ textAlign: "center" }}>
          Apply.
        </h2>
        <ApplyForm />
      </section>
    </main>
  );
}
