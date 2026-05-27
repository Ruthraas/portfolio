"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { TimelineCard } from "@/components/sections/timeline/timeline-card";
import { timelineItems } from "@/lib/site-data";
import type { Locale } from "@/lib/i18n/translations";

type TimelineTrackProps = {
  locale: Locale;
};

export function TimelineTrack({ locale }: TimelineTrackProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollTrack = (direction: "previous" | "next") => {
    const track = trackRef.current;
    if (!track) return;

    track.scrollBy({
      left: direction === "next" ? track.clientWidth * 0.82 : track.clientWidth * -0.82,
      behavior: "smooth"
    });
  };

  return (
    <div className="relative mt-12">
      <div className="mb-5 flex justify-end gap-2">
        <button
          type="button"
          aria-label="Voltar na linha do tempo"
          onClick={() => scrollTrack("previous")}
          className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.025] text-white/52 transition hover:border-white/24 hover:text-white"
        >
          <ArrowLeft size={16} />
        </button>
        <button
          type="button"
          aria-label="Avancar na linha do tempo"
          onClick={() => scrollTrack("next")}
          className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.025] text-white/52 transition hover:border-white/24 hover:text-white"
        >
          <ArrowRight size={16} />
        </button>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-8 bg-gradient-to-r from-[#030303] to-transparent sm:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-8 bg-gradient-to-l from-[#030303] to-transparent sm:w-16" />
      <div className="pointer-events-none absolute left-0 right-0 top-[calc(50%+1.25rem)] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain scroll-smooth pb-6 pt-2"
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
