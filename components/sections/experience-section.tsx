"use client";

import { useRef } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { motionStack } from "@/lib/site-data";

export function ExperienceSection() {
  const ref = useRef<HTMLElement>(null);
  useGsapReveal(ref);

  return (
    <section ref={ref} className="section-space border-b border-[var(--line)]">
      <div className="page-shell grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div className="motion-reveal">
          <SectionHeading
            kicker="Motion direction"
            title="Spline in the foreground, GSAP as the director."
            description="This version uses Spline as the premium 3D artifact and keeps the remaining animation system more controlled, heavy and editorial."
          />
        </div>

        <div className="grid gap-4">
          {motionStack.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="motion-reveal rule-box rounded-[8px] p-6"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="grid size-12 place-items-center border border-[var(--line)] bg-white/[0.035] text-[var(--acid)]">
                    <Icon size={20} />
                  </div>
                  <p className="display-serif text-5xl leading-none text-white/12">
                    0{index + 1}
                  </p>
                </div>
                <h3 className="mt-8 text-3xl font-black text-white">{item.title}</h3>
                <p className="mt-4 text-base leading-8 text-white/58">{item.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
