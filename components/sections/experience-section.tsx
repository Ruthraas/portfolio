"use client";

import { useRef } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { experience } from "@/lib/site-data";

export function ExperienceSection() {
  const ref = useRef<HTMLElement>(null);
  useGsapReveal(ref);

  return (
    <section ref={ref} className="section-pad relative overflow-hidden">
      <div className="section-inner grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div data-reveal>
          <SectionHeading
            eyebrow="Practice"
            title="From interface polish to backend structure."
            description="The portfolio includes the resume content as a sharper narrative: frontend, APIs, dashboards, Discord bots and strong project organization."
          />
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-transparent via-white/18 to-transparent" />
          <div className="space-y-5">
            {experience.map((item, index) => (
              <div key={item.title} data-reveal className="relative pl-12">
                <div className="absolute left-[13px] top-2 grid size-4 place-items-center rounded-full bg-black">
                  <span className="size-2 rounded-full bg-[var(--lime)] shadow-[0_0_18px_var(--lime)]" />
                </div>
                <div className="glass-panel rounded-3xl p-6">
                  <p className="text-sm text-white/42">0{index + 1}</p>
                  <h3 className="mt-2 text-2xl font-black text-white">{item.title}</h3>
                  <p className="mt-4 text-base leading-8 text-white/58">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
