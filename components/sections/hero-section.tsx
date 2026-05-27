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
      <motion.div
        data-scroll-parallax="18"
        aria-hidden="true"
        initial={{ opacity: 0, y: 22, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
        className="pointer-events-none absolute inset-0 z-[6] flex items-center justify-center px-4"
      >
        <span
          className="select-none text-center text-[clamp(4.8rem,18vw,16.8rem)] font-black uppercase leading-none tracking-[0.04em] text-transparent opacity-80"
          style={{
            WebkitTextStroke: "1px rgba(241,239,233,0.34)",
            backgroundImage:
              "linear-gradient(180deg, rgba(255,255,255,0.92), rgba(170,174,172,0.42) 44%, rgba(255,255,255,0.06))",
            WebkitBackgroundClip: "text",
            textShadow:
              "0 1px 0 rgba(255,255,255,0.18), 0 18px 60px rgba(255,255,255,0.08), 0 44px 120px rgba(0,0,0,0.8)"
          }}
        >
          Ruhtra
        </span>
      </motion.div>

      <div className="page-offset pointer-events-none relative z-10 flex min-h-[100svh] items-end px-4 pb-20 pt-32 lg:px-0">
        <div className="content-shell relative">
          <AnimatePresence mode="wait">
            <motion.div
              data-scroll-velocity
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
            className="pointer-events-auto absolute bottom-0 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.24em] text-white/48 transition hover:text-white md:flex"
          >
            <span>{content.hero.scroll}</span>
            <span className="relative grid size-12 place-items-center rounded-full border border-white/14 bg-black/34 backdrop-blur-md">
              <span className="size-5 rounded-full border border-white/24" />
              <span className="absolute bottom-[-2.2rem] h-8 w-px bg-gradient-to-b from-white/50 to-transparent" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
