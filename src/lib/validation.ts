import { z } from "zod";
import { USE_CASES } from "./reserve";
import { ROLE_TITLES } from "./roles";

const text = (max: number) => z.string().trim().min(1, "is required").max(max, "is too long");
const email = z.string().trim().toLowerCase().pipe(z.email("must be a valid email address").max(200));
const honeypot = z.string().max(500).optional();

export const reserveSchema = z.object({
  choice: z.enum(["buy", "rent"]),
  name: text(120),
  company: text(160),
  email,
  phone: text(40).regex(/^[+()\d\s.-]{6,40}$/, "must be a valid phone number"),
  country: text(80),
  useCase: z.enum(USE_CASES),
  website: honeypot,
});

const advertiseSchema = z.object({
  form: z.literal("advertise"),
  name: text(120),
  company: text(160),
  email,
  details: z.string().trim().max(2000, "is too long").optional().default(""),
  website: honeypot,
});

const careersSchema = z.object({
  form: z.literal("careers"),
  name: text(120),
  email,
  role: z.enum(ROLE_TITLES),
  link: z
    .string()
    .trim()
    .max(500)
    .pipe(z.url({ protocol: /^https?$/, message: "must be a valid link" })),
  website: honeypot,
});

export const contactSchema = z.discriminatedUnion("form", [advertiseSchema, careersSchema]);

export type ReserveInput = z.infer<typeof reserveSchema>;
export type ContactInput = z.infer<typeof contactSchema>;

const LABELS: Record<string, string> = {
  name: "Name",
  company: "Company",
  email: "Email",
  phone: "Phone",
  country: "Country",
  useCase: "Use",
  choice: "Option",
  details: "Dates and city",
  role: "Role",
  link: "Link",
};

export function firstError(error: z.ZodError): string {
  const issue = error.issues[0];
  const field = String(issue?.path[0] ?? "");
  const label = LABELS[field];
  if (!label) return "Please check the form and try again.";
  const msg = issue.message.startsWith("Invalid") ? "is not valid" : issue.message;
  return `${label} ${msg}.`;
}
