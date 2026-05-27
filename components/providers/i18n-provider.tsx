"use client";

import i18next from "i18next";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";
import { I18nextProvider, initReactI18next } from "react-i18next";
import {
  locales,
  translations,
  type Locale,
  type TranslationTree
} from "@/lib/i18n/translations";

const i18n = i18next.createInstance();

void i18n.use(initReactI18next).init({
  resources: {
    pt: { translation: translations.pt },
    en: { translation: translations.en }
  },
  lng: "pt",
  fallbackLng: "pt",
  interpolation: { escapeValue: false }
});

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
      void i18n.changeLanguage(stored);
      return;
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
  }, [locale]);

  function setLocale(nextLocale: Locale) {
    setLocaleState(nextLocale);
    window.localStorage.setItem("portfolio-locale", nextLocale);
    void i18n.changeLanguage(nextLocale);
  }

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      content: translations[locale]
    }),
    [locale]
  );

  return (
    <I18nextProvider i18n={i18n}>
      <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
    </I18nextProvider>
  );
}

export function usePortfolioI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("usePortfolioI18n must be used inside PortfolioI18nProvider");
  }
  return context;
}
