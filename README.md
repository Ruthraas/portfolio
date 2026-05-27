# Arthur Pedroso de Almeida | Ruhtra Portfolio

Minimal cinematic developer portfolio built with Next.js 15, React, TypeScript, TailwindCSS, GSAP, Lenis, Framer Motion, Spline and i18next.

## Direction

This version is a calm spatial portfolio: black background, Spline-powered hero atmosphere, restrained typography, fixed header navigation, fixed action rail, PT/EN language switching, a scroll-driven horizontal career timeline and compact GitHub-style project cards.

## Featured Projects

- [FastFeet API](https://github.com/Ruthraas/Nestjs-api-fastfeet)
- [Help Desk](https://github.com/Ruthraas/Help_Desk)
- [Archteturis](https://github.com/Ruthraas/Archteturis)

## Stack

- Next.js 15 App Router
- React 19
- TypeScript
- TailwindCSS v4
- Spline hero scene
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
- `components/spline/`: Spline hero scene wrapper.
- `components/layout/`: fixed header, grain and scroll progress.
- `components/sections/`: modular portfolio sections.
- `components/providers/`: i18n, Lenis and intro transition infrastructure.
- `lib/data/`: profile, navigation, projects, stack and timeline data.
- `lib/i18n/`: PT/EN translation resources.
- `public/resume/`: downloadable resume in HTML and PDF.
