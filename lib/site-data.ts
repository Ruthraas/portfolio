import {
  Blocks,
  Braces,
  Code,
  Cpu,
  Database,
  Layers,
  Mail,
  Monitor,
  Network,
  Orbit,
  Server,
  Sparkles,
  SquareTerminal
} from "lucide-react";

export const profile = {
  name: "Arthur Pedroso de Almeida",
  displayName: "Arthur Almeida",
  alias: "Ruhtra",
  heroName: "Arthur",
  role: "Creative Developer",
  title: "Full-Stack Developer | Embedded Systems | React & Node.js",
  location: "Sao Paulo, Brazil",
  github: "https://github.com/Ruthraas",
  linkedin: "https://linkedin.com/in/Arthurdevin",
  email: "arthur.pedroso.dev@gmail.com",
  resume: "/resume/arthur-almeida-resume.pdf",
  statement:
    "Crafting immersive digital experiences through motion, interaction and systems.",
  biography:
    "Frontend-focused full-stack developer building modern interfaces, REST APIs, dashboards, support systems and Discord automation with a strong eye for usability, performance and visual quality."
};

export const navigation = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" }
];

export const heroSignals = [
  { label: "Interface", value: "React / Next.js" },
  { label: "Systems", value: "Node / APIs" },
  { label: "Motion", value: "GSAP / GLSL" }
];

export const projects = [
  {
    title: "FastFeet API",
    repo: "https://github.com/Ruthraas/Nestjs-api-fastfeet",
    year: "2026",
    type: "Logistics API",
    summary:
      "A NestJS backend for delivery operations with role-based authentication, order lifecycle, nearby deliveries, notifications and photo proof.",
    outcome:
      "A clean domain-driven transport workflow shaped for real operational roles.",
    stack: ["NestJS", "TypeScript", "Prisma", "JWT", "REST API", "Multer", "Jest"],
    index: "01"
  },
  {
    title: "Help Desk",
    repo: "https://github.com/Ruthraas/Help_Desk",
    year: "2026",
    type: "Support System",
    summary:
      "A full-stack ticket platform with Express API, JWT authentication, role-based screens and a React/Vite/Tailwind interface.",
    outcome:
      "Support flows designed around clarity: tickets, status, roles and responsive operations.",
    stack: ["React", "Vite", "TailwindCSS", "Node.js", "Express", "Prisma", "PostgreSQL"],
    index: "02"
  },
  {
    title: "Archteturis",
    repo: "https://github.com/Ruthraas/Archteturis",
    year: "2026",
    type: "Bot Framework",
    summary:
      "A TypeScript framework for Discord.js v14 bots with modular slash commands and package-ready developer experience.",
    outcome:
      "A reusable architecture that turns repeated Discord bot boilerplate into a focused framework.",
    stack: ["TypeScript", "Discord.js", "Node.js", "TSX", "Framework Design", "DX"],
    index: "03"
  }
];

export const aboutBlocks = [
  {
    label: "Design sense",
    body:
      "Strong focus on UI/UX, visual hierarchy, responsive rhythm and interface details that make a product feel more serious."
  },
  {
    label: "Engineering",
    body:
      "Practical experience connecting frontend and backend, shaping APIs, authentication, dashboards and system workflows."
  },
  {
    label: "Formation",
    body:
      "Rocketseat ONE formation with continuous study around React, Next.js, Node.js, TypeScript and modern delivery habits."
  }
];

export const stackGroups = [
  {
    label: "Frontend",
    icon: Monitor,
    items: ["React", "Next.js 15", "TypeScript", "TailwindCSS", "HTML5", "CSS3"]
  },
  {
    label: "Motion",
    icon: Sparkles,
    items: ["GSAP", "ScrollTrigger", "Framer Motion", "Lenis", "GLSL"]
  },
  {
    label: "3D Layer",
    icon: Orbit,
    items: ["React Three Fiber", "Three.js", "Shaders", "Bloom", "Depth Fog"]
  },
  {
    label: "Backend",
    icon: Server,
    items: ["Node.js", "NestJS", "Express", "REST APIs", "JWT"]
  },
  {
    label: "Data",
    icon: Database,
    items: ["Prisma", "PostgreSQL", "SQLite", "Knex.js"]
  },
  {
    label: "Systems",
    icon: Cpu,
    items: ["Embedded Systems", "Linux", "Git", "Discord.js", "Postman"]
  }
];

export const floatingStack = [
  { name: "Next.js", icon: Layers },
  { name: "React", icon: Blocks },
  { name: "TypeScript", icon: SquareTerminal },
  { name: "Node.js", icon: Network },
  { name: "GLSL", icon: Braces },
  { name: "APIs", icon: Server }
];

export const socials = [
  { label: "GitHub", href: profile.github, icon: Code },
  { label: "LinkedIn", href: profile.linkedin, icon: Network },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail }
];
