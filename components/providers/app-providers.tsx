"use client";

import type { ReactNode } from "react";
import { PortfolioI18nProvider } from "@/components/providers/i18n-provider";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { PageTransitionProvider } from "@/components/providers/page-transition-provider";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <PortfolioI18nProvider>
      <LenisProvider>
        <PageTransitionProvider>{children}</PageTransitionProvider>
      </LenisProvider>
    </PortfolioI18nProvider>
  );
}
