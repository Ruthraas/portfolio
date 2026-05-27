"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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

            <div className="space-y-4">
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
  const ref = useRef<HTMLAnchorElement>(null);

  function handlePointerMove(event: React.PointerEvent<HTMLAnchorElement>) {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  }

  return (
    <a
      ref={ref}
      href={meta.repo}
      target="_blank"
      rel="noreferrer"
      data-cursor={openLabel}
      onPointerMove={handlePointerMove}
      className="reveal group relative block overflow-hidden rounded-[1.6rem] border border-[var(--line)] bg-white/[0.018] p-6 transition duration-300 hover:border-white/22 md:p-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--x,50%) var(--y,50%), rgba(241,239,233,0.08), transparent 44%)"
        }}
      />
      <div className="relative z-10 grid gap-8 md:grid-cols-[0.25fr_1fr_auto] md:items-start">
        <div>
          <p className="text-sm text-white/34">{meta.index}</p>
          <p className="mt-3 text-sm text-white/34">{meta.year}</p>
        </div>
        <div>
          <p className="text-sm text-white/42">{project.type}</p>
          <h3 className="mt-3 text-4xl font-normal tracking-[-0.03em] text-white md:text-6xl">
            {project.title}
          </h3>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)]">
            {project.summary}
          </p>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/46">
            {project.outcome}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {meta.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[var(--line-soft)] px-3 py-1 text-xs text-white/42"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <span className="grid size-10 place-items-center rounded-full border border-[var(--line)] text-white/42 transition group-hover:border-white/28 group-hover:text-white">
          <ArrowUpRight size={17} />
        </span>
      </div>
    </a>
  );
}
