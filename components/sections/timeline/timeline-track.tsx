"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { TimelineCard } from "@/components/sections/timeline/timeline-card";
import { useTimelineMotion } from "@/components/sections/timeline/use-timeline-motion";
import { timelineItems } from "@/lib/site-data";
import type { Locale } from "@/lib/i18n/translations";

type TimelineTrackProps = {
  locale: Locale;
};

export function TimelineTrack({ locale }: TimelineTrackProps) {
  const progressRef = useRef<HTMLSpanElement>(null);
  const { handleWheel, scrollByPage, trackRef } = useTimelineMotion({ progressRef });

  return (
    <div className="relative mt-12">
      <div className="mb-5 flex justify-end gap-2">
        <button
          type="button"
          aria-label="Voltar na linha do tempo"
          onClick={() => scrollByPage("previous")}
          className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.025] text-white/52 transition hover:border-white/24 hover:text-white"
        >
          <ArrowLeft size={16} />
        </button>
        <button
          type="button"
          aria-label="Avancar na linha do tempo"
          onClick={() => scrollByPage("next")}
          className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.025] text-white/52 transition hover:border-white/24 hover:text-white"
        >
          <ArrowRight size={16} />
        </button>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-8 bg-gradient-to-r from-[#030303] to-transparent sm:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-8 bg-gradient-to-l from-[#030303] to-transparent sm:w-16" />
      <div className="pointer-events-none absolute left-0 right-0 top-[calc(50%+1.25rem)] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="mb-4 h-px overflow-hidden rounded-full bg-white/[0.06]">
        <span
          ref={progressRef}
          className="block h-full origin-left scale-x-0 bg-gradient-to-r from-[var(--warm)] via-[var(--mist)] to-white/80"
        />
      </div>

      <div
        ref={trackRef}
        onWheel={handleWheel}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-6 pt-2 [perspective:1200px]"
      >
        {timelineItems.map((item, index) => (
          <TimelineCard
            key={`${item.content.pt.title}-${item.date}-${index}`}
            index={index}
            item={item}
            locale={locale}
            position={index % 2 === 0 ? "top" : "bottom"}
          />
        ))}
      </div>
    </div>
  );
}
