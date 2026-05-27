# Arthur Almeida | Ruhtra Portfolio

Minimal cinematic developer portfolio built with Next.js 15, React, TypeScript, TailwindCSS, GSAP, Lenis, Framer Motion, React Three Fiber, Three.js and i18next.

## Direction

This version is a calm spatial portfolio: black background, tiny star layers, restrained typography, fixed sidebar navigation, PT/EN language switching and subtle scroll depth. It avoids cyberpunk visuals, neon, heavy blur and noisy motion.

## Featured Projects

- [FastFeet API](https://github.com/Ruthraas/Nestjs-api-fastfeet)
- [Help Desk](https://github.com/Ruthraas/Help_Desk)
- [Archteturis](https://github.com/Ruthraas/Archteturis)

## Stack

- Next.js 15 App Router
- React 19
- TypeScript
- TailwindCSS v4
- React Three Fiber + Three.js
- GSAP + ScrollTrigger
- Lenis smooth scroll
- Framer Motion
- i18next + react-i18next

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
- `components/three/`: spatial particle background.
- `components/layout/`: sidebar, cursor, grain and scroll progress.
- `components/providers/`: i18n, Lenis and intro transition infrastructure.
- `lib/i18n/`: PT/EN translation resources.
- `lib/site-data.ts`: static links, project metadata and stack data.
- `public/resume/`: downloadable resume in HTML and PDF.
