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
        options.selector ?? ".reveal, [data-reveal]"
      ).filter((target) => !target.hasAttribute("data-scroll-reveal-3d"));

      targets.forEach((target, index) => {
        if (options.scrub) {
          gsap.fromTo(
            target,
            {
              clipPath: "inset(0% 0% 100% 0%)",
              rotateX: 5,
              y: 34
            },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              rotateX: 0,
              y: 0,
              duration: 0.95,
              delay: index * 0.035,
              ease: "power3.out",
              scrollTrigger: {
                trigger: target,
                start: options.start ?? "top 82%",
                scrub: options.scrub
              }
            }
          );

          return;
        }

        ScrollTrigger.create({
          trigger: target,
          start: options.start ?? "top 84%",
          once: true,
          onEnter: () => {
            gsap.fromTo(
              target,
              {
                clipPath: "inset(0% 0% 100% 0%)",
                rotateX: 5,
                y: 26
              },
              {
                clipPath: "inset(0% 0% 0% 0%)",
                rotateX: 0,
                y: 0,
                duration: 0.8,
                delay: index * 0.025,
                ease: "power3.out",
                overwrite: "auto"
              }
            );
          }
        });
      });
    }, ref);

    return () => ctx.revert();
  }, [options.scrub, options.selector, options.start, ref]);
}
