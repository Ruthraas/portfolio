"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Award, BriefcaseBusiness, GraduationCap } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePortfolioI18n } from "@/components/providers/i18n-provider";
import { SectionHeading } from "@/components/ui/section-heading";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { timelineItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const icons = {
  experience: BriefcaseBusiness,
  education: GraduationCap,
  certification: Award
};

export function TimelineSection() {
  const ref = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);
  const { content, locale } = usePortfolioI18n();
  useGsapReveal(ref);

  useEffect(() => {
    const stage = stageRef.current;
    const track = trackRef.current;
    const line = lineRef.current;
    const arrow = arrowRef.current;

    if (!stage || !track || !line || !arrow) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-timeline-card]");
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.set(cards, {
          opacity: 0.64,
          rotateX: (_index, target: HTMLElement) =>
            target.dataset.side === "top" ? 9 : -9,
          scale: 0.92,
          y: (_index, target: HTMLElement) =>
            target.dataset.side === "top" ? -154 : 154
        });
        gsap.set(line, { scaleX: 0.04, transformOrigin: "left center" });
        gsap.set(arrow, { autoAlpha: 0.38, x: -12, scale: 0.88 });

        const getDistance = () =>
          Math.max(0, track.scrollWidth - window.innerWidth + window.innerWidth * 0.08);

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: stage,
            start: "top top",
            end: () => `+=${getDistance() + window.innerHeight * 0.36}`,
            scrub: 0.72,
            pin: true,
            pinReparent: true,
            anticipatePin: 1,
            invalidateOnRefresh: true
          }
        });

        timeline
          .to(track, { x: () => -getDistance(), ease: "none" }, 0)
          .to(line, { scaleX: 1, ease: "none" }, 0)
          .to(
            cards,
            {
              opacity: 1,
              rotateX: 0,
              scale: 1,
              y: (_index, target: HTMLElement) =>
                target.dataset.side === "top" ? -190 : 190,
              stagger: 0.08,
              ease: "power1.out"
            },
            0.04
          )
          .to(arrow, { autoAlpha: 1, x: 0, scale: 1, ease: "none" }, 0.55);

        return () => {
          timeline.scrollTrigger?.kill();
          timeline.kill();
        };
      });

      mm.add("(max-width: 767px)", () => {
        gsap.set(cards, { clearProps: "all" });
        gsap.set(line, { scaleX: 1, transformOrigin: "left center" });
        gsap.set(arrow, { autoAlpha: 1, x: 0, scale: 1 });
      });

      return () => mm.revert();
    }, stage);

    return () => ctx.revert();
  }, [locale]);

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
          </motion.div>
        </AnimatePresence>
      </div>

      <div
        ref={stageRef}
        className="relative mt-10 min-h-[42rem] overflow-hidden md:min-h-[100svh] md:[perspective:1200px]"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden w-[12vw] bg-gradient-to-r from-[#030303] to-transparent md:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 hidden w-[12vw] bg-gradient-to-l from-[#030303] to-transparent md:block" />

        <div className="pointer-events-none absolute left-4 right-4 top-1/2 z-0 h-px bg-white/[0.06] md:left-[8vw] md:right-[8vw]">
          <span
            ref={lineRef}
            className="absolute left-0 top-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-white/10 via-white/42 to-white/70"
          />
          <span
            ref={arrowRef}
            className="absolute -right-3 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-full border border-white/18 bg-[#030303] text-white/68"
          >
            <ArrowRight size={15} />
          </span>
        </div>

        <div
          ref={trackRef}
          className="no-scrollbar relative z-10 flex h-[42rem] gap-5 overflow-x-auto px-4 py-24 md:h-[100svh] md:w-max md:items-center md:gap-7 md:overflow-visible md:px-[max(7rem,calc((100vw-76rem)/2+7rem))]"
        >
          {timelineItems.map((item, index) => (
            <TimelineCard
              key={`${item.content.pt.title}-${index}`}
              index={index}
              item={item}
              locale={locale}
            />
          ))}
        </div>
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
  const isTop = item.side === "top";

  return (
    <article
      data-timeline-card
      data-side={item.side}
      className={cn(
        "group relative flex h-[24rem] w-[18.5rem] shrink-0 flex-col justify-between overflow-hidden rounded-[1.35rem] border border-white/12 bg-[#070707]/92 p-5 shadow-[0_1.5rem_5rem_rgba(0,0,0,0.32)] backdrop-blur-sm transition duration-500 [transform-style:preserve-3d] hover:-translate-y-2 hover:rotate-[-0.7deg] hover:border-white/38 hover:bg-[#111] hover:shadow-[0_2rem_5rem_rgba(216,201,165,0.09)] sm:w-[21rem] md:h-[21.5rem] md:w-[23rem]",
        isTop ? "md:-translate-y-44" : "md:translate-y-44"
      )}
    >
      <span className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 [background:linear-gradient(135deg,rgba(255,255,255,0.08),transparent_36%,rgba(216,201,165,0.055))]" />
      <span className="pointer-events-none absolute -right-12 -top-12 size-32 rounded-full bg-white/[0.035] blur-2xl transition duration-500 group-hover:bg-[var(--warm)]/10" />

      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute left-1/2 hidden -translate-x-1/2 md:block",
          isTop ? "-bottom-[2.3rem]" : "-top-[2.3rem]"
        )}
      >
        <span
          className={cn(
            "mx-auto block h-9 w-px",
            isTop
              ? "bg-gradient-to-b from-white/32 to-white/5"
              : "bg-gradient-to-t from-white/32 to-white/5"
          )}
        />
        <span className="absolute left-1/2 top-1/2 grid size-5 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/24 bg-[#030303] shadow-[0_0_2rem_rgba(255,255,255,0.08)]">
          <span className="size-1.5 rounded-full bg-white/72" />
        </span>
      </span>

      <div>
        <div className="flex items-start justify-between gap-4">
          <span className="text-[clamp(3.5rem,8vw,5.5rem)] font-black leading-none tracking-[-0.08em] text-white/[0.075]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="grid size-10 place-items-center rounded-full border border-white/12 bg-black/40 text-white/52 transition group-hover:border-white/26 group-hover:text-white">
            <Icon size={16} />
          </span>
        </div>

        <p className="mt-6 text-[0.68rem] uppercase tracking-[0.22em] text-white/34">
          {item.date}
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white md:text-[1.7rem]">
          {copy.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-white/46">{copy.place}</p>
      </div>

      <p className="text-sm leading-7 text-white/58">{copy.description}</p>
    </article>
  );
}
