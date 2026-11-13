export const CHOICES = [
  { id: "buy", title: "Buy Blitz", detail: "$34,900. Ships 4 to 8 weeks after order." },
  { id: "rent", title: "Rent Blitz", detail: "$2,990 a month, 12 month minimum." },
] as const;

export type Choice = (typeof CHOICES)[number]["id"];

export const USE_CASES = ["Events", "Brand activations", "Hospitality", "Retail", "Agency", "Other"] as const;

export const choiceTitle = (c: Choice) => (c === "rent" ? "Rent Blitz" : "Buy Blitz");
export const choiceLabel = (c: Choice) => (c === "rent" ? "Rent" : "Buy");

export const REF_COOKIE = "kovio_ref";
export const REF_CODE_RE = /^[a-z0-9]{4,24}$/;
export const SESSION_ID_RE = /^cs_(test|live)_[A-Za-z0-9]+$/;

export type ReserveStatus =
  | { state: "paid"; place: number; choice: Choice; shareUrl: string }
  | { state: "pending" }
  | { state: "expired" }
  | { state: "refunded" };
