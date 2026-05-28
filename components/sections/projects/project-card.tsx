import { ArrowUpRight, BookOpen, Code2, GitFork, Star } from "lucide-react";
import { projectMeta } from "@/lib/site-data";

type ProjectMeta = (typeof projectMeta)[number];
type ProjectCopy = {
  title: string;
  type: string;
  summary: string;
  outcome: string;
};

export function ProjectCard({
  meta,
  project,
  openLabel
}: {
  meta: ProjectMeta;
  project: ProjectCopy;
  openLabel: string;
}) {
  return (
    <a
      href={meta.repo}
      target="_blank"
      rel="noreferrer"
      aria-label={`${openLabel}: ${meta.name}`}
      data-scroll-reveal-3d
      className="reveal group flex min-h-[14.5rem] flex-col justify-between rounded-[0.9rem] border border-white/12 bg-[#070707]/92 p-4 shadow-[0_1.1rem_3rem_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-white/42 hover:bg-[#101010] hover:shadow-[0_1.4rem_4rem_rgba(255,255,255,0.06)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/70"
    >
      <div>
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-start gap-3 text-white/78">
            <Code2 size={17} className="mt-0.5 shrink-0 text-white/52" />
            <div className="min-w-0">
              <p className="text-[0.68rem] text-white/42">{meta.owner}</p>
              <h3 className="mt-1 break-words text-base font-semibold leading-tight tracking-[-0.02em] text-white">
                {meta.name}
              </h3>
            </div>
          </div>
          <span className="grid size-8 shrink-0 place-items-center rounded-full border border-[var(--line)] text-white/42 transition group-hover:border-white/50 group-hover:bg-white/[0.03] group-hover:text-white">
            <ArrowUpRight size={15} />
          </span>
        </div>

        <p className="mt-4 inline-flex items-center gap-2 text-xs text-white/56">
          <BookOpen size={14} />
          {project.type}
        </p>
        <p className="mt-3 overflow-hidden text-sm leading-6 text-white/66 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
          {project.summary}
        </p>
        <p className="mt-2 overflow-hidden text-xs leading-5 text-white/42 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
          {project.outcome}
        </p>
      </div>

      <div className="mt-5 space-y-3">
        <div className="flex flex-wrap gap-2">
          {meta.stack.slice(0, 3).map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-1 text-[0.66rem] text-white/54"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/52">
          <div className="flex items-center gap-2">
            <span
              className="size-2.5 rounded-full"
              style={{ backgroundColor: meta.languageColor }}
            />
            <span>{meta.language}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5">
              <Star size={12} />
              {meta.stars}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <GitFork size={12} />
              {meta.forks}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
