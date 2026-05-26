"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/site-data";

gsap.registerPlugin(ScrollTrigger);

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 900px)", () => {
        const distance = Math.max(0, track.scrollWidth - section.clientWidth + 80);

        const tween = gsap.to(track, {
          x: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${distance}`,
            scrub: 0.9,
            pin: true,
            anticipatePin: 1
          }
        });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-pad relative min-h-screen overflow-hidden"
    >
      <div className="section-inner">
        <div data-reveal>
          <SectionHeading
            eyebrow="Selected work"
            title="Project cards with depth, light and real engineering."
            description="Three main projects shaped as cinematic case-study cards, with repository links, stack chips and interaction details that react to the pointer."
          />
        </div>
      </div>

      <div
        ref={trackRef}
        className="mt-12 flex gap-5 overflow-x-auto px-5 pb-4 no-scrollbar lg:w-max lg:overflow-visible"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

type Project = (typeof projects)[number];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);

  function handlePointerMove(event: React.PointerEvent<HTMLAnchorElement>) {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 10;
    const rotateX = ((y / rect.height) - 0.5) * -10;

    card.style.setProperty("--mx", `${x}px`);
    card.style.setProperty("--my", `${y}px`);
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(0,-8px,0)`;
  }

  function handlePointerLeave() {
    const card = ref.current;
    if (!card) return;
    card.style.transform = "rotateX(0deg) rotateY(0deg) translate3d(0,0,0)";
  }

  return (
    <a
      ref={ref}
      href={project.repo}
      target="_blank"
      rel="noreferrer"
      data-cursor="Repo"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="project-card glass-panel gpu-layer flex min-h-[620px] w-[86vw] shrink-0 flex-col justify-between rounded-[2rem] p-6 transition-transform duration-300 sm:w-[520px] lg:w-[560px]"
      style={{ perspective: "1200px" }}
    >
      <div>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase text-white/42">{project.type}</p>
            <h3 className="mt-4 text-4xl font-black leading-none text-white">
              {project.title}
            </h3>
          </div>
          <span
            className="grid size-12 place-items-center rounded-full border border-white/10 bg-white/8"
            style={{ color: project.accent }}
          >
            <ArrowUpRight size={20} />
          </span>
        </div>

        <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-3xl border border-white/10 bg-black/35">
          <div
            className="absolute inset-0 opacity-70"
            style={{
              background:
                index === 0
                  ? "radial-gradient(circle at 30% 20%, rgba(125,231,255,0.38), transparent 34%), linear-gradient(135deg, #090909, #1a211e)"
                  : index === 1
                    ? "radial-gradient(circle at 70% 30%, rgba(200,255,100,0.3), transparent 32%), linear-gradient(135deg, #080808, #201a14)"
                    : "radial-gradient(circle at 50% 35%, rgba(255,198,109,0.34), transparent 34%), linear-gradient(135deg, #090909, #171719)"
            }}
          />
          <div className="absolute inset-5 rounded-2xl border border-white/12 bg-black/30 p-4 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-[var(--rose)]" />
              <span className="size-2 rounded-full bg-[var(--amber)]" />
              <span className="size-2 rounded-full bg-[var(--lime)]" />
            </div>
            <div className="mt-8 grid gap-3">
              <div className="h-3 w-3/5 rounded-full bg-white/26" />
              <div className="h-3 w-4/5 rounded-full bg-white/12" />
              <div className="h-3 w-2/5 rounded-full bg-white/12" />
            </div>
            <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-3">
              <div className="h-16 rounded-2xl border border-white/10 bg-white/8" />
              <div className="h-16 rounded-2xl border border-white/10 bg-white/8" />
              <div className="h-16 rounded-2xl border border-white/10 bg-white/8" />
            </div>
          </div>
        </div>

        <p className="mt-7 text-base leading-8 text-white/66">{project.description}</p>
        <p className="mt-4 text-sm leading-7 text-white/46">{project.impact}</p>
      </div>

      <div>
        <div className="mt-8 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs text-white/64"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5 text-sm text-white/46">
          <span>{project.year}</span>
          <span>{project.metric}</span>
        </div>
      </div>
    </a>
  );
}
