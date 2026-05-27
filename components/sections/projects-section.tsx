"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Code2, GitFork, Star } from "lucide-react";
import { useRef } from "react";
import { usePortfolioI18n } from "@/components/providers/i18n-provider";
import { SectionHeading } from "@/components/ui/section-heading";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { projectMeta } from "@/lib/site-data";

export function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const { content, locale } = usePortfolioI18n();
  useGsapReveal(ref);

  return (
    <section id="work" ref={ref} className="page-offset section-space">
      <div className="content-shell">
        <AnimatePresence mode="wait">
          <motion.div
            key={locale}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="reveal mb-12">
              <SectionHeading
                kicker={content.work.kicker}
                title={content.work.title}
                description={content.work.description}
              />
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {projectMeta.map((meta, index) => (
                <ProjectCard
                  key={meta.repo}
                  meta={meta}
                  project={content.work.projects[index]}
                  openLabel={content.work.open}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

type ProjectMeta = (typeof projectMeta)[number];
type ProjectCopy = {
  title: string;
  type: string;
  summary: string;
  outcome: string;
};

function ProjectCard({
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
      className="reveal group flex min-h-[22rem] flex-col justify-between rounded-[1.35rem] border border-white/12 bg-[#070707]/90 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-white/26 hover:bg-white/[0.045]"
    >
      <div>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3 text-white/78">
            <Code2 size={20} className="text-white/52" />
            <div>
              <p className="text-xs text-white/48">{meta.owner}</p>
              <h3 className="mt-1 text-xl font-semibold tracking-[-0.02em] text-white">
                {meta.name}
              </h3>
            </div>
          </div>
          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-[var(--line)] text-white/42 transition group-hover:border-white/28 group-hover:text-white">
            <ArrowUpRight size={16} />
          </span>
        </div>

        <p className="mt-7 inline-flex items-center gap-2 text-sm text-white/58">
          <BookOpen size={15} />
          {project.type}
        </p>
        <p className="mt-4 text-sm leading-7 text-white/66">{project.summary}</p>
        <p className="mt-4 text-sm leading-7 text-white/52">{project.outcome}</p>
      </div>

      <div className="mt-8 space-y-5">
        <div className="flex flex-wrap gap-2">
          {meta.stack.slice(0, 5).map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs text-white/54"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-white/10 pt-5 text-xs text-white/52">
          <div className="flex items-center gap-2">
            <span
              className="size-2.5 rounded-full"
              style={{ backgroundColor: meta.languageColor }}
            />
            <span>{meta.language}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <Star size={13} />
              {meta.index}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <GitFork size={13} />
              {meta.year}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
