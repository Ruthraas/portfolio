"use client";

import { motion } from "framer-motion";
import { Code, Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems, profile } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -36, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      className="fixed left-0 right-0 top-0 z-[60] px-3 pt-3 sm:px-5"
    >
      <div className="mx-auto grid h-14 w-full max-w-[1320px] grid-cols-[1fr_auto_1fr] items-center border border-[var(--line)] bg-black/48 px-3 backdrop-blur-2xl">
        <a
          href="#top"
          data-cursor="Ruhtra"
          className="flex items-center gap-3 text-sm font-black uppercase"
          aria-label="Go to hero"
        >
          <span className="grid size-8 place-items-center border border-[var(--line)] bg-white/[0.04] text-[11px] text-[var(--acid)]">
            RA
          </span>
          <span className="hidden text-white/86 sm:block">{profile.alias}</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-cursor={item.label}
              className="px-4 py-2 text-xs font-bold uppercase text-white/48 transition hover:bg-white/[0.055] hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden justify-end md:flex">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            data-cursor="GitHub"
            className="inline-flex items-center gap-2 border border-[var(--line)] bg-white/[0.035] px-4 py-2 text-xs font-bold uppercase text-white/70 transition hover:border-white/28 hover:bg-white/[0.07] hover:text-white"
          >
            <Code size={15} />
            GitHub
          </a>
        </div>

        <button
          type="button"
          className="ml-auto grid size-10 place-items-center border border-[var(--line)] bg-white/[0.035] md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div
        className={cn(
          "mx-auto mt-2 grid w-full max-w-[1320px] overflow-hidden border border-[var(--line)] bg-black/82 backdrop-blur-2xl transition-all duration-300 md:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <nav className="min-h-0 p-2" aria-label="Mobile primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block px-4 py-3 text-sm font-bold uppercase text-white/72 hover:bg-white/[0.055]"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
