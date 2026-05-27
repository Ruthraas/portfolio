"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePortfolioI18n } from "@/components/providers/i18n-provider";
import { navSections, profile } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n/translations";

export function SiteHeader() {
  const { content, locale, setLocale } = usePortfolioI18n();
  const [active, setActive] = useState("top");

  useEffect(() => {
    const ids = ["top", ...navSections.map((item) => item.id)];
    let frame = 0;

    const updateActiveSection = () => {
      frame = 0;
      const focusLine = window.innerHeight * 0.36;
      const current =
        ids.find((id) => {
          const element = document.getElementById(id);
          if (!element) return false;
          const rect = element.getBoundingClientRect();
          return rect.top <= focusLine && rect.bottom > focusLine;
        }) ?? "top";

      setActive(current);
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
      className="fixed left-4 right-4 top-4 z-[60] lg:left-8 lg:right-8"
    >
      <div className="mx-auto flex min-h-14 max-w-[76rem] items-center justify-between gap-4 rounded-full border border-white/10 bg-black/54 px-4 shadow-[0_1rem_4rem_rgba(0,0,0,0.24)] backdrop-blur-xl sm:px-5">
        <a href="#top" className="shrink-0">
          <span className="block max-w-[12.5rem] truncate text-[0.7rem] uppercase tracking-[0.22em] text-white/36 sm:max-w-none">
            {profile.displayName}
          </span>
          <span className="block text-sm font-semibold text-white/88">
            {profile.alias}
          </span>
        </a>

        <nav
          aria-label="Principal"
          className="hidden items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.025] p-1 md:flex"
        >
          {navSections.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "rounded-full border px-3 py-2 text-xs font-medium transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70",
                  isActive
                    ? "border-white bg-white text-black shadow-[0_0.65rem_1.6rem_rgba(255,255,255,0.14)]"
                    : "border-transparent text-white/52 hover:border-white/10 hover:bg-transparent hover:text-white hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]",
                )}
              >
                {content.nav[item.key]}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle locale={locale} setLocale={setLocale} />
        </div>
      </div>

      <nav
        aria-label="Navegação mobile"
        className="no-scrollbar mx-auto mt-2 flex max-w-[calc(100vw-2rem)] gap-2 overflow-x-auto rounded-full border border-white/10 bg-black/48 p-1 backdrop-blur-xl md:hidden"
      >
        {navSections.map((item) => {
          const isActive = active === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "shrink-0 rounded-full border px-3 py-2 text-xs transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70",
                isActive
                  ? "border-white bg-white text-black"
                  : "border-transparent text-white/58 hover:border-white/10 hover:bg-transparent hover:text-white",
              )}
            >
              {content.nav[item.key]}
            </a>
          );
        })}
      </nav>
    </motion.header>
  );
}

function LanguageToggle({
  locale,
  setLocale,
}: {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}) {
  return (
    <div className="inline-flex rounded-full border border-white/10 p-1">
      {(["pt", "en"] as Locale[]).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLocale(item)}
          className={cn(
            "rounded-full border px-3 py-1 text-xs uppercase transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70",
            locale === item
              ? "border-white bg-white text-black"
              : "border-transparent text-white/42 hover:border-white/10 hover:bg-transparent hover:text-white",
          )}
          aria-pressed={locale === item}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
