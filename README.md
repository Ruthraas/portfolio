# Arthur Almeida | Ruhtra Portfolio

Sophisticated developer portfolio built with Next.js 15, React, TypeScript, TailwindCSS, Spline, GSAP, ScrollTrigger, Lenis, Barba.js and Framer Motion.

## Direction

This version is a full visual reset: darker, more editorial, more restrained and more premium. Spline owns the full-bleed 3D hero, while GSAP/ScrollTrigger handles scroll choreography and Framer Motion handles tactile interface states.

## Featured Projects

- [FastFeet API](https://github.com/Ruthraas/Nestjs-api-fastfeet)
- [Help Desk](https://github.com/Ruthraas/Help_Desk)
- [Archteturis](https://github.com/Ruthraas/Archteturis)

## Stack

- Next.js 15 App Router
- React 19
- TypeScript
- TailwindCSS v4
- Spline
- GSAP + ScrollTrigger
- Lenis smooth scroll
- Barba.js transition system
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

- `app/`: App Router pages, layout, styles and contact route.
- `components/spline/`: Spline stage integration.
- `components/sections/`: editorial portfolio sections.
- `components/providers/`: Lenis and Barba motion infrastructure.
- `lib/site-data.ts`: content and project data source of truth.
- `public/resume/`: downloadable resume in HTML and PDF.
