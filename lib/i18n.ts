import { headers } from "next/headers";

export const LOCALES = ["en", "sk", "cs"] as const;
export type Locale = (typeof LOCALES)[number];

export type Dictionary = typeof import("../messages/en.json");

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("../messages/en.json").then((m) => m.default),
  sk: () => import("../messages/sk.json").then((m) => m.default),
  cs: () => import("../messages/cs.json").then((m) => m.default),
};

export function hasLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}

export async function getLocale(): Promise<Locale> {
  const headersList = await headers();
  const locale = headersList.get("x-locale") ?? "en";
  return hasLocale(locale) ? locale : "en";
}
