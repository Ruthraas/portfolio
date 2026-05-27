import type { Locale } from "@/lib/i18n/translations";
import type { TimelineItem } from "@/lib/data/timeline";
import { cn } from "@/lib/utils";
import { timelineAccent, timelineIcons, timelineKindLabel } from "./timeline-meta";

type TimelineCardProps = {
  index: number;
  item: TimelineItem;
  locale: Locale;
  position: "top" | "bottom";
};

export function TimelineCard({ index, item, locale, position }: TimelineCardProps) {
  const copy = item.content[locale];
  const Icon = timelineIcons[item.kind];
  const accent = timelineAccent[item.kind];
  const isTop = position === "top";

  return (
    <article
      data-timeline-card
      className={cn(
        "relative flex h-[32rem] w-[19.5rem] shrink-0 snap-center flex-col transition-[filter,opacity,transform] duration-300 [--timeline-drift:0] [--timeline-focus:0] [filter:saturate(calc(0.78+var(--timeline-focus)*0.22))] [opacity:calc(0.64+var(--timeline-focus)*0.36)] [transform:translateY(calc((1-var(--timeline-focus))*10px))_rotateY(calc(var(--timeline-drift)*-5deg))_scale(calc(0.955+var(--timeline-focus)*0.045))] sm:w-[22rem]",
        isTop ? "justify-start" : "justify-end"
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "absolute left-1/2 z-10 grid size-10 -translate-x-1/2 place-items-center rounded-full border border-white/14 bg-[#050505] shadow-[0_0_2rem_rgba(255,255,255,0.08)]",
          accent.icon,
          isTop ? "top-1/2 -translate-y-[calc(50%+1.25rem)]" : "top-1/2 translate-y-[calc(-50%+1.25rem)]"
        )}
      >
        <Icon size={17} />
      </span>

      <span
        aria-hidden="true"
        className={cn(
          "absolute left-1/2 z-0 h-12 w-px -translate-x-1/2",
          isTop
            ? "top-[calc(50%-4.25rem)] bg-gradient-to-t from-white/26 to-transparent"
            : "top-[calc(50%+1.25rem)] bg-gradient-to-b from-white/26 to-transparent"
        )}
      />

      <div className="group relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#070707]/92 p-5 shadow-[0_1.4rem_4rem_rgba(0,0,0,0.3)] transition duration-300 hover:-translate-y-1 hover:border-white/26 hover:bg-[#101010] hover:shadow-[0_1.8rem_5rem_rgba(216,201,165,0.08)]">
        <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/24 to-transparent" />
        <span className={cn("pointer-events-none absolute inset-x-0 h-1", isTop ? "bottom-0" : "top-0", accent.bar)} />

        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
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
