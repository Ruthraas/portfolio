"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { usePortfolioI18n } from "@/components/providers/i18n-provider";
import { AboutHighlights } from "@/components/sections/about/about-highlights";
import { ProfileVisual } from "@/components/sections/about/profile-visual";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";

export function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const { content, locale } = usePortfolioI18n();
  useGsapReveal(ref);

  return (
    <section id="about" ref={ref} className="page-offset section-space">
      <div className="content-shell">
        <AnimatePresence mode="wait">
          <motion.div
            key={locale}
            initial={{ y: 14 }}
            animate={{ y: 0 }}
            exit={{ y: -8 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center"
          >
            <div data-reveal className="max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--quiet)]">
                {content.about.kicker}
              </p>
              <h2 className="mt-5 text-balance text-[clamp(2.4rem,6vw,5rem)] font-normal leading-[0.98] tracking-[-0.04em] text-[var(--fg)]">
                {content.about.title}
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
                {content.about.lead}
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/64">
                {content.about.body}
              </p>
              <div className="mt-9">
                <AboutHighlights items={content.about.blocks} />
              </div>
            </div>

            <div data-reveal>
              <ProfileVisual />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
