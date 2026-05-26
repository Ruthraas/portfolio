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
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
      className="fixed left-0 right-0 top-0 z-[60] px-4 pt-4"
    >
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/35 px-4 shadow-2xl shadow-black/30 backdrop-blur-2xl">
        <a
          href="#top"
          data-cursor="Ruhtra"
          className="flex items-center gap-3 font-semibold"
          aria-label="Go to hero"
        >
          <span className="grid size-8 place-items-center rounded-full border border-white/15 bg-white/8 text-xs text-[var(--lime)]">
            RA
          </span>
          <span className="hidden text-sm text-white/90 sm:block">
            {profile.alias}
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-cursor={item.label}
              className="rounded-full px-4 py-2 text-sm text-white/62 transition hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          data-cursor="GitHub"
          className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/7 px-4 py-2 text-sm text-white/76 transition hover:border-white/22 hover:bg-white/12 hover:text-white md:flex"
        >
          <Code size={16} />
          GitHub
        </a>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/7 md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div
        className={cn(
          "mx-auto mt-3 grid w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-black/72 backdrop-blur-2xl transition-all duration-300 md:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <nav className="min-h-0 p-2" aria-label="Mobile primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block rounded-xl px-4 py-3 text-sm text-white/78 hover:bg-white/8"
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
