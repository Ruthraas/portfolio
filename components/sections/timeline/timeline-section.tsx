"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Award, BriefcaseBusiness, GraduationCap } from "lucide-react";
import { useRef } from "react";
import { usePortfolioI18n } from "@/components/providers/i18n-provider";
import { SectionHeading } from "@/components/ui/section-heading";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { timelineItems } from "@/lib/site-data";

const icons = {
  experience: BriefcaseBusiness,
  education: GraduationCap,
  certification: Award
};

export function TimelineSection() {
  const ref = useRef<HTMLElement>(null);
  const { content, locale } = usePortfolioI18n();
  useGsapReveal(ref);

  return (
    <section id="timeline" ref={ref} className="page-offset section-space">
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
                kicker={content.timeline.kicker}
                title={content.timeline.title}
                description={content.timeline.description}
              />
            </div>

            <div className="reveal max-w-full overflow-hidden">
              <div className="no-scrollbar w-full overflow-x-auto overscroll-x-contain pb-4">
                <div className="w-[58rem] max-w-none">
                <div className="grid grid-cols-6 gap-4">
                  {timelineItems.map((item) =>
                    item.side === "top" ? (
                      <TimelineCard key={item.content.pt.title} item={item} locale={locale} />
                    ) : (
                      <div key={item.content.pt.title} />
                    )
                  )}
                </div>

                <div className="relative my-5 grid grid-cols-6 gap-4">
                  <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/22 to-transparent" />
                  {timelineItems.map((item) => {
                    const Icon = icons[item.kind];
                    return (
                      <span
                        key={`${item.content.pt.title}-dot`}
                        className="relative z-10 mx-auto grid size-8 place-items-center rounded-full border border-white/14 bg-[#070707] text-white/56"
                      >
                        <Icon size={14} />
                      </span>
                    );
                  })}
                </div>

                <div className="grid grid-cols-6 gap-4">
                  {timelineItems.map((item) =>
                    item.side === "bottom" ? (
                      <TimelineCard key={item.content.pt.title} item={item} locale={locale} />
                    ) : (
                      <div key={item.content.pt.title} />
                    )
                  )}
                </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

type TimelineItem = (typeof timelineItems)[number];

function TimelineCard({ item, locale }: { item: TimelineItem; locale: "pt" | "en" }) {
  const copy = item.content[locale];

  return (
    <article className="rounded-[1rem] border border-white/10 bg-white/[0.018] p-4">
      <p className="text-[0.68rem] uppercase tracking-[0.18em] text-white/34">
        {item.date}
      </p>
      <h3 className="mt-2 text-sm font-semibold text-white/88">{copy.title}</h3>
      <p className="mt-1 text-xs text-white/46">{copy.place}</p>
      <p className="mt-3 text-xs leading-5 text-white/54">{copy.description}</p>
    </article>
  );
}
