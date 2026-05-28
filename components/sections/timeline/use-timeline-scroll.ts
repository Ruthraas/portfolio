"use client";

import { useCallback, useEffect, useRef, useState, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

type UseTimelineScrollOptions = {
  itemCount: number;
  markerRef: RefObject<SVGCircleElement | null>;
  pathRef: RefObject<SVGPathElement | null>;
  progressPathRef: RefObject<SVGPathElement | null>;
};

export function useTimelineScroll({
  itemCount,
  markerRef,
  pathRef,
  progressPathRef
}: UseTimelineScrollOptions) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updatePath = useCallback(
    (progress: number) => {
      const path = pathRef.current;
      const progressPath = progressPathRef.current;
      const marker = markerRef.current;
      if (!path || !progressPath || !marker) return;

      const length = path.getTotalLength();
      const safeProgress = clamp(progress, 0, 1);
      const point = path.getPointAtLength(length * safeProgress);

      progressPath.style.strokeDasharray = `${length}`;
      progressPath.style.strokeDashoffset = `${length * (1 - safeProgress)}`;
      marker.setAttribute("cx", point.x.toFixed(2));
      marker.setAttribute("cy", point.y.toFixed(2));
    },
    [markerRef, pathRef, progressPathRef]
  );

  const setActiveCard = useCallback(
    (nextIndex: number) => {
      const safeIndex = Math.round(clamp(nextIndex, 0, Math.max(0, itemCount - 1)));
      setActiveIndex((current) => (current === safeIndex ? current : safeIndex));
    },
    [itemCount]
  );

  const updateDesktopCards = useCallback(
    (progress: number) => {
      const stage = stageRef.current;
      const track = trackRef.current;
      if (!stage || !track) return;

      const cards = Array.from(track.querySelectorAll<HTMLElement>("[data-timeline-card]"));
      const maxIndex = Math.max(1, itemCount - 1);
      const activeFloat = clamp(progress, 0, 1) * maxIndex;
      const spread = clamp(stage.clientWidth * 0.28, 230, 370);
      const wave = clamp(stage.clientHeight * 0.16, 76, 124);

      updatePath(progress);
      setActiveCard(activeFloat);

      cards.forEach((card, index) => {
        const offset = index - activeFloat;
        const distance = Math.abs(offset);
        const clamped = clamp(offset, -3.1, 3.1);
        const x = clamped * spread;
        const y = Math.sin(clamped * 1.12) * wave + Math.abs(clamped) * 18;
        const scale = clamp(1 - distance * 0.105, 0.72, 1);
        const rotate = clamp(clamped * -5, -13, 13);
        const opacity = distance > 2.7 ? 0 : clamp(1 - distance * 0.32, 0.2, 1);

        card.style.setProperty("--card-x", `${x.toFixed(2)}px`);
        card.style.setProperty("--card-y", `${y.toFixed(2)}px`);
        card.style.setProperty("--card-scale", scale.toFixed(3));
        card.style.setProperty("--card-rotate", `${rotate.toFixed(2)}deg`);
        card.style.setProperty("--card-opacity", opacity.toFixed(3));
        card.style.setProperty("--card-z", `${100 - Math.round(distance * 12)}`);
        card.style.pointerEvents = distance < 0.68 ? "auto" : "none";
        card.dataset.active = distance < 0.54 ? "true" : "false";
      });
    },
    [itemCount, setActiveCard, updatePath]
  );

  const updateMobileCards = useCallback(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const cards = Array.from(track.querySelectorAll<HTMLElement>("[data-timeline-card]"));
    const focusY = window.innerHeight * 0.42;
    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const center = rect.top + rect.height * 0.5;
      const distance = Math.abs(center - focusY);

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }

      card.dataset.active = distance < window.innerHeight * 0.32 ? "true" : "false";
    });

    const rect = section.getBoundingClientRect();
    const distance = Math.max(1, rect.height - window.innerHeight);
    const progress = clamp((window.innerHeight * 0.32 - rect.top) / distance, 0, 1);

    updatePath(progress);
    setActiveCard(nearestIndex);
  }, [setActiveCard, updatePath]);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return;

    const media = gsap.matchMedia();

    media.add("(min-width: 768px)", () => {
      const scrollDistance = () =>
        Math.max(window.innerHeight * Math.max(4, itemCount - 1) * 0.62, 2800);

      const setSectionHeight = () => {
        section.style.setProperty("--timeline-scroll-distance", `${scrollDistance()}px`);
      };

      const setStageMode = () => {
        const rect = section.getBoundingClientRect();
        const stageHeight = stage.offsetHeight || window.innerHeight;
        const travel = Math.max(1, section.offsetHeight - stageHeight);
        const progress = clamp(-rect.top / travel, 0, 1);

        if (rect.top <= 0 && rect.bottom >= stageHeight) {
          stage.style.position = "fixed";
          stage.style.top = "0px";
          stage.style.left = "0px";
          stage.style.right = "0px";
          stage.style.width = "100%";
          stage.style.zIndex = "1";
        } else if (rect.bottom < stageHeight) {
          stage.style.position = "absolute";
          stage.style.top = `${Math.max(0, section.offsetHeight - stageHeight)}px`;
          stage.style.left = "0px";
          stage.style.right = "0px";
          stage.style.width = "100%";
          stage.style.zIndex = "1";
        } else {
          stage.style.position = "relative";
          stage.style.top = "";
          stage.style.left = "";
          stage.style.right = "";
          stage.style.width = "";
          stage.style.zIndex = "";
        }

        updateDesktopCards(progress);
      };

      setSectionHeight();
      setStageMode();

      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.8,
        invalidateOnRefresh: true,
        onRefresh: () => {
          setSectionHeight();
          setStageMode();
        },
        onUpdate: () => setStageMode()
      });

      const onResize = () => {
        setSectionHeight();
        setStageMode();
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
        trigger.kill();
        section.style.removeProperty("--timeline-scroll-distance");
        stage.removeAttribute("style");
      };
    });

    media.add("(max-width: 767px)", () => {
      updateMobileCards();

      const onScroll = () => updateMobileCards();
      const onResize = () => updateMobileCards();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onResize);
      };
    });

    return () => media.revert();
  }, [itemCount, updateDesktopCards, updateMobileCards]);

  return {
    activeIndex,
    sectionRef,
    stageRef,
    trackRef
  };
}
