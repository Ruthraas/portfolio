"use client";

import Spline from "@splinetool/react-spline";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { splineScene } from "@/lib/site-data";

export function SplineStage() {
  const [ready, setReady] = useState(false);

  function handleLoad() {
    setReady(true);
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence>
        {!ready ? (
          <motion.div
            key="spline-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-10 bg-[linear-gradient(135deg,#050505,#0d0c0a_48%,#050505)]"
          >
            <div className="absolute inset-x-8 top-1/2 h-px bg-[linear-gradient(90deg,transparent,var(--brass),transparent)]" />
          </motion.div>
        ) : null}
      </AnimatePresence>

      <Spline
        scene={splineScene}
        onLoad={handleLoad}
        renderOnDemand
        className="size-full translate-x-[18%] scale-[1.22] opacity-[0.68] md:translate-x-0 md:scale-100 md:opacity-80"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.86)_24%,rgba(5,5,5,0.24)_62%,rgba(5,5,5,0.9)_100%)]" />
      <div className="pointer-events-none absolute inset-0 scanline opacity-20" />
    </div>
  );
}
