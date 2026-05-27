"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { usePortfolioI18n } from "@/components/providers/i18n-provider";
import { SectionHeading } from "@/components/ui/section-heading";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { stackGroups } from "@/lib/site-data";

export function TechStackSection() {
  const ref = useRef<HTMLElement>(null);
  const { content, locale } = usePortfolioI18n();
  useGsapReveal(ref);

  return (
    <section id="stack" ref={ref} className="page-offset section-space">
      <div className="content-shell">
        <AnimatePresence mode="wait">
          <motion.div
            key={locale}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="reveal mb-12">
              <SectionHeading
                kicker={content.stack.kicker}
                title={content.stack.title}
                description={content.stack.description}
              />
            </div>

            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {stackGroups.map((group) => {
                const Icon = group.icon;
                return (
                  <article
                    key={group.key}
                    data-scroll-reveal-3d
                    className="reveal rounded-[1.4rem] border border-[var(--line)] bg-white/[0.016] p-5"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-lg font-normal capitalize text-white/86">
                        {group.label}
                      </h3>
                      <Icon size={18} className="text-white/36" />
                    </div>
                    <div className="mt-8 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-[var(--line-soft)] px-3 py-1 text-xs text-white/42"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
