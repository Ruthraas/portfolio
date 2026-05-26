"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { stack } from "@/lib/site-data";

export function TechStackSection() {
  const ref = useRef<HTMLElement>(null);
  useGsapReveal(ref);

  return (
    <section id="stack" ref={ref} className="section-pad relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-16 mx-auto h-96 w-96 rounded-full bg-[var(--rose)]/10 blur-3xl"
      />
      <div className="section-inner">
        <div data-reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Stack"
            title="A modern rendering and application stack."
            description="The stack section mirrors the site's architecture: Next.js 15, motion systems, smooth scroll, page transitions, Three.js and shader-driven visual depth."
          />
          <div className="glass-panel rounded-3xl p-5 text-sm leading-7 text-white/58 lg:max-w-sm">
            Animations are split by responsibility: Lenis for scroll inertia,
            GSAP/ScrollTrigger for scroll timelines, Framer Motion for local UI
            states and React Three Fiber for GPU-rendered ambience.
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div data-reveal className="relative mx-auto aspect-square w-full max-w-[520px]">
            <div className="absolute inset-0 rounded-full border border-white/10" />
            <div className="absolute inset-[13%] rounded-full border border-white/8" />
            <div className="absolute inset-[27%] rounded-full border border-white/8" />
            <div className="absolute inset-[38%] rounded-full bg-[radial-gradient(circle,var(--cyan)_0%,transparent_62%)] opacity-20 blur-2xl" />
            {stack.slice(0, 12).map((item, index) => {
              const Icon = item.icon;
              const radius = index % 3 === 0 ? "44%" : index % 3 === 1 ? "34%" : "24%";
              const delay = `${index * -1.8}s`;

              return (
                <motion.div
                  key={item.name}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    "--orbit-radius": radius,
                    animation: `orbit ${18 + index * 0.85}s linear infinite`,
                    animationDelay: delay
                  } as React.CSSProperties}
                  whileHover={{ scale: 1.18 }}
                >
                  <div className="-translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-black/60 p-3 text-white/80 shadow-[0_0_28px_rgba(125,231,255,0.12)] backdrop-blur-xl">
                    <Icon size={18} />
                  </div>
                </motion.div>
              );
            })}
            <div className="absolute inset-0 grid place-items-center">
              <div className="grid size-32 place-items-center rounded-full border border-white/12 bg-white/[0.045] text-center backdrop-blur-2xl">
                <span className="px-4 text-sm font-semibold text-white">
                  Premium Web System
                </span>
              </div>
            </div>
          </div>

          <div data-reveal className="grid gap-3 sm:grid-cols-2">
            {stack.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -4, scale: 1.015 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition hover:border-white/22 hover:bg-white/[0.06]"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-xl bg-white/8 text-[var(--lime)] transition group-hover:text-[var(--cyan)]">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="font-semibold text-white">{item.name}</p>
                      <p className="text-xs uppercase text-white/38">{item.group}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
