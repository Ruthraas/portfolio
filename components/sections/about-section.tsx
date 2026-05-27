"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { aboutBlocks, profile } from "@/lib/site-data";

export function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  useGsapReveal(ref);

  return (
    <section id="about" ref={ref} className="section-y border-b border-[var(--line)]">
      <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="reveal">
          <SectionHeading
            kicker="About"
            title="Quiet interfaces. Strong systems. Precise motion."
            description={profile.biography}
          />
        </div>

        <motion.div
          className="reveal panel rounded-[2rem] p-6 md:p-8"
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 170, damping: 20 }}
        >
          <p className="text-sm uppercase text-white/36">Arthur Almeida | Ruhtra</p>
          <p className="mt-7 text-balance text-3xl font-black leading-tight text-[var(--fg)] md:text-5xl">
            Building digital products that feel calm, fast and considered.
          </p>
          <div className="mt-9 grid gap-4">
            {aboutBlocks.map((block) => (
              <div
                key={block.label}
                className="rounded-2xl border border-[var(--line)] bg-white/[0.025] p-5"
              >
                <h3 className="text-lg font-semibold text-white">{block.label}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {block.body}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
