"use client";

import { motion } from "framer-motion";
import { Code, Menu, X } from "lucide-react";
import { useState } from "react";
import { navigation, profile } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -34, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.32 }}
      className="fixed left-0 right-0 top-0 z-[60] px-4 pt-4"
    >
      <div className="container-x flex h-14 items-center justify-between rounded-full border border-[var(--line)] bg-black/32 px-3 backdrop-blur-2xl">
        <a
          href="#top"
          data-cursor="Ruhtra"
          className="flex items-center gap-3 pl-1 text-sm font-semibold"
          aria-label="Go to hero"
        >
          <span className="grid size-8 place-items-center rounded-full border border-[var(--line)] bg-white/[0.04] text-[11px] text-[var(--warm)]">
            RA
          </span>
          <span className="hidden text-white/82 sm:block">{profile.alias}</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-cursor={item.label}
              className="rounded-full px-4 py-2 text-xs font-semibold text-white/46 transition hover:bg-white/[0.055] hover:text-white"
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
          className="hidden items-center gap-2 rounded-full border border-[var(--line)] bg-white/[0.035] px-4 py-2 text-xs font-semibold text-white/64 transition hover:border-white/24 hover:bg-white/[0.07] hover:text-white md:inline-flex"
        >
          <Code size={15} />
          GitHub
        </a>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-full border border-[var(--line)] bg-white/[0.035] md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div
        className={cn(
          "container-x mt-2 grid overflow-hidden rounded-2xl border border-[var(--line)] bg-black/76 backdrop-blur-2xl transition-all duration-300 md:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <nav className="min-h-0 p-2" aria-label="Mobile primary">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block rounded-xl px-4 py-3 text-sm text-white/72 hover:bg-white/[0.055]"
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
