# Arthur Almeida | Ruhtra Portfolio

Cinematic premium developer portfolio built with Next.js 15, React, TypeScript, TailwindCSS, GSAP, Lenis, Barba.js, Framer Motion, React Three Fiber, Three.js and custom GLSL shaders.

## Highlights

- Interactive Three.js hero with particles, shader distortion, bloom, chromatic aberration and depth of field.
- Lenis smooth scrolling integrated with GSAP ScrollTrigger.
- Horizontal pinned project section with 3D hover cards and mouse-follow lighting.
- Barba.js transition layer prepared for future case-study routes.
- Responsive dark premium UI with glassmorphism, cinematic grain, custom cursor and magnetic buttons.
- Local downloadable resume generated from Arthur's resume information.

## Projects Featured

- [FastFeet API](https://github.com/Ruthraas/Nestjs-api-fastfeet)
- [Help Desk](https://github.com/Ruthraas/Help_Desk)
- [Archteturis](https://github.com/Ruthraas/Archteturis)

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Architecture

- `app/`: Next.js App Router pages, metadata and route handlers.
- `components/sections/`: page sections and scroll experiences.
- `components/three/`: React Three Fiber scene and post-processing.
- `components/providers/`: Lenis and Barba integration.
- `lib/shaders.ts`: GLSL shader programs with comments.
- `lib/site-data.ts`: content source of truth.
