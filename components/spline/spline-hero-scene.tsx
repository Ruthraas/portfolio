"use client";

const SPLINE_SCENE_URL =
  "https://my.spline.design/ticktockinteractivelanding-Dk9NVmiFW4slv3kvVHB9NS1b/";

export function SplineHeroScene() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[#030303]">
      <iframe
        title="Interactive Spline spatial cube"
        src={SPLINE_SCENE_URL}
        className="absolute left-1/2 top-1/2 h-[115%] w-[118%] -translate-x-1/2 -translate-y-1/2 scale-[1.08] border-0 opacity-[0.44] grayscale-[0.25] contrast-125 brightness-[0.62] saturate-[0.72] md:h-[112%] md:w-[112%] md:opacity-[0.5]"
        loading="eager"
        allow="autoplay; fullscreen; xr-spatial-tracking"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(0,0,0,0.05),rgba(0,0,0,0.58)_48%,#030303_82%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#030303] via-[#030303]/88 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#030303] to-transparent" />
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#030303] to-transparent" />
    </div>
  );
}
