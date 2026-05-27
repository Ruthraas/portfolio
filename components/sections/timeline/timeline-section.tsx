"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Award, BriefcaseBusiness, GraduationCap } from "lucide-react";
import { useRef } from "react";
import { usePortfolioI18n } from "@/components/providers/i18n-provider";
import { SectionHeading } from "@/components/ui/section-heading";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { timelineItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const icons = {
  experience: BriefcaseBusiness,
  education: GraduationCap,
  certification: Award
};

const kindLabel = {
  pt: {
    experience: "Experiencia",
    education: "Formacao",
    certification: "Certificado"
  },
  en: {
    experience: "Experience",
    education: "Education",
    certification: "Certificate"
  }
} as const;

export function TimelineSection() {
  const ref = useRef<HTMLElement>(null);
  const { content, locale } = usePortfolioI18n();
  useGsapReveal(ref);

  return (
    <section id="timeline" ref={ref} className="page-offset section-space overflow-hidden">
      <div className="content-shell">
        <AnimatePresence mode="wait">
          <motion.div
            key={locale}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="reveal">
              <SectionHeading
                kicker={content.timeline.kicker}
                title={content.timeline.title}
                description={content.timeline.description}
              />
            </div>

            <div className="relative mt-14">
              <div className="pointer-events-none absolute bottom-6 left-5 top-6 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent md:left-1/2" />
              <div className="grid gap-5">
                {timelineItems.map((item, index) => (
                  <TimelineCard
                    key={`${item.content.pt.title}-${item.date}-${index}`}
                    index={index}
                    item={item}
                    locale={locale}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

type TimelineItem = (typeof timelineItems)[number];

function TimelineCard({
  item,
  index,
  locale
}: {
  item: TimelineItem;
  index: number;
  locale: "pt" | "en";
}) {
  const copy = item.content[locale];
  const Icon = icons[item.kind];
  const isEven = index % 2 === 0;

  return (
    <article
      data-scroll-reveal-3d
      className={cn(
        "reveal relative grid gap-4 pl-12 md:grid-cols-[1fr_4.5rem_1fr] md:pl-0",
        isEven ? "md:[&>div:last-child]:col-start-1" : "md:[&>div:last-child]:col-start-3"
      )}
    >
      <div
        className={cn(
          "absolute left-5 top-8 z-10 grid size-10 -translate-x-1/2 place-items-center rounded-full border border-white/16 bg-[#050505] text-white/68 shadow-[0_0_2rem_rgba(255,255,255,0.08)] md:left-1/2",
          item.kind === "certification" && "text-[var(--warm)]",
          item.kind === "education" && "text-[var(--mist)]"
        )}
      >
        <Icon size={17} />
      </div>

      <div
        className={cn(
          "group relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#070707]/88 p-5 shadow-[0_1.4rem_4rem_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-white/26 hover:bg-[#101010] md:row-start-1",
          isEven ? "md:col-start-1 md:text-right" : "md:col-start-3"
        )}
      >
        <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/24 to-transparent" />
        <span
          className={cn(
            "pointer-events-none absolute inset-y-0 w-1",
            isEven ? "right-0" : "left-0",
            item.kind === "certification"
              ? "bg-[var(--warm)]"
              : item.kind === "education"
                ? "bg-[var(--mist)]"
                : "bg-white/54"
          )}
        />

        <div className={cn("flex items-start gap-4", isEven ? "md:flex-row-reverse" : "")}>
          <span className="text-5xl font-black leading-none tracking-[-0.08em] text-white/[0.075]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="min-w-0 flex-1">
            <div
              className={cn(
                "flex flex-wrap items-center gap-2",
                isEven ? "md:justify-end" : ""
              )}
            >
              <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-[0.62rem] uppercase tracking-[0.2em] text-white/48">
                {kindLabel[locale][item.kind]}
              </span>
              <span className="text-[0.68rem] uppercase tracking-[0.22em] text-white/34">
                {item.date}
              </span>
            </div>

            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
              {copy.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-white/46">{copy.place}</p>
          </div>
        </div>

        <p className="mt-5 text-sm leading-7 text-white/58">{copy.description}</p>

        {item.credentialId ? (
          <p className="mt-5 break-all rounded-xl border border-white/[0.07] bg-black/28 px-3 py-2 text-[0.68rem] uppercase tracking-[0.16em] text-white/34">
            ID {item.credentialId}
          </p>
        ) : null}
      </div>
    </article>
  );
}
