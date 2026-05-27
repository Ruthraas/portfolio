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
    <section id="stack" ref={ref} className="section-y border-b border-[var(--line)]">
      <div className="container-x">
        <div className="reveal mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            kicker="Stack"
            title="A lean stack for expressive frontend systems."
            description="The tooling is grouped by responsibility and intentionally presented with space, restraint and clear hierarchy."
          />
          <p className="max-w-sm text-sm leading-7 text-white/46">
            The portfolio uses no heavy textures. Atmosphere comes from shaders,
            lighting, fog, interpolation and subtle postprocessing.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {stackGroups.map((group) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.label}
                className="reveal panel rounded-[2rem] p-6"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 190, damping: 20 }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase text-white/34">Layer</p>
                    <h3 className="mt-2 text-2xl font-black text-white">
                      {group.label}
                    </h3>
                  </div>
                  <span className="grid size-12 place-items-center rounded-full border border-[var(--line)] bg-white/[0.035] text-[var(--warm)]">
                    <Icon size={20} />
                  </span>
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--line)] bg-white/[0.026] px-3 py-1.5 text-xs text-white/54"
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
