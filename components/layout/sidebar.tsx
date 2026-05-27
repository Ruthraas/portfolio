"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePortfolioI18n } from "@/components/providers/i18n-provider";
import { navSections, profile, socials } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n/translations";

export function Sidebar() {
  const { content, locale, setLocale } = usePortfolioI18n();
  const [active, setActive] = useState("top");

  useEffect(() => {
    const ids = ["top", ...navSections.map((item) => item.id)];
    let frame = 0;

    const updateActiveSection = () => {
      frame = 0;
      const focusLine = window.innerHeight * 0.42;
      let current = "top";

      for (const id of ids) {
        const element = document.getElementById(id);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        if (rect.top <= focusLine && rect.bottom > focusLine) {
          current = id;
          break;
        }

        if (rect.top <= focusLine) current = id;
      }

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
    <>
      <motion.aside
        initial={{ x: -24, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
        className="fixed bottom-6 left-6 top-6 z-[60] hidden w-44 flex-col justify-between border-r border-[var(--line-soft)] pr-6 lg:flex"
      >
        <div>
          <a href="#top" data-cursor="Home" className="group block">
            <span className="block text-xs uppercase text-white/36">Arthur</span>
            <span className="mt-1 block text-lg font-medium text-white/86">
              {profile.alias}
            </span>
          </a>

          <nav className="mt-16 space-y-4" aria-label="Primary">
            {navSections.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  data-cursor={content.nav[item.key]}
                  aria-current={isActive ? "page" : undefined}
                  className="group flex items-center gap-3 text-sm text-white/42 transition hover:text-white"
                >
                  <span
                    className={cn(
                      "h-px transition-all duration-300",
                      isActive ? "w-8 bg-white/72" : "w-3 bg-white/18 group-hover:w-6"
                    )}
                  />
                  {content.nav[item.key]}
                </a>
              );
            })}
          </nav>
        </div>

        <div className="space-y-9">
          <div>
            <p className="mb-3 text-[11px] uppercase text-white/28">
              {content.sidebar.social}
            </p>
            <div className="space-y-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  data-cursor={social.label}
                  className="block text-sm text-white/44 transition hover:text-white"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-[11px] uppercase text-white/28">
              {content.sidebar.language}
            </p>
            <LanguageToggle locale={locale} setLocale={setLocale} />
          </div>
        </div>
      </motion.aside>

      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.32 }}
        className="fixed left-3 right-3 top-3 z-[60] flex h-14 items-center justify-between rounded-full border border-[var(--line)] bg-black/48 px-4 backdrop-blur-md lg:hidden"
      >
        <a href="#top" className="text-sm font-medium text-white/86">
          {profile.alias}
        </a>
        <LanguageToggle locale={locale} setLocale={setLocale} />
      </motion.div>
    </>
  );
}

function LanguageToggle({
  locale,
  setLocale
}: {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}) {
  return (
    <div className="inline-flex rounded-full border border-[var(--line)] p-1">
      {(["pt", "en"] as Locale[]).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLocale(item)}
          className={cn(
            "rounded-full px-3 py-1 text-xs uppercase transition",
            locale === item ? "bg-white text-black" : "text-white/42 hover:text-white"
          )}
          aria-pressed={locale === item}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
