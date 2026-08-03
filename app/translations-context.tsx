"use client";

import { createContext, useContext } from "react";
import type { Dictionary } from "@/lib/i18n";

const TranslationsContext = createContext<Dictionary | null>(null);

export function TranslationsProvider({
  dict,
  children,
}: {
  dict: Dictionary;
  children: React.ReactNode;
}) {
  return (
    <TranslationsContext.Provider value={dict}>
      {children}
    </TranslationsContext.Provider>
  );
}

export function useTranslations(): Dictionary {
  const dict = useContext(TranslationsContext);
  if (!dict) throw new Error("useTranslations must be used inside TranslationsProvider");
  return dict;
}
