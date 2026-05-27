"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";
import {
  locales,
  translations,
  type Locale,
  type TranslationTree
} from "@/lib/i18n/translations";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: TranslationTree;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function PortfolioI18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt");

  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-locale") as Locale | null;
    if (stored && locales.includes(stored)) {
      setLocaleState(stored);
      return;
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
  }, [locale]);

  function setLocale(nextLocale: Locale) {
    setLocaleState(nextLocale);
    window.localStorage.setItem("portfolio-locale", nextLocale);
  }

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      content: translations[locale]
    }),
    [locale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function usePortfolioI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("usePortfolioI18n must be used inside PortfolioI18nProvider");
  }
  return context;
}
