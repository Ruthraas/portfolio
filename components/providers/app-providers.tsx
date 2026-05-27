"use client";

import type { ReactNode } from "react";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { PageTransitionProvider } from "@/components/providers/page-transition-provider";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <LenisProvider>
      <PageTransitionProvider>{children}</PageTransitionProvider>
    </LenisProvider>
  );
}
