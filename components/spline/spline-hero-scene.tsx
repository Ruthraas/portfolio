"use client";

import Spline from "@splinetool/react-spline";
import type { Application } from "@splinetool/runtime";

const SPLINE_SCENE_URL =
  "https://prod.spline.design/J-J0m4XCo5t8mmMq/scene.splinecode";

const hiddenSceneTextPattern = /^Text(?:\s\d+)?$/;
const hiddenDecorativePattern =
  /^(Group 9[89]\.png(?:\s\d+)?|Group 100\.png|Group 88\.png|Group [34])$/;
type SceneObject = ReturnType<Application["getAllObjects"]>[number] & {
  parentUuid?: string;
};

export function SplineHeroScene() {
  const handleLoad = (app: Application) => {
    app.setGlobalEvents(true);

    const tuneScene = () => {
      const isMobile = window.innerWidth < 768;
      app.setZoom(isMobile ? 0.92 : 1.16);

      const cube = app.findObjectByName("Cube");
      if (cube) {
        const scale = isMobile ? 0.66 : 0.72;
        cube.color = "#aeb5b8";
        cube.scale.x = scale;
        cube.scale.y = scale;
        cube.scale.z = scale;
        cube.position.x = isMobile ? -18 : -4;
        cube.position.y = isMobile ? -16 : -10;
        cube.position.z = 150;
      }

      app.requestRender();
    };

    const cleanSceneText = () => {
      const objects = app.getAllObjects() as SceneObject[];
      const tickTockGroup = objects.find((object) => object.name === "Tick Tock");

      objects.forEach((object) => {
        const isTickTockLetter =
          Boolean(tickTockGroup?.uuid) && object.parentUuid === tickTockGroup?.uuid;

        if (
          hiddenSceneTextPattern.test(object.name) ||
          hiddenDecorativePattern.test(object.name) ||
          isTickTockLetter
        ) {
          object.hide();
        }
      });

      app.requestRender();
    };

    [0, 250, 800, 1600].forEach((delay) => {
      window.setTimeout(() => {
        cleanSceneText();
        tuneScene();
      }, delay);
    });
  };

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#030303]">
      <Spline
        scene={SPLINE_SCENE_URL}
        onLoad={handleLoad}
        className="absolute left-1/2 top-1/2 h-[114%] w-[116%] -translate-x-1/2 -translate-y-1/2 opacity-100 grayscale-[0.04] contrast-[1.38] brightness-[1.42] saturate-[1.08]"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.04),rgba(0,0,0,0.12)_42%,#030303_86%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#030303] via-[#030303]/88 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#030303] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#030303] to-transparent" />
    </div>
  );
}
