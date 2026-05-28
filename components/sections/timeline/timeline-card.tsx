import type { Locale } from "@/lib/i18n/translations";
import type { TimelineItem } from "@/lib/data/timeline";
import { cn } from "@/lib/utils";
import { timelineAccent, timelineIcons, timelineKindLabel } from "./timeline-meta";

type TimelineCardProps = {
  index: number;
  item: TimelineItem;
  locale: Locale;
};

export function TimelineCard({ index, item, locale }: TimelineCardProps) {
  const copy = item.content[locale];
  const Icon = timelineIcons[item.kind];
  const accent = timelineAccent[item.kind];

  return (
    <article
      data-timeline-card
      className="timeline-curve-card"
      aria-label={`${item.date}: ${copy.title}`}
    >
      <div className="timeline-card-surface group relative overflow-hidden rounded-[1.1rem] border border-white/10 bg-[#070707]/94 p-5 shadow-[0_1.4rem_4rem_rgba(0,0,0,0.34)] transition duration-300 hover:border-white/26 hover:bg-[#101010]">
        <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/24 to-transparent" />
        <span className={cn("pointer-events-none absolute inset-y-0 left-0 w-1", accent.bar)} />

        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={cn(
                  "grid size-8 place-items-center rounded-full border border-white/14 bg-white/[0.035]",
                  accent.icon
                )}
              >
                <Icon size={15} />
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-[0.62rem] uppercase tracking-[0.2em] text-white/48">
                {timelineKindLabel[locale][item.kind]}
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

          <span className="shrink-0 text-5xl font-black leading-none tracking-[-0.08em] text-white/[0.075]">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <p className="mt-5 text-sm leading-7 text-white/58">{copy.description}</p>
      </div>
    </article>
  );
}
