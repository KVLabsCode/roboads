import { type NextRequest, NextResponse } from "next/server";
import { SESSION_ID_RE } from "@/lib/reserve";
import { reservationStatus } from "@/lib/server/reservations";

export async function GET(req: NextRequest) {
  const sessionId = req.nextUrl.searchParams.get("session_id") ?? "";
  if (!SESSION_ID_RE.test(sessionId)) return NextResponse.json({ error: "Invalid session" }, { status: 400 });
  try {
    return NextResponse.json(await reservationStatus(sessionId), { headers: { "Cache-Control": "no-store" } });
  } catch (err) {
    console.error("[kovio] reservation status failed", err);
    return NextResponse.json({ state: "pending" }, { headers: { "Cache-Control": "no-store" } });
  }
}
