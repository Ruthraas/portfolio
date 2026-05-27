"use client";

import { useRef } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { capabilities, principles, profile } from "@/lib/site-data";

export function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  useGsapReveal(ref);

  return (
    <section ref={ref} className="section-space border-b border-[var(--line)]">
      <div className="page-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="motion-reveal">
          <SectionHeading
            kicker="Profile"
            title="A developer portfolio with product taste, not decoration."
            description={profile.shortBio}
          />
        </div>

        <div className="grid gap-4">
          {principles.map((principle, index) => {
            const Icon = principle.icon;

            return (
              <article
                key={principle.title}
                className="motion-reveal rule-box grid gap-5 rounded-[8px] p-5 sm:grid-cols-[auto_1fr_auto]"
              >
                <div className="grid size-12 place-items-center border border-[var(--line)] bg-white/[0.035] text-[var(--brass)]">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-white/35">
                    0{index + 1}
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-white">
                    {principle.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/56">
                    {principle.body}
                  </p>
                </div>
                <span className="hidden text-4xl text-white/10 sm:block">/</span>
              </article>
            );
          })}
        </div>

        <div className="motion-reveal rule-box rounded-[8px] p-6 lg:col-span-2">
          <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <p className="section-kicker">Capabilities</p>
              <h3 className="mt-4 text-3xl font-black text-white">
                Practical delivery from interface to backend.
              </h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {capabilities.map((capability) => (
                <div
                  key={capability}
                  className="border border-[var(--line)] bg-white/[0.025] p-4 text-sm leading-7 text-white/58"
                >
                  {capability}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
