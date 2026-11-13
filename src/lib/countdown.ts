export const REVEAL_AT = Date.UTC(2027, 0, 5, 16);

export function getRevealText(now: number = Date.now()): string {
  const days = Math.max(0, Math.ceil((REVEAL_AT - now) / 86_400_000));
  if (days > 1) return `${days} days to go.`;
  if (days === 1) return "1 day to go.";
  return "It is here.";
}
