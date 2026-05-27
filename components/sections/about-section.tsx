"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { usePortfolioI18n } from "@/components/providers/i18n-provider";
import { SectionHeading } from "@/components/ui/section-heading";
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
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr]"
          >
            <div className="reveal">
              <SectionHeading
                kicker={content.about.kicker}
                title={content.about.title}
                description={content.about.lead}
              />
            </div>

            <div className="reveal">
              <p className="text-balance text-3xl font-normal leading-tight text-white/86 md:text-5xl">
                {content.about.body}
              </p>
              <div className="mt-10 grid gap-3 md:grid-cols-3">
                {content.about.blocks.map((block) => (
                  <article
                    key={block.title}
                    className="border-t border-[var(--line)] pt-5"
                  >
                    <h3 className="text-base font-medium text-white/86">{block.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                      {block.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
