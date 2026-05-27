"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/site-data";

gsap.registerPlugin(ScrollTrigger);

export function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-project-card]");

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            y: 90,
            autoAlpha: 0,
            filter: "blur(16px)"
          },
          {
            y: 0,
            autoAlpha: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 82%"
            },
            delay: index * 0.04
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={ref} className="section-space border-b border-[var(--line)]">
      <div className="page-shell">
        <div className="motion-reveal mb-12">
          <SectionHeading
            kicker="Selected systems"
            title="Three public projects, framed like product case studies."
            description="The work section is intentionally calmer: fewer gimmicks, stronger hierarchy, precise cards and clear engineering signal."
          />
        </div>

        <div className="grid gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

type Project = (typeof projects)[number];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  function handlePointerMove(event: React.PointerEvent<HTMLAnchorElement>) {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  }

  return (
    <a
      ref={cardRef}
      href={project.repo}
      target="_blank"
      rel="noreferrer"
      data-project-card
      data-cursor="Repo"
      onPointerMove={handlePointerMove}
      className="group relative grid overflow-hidden rounded-[8px] border border-[var(--line)] bg-[var(--panel-solid)] p-0 transition duration-300 hover:border-white/28 lg:grid-cols-[0.62fr_1.38fr]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(520px circle at var(--x,50%) var(--y,50%), rgba(246,240,230,0.12), transparent 42%)"
        }}
      />

      <div className="relative min-h-72 border-b border-[var(--line)] p-6 lg:border-b-0 lg:border-r">
        <div className="absolute inset-0 scanline opacity-20" />
        <div
          className="absolute inset-x-6 bottom-6 top-24 border border-[var(--line)]"
          style={{
            background: `linear-gradient(135deg, rgba(246,240,230,0.05), transparent), linear-gradient(135deg, ${project.accent}22, transparent 52%)`
          }}
        />
        <div className="relative z-10 flex h-full flex-col justify-between">
          <div>
            <p className="text-xs font-black uppercase text-white/38">{project.code}</p>
            <p className="mt-2 text-sm text-white/52">{project.label}</p>
          </div>
          <div>
            <p className="display-serif text-7xl leading-none text-white/14">
              0{index + 1}
            </p>
            <p className="mt-4 text-sm font-black uppercase" style={{ color: project.accent }}>
              {project.year}
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 p-6 md:p-8">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h3 className="text-balance text-4xl font-black leading-none text-white md:text-5xl">
              {project.title}
            </h3>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/62">
              {project.description}
            </p>
          </div>
          <span className="grid size-12 shrink-0 place-items-center border border-[var(--line)] bg-white/[0.035] text-white/70 transition group-hover:bg-white group-hover:text-black">
            <ArrowUpRight size={20} />
          </span>
        </div>

        <div className="mt-8 border-l border-[var(--line)] pl-5">
          <p className="text-xs font-black uppercase text-white/36">Outcome</p>
          <p className="mt-2 text-sm leading-7 text-white/58">{project.result}</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="border border-[var(--line)] bg-white/[0.03] px-3 py-1.5 text-xs font-bold uppercase text-white/52"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
