"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
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
            className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start"
          >
            <div className="reveal space-y-6">
              <SectionHeading
                kicker={content.about.kicker}
                title={content.about.title}
                description={content.about.lead}
              />
              <figure className="panel overflow-hidden rounded-[1.5rem] p-3">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.1rem] bg-[#080808]">
                  <Image
                    src="/images/arthur-profile.svg"
                    alt="Retrato editorial de Arthur Almeida"
                    width={900}
                    height={1100}
                    className="h-full w-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent,rgba(0,0,0,0.42)_70%)]" />
                </div>
                <figcaption className="flex items-center justify-between gap-4 px-2 py-4 text-sm text-white/50">
                  <span>Arthur Almeida</span>
                  <span>Ruhtra</span>
                </figcaption>
              </figure>
            </div>

            <div className="reveal pt-0 lg:pt-10">
              <p className="text-balance text-2xl font-normal leading-snug text-white/86 md:text-4xl">
                {content.about.body}
              </p>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {content.about.blocks.map((block) => (
                  <article
                    key={block.title}
                    className="rounded-[1.25rem] border border-[var(--line)] bg-white/[0.018] p-5"
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
