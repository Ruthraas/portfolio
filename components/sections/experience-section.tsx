"use client";

import { useRef } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { floatingStack } from "@/lib/site-data";

export function ExperienceSection() {
  const ref = useRef<HTMLElement>(null);
  useGsapReveal(ref);

  return (
    <section ref={ref} className="section-y border-b border-[var(--line)]">
      <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="reveal">
          <SectionHeading
            kicker="Interaction"
            title="The motion system is quiet, physical and timed."
            description="Lenis owns scroll inertia, GSAP choreographs scroll-linked reveals, Framer Motion handles tactile UI states, and the Three.js layer reacts subtly to pointer movement."
          />
        </div>

        <div className="reveal relative aspect-square max-h-[560px] overflow-hidden rounded-[2rem] border border-[var(--line)] bg-black/30">
          <div className="absolute inset-0 hairline-grid opacity-45" />
          <div className="absolute inset-[18%] rounded-full border border-[var(--line)]" />
          <div className="absolute inset-[32%] rounded-full border border-[var(--line)]" />
          <div className="absolute inset-[43%] rounded-full bg-[radial-gradient(circle,var(--warm),transparent_68%)] opacity-20 blur-2xl" />
          {floatingStack.map((item, index) => {
            const Icon = item.icon;
            const radius = index % 2 === 0 ? 41 : 30;
            const duration = 20 + index * 2;

            return (
              <div
                key={item.name}
                className="absolute left-1/2 top-1/2"
                style={{
                  animation: `orbit-${index} ${duration}s linear infinite`,
                  transformOrigin: `${radius}px 0`
                }}
              >
                <style>{`
                  @keyframes orbit-${index} {
                    from { transform: rotate(${index * 54}deg) translateX(${radius}%) rotate(-${index * 54}deg); }
                    to { transform: rotate(${360 + index * 54}deg) translateX(${radius}%) rotate(-${360 + index * 54}deg); }
                  }
                `}</style>
                <div className="-translate-x-1/2 -translate-y-1/2 rounded-2xl border border-[var(--line)] bg-black/54 p-4 text-white/70 backdrop-blur-xl transition hover:text-white">
                  <Icon size={20} />
                </div>
              </div>
            );
          })}
          <div className="absolute inset-0 grid place-items-center">
            <div className="panel max-w-48 rounded-3xl p-5 text-center">
              <p className="text-xs uppercase text-white/38">System</p>
              <p className="mt-2 text-lg font-semibold text-white">Motion Architecture</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
