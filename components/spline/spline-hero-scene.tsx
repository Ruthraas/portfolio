"use client";

import Spline from "@splinetool/react-spline";

const SPLINE_SCENE_URL =
  "https://prod.spline.design/J-J0m4XCo5t8mmMq/scene.splinecode";

export function SplineHeroScene() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#030303]">
      <Spline
        scene={SPLINE_SCENE_URL}
        className="absolute left-1/2 top-1/2 h-[114%] w-[116%] -translate-x-1/2 -translate-y-1/2 opacity-[0.58] grayscale-[0.18] contrast-125 brightness-[0.68] saturate-[0.8]"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(0,0,0,0.05),rgba(0,0,0,0.58)_48%,#030303_82%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#030303] via-[#030303]/88 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#030303] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#030303] to-transparent" />
    </div>
  );
}
