# Arthur Almeida | Ruhtra Portfolio

Ultra-minimal cinematic developer portfolio built with Next.js 15, React, TypeScript, TailwindCSS, GSAP, ScrollTrigger, Lenis, Framer Motion, React Three Fiber, Three.js and GLSL shaders.

## Direction

This version removes the Spline direction and rebuilds the experience around a restrained atmospheric 3D layer. The premium feeling comes from spacing, typography, subtle lighting, smooth scroll, shader motion, depth fog and quiet interaction details.

## Featured Projects

- [FastFeet API](https://github.com/Ruthraas/Nestjs-api-fastfeet)
- [Help Desk](https://github.com/Ruthraas/Help_Desk)
- [Archteturis](https://github.com/Ruthraas/Archteturis)

## Stack

- Next.js 15 App Router
- React 19
- TypeScript
- TailwindCSS v4
- React Three Fiber
- Three.js
- GLSL shaders
- GSAP + ScrollTrigger
- Lenis smooth scroll
- Framer Motion

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
npm audit --omit=dev
```

## Structure

- `app/`: App Router pages, layout, global styles and contact route.
- `components/three/`: R3F scene, cinematic lighting and postprocessing.
- `components/sections/`: minimalist portfolio sections.
- `components/providers/`: Lenis and page transition infrastructure.
- `lib/shaders.ts`: reusable GLSL shader programs.
- `lib/site-data.ts`: content and project data source of truth.
- `public/resume/`: downloadable resume in HTML and PDF.
