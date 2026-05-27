"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function PageTransitionProvider({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      // A lightweight transition system for the current one-page build. It gives
      // the site an intentional cinematic entrance without routing overhead.
      gsap.fromTo(
        "[data-transition-surface]",
        { yPercent: 0 },
        {
          yPercent: -102,
          duration: 1.15,
          ease: "expo.inOut",
          delay: 0.08
        }
      );

      gsap.fromTo(
        "[data-page-root]",
        { autoAlpha: 0, y: 12 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.05,
          ease: "power4.out",
          delay: 0.42,
          onComplete: () => {
            gsap.set("[data-page-root]", { clearProps: "transform" });
          }
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref}>
      <div
        data-transition-surface
        aria-hidden="true"
        className="fixed inset-0 z-[90] bg-[#050505]"
      />
      {children}
    </div>
  );
}
