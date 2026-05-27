"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLSpanElement>(null);
  const markerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current || !glowRef.current || !markerRef.current) return;
    const tween = gsap.to([ref.current, glowRef.current], {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.2
      }
    });
    const markerTween = gsap.to(markerRef.current, {
      x: () => window.innerWidth,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.2,
        invalidateOnRefresh: true
      }
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      markerTween.scrollTrigger?.kill();
      markerTween.kill();
    };
  }, []);

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-[70] h-3 w-full overflow-hidden">
      <span
        ref={glowRef}
        className="absolute left-0 top-0 h-3 w-full origin-left scale-x-0 bg-[linear-gradient(90deg,rgba(216,201,165,0.18),rgba(143,157,168,0.16),rgba(241,239,233,0.2))] blur-md"
      />
      <span
        className="absolute left-0 top-0 h-px w-full origin-left scale-x-0 bg-[linear-gradient(90deg,var(--warm),var(--mist),var(--fg))]"
        ref={ref}
      />
      <span
        ref={markerRef}
        className="absolute -left-2 top-0 size-3 rounded-full bg-white shadow-[0_0_1.2rem_rgba(255,255,255,0.72)]"
      />
    </div>
  );
}
