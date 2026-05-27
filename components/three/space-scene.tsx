"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, Bloom, ChromaticAberration } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Suspense, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import {
  starFragmentShader,
  starVertexShader,
  veilFragmentShader,
  veilVertexShader
} from "@/lib/shaders";

function seeded(index: number) {
  const x = Math.sin(index * 127.17) * 10000;
  return x - Math.floor(x);
}

function useScrollUniform() {
  const scrollRef = useRef(0);

  useEffect(() => {
    const update = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      scrollRef.current = window.scrollY / max;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return scrollRef;
}

function StarField() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const pointer = useThree((state) => state.pointer);
  const scrollRef = useScrollUniform();
  const pointerTarget = useMemo(() => new THREE.Vector2(0.5, 0.5), []);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uPointer: { value: new THREE.Vector2(0.5, 0.5) },
      uScroll: { value: 0 }
    }),
    []
  );

  const attributes = useMemo(() => {
    const count = 1100;
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const depths = new Float32Array(count);

    for (let i = 0; i < count; i += 1) {
      const layer = seeded(i + 8);
      const radius = 4 + seeded(i + 1) * 10;
      const angle = seeded(i + 2) * Math.PI * 2;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = (seeded(i + 3) - 0.5) * 8;
      positions[i * 3 + 2] = -2 - seeded(i + 4) * 16;
      sizes[i] = 0.012 + seeded(i + 5) * 0.026;
      depths[i] = 0.25 + layer * 0.75;
    }

    return { positions, sizes, depths };
  }, []);

  useFrame(({ clock }) => {
    if (!materialRef.current) return;
    pointerTarget.set(pointer.x * 0.5 + 0.5, pointer.y * 0.5 + 0.5);
    materialRef.current.uniforms.uPointer.value.lerp(pointerTarget, 0.035);
    materialRef.current.uniforms.uTime.value = clock.elapsedTime;
    materialRef.current.uniforms.uScroll.value = THREE.MathUtils.lerp(
      materialRef.current.uniforms.uScroll.value,
      scrollRef.current,
      0.035
    );
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[attributes.positions, 3]} />
        <bufferAttribute attach="attributes-aSize" args={[attributes.sizes, 1]} />
        <bufferAttribute attach="attributes-aDepth" args={[attributes.depths, 1]} />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        args={[{ uniforms, vertexShader: starVertexShader, fragmentShader: starFragmentShader }]}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function AtmosphericVeil() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const pointer = useThree((state) => state.pointer);
  const target = useMemo(() => new THREE.Vector2(0.5, 0.5), []);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uPointer: { value: new THREE.Vector2(0.5, 0.5) }
    }),
    []
  );

  useFrame(({ clock }) => {
    if (!materialRef.current) return;
    target.set(pointer.x * 0.5 + 0.5, pointer.y * 0.5 + 0.5);
    materialRef.current.uniforms.uPointer.value.lerp(target, 0.025);
    materialRef.current.uniforms.uTime.value = clock.elapsedTime;
  });

  return (
    <mesh position={[0, 0, -5.2]} scale={[13, 8, 1]}>
      <planeGeometry args={[1, 1, 64, 64]} />
      <shaderMaterial
        ref={materialRef}
        args={[{ uniforms, vertexShader: veilVertexShader, fragmentShader: veilFragmentShader }]}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}

function CameraDrift() {
  const pointer = useThree((state) => state.pointer);
  const camera = useThree((state) => state.camera);

  useFrame(({ clock }) => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.18, 0.03);
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      pointer.y * 0.12 + Math.sin(clock.elapsedTime * 0.08) * 0.05,
      0.03
    );
    camera.lookAt(0, 0, -4);
  });

  return null;
}

export function SpaceScene() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 5.6], fov: 46 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <fog attach="fog" args={["#030303", 5.5, 19]} />
          <AtmosphericVeil />
          <StarField />
          <CameraDrift />
          <EffectComposer multisampling={0}>
            <Bloom intensity={0.16} luminanceThreshold={0.72} mipmapBlur />
            <ChromaticAberration
              blendFunction={BlendFunction.NORMAL}
              offset={new THREE.Vector2(0.00035, 0.00022)}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}
