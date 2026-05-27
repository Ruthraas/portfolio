"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { projects } from "@/lib/site-data";

export function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  useGsapReveal(ref);

  return (
    <section id="work" ref={ref} className="section-y border-b border-[var(--line)]">
      <div className="container-x">
        <div className="reveal mb-14">
          <SectionHeading
            kicker="Selected work"
            title="Project cards with depth, restraint and live lighting."
            description="A minimal showcase for backend systems, support flows and developer tooling, shaped with precise motion instead of visual noise."
          />
        </div>

        <div className="grid gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

type Project = (typeof projects)[number];

function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLAnchorElement>(null);

  function handlePointerMove(event: React.PointerEvent<HTMLAnchorElement>) {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 5;
    const rotateX = ((y / rect.height) - 0.5) * -4;
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(0,-4px,0)`;
  }

  function handlePointerLeave() {
    if (ref.current) {
      ref.current.style.transform = "rotateX(0deg) rotateY(0deg) translate3d(0,0,0)";
    }
  }

  return (
    <a
      ref={ref}
      href={project.repo}
      target="_blank"
      rel="noreferrer"
      data-cursor="Open"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="reveal panel group relative grid overflow-hidden rounded-[2rem] p-6 transition-transform duration-300 md:grid-cols-[0.55fr_1.45fr] md:p-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(540px circle at var(--x,50%) var(--y,50%), rgba(244,241,234,0.12), transparent 42%)"
        }}
      />
      <div className="relative z-10 flex min-h-52 flex-col justify-between border-b border-[var(--line)] pb-6 md:border-b-0 md:border-r md:pb-0 md:pr-8">
        <div>
          <p className="text-sm uppercase text-white/36">{project.index}</p>
          <p className="mt-4 text-sm text-[var(--quiet)]">{project.type}</p>
        </div>
        <p className="text-sm text-white/42">{project.year}</p>
      </div>

      <div className="relative z-10 pt-6 md:pl-8 md:pt-0">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h3 className="text-balance text-4xl font-black leading-none text-white md:text-6xl">
              {project.title}
            </h3>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)]">
              {project.summary}
            </p>
          </div>
          <span className="grid size-12 shrink-0 place-items-center rounded-full border border-[var(--line)] bg-white/[0.035] text-white/64 transition group-hover:bg-white group-hover:text-black">
            <ArrowUpRight size={20} />
          </span>
        </div>
        <p className="mt-6 border-l border-[var(--line)] pl-5 text-sm leading-7 text-white/50">
          {project.outcome}
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[var(--line)] bg-white/[0.028] px-3 py-1.5 text-xs text-white/52"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
