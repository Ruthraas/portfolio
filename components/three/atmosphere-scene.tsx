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
  ambientFragmentShader,
  ambientVertexShader,
  particleFragmentShader,
  particleVertexShader
} from "@/lib/shaders";

function seeded(index: number) {
  const x = Math.sin(index * 999.37) * 10000;
  return x - Math.floor(x);
}

function AmbientShaderPlane() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const pointer = useThree((state) => state.pointer);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uPointer: { value: new THREE.Vector2(0.5, 0.5) },
      uInk: { value: new THREE.Color("#070707") },
      uMist: { value: new THREE.Color("#9fb7c4") },
      uWarm: { value: new THREE.Color("#d8c9a5") }
    }),
    []
  );

  useFrame(({ clock }) => {
    if (!materialRef.current) return;
    materialRef.current.uniforms.uTime.value = clock.elapsedTime;
    materialRef.current.uniforms.uPointer.value.lerp(
      new THREE.Vector2(pointer.x * 0.5 + 0.5, pointer.y * 0.5 + 0.5),
      0.035
    );
  });

  return (
    <mesh position={[0, 0, -2.6]} scale={[11, 6.4, 1]}>
      <planeGeometry args={[1, 1, 96, 96]} />
      <shaderMaterial
        ref={materialRef}
        args={[{ uniforms, vertexShader: ambientVertexShader, fragmentShader: ambientFragmentShader }]}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}

function ParticleField() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const pointer = useThree((state) => state.pointer);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uPointer: { value: new THREE.Vector2(0.5, 0.5) }
    }),
    []
  );

  const { positions, sizes } = useMemo(() => {
    const count = 540;
    const particlePositions = new Float32Array(count * 3);
    const particleSizes = new Float32Array(count);

    for (let i = 0; i < count; i += 1) {
      const radius = 1.4 + seeded(i + 1) * 5.4;
      const angle = seeded(i + 2) * Math.PI * 2;
      const height = (seeded(i + 3) - 0.5) * 3.1;
      particlePositions[i * 3] = Math.cos(angle) * radius;
      particlePositions[i * 3 + 1] = height;
      particlePositions[i * 3 + 2] = Math.sin(angle) * radius - 1.6;
      particleSizes[i] = 0.014 + seeded(i + 4) * 0.028;
    }

    return { positions: particlePositions, sizes: particleSizes };
  }, []);

  useFrame(({ clock }) => {
    if (!materialRef.current) return;
    materialRef.current.uniforms.uTime.value = clock.elapsedTime;
    materialRef.current.uniforms.uPointer.value.lerp(
      new THREE.Vector2(pointer.x * 0.5 + 0.5, pointer.y * 0.5 + 0.5),
      0.04
    );
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aSize" args={[sizes, 1]} />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        args={[{ uniforms, vertexShader: particleVertexShader, fragmentShader: particleFragmentShader }]}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function FloatingForm() {
  const groupRef = useRef<THREE.Group>(null);
  const pointer = useThree((state) => state.pointer);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      pointer.y * 0.12 + Math.sin(clock.elapsedTime * 0.22) * 0.05,
      0.04
    );
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      pointer.x * 0.18 + clock.elapsedTime * 0.035,
      0.035
    );
  });

  return (
    <group ref={groupRef} position={[2.1, -0.08, -0.58]}>
      <Float speed={0.85} rotationIntensity={0.16} floatIntensity={0.18}>
        <mesh>
          <icosahedronGeometry args={[0.92, 3]} />
          <MeshDistortMaterial
            color="#10100f"
            emissive="#d8c9a5"
            emissiveIntensity={0.055}
            roughness={0.34}
            metalness={0.92}
            distort={0.16}
            speed={0.42}
          />
        </mesh>
      </Float>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.62, 0.006, 8, 160]} />
        <meshBasicMaterial color="#d8c9a5" transparent opacity={0.24} />
      </mesh>
      <mesh rotation={[0.7, 0.1, 0.45]}>
        <torusGeometry args={[2.05, 0.004, 8, 180]} />
        <meshBasicMaterial color="#9fb7c4" transparent opacity={0.16} />
      </mesh>
    </group>
  );
}

function CameraRig() {
  const pointer = useThree((state) => state.pointer);
  const camera = useThree((state) => state.camera);

  useFrame(() => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.22, 0.035);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 0.16, 0.035);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export function AtmosphereScene() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 44 }}
        dpr={[1, 1.55]}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <fog attach="fog" args={["#050505", 4.2, 9.2]} />
          <ambientLight intensity={0.42} />
          <pointLight position={[2.8, 2.2, 2.6]} intensity={8} color="#d8c9a5" />
          <pointLight position={[-2.8, -1.8, 2.8]} intensity={4} color="#9fb7c4" />
          <AmbientShaderPlane />
          <ParticleField />
          <FloatingForm />
          <CameraRig />
          <Environment preset="night" />
          <EffectComposer multisampling={0}>
            <Bloom intensity={0.32} luminanceThreshold={0.22} mipmapBlur />
            <ChromaticAberration
              blendFunction={BlendFunction.NORMAL}
              offset={new THREE.Vector2(0.0007, 0.00045)}
            />
            <DepthOfField focusDistance={0.025} focalLength={0.03} bokehScale={1.45} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}
