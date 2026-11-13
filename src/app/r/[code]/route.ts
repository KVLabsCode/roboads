import { type NextRequest, NextResponse } from "next/server";
import { REF_CODE_RE, REF_COOKIE } from "@/lib/reserve";

export async function GET(req: NextRequest, { params }: { params: Promise<{ code: string }> }) {
  const code = (await params).code.toLowerCase();
  const res = NextResponse.redirect(new URL("/reserve", req.url));
  if (REF_CODE_RE.test(code)) {
    res.cookies.set(REF_COOKIE, code, {
      maxAge: 60 * 60 * 24 * 30,
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });
  }
  return res;
}
