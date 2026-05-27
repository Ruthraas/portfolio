"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const instance = new Lenis({
      duration: 1.18,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2
    });
    // Lenis owns the scroll position, GSAP owns the scroll-linked timelines.
    // Wiring both to the same raf loop prevents jitter and keeps ScrollTrigger
    // perfectly synced with the smoothed virtual scroll value.
    instance.on("scroll", (event) => {
      const progress = event.limit > 0 ? event.scroll / event.limit : 0;
      const velocity = Number.isFinite(event.velocity) ? event.velocity : 0;

      document.documentElement.style.setProperty("--scroll-progress", String(progress));
      document.documentElement.style.setProperty("--scroll-velocity", String(velocity));
      window.dispatchEvent(
        new CustomEvent("portfolio:scroll", {
          detail: {
            progress,
            scroll: event.scroll,
            velocity
          }
        })
      );

      ScrollTrigger.update();
    });

    const handleAnchorClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>("a[href^='#']");
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector<HTMLElement>(href);
      if (!target) return;

      event.preventDefault();
      instance.scrollTo(target, {
        offset: href === "#top" ? 0 : -96,
        duration: 1.08,
        easing: (t: number) => 1 - Math.pow(1 - t, 4)
      });
      history.replaceState(null, "", href);
    };

    const update = (time: number) => {
      instance.raf(time * 1000);
    };

    document.addEventListener("click", handleAnchorClick);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    ScrollTrigger.refresh();

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      gsap.ticker.remove(update);
      instance.destroy();
    };
  }, []);

  return children;
}
