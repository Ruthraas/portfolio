"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial } from "@react-three/drei";
import {
  Bloom,
  ChromaticAberration,
  DepthOfField,
  EffectComposer
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";
import {
  fluidFragmentShader,
  fluidVertexShader,
  particleFragmentShader,
  particleVertexShader
} from "@/lib/shaders";

function DistortionField() {
  const material = useRef<THREE.ShaderMaterial>(null);
  const pointer = useThree((state) => state.pointer);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uColorA: { value: new THREE.Color("#101010") },
      uColorB: { value: new THREE.Color("#7de7ff") },
      uColorC: { value: new THREE.Color("#ffc66d") }
    }),
    []
  );

  useFrame(({ clock }) => {
    if (!material.current) return;
    material.current.uniforms.uTime.value = clock.elapsedTime;
    material.current.uniforms.uMouse.value.set(
      THREE.MathUtils.lerp(
        material.current.uniforms.uMouse.value.x,
        pointer.x * 0.5 + 0.5,
        0.06
      ),
      THREE.MathUtils.lerp(
        material.current.uniforms.uMouse.value.y,
        pointer.y * 0.5 + 0.5,
        0.06
      )
    );
  });

  return (
    <mesh position={[0, 0, -2.8]} scale={[12, 7.2, 1]}>
      <planeGeometry args={[1, 1, 96, 96]} />
      <shaderMaterial
        ref={material}
        args={[{ uniforms, vertexShader: fluidVertexShader, fragmentShader: fluidFragmentShader }]}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}

function ParticleField() {
  const material = useRef<THREE.ShaderMaterial>(null);
  const pointer = useThree((state) => state.pointer);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) }
    }),
    []
  );

  const { positions, sizes } = useMemo(() => {
    const count = 980;
    const particlePositions = new Float32Array(count * 3);
    const particleSizes = new Float32Array(count);

    for (let i = 0; i < count; i += 1) {
      const radius = 2.2 + Math.random() * 5.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.52;
      particlePositions[i * 3 + 2] = radius * Math.cos(phi) - 1.2;
      particleSizes[i] = 0.018 + Math.random() * 0.045;
    }

    return { positions: particlePositions, sizes: particleSizes };
  }, []);

  useFrame(({ clock }) => {
    if (!material.current) return;
    material.current.uniforms.uTime.value = clock.elapsedTime;
    material.current.uniforms.uMouse.value.set(pointer.x * 0.5 + 0.5, pointer.y * 0.5 + 0.5);
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-aSize"
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={material}
        args={[{ uniforms, vertexShader: particleVertexShader, fragmentShader: particleFragmentShader }]}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function FloatingCore() {
  const group = useRef<THREE.Group>(null);
  const pointer = useThree((state) => state.pointer);

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.x = Math.sin(clock.elapsedTime * 0.35) * 0.12 + pointer.y * 0.08;
    group.current.rotation.y = clock.elapsedTime * 0.18 + pointer.x * 0.16;
    group.current.position.x = pointer.x * 0.22;
    group.current.position.y = pointer.y * 0.12;
  });

  return (
    <group ref={group} position={[1.72, -0.04, -0.75]}>
      <Float speed={1.5} rotationIntensity={0.26} floatIntensity={0.38}>
        <mesh>
          <icosahedronGeometry args={[1.12, 4]} />
          <MeshDistortMaterial
            color="#161615"
            emissive="#7de7ff"
            emissiveIntensity={0.12}
            metalness={0.94}
            roughness={0.24}
            distort={0.28}
            speed={1.15}
          />
        </mesh>
      </Float>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.62, 0.012, 12, 160]} />
        <meshBasicMaterial color="#c8ff64" transparent opacity={0.54} />
      </mesh>
      <mesh rotation={[0.9, 0.2, 0.4]}>
        <torusGeometry args={[2.02, 0.01, 12, 160]} />
        <meshBasicMaterial color="#ff5d8f" transparent opacity={0.32} />
      </mesh>
    </group>
  );
}

function CameraRig() {
  const pointer = useThree((state) => state.pointer);
  const camera = useThree((state) => state.camera);

  useFrame(() => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.34, 0.04);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 0.24, 0.04);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export function HeroScene() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 5.6], fov: 45 }}
        dpr={[1, 1.65]}
        gl={{
          antialias: false,
          powerPreference: "high-performance",
          alpha: true
        }}
      >
        <Suspense fallback={null}>
          <fog attach="fog" args={["#050505", 4.8, 10.5]} />
          <ambientLight intensity={0.42} />
          <pointLight position={[2.4, 1.8, 2.8]} intensity={18} color="#7de7ff" />
          <pointLight position={[-3.2, -2.2, 3.4]} intensity={8} color="#ffc66d" />
          <DistortionField />
          <ParticleField />
          <FloatingCore />
          <CameraRig />
          <Environment preset="night" />
          <EffectComposer multisampling={0}>
            <Bloom intensity={0.64} luminanceThreshold={0.14} mipmapBlur />
            <ChromaticAberration
              blendFunction={BlendFunction.NORMAL}
              offset={new THREE.Vector2(0.0012, 0.0009)}
            />
            <DepthOfField focusDistance={0.02} focalLength={0.035} bokehScale={2.2} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}
