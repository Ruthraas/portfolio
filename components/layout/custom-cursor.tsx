"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";

export function CustomCursor() {
  const coarse = useMediaQuery("(pointer: coarse)");
  const [label, setLabel] = useState("");
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 520, damping: 42, mass: 0.55 });
  const smoothY = useSpring(y, { stiffness: 520, damping: 42, mass: 0.55 });

  useEffect(() => {
    if (coarse) return;

    const move = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      const target = event.target as HTMLElement;
      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      setLabel(cursorTarget?.dataset.cursor ?? "");
    };

    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [coarse, x, y]);

  if (coarse) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[80] grid place-items-center rounded-full border border-white/32 bg-white/10 px-2 text-[10px] font-black uppercase text-white/82 mix-blend-difference"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%"
      }}
      animate={{
        width: label ? 70 : 14,
        height: label ? 28 : 14,
        opacity: 1
      }}
      transition={{ duration: 0.18 }}
    >
      <span className={label ? "opacity-100" : "opacity-0"}>{label}</span>
    </motion.div>
  );
}
