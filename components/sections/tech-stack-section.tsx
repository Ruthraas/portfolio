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
  const sideTitle = locale === "pt" ? "Produto em camadas" : "Product layers";
  const sideText =
    locale === "pt"
      ? "Do que o usuario toca ate o que sustenta a regra de negocio."
      : "From what the user touches to what supports the business rule.";

  return (
    <section id="stack" ref={ref} className="page-offset section-space">
      <div className="content-shell">
        <AnimatePresence mode="wait">
          <motion.div
            key={locale}
            initial={{ y: 14 }}
            animate={{ y: 0 }}
            exit={{ y: -8 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="reveal mb-12">
              <SectionHeading
                kicker={content.stack.kicker}
                title={content.stack.title}
                description={content.stack.description}
              />
            </div>

            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
              <aside
                data-scroll-parallax="8"
                className="reveal lg:sticky lg:top-28"
              >
                <div className="border-l border-white/14 pl-5">
                  <p className="text-[0.7rem] uppercase tracking-[0.28em] text-white/38">
                    {sideTitle}
                  </p>
                  <p className="mt-4 max-w-sm text-2xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-4xl">
                    {sideText}
                  </p>
                </div>
              </aside>

              <div className="grid gap-3">
                {stackGroups.map((group) => {
                  const Icon = group.icon;
                  return (
                    <article
                      key={group.key}
                      data-scroll-reveal-3d
                      className="reveal group grid gap-5 rounded-[1rem] border border-[var(--line)] bg-white/[0.016] p-4 transition duration-300 hover:border-white/24 hover:bg-white/[0.032] sm:grid-cols-[5rem_1fr] sm:p-5"
                    >
                      <div className="flex items-center justify-between gap-3 sm:block">
                        <span className="text-3xl font-black tracking-[-0.08em] text-white/[0.12]">
                          {group.layer}
                        </span>
                        <span className="grid size-10 place-items-center rounded-full border border-white/10 bg-black/24 text-white/42 transition group-hover:border-white/22 group-hover:text-white/72 sm:mt-5">
                          <Icon size={18} />
                        </span>
                      </div>

                      <div>
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                          <h3 className="text-xl font-semibold tracking-[-0.035em] text-white">
                            {group.label}
                          </h3>
                          <p className="text-sm text-white/42">{group.signal}</p>
                        </div>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {group.items.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-[var(--line-soft)] bg-black/18 px-3 py-1 text-xs text-white/50"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
