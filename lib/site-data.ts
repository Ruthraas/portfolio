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
  alias: "Ruhtra",
  title: "Full-Stack Developer | Embedded Systems | React & Node.js",
  github: "https://github.com/Ruthraas",
  linkedin: "https://linkedin.com/in/Arthurdevin",
  email: "arthur.pedroso.dev@gmail.com",
  resume: "/resume/arthur-almeida-resume.pdf"
};

export const navSections = [
  { id: "work", key: "work" },
  { id: "about", key: "about" },
  { id: "stack", key: "stack" },
  { id: "contact", key: "contact" }
] as const;

export const projectMeta = [
  {
    repo: "https://github.com/Ruthraas/Nestjs-api-fastfeet",
    owner: "Ruthraas",
    name: "Nestjs-api-fastfeet",
    language: "TypeScript",
    languageColor: "#3178c6",
    year: "2026",
    index: "01",
    stack: ["NestJS", "TypeScript", "Prisma", "JWT", "REST API", "Jest"]
  },
  {
    repo: "https://github.com/Ruthraas/Help_Desk",
    owner: "Ruthraas",
    name: "Help_Desk",
    language: "TypeScript",
    languageColor: "#3178c6",
    year: "2026",
    index: "02",
    stack: ["React", "Vite", "TailwindCSS", "Node.js", "Express", "PostgreSQL"]
  },
  {
    repo: "https://github.com/Ruthraas/Archteturis",
    owner: "Ruthraas",
    name: "Archteturis",
    language: "TypeScript",
    languageColor: "#3178c6",
    year: "2026",
    index: "03",
    stack: ["TypeScript", "Discord.js", "Node.js", "TSX", "Framework", "DX"]
  }
];

export const stackGroups = [
  {
    key: "frontend",
    icon: Monitor,
    items: ["React", "Next.js 15", "TypeScript", "TailwindCSS"]
  },
  {
    key: "motion",
    icon: Sparkles,
    items: ["GSAP", "Lenis", "Framer Motion", "R3F"]
  },
  {
    key: "space",
    icon: Orbit,
    items: ["Three.js", "Particles", "Depth", "GLSL"]
  },
  {
    key: "backend",
    icon: Server,
    items: ["Node.js", "NestJS", "Express", "REST APIs"]
  },
  {
    key: "data",
    icon: Database,
    items: ["Prisma", "PostgreSQL", "SQLite", "Knex.js"]
  },
  {
    key: "systems",
    icon: Cpu,
    items: ["Embedded Systems", "Linux", "Git", "Discord.js"]
  }
];

export const orbitStack = [
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
