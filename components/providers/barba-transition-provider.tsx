"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import gsap from "gsap";

export function BarbaTransitionProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    let mounted = true;

    async function bootBarba() {
      const { default: barba } = await import("@barba/core");
      if (!mounted || !document.querySelector("[data-barba='wrapper']")) return;

      try {
        // Barba is prepared for future case-study pages. Hash links and external
        // project links are prevented so the one-page portfolio keeps native
        // scrolling while real route changes get a cinematic opacity/blur pass.
        barba.init({
          preventRunning: true,
          timeout: 5000,
          prevent: ({ el }) => {
            const anchor = el as HTMLAnchorElement | null;
            const href = anchor?.getAttribute?.("href") ?? "";
            return (
              href.startsWith("#") ||
              href.startsWith("mailto:") ||
              anchor?.target === "_blank" ||
              Boolean(anchor?.closest("[data-barba-prevent]"))
            );
          },
          transitions: [
            {
              name: "cinematic-page-transition",
              async leave(data) {
                await gsap.to(data.current.container, {
                  autoAlpha: 0,
                  y: -24,
                  filter: "blur(18px)",
                  duration: 0.55,
                  ease: "power3.inOut"
                });
              },
              enter(data) {
                return gsap.fromTo(
                  data.next.container,
                  { autoAlpha: 0, y: 24, filter: "blur(18px)" },
                  {
                    autoAlpha: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 0.75,
                    ease: "power4.out"
                  }
                );
              }
            }
          ]
        });
      } catch {
        // Next dev can remount providers during Fast Refresh; a duplicate Barba
        // boot should never break the portfolio experience.
      }
    }

    void bootBarba();

    return () => {
      mounted = false;
    };
  }, []);

  return children;
}
