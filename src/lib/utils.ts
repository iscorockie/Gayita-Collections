import type { Category } from "./types";

export const cn = (...parts: Array<string | false | null | undefined>) =>
  parts.filter(Boolean).join(" ");

export const formatUGX = (n: number) => "UGX " + n.toLocaleString("en-US");

export const CATEGORY_LABEL: Record<Category, string> = {
  vintage: "Vintage",
  custom: "Custom Art",
  kicks: "Friday Kicks",
  accessories: "Accessories",
};

export const FREE_DELIVERY_THRESHOLD = 200_000;

export const CONTACT = {
  location: "Najjera II, Kira Road — Kampala, Uganda",
  email: "hello@gayitacollections.ug",
  instagram: "@gayita.collections",
  tiktok: "@gayitacollections",
  hours: "Mon – Sat · 9:00am – 7:00pm EAT",
  phones: [
    { display: "+256 707 548 383", tel: "+256707548383", primary: true },
    { display: "+256 763 813 315", tel: "+256763813315", primary: false },
    { display: "0775 48383", tel: "077548383", primary: false },
  ],
  whatsapp: "256707548383",
};

export const waLink = (message: string) =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;

export const initials = (name: string) =>
  name
    .replace(/[@"]/g, "")
    .split(/[\s_]+/)
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

/** Next Friday 8:00 PM — the weekly DISTRICT DROP moment. */
export function nextDropDate(from = new Date()): Date {
  const d = new Date(from);
  d.setHours(20, 0, 0, 0);
  const day = d.getDay(); // 0 Sun … 5 Fri
  let diff = (5 - day + 7) % 7;
  if (diff === 0 && d.getTime() <= from.getTime()) diff = 7;
  d.setDate(d.getDate() + diff);
  return d;
}
