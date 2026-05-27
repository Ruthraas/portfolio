"use client";

import { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

type UseTimelineScrollOptions = {
  locale: string;
  progressRef: React.RefObject<HTMLSpanElement | null>;
};

export function useTimelineScroll({ locale, progressRef }: UseTimelineScrollOptions) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const desktopTrigger = useRef<ScrollTrigger | null>(null);

  const updateCards = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const progress =
      desktopTrigger.current?.progress ??
      track.scrollLeft / Math.max(1, track.scrollWidth - track.clientWidth);
    progressRef.current?.style.setProperty("transform", `scaleX(${progress})`);

    const trackCenter = track.getBoundingClientRect().left + track.clientWidth / 2;
    const cards = track.querySelectorAll<HTMLElement>("[data-timeline-card]");

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(trackCenter - cardCenter);
      const focus = clamp(1 - distance / (track.clientWidth * 0.48), 0, 1);
      const drift = clamp((trackCenter - cardCenter) / track.clientWidth, -1, 1);

      card.style.setProperty("--timeline-focus", focus.toFixed(3));
      card.style.setProperty("--timeline-drift", drift.toFixed(3));
    });
  }, [progressRef]);

  const scrollByPage = useCallback((direction: "previous" | "next") => {
    const track = trackRef.current;
    const trigger = desktopTrigger.current;

    if (trigger) {
      const distance = window.innerHeight * 0.72;
      window.scrollBy({
        top: direction === "next" ? distance : -distance,
        behavior: "smooth"
      });
      return;
    }

    if (!track) return;

    track.scrollBy({
      left: direction === "next" ? track.clientWidth * 0.82 : track.clientWidth * -0.82,
      behavior: "smooth"
    });
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const media = gsap.matchMedia();

    media.add("(min-width: 768px)", () => {
      gsap.set(track, { x: 0 });

      const setSectionHeight = () => {
        const distance = Math.max(0, track.scrollWidth - track.clientWidth);
        section.style.setProperty("--timeline-scroll-distance", `${distance * 1.55}px`);
      };

      setSectionHeight();
      updateCards();

      const tween = gsap.to(track, {
        x: () => -Math.max(0, track.scrollWidth - track.clientWidth),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 12%",
          end: () => `+=${Math.max(0, track.scrollWidth - track.clientWidth) * 1.55}`,
          scrub: 1.65,
          invalidateOnRefresh: true,
          onRefresh: (self) => {
            desktopTrigger.current = self;
            setSectionHeight();
            updateCards();
          },
          onUpdate: (self) => {
            desktopTrigger.current = self;
            updateCards();
          }
        }
      });
      desktopTrigger.current = tween.scrollTrigger ?? null;

      const handleResize = () => {
        setSectionHeight();
        updateCards();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        desktopTrigger.current = null;
        tween.scrollTrigger?.kill();
        tween.kill();
        gsap.set(track, { clearProps: "x" });
      };
    });

    media.add("(max-width: 767px)", () => {
      section.style.setProperty("--timeline-scroll-distance", "0px");
      desktopTrigger.current = null;
      gsap.set(track, { clearProps: "x" });
      updateCards();

      const handleScroll = () => updateCards();
      track.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        track.removeEventListener("scroll", handleScroll);
      };
    });

    return () => media.revert();
  }, [locale, updateCards]);

  return {
    scrollByPage,
    sectionRef,
    trackRef
  };
}
