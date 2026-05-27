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
      className="reveal group flex min-h-[18.5rem] flex-col justify-between rounded-[1.25rem] border border-white/12 bg-[#070707]/90 p-5 shadow-[0_1.5rem_5rem_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-white/48 hover:bg-[#111] hover:shadow-[0_1.75rem_5rem_rgba(255,255,255,0.07)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/70"
    >
      <div>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3 text-white/78">
            <Code2 size={18} className="text-white/52" />
            <div>
              <p className="text-[0.7rem] text-white/48">{meta.owner}</p>
              <h3 className="mt-1 text-lg font-semibold tracking-[-0.02em] text-white">
                {meta.name}
              </h3>
            </div>
          </div>
          <span className="grid size-8 shrink-0 place-items-center rounded-full border border-[var(--line)] text-white/42 transition group-hover:border-white/50 group-hover:bg-white group-hover:text-black">
            <ArrowUpRight size={15} />
          </span>
        </div>

        <p className="mt-5 inline-flex items-center gap-2 text-sm text-white/58">
          <BookOpen size={14} />
          {project.type}
        </p>
        <p className="mt-3 text-sm leading-6 text-white/66">{project.summary}</p>
        <p className="mt-3 text-sm leading-6 text-white/48">{project.outcome}</p>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          {meta.stack.slice(0, 4).map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-1 text-[0.7rem] text-white/54"
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
              {meta.index}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <GitFork size={12} />
              {meta.year}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
