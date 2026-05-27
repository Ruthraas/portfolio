"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { stackGroups } from "@/lib/site-data";

export function TechStackSection() {
  const ref = useRef<HTMLElement>(null);
  useGsapReveal(ref);

  return (
    <section id="stack" ref={ref} className="section-space border-b border-[var(--line)]">
      <div className="page-shell">
        <div className="motion-reveal flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            kicker="Stack"
            title="A restrained toolchain for expressive systems."
            description="The stack is organized by responsibility: interface, motion, backend, data, systems and delivery quality."
          />
          <p className="max-w-sm text-sm leading-7 text-white/48">
            The goal is not to show every dependency. The goal is to make the
            technical direction obvious in seconds.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {stackGroups.map((group) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                className="motion-reveal rule-box rounded-[8px] p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase text-white/34">Cluster</p>
                    <h3 className="mt-2 text-2xl font-black text-white">
                      {group.title}
                    </h3>
                  </div>
                  <span className="grid size-12 place-items-center border border-[var(--line)] bg-white/[0.035] text-[var(--brass)]">
                    <Icon size={20} />
                  </span>
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="border border-[var(--line)] bg-white/[0.025] px-3 py-1.5 text-xs font-bold uppercase text-white/52"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
