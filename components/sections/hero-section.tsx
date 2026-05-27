"use client";

import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import { usePortfolioI18n } from "@/components/providers/i18n-provider";

const SplineHeroScene = dynamic(
  () => import("@/components/spline/spline-hero-scene").then((mod) => mod.SplineHeroScene),
  {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-[#030303]" />
  }
);

export function HeroSection() {
  const { content, locale } = usePortfolioI18n();

  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden"
      aria-label="Hero"
    >
      <SplineHeroScene />
      <div className="soft-grid pointer-events-none absolute inset-0 opacity-25" />

      <div className="page-offset pointer-events-none relative z-10 flex min-h-[100svh] items-end px-4 pb-20 pt-32 lg:px-0">
        <div className="content-shell relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={locale}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="ml-auto max-w-[30rem] text-left md:text-right"
            >
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/34">
                {content.hero.eyebrow}
              </p>
              <p className="mt-4 text-xl font-normal text-white/78 md:text-2xl">
                {content.hero.role}
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)] md:text-base">
                {content.hero.line}
              </p>
            </motion.div>
          </AnimatePresence>

          <a
            href="#about"
            data-cursor={content.hero.scroll}
            className="pointer-events-auto absolute bottom-0 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-xs uppercase tracking-[0.24em] text-white/34 transition hover:text-white/70 md:flex"
          >
            <span>{content.hero.scroll}</span>
            <span className="h-10 w-px bg-gradient-to-b from-white/50 to-transparent" />
          </a>
        </div>
      </div>
    </section>
  );
}
