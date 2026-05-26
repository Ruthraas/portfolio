"use client";

import type { ReactNode } from "react";
import { BarbaTransitionProvider } from "@/components/providers/barba-transition-provider";
import { LenisProvider } from "@/components/providers/lenis-provider";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <LenisProvider>
      <BarbaTransitionProvider>{children}</BarbaTransitionProvider>
    </LenisProvider>
  );
}
