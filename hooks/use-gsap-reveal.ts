"use client";

import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealOptions = {
  selector?: string;
  start?: string;
  scrub?: boolean | number;
};

export function useGsapReveal<T extends HTMLElement>(
  ref: RefObject<T | null>,
  options: RevealOptions = {}
) {
  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>(
        options.selector ?? "[data-reveal]"
      );

      targets.forEach((target, index) => {
        gsap.fromTo(
          target,
          {
            autoAlpha: 0,
            y: 48,
            filter: "blur(16px)"
          },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.05,
            delay: index * 0.045,
            ease: "power4.out",
            scrollTrigger: {
              trigger: target,
              start: options.start ?? "top 82%",
              scrub: options.scrub ?? false
            }
          }
        );
      });
    }, ref);

    return () => ctx.revert();
  }, [options.scrub, options.selector, options.start, ref]);
}
