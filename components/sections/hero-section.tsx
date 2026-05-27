"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { heroMetrics, profile } from "@/lib/site-data";

const SplineStage = dynamic(
  () => import("@/components/spline/spline-stage").then((mod) => mod.SplineStage),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#050505,#0e0d0b_48%,#050505)]" />
    )
  }
);

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-[96svh] overflow-hidden border-b border-[var(--line)]"
      aria-label="Hero"
    >
      <SplineStage />

      <div className="page-shell relative z-10 grid min-h-[96svh] grid-rows-[1fr_auto] pt-28">
        <motion.div
          initial={{ opacity: 0, y: 34, filter: "blur(14px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="flex items-end pb-10"
        >
          <div className="max-w-5xl">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="border border-[var(--line)] bg-black/42 px-3 py-2 text-xs font-black uppercase text-[var(--acid)] backdrop-blur-xl">
                {profile.location}
              </span>
              <span className="border border-[var(--line)] bg-black/42 px-3 py-2 text-xs font-black uppercase text-white/58 backdrop-blur-xl">
                Spline / GSAP / Next.js 15
              </span>
            </div>

            <h1 className="text-balance text-6xl font-black leading-[0.86] text-[var(--foreground)] sm:text-7xl md:text-8xl lg:text-9xl">
              Arthur
              <span className="display-serif block text-white/58">Ruhtra</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/67 md:text-xl">
              {profile.title}. {profile.thesis}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <MagneticButton href="#work">
                See the work <ArrowDown size={18} />
              </MagneticButton>
              <MagneticButton href={profile.resume} download variant="outline">
                Resume <Download size={18} />
              </MagneticButton>
              <MagneticButton
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                variant="outline"
              >
                GitHub <ArrowUpRight size={18} />
              </MagneticButton>
            </div>
          </div>
        </motion.div>

        <motion.div
          id="index"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 grid border border-[var(--line)] bg-black/42 backdrop-blur-2xl sm:grid-cols-3"
        >
          {heroMetrics.map((metric) => (
            <div
              key={metric.label}
              className="border-b border-[var(--line)] p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
            >
              <p className="text-xs font-black uppercase text-white/38">{metric.label}</p>
              <p className="mt-2 text-lg font-black text-white">{metric.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
