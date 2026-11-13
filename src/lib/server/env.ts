import "server-only";

export function env(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing environment variable ${name}`);
  return v;
}

export function notifyEmails(): string[] {
  return env("NOTIFY_EMAILS")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}
