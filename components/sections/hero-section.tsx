"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { heroSignals, profile } from "@/lib/site-data";

const AtmosphereScene = dynamic(
  () =>
    import("@/components/three/atmosphere-scene").then(
      (mod) => mod.AtmosphereScene
    ),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(216,201,165,0.11),transparent_34%),#050505]" />
    )
  }
);

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden border-b border-[var(--line)]"
      aria-label="Hero"
    >
      <AtmosphereScene />
      <div className="pointer-events-none absolute inset-0 bg-black/28" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.28),transparent_45%,rgba(5,5,5,0.42)_100%)]" />
      <div className="hairline-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#050505] to-transparent" />

      <div className="container-x relative z-10 flex min-h-[100svh] flex-col justify-end pb-10 pt-28 md:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 32, filter: "blur(18px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.56 }}
          className="max-w-5xl"
        >
          <p className="kicker">{profile.location}</p>
          <h1 className="mt-7 text-balance text-[clamp(4.8rem,17vw,13rem)] font-black leading-[0.78] tracking-[-0.035em] text-[var(--fg)]">
            ARTHUR
          </h1>
          <div className="mt-7 grid gap-6 md:grid-cols-[0.62fr_1fr] md:items-end">
            <p className="text-xl font-semibold text-white/82 md:text-2xl">
              {profile.role}
            </p>
            <p className="max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl">
              {profile.statement}
            </p>
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <MagneticButton href="#work">
              View work <ArrowDown size={18} />
            </MagneticButton>
            <MagneticButton href={profile.resume} download variant="ghost">
              Resume <Download size={18} />
            </MagneticButton>
            <MagneticButton
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              variant="ghost"
            >
              GitHub <ArrowUpRight size={18} />
            </MagneticButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
          className="mt-16 grid max-w-4xl gap-px overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-3"
        >
          {heroSignals.map((signal) => (
            <div key={signal.label} className="bg-black/42 p-5 backdrop-blur-xl">
              <p className="text-xs uppercase text-white/36">{signal.label}</p>
              <p className="mt-2 text-base font-semibold text-white/82">
                {signal.value}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
