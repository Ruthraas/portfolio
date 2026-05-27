"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type PortfolioScrollEvent = CustomEvent<{
  progress: number;
  scroll: number;
  velocity: number;
}>;

const clamp = gsap.utils.clamp;

export function ScrollEffects() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-scroll-parallax]").forEach((element) => {
        const depth = Number(element.dataset.scrollParallax ?? 14);

        gsap.fromTo(
          element,
          { yPercent: depth * -0.45 },
          {
            yPercent: depth * 0.55,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.55
            }
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-scroll-reveal-3d]").forEach((element) => {
        gsap.fromTo(
          element,
          {
            autoAlpha: 0,
            filter: "blur(14px)",
            rotateX: 8,
            scale: 0.96,
            y: 34
          },
          {
            autoAlpha: 1,
            filter: "blur(0px)",
            rotateX: 0,
            scale: 1,
            y: 0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              end: "top 52%",
              scrub: 0.6
            }
          }
        );
      });

      const velocityTargets = gsap.utils.toArray<HTMLElement>("[data-scroll-velocity]");
      const ctaTargets = gsap.utils.toArray<HTMLElement>("[data-cta-depth]");
      const quickVelocity = velocityTargets.map((element) => ({
        rotate: gsap.quickTo(element, "rotate", { duration: 0.42, ease: "power3.out" }),
        y: gsap.quickTo(element, "y", { duration: 0.42, ease: "power3.out" })
      }));
      const quickCta = ctaTargets.map((element) => ({
        rotateX: gsap.quickTo(element, "rotateX", { duration: 0.55, ease: "power3.out" }),
        rotateY: gsap.quickTo(element, "rotateY", { duration: 0.55, ease: "power3.out" }),
        y: gsap.quickTo(element, "y", { duration: 0.55, ease: "power3.out" })
      }));

      const handleScroll = (event: Event) => {
        const { velocity, progress } = (event as PortfolioScrollEvent).detail;
        const reactiveVelocity = clamp(-18, 18, velocity * 46);

        quickVelocity.forEach((target, index) => {
          target.y(clamp(-16, 16, reactiveVelocity * -0.42));
          target.rotate(clamp(-1.7, 1.7, reactiveVelocity * 0.055 * (index % 2 ? -1 : 1)));
        });

        quickCta.forEach((target) => {
          target.rotateX(4 + clamp(-4, 4, velocity * -11));
          target.rotateY(-5 + Math.sin(progress * Math.PI * 2) * 2.2);
          target.y(clamp(-12, 12, velocity * -26));
        });
      };

      window.addEventListener("portfolio:scroll", handleScroll);

      return () => {
        window.removeEventListener("portfolio:scroll", handleScroll);
      };
    });

    return () => ctx.revert();
  }, []);

  return null;
}
