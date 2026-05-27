"use client";

import Spline from "@splinetool/react-spline";
import type { Application } from "@splinetool/runtime";

const SPLINE_SCENE_URL =
  "https://prod.spline.design/J-J0m4XCo5t8mmMq/scene.splinecode";

const hiddenSceneTextPattern = /^Text(?:\s\d+)?$/;
type SceneObject = ReturnType<Application["getAllObjects"]>[number] & {
  parentUuid?: string;
};

export function SplineHeroScene() {
  const handleLoad = (app: Application) => {
    app.setGlobalEvents(true);
    app.setZoom(window.innerWidth < 768 ? 0.82 : 1);

    const cleanSceneText = () => {
      const objects = app.getAllObjects() as SceneObject[];
      const tickTockGroup = objects.find((object) => object.name === "Tick Tock");

      objects.forEach((object) => {
        const isTickTockLetter =
          Boolean(tickTockGroup?.uuid) && object.parentUuid === tickTockGroup?.uuid;

        if (hiddenSceneTextPattern.test(object.name) || isTickTockLetter) {
          object.hide();
        }
      });

      app.requestRender();
    };

    [0, 250, 800, 1600].forEach((delay) => {
      window.setTimeout(cleanSceneText, delay);
    });
  };

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#030303]">
      <Spline
        scene={SPLINE_SCENE_URL}
        onLoad={handleLoad}
        className="absolute left-1/2 top-1/2 h-[114%] w-[116%] -translate-x-1/2 -translate-y-1/2 opacity-[0.92] grayscale-[0.08] contrast-125 brightness-[1.05] saturate-[0.92]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid place-items-center"
      >
        <span className="select-none text-[clamp(5rem,18vw,17rem)] font-black uppercase leading-none tracking-[0.08em] text-white/[0.075]">
          Ruhtra
        </span>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(0,0,0,0.02),rgba(0,0,0,0.38)_52%,#030303_84%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#030303] via-[#030303]/88 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#030303] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#030303] to-transparent" />
    </div>
  );
}
