"use client";

import { useCallback, useEffect, useRef } from "react";

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

type UseTimelineMotionOptions = {
  progressRef: React.RefObject<HTMLSpanElement | null>;
};

export function useTimelineMotion({ progressRef }: UseTimelineMotionOptions) {
  const trackRef = useRef<HTMLDivElement>(null);
  const targetScroll = useRef(0);
  const frame = useRef(0);

  const updateCards = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = Math.max(1, track.scrollWidth - track.clientWidth);
    const progress = track.scrollLeft / maxScroll;
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

  const animateToTarget = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const delta = targetScroll.current - track.scrollLeft;
    track.scrollLeft += delta * 0.14;
    updateCards();

    if (Math.abs(delta) > 0.35) {
      frame.current = window.requestAnimationFrame(animateToTarget);
      return;
    }

    track.scrollLeft = targetScroll.current;
    frame.current = 0;
    updateCards();
  }, [updateCards]);

  const scrollByPage = useCallback(
    (direction: "previous" | "next") => {
      const track = trackRef.current;
      if (!track) return;

      const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
      const distance = track.clientWidth * 0.82;
      targetScroll.current = clamp(
        track.scrollLeft + (direction === "next" ? distance : -distance),
        0,
        maxScroll
      );

      if (!frame.current) frame.current = window.requestAnimationFrame(animateToTarget);
    },
    [animateToTarget]
  );

  const handleWheel = useCallback(
    (event: React.WheelEvent<HTMLDivElement>) => {
      const track = trackRef.current;
      if (!track || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;

      const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
      const nextScroll = clamp(targetScroll.current + event.deltaY * 0.92, 0, maxScroll);
      const canScroll = nextScroll !== targetScroll.current;

      if (!canScroll) return;

      event.preventDefault();
      targetScroll.current = nextScroll;

      if (!frame.current) frame.current = window.requestAnimationFrame(animateToTarget);
    },
    [animateToTarget]
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    targetScroll.current = track.scrollLeft;
    updateCards();

    const handleScroll = () => {
      if (!frame.current) targetScroll.current = track.scrollLeft;
      updateCards();
    };
    const handleResize = () => updateCards();

    track.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      if (frame.current) window.cancelAnimationFrame(frame.current);
      track.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [updateCards]);

  return {
    handleWheel,
    scrollByPage,
    trackRef
  };
}
