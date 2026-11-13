import "server-only";
import { render } from "@react-email/components";
import type { ReactElement } from "react";
import { resend } from "./clients";
import { env, notifyEmails } from "./env";

type Send = { to: string | string[]; subject: string; react: ReactElement; replyTo?: string };

export async function sendEmail({ to, subject, react, replyTo }: Send) {
  const [html, text] = await Promise.all([render(react), render(react, { plainText: true })]);
  const { error } = await resend().emails.send({ from: env("EMAIL_FROM"), to, subject, html, text, replyTo });
  if (error) throw new Error(`Resend ${error.name}: ${error.message}`);
}

export async function notifyFounders(subject: string, react: ReactElement, replyTo?: string) {
  await sendEmail({ to: notifyEmails(), subject, react, replyTo });
}

export async function logged(label: string, task: Promise<unknown>) {
  try {
    await task;
    return true;
  } catch (err) {
    console.error(`[kovio] ${label} failed`, err);
    return false;
  }
}
