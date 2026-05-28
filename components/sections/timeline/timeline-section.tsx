"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { usePortfolioI18n } from "@/components/providers/i18n-provider";
import { TimelineTrack } from "@/components/sections/timeline/timeline-track";
import { SectionHeading } from "@/components/ui/section-heading";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";

export function TimelineSection() {
  const ref = useRef<HTMLElement>(null);
  const { content, locale } = usePortfolioI18n();
  useGsapReveal(ref);

  return (
    <section id="timeline" ref={ref} className="page-offset section-space">
      <AnimatePresence mode="wait">
        <motion.div
          key={locale}
          initial={{ y: 14 }}
          animate={{ y: 0 }}
          exit={{ y: -8 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="content-shell">
            <div className="reveal">
              <SectionHeading
                kicker={content.timeline.kicker}
                title={content.timeline.title}
                description={content.timeline.description}
              />
            </div>
          </div>

          <div>
            <TimelineTrack locale={locale} />
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
