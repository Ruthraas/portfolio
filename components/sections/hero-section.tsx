"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Code, Download } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { profile, stats } from "@/lib/site-data";
import { ease, revealVariants, staggerContainer } from "@/lib/motion";

const HeroScene = dynamic(
  () => import("@/components/three/hero-scene").then((mod) => mod.HeroScene),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(125,231,255,0.2),transparent_34%),#050505]" />
    )
  }
);

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden"
      aria-label="Hero"
    >
      <HeroScene />
      <div className="cinematic-grid pointer-events-none absolute inset-0 opacity-35" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#050505] to-transparent" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="section-inner relative z-10 flex min-h-[100svh] flex-col justify-end pb-16 pt-32 md:pb-20"
      >
        <motion.p variants={revealVariants} className="eyebrow">
          {profile.location}
        </motion.p>

        <motion.div variants={revealVariants} className="mt-6 max-w-5xl">
          <h1 className="text-balance text-6xl font-black leading-[0.88] text-white sm:text-7xl md:text-8xl lg:text-9xl">
            Arthur Almeida
            <span className="block text-white/42">Ruhtra</span>
          </h1>
        </motion.div>

        <motion.p
          variants={revealVariants}
          className="mt-7 max-w-2xl text-lg leading-8 text-white/70 md:text-xl"
        >
          {profile.title}. I build sharp interfaces, useful APIs and immersive
          digital systems with cinematic interaction and serious engineering.
        </motion.p>

        <motion.div
          variants={revealVariants}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <MagneticButton href="#projects">
            View projects <ArrowDown size={18} />
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
            GitHub <Code size={18} />
          </MagneticButton>
        </motion.div>

        <motion.div
          variants={revealVariants}
          className="mt-16 grid max-w-4xl gap-3 sm:grid-cols-3"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-panel rounded-2xl p-4"
              style={{ animation: "float-panel 5.5s ease-in-out infinite" }}
            >
              <p className="text-xs uppercase text-white/42">{stat.label}</p>
              <p className="mt-2 text-lg font-semibold text-white">{stat.value}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        data-cursor="Scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6, ease: ease.cinematic }}
        className="absolute bottom-6 right-6 z-20 hidden items-center gap-3 rounded-full border border-white/12 bg-white/7 px-4 py-3 text-xs uppercase text-white/58 backdrop-blur-xl md:flex"
      >
        Keep scrolling
        <ArrowUpRight size={16} />
      </motion.a>
    </section>
  );
}
