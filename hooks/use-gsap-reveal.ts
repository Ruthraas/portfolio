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
              autoAlpha: 0,
              filter: "blur(12px)",
              rotateX: 7,
              scale: 0.975,
              y: 28
            },
            {
              autoAlpha: 1,
              filter: "blur(0px)",
              rotateX: 0,
              scale: 1,
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
                autoAlpha: 0,
                filter: "blur(10px)",
                rotateX: 6,
                scale: 0.98,
                y: 22
              },
              {
                autoAlpha: 1,
                filter: "blur(0px)",
                rotateX: 0,
                scale: 1,
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
