"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import dynamic from "next/dynamic";
import { usePortfolioI18n } from "@/components/providers/i18n-provider";
import { ActionButton } from "@/components/ui/action-button";
import { profile } from "@/lib/site-data";

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

      <div className="page-offset relative z-10 flex min-h-[100svh] items-center px-4 py-24 lg:px-0">
        <div className="content-shell">
          <AnimatePresence mode="wait">
            <motion.div
              key={locale}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto max-w-5xl text-center"
            >
              <p className="text-xs uppercase tracking-[0.32em] text-white/36">
                {content.hero.eyebrow}
              </p>
              <h1 className="mt-8 text-[clamp(3.45rem,16vw,13rem)] font-black uppercase leading-[0.78] tracking-[0.02em] text-[var(--fg)]">
                {content.hero.name}
              </h1>
              <p className="mt-7 text-xl font-normal text-white/80 md:text-2xl">
                {content.hero.role}
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
                {content.hero.line}
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <ActionButton href="#work">
                  {content.hero.cta}
                  <ArrowDown size={17} />
                </ActionButton>
                <ActionButton href={profile.resume} download variant="ghost">
                  {content.hero.resume}
                  <Download size={17} />
                </ActionButton>
                <ActionButton
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  variant="ghost"
                >
                  {content.hero.github}
                  <ArrowUpRight size={17} />
                </ActionButton>
              </div>
            </motion.div>
          </AnimatePresence>

          <a
            href="#about"
            data-cursor={content.hero.scroll}
            className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-xs uppercase tracking-[0.24em] text-white/34 transition hover:text-white/70 md:flex"
          >
            <span>{content.hero.scroll}</span>
            <span className="h-10 w-px bg-gradient-to-b from-white/50 to-transparent" />
          </a>
        </div>
      </div>
    </section>
  );
}
