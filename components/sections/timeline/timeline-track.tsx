"use client";

import { useRef } from "react";
import { TimelineCard } from "@/components/sections/timeline/timeline-card";
import { useTimelineScroll } from "@/components/sections/timeline/use-timeline-scroll";
import { timelineItems } from "@/lib/site-data";
import type { Locale } from "@/lib/i18n/translations";

type TimelineTrackProps = {
  locale: Locale;
};

const curvePath =
  "M74 406 C190 142 340 116 474 314 C615 522 760 526 884 276 C1002 40 1118 126 1142 378";

export function TimelineTrack({ locale }: TimelineTrackProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const progressPathRef = useRef<SVGPathElement>(null);
  const markerRef = useRef<SVGCircleElement>(null);
  const { activeIndex, sectionRef, stageRef, trackRef } = useTimelineScroll({
    itemCount: timelineItems.length,
    markerRef,
    pathRef,
    progressPathRef
  });
  const activeItem = timelineItems[activeIndex] ?? timelineItems[0];
  const activeCopy = activeItem.content[locale];

  return (
    <div
      ref={sectionRef}
      className="timeline-curve relative mt-14 md:min-h-[calc(100svh+var(--timeline-scroll-distance,0px))]"
    >
      <div
        ref={stageRef}
        className="timeline-curve-stage relative h-[100svh] overflow-hidden"
      >
        <div className="content-shell relative h-full py-20 md:py-24">
          <div className="timeline-curve-meta relative z-30 max-w-[22rem] pt-4">
            <span className="text-[0.66rem] uppercase tracking-[0.28em] text-white/38">
              {String(activeIndex + 1).padStart(2, "0")} / {timelineItems.length}
            </span>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-white md:text-5xl">
              {activeCopy.title}
            </h3>
            <p className="mt-3 text-sm uppercase tracking-[0.18em] text-white/36">
              {activeItem.date}
            </p>
            <p className="mt-5 text-sm leading-7 text-white/58">{activeCopy.place}</p>
          </div>

          <svg
            aria-hidden="true"
            className="timeline-curve-svg pointer-events-none absolute inset-y-[11%] right-[-10%] z-0 h-[74%] w-[88%] overflow-visible md:right-[-4%] md:w-[76%]"
            viewBox="0 0 1200 620"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="timeline-curve-gradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(216,201,165,0.26)" />
                <stop offset="48%" stopColor="rgba(143,157,168,0.34)" />
                <stop offset="100%" stopColor="rgba(241,239,233,0.58)" />
              </linearGradient>
            </defs>
            <path
              d={curvePath}
              fill="none"
              stroke="rgba(241,239,233,0.13)"
              strokeLinecap="round"
              strokeWidth="2"
            />
            <path
              ref={pathRef}
              d={curvePath}
              fill="none"
              stroke="transparent"
              strokeLinecap="round"
              strokeWidth="2"
            />
            <path
              ref={progressPathRef}
              d={curvePath}
              fill="none"
              stroke="url(#timeline-curve-gradient)"
              strokeLinecap="round"
              strokeWidth="4"
            />
            <circle
              ref={markerRef}
              cx="74"
              cy="406"
              r="10"
              fill="#f1efe9"
              stroke="rgba(3,3,3,0.78)"
              strokeWidth="6"
            />
          </svg>

          <div ref={trackRef} className="timeline-curve-track relative z-20">
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
      </div>
    </div>
  );
}
