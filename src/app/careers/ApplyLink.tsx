"use client";

import { APPLY_ROLE_EVENT } from "./ApplyForm";

export default function ApplyLink({ role }: { role: string }) {
  return (
    <a
      href="#apply"
      className="cr-apply-link"
      aria-label={`Apply for ${role}`}
      onClick={() => window.dispatchEvent(new CustomEvent(APPLY_ROLE_EVENT, { detail: role }))}
    >
      Apply
    </a>
  );
}
