"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Cpu, MapPin, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { differentiators, profile, skillGroups } from "@/lib/site-data";

export function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  useGsapReveal(ref);

  return (
    <section id="about" ref={ref} className="section-pad relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[var(--cyan)]/10 blur-3xl"
      />
      <div className="section-inner grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div data-reveal>
          <SectionHeading
            eyebrow="Profile"
            title={
              <>
                Clean architecture with a cinematic surface.
              </>
            }
            description={profile.summary}
          />
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/56">
            {profile.philosophy}
          </p>
        </div>

        <div className="grid gap-5">
          <motion.div
            data-reveal
            whileHover={{ rotateX: 4, rotateY: -5, y: -6 }}
            transition={{ type: "spring", stiffness: 160, damping: 18 }}
            className="glass-panel preserve-3d rounded-[1.75rem] p-6"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase text-white/42">Identity</p>
                <h3 className="mt-2 text-3xl font-black text-white">
                  {profile.displayName}
                </h3>
                <p className="mt-1 text-white/56">@{profile.alias}</p>
              </div>
              <div className="grid size-24 place-items-center rounded-3xl border border-white/10 bg-black/35 shadow-[0_0_60px_rgba(125,231,255,0.14)]">
                <Cpu className="text-[var(--cyan)]" size={38} />
              </div>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <MapPin size={18} className="text-[var(--lime)]" />
                <p className="mt-3 text-sm text-white/52">Based in</p>
                <p className="font-semibold text-white">{profile.location}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <Sparkles size={18} className="text-[var(--amber)]" />
                <p className="mt-3 text-sm text-white/52">Formation</p>
                <p className="font-semibold text-white">Rocketseat ONE</p>
              </div>
            </div>
          </motion.div>

          <div data-reveal className="glass-panel rounded-[1.75rem] p-6">
            <p className="text-sm uppercase text-white/42">Skill signal</p>
            <div className="mt-5 space-y-5">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-semibold text-white">{group.label}</p>
                    <p className="text-sm text-white/45">{group.value}%</p>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-white/8">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${group.value}%` }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full rounded-full bg-[linear-gradient(90deg,var(--cyan),var(--lime),var(--amber))]"
                    />
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-xs text-white/58"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div data-reveal className="grid gap-3 sm:grid-cols-2">
            {differentiators.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm leading-6 text-white/64"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
