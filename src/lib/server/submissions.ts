import "server-only";
import { createHash } from "node:crypto";
import { db } from "./clients";

const WINDOW_MS = 10 * 60_000;
const MAX_PER_WINDOW = 5;

// Same rule as /api/lead: reject a browser POST whose Origin/Referer names another host.
// Requests with neither header (curl, health checks) are allowed; this is one layer, not the whole defense.
export function isSameSite(req: Request): boolean {
  const src = req.headers.get("origin") ?? req.headers.get("referer");
  if (!src) return true;
  const host = req.headers.get("x-forwarded-host") ?? req.headers.get("host");
  if (!host) return true;
  try {
    return new URL(src).host === host;
  } catch {
    return false;
  }
}

export function ipHash(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = fwd || req.headers.get("x-real-ip") || "unknown";
  return createHash("sha256").update(`kovio:${ip}`).digest("hex");
}

// Counts every saved form submission from this IP; fails open so a database hiccup never blocks a real person.
export async function isRateLimited(hash: string): Promise<boolean> {
  try {
    const since = new Date(Date.now() - WINDOW_MS).toISOString();
    const { count, error } = await db()
      .from("submissions")
      .select("id", { count: "exact", head: true })
      .eq("ip_hash", hash)
      .gte("created_at", since);
    if (error) throw error;
    return (count ?? 0) >= MAX_PER_WINDOW;
  } catch (err) {
    console.error("[kovio] rate limit check failed", err);
    return false;
  }
}

export async function saveSubmission(form: string, payload: Record<string, unknown>, hash: string) {
  const { error } = await db().from("submissions").insert({ form, payload, ip_hash: hash });
  if (error) throw new Error(`Saving ${form} submission failed: ${error.message}`);
}
