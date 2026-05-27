import {
  BadgeCheck,
  Box,
  BrainCircuit,
  CircuitBoard,
  Code,
  Database,
  GitBranch,
  Mail,
  MonitorCog,
  MousePointer2,
  Orbit,
  PanelTop,
  Send,
  Server,
  ShieldCheck
} from "lucide-react";

export const splineScene =
  "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode";

export const profile = {
  name: "Arthur Pedroso de Almeida",
  displayName: "Arthur Almeida",
  alias: "Ruhtra",
  title: "Full-Stack Developer | Embedded Systems | React & Node.js",
  location: "Sao Paulo, Brazil",
  github: "https://github.com/Ruthraas",
  linkedin: "https://linkedin.com/in/Arthurdevin",
  email: "arthur.pedroso.dev@gmail.com",
  resume: "/resume/arthur-almeida-resume.pdf",
  thesis:
    "I build product-grade interfaces and backend systems with a strong visual standard, practical architecture and a taste for precise interaction.",
  shortBio:
    "Frontend-focused full-stack developer working with React, Next.js, TypeScript, Node.js, APIs, dashboards, support systems and Discord automation."
};

export const navItems = [
  { label: "Index", href: "#index" },
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" }
];

export const heroMetrics = [
  { label: "Core", value: "React / Node" },
  { label: "Surface", value: "UI + Motion" },
  { label: "Systems", value: "APIs / Bots" }
];

export const principles = [
  {
    title: "Visual discipline",
    body: "Interfaces with hierarchy, rhythm, contrast and details that feel intentional instead of decorative.",
    icon: PanelTop
  },
  {
    title: "System thinking",
    body: "Frontend and backend are treated as one product flow: states, roles, data contracts and operational clarity.",
    icon: BrainCircuit
  },
  {
    title: "Technical presence",
    body: "Animations, 3D and effects are used to support perception, not to hide weak composition.",
    icon: MousePointer2
  }
];

export const projects = [
  {
    title: "FastFeet API",
    repo: "https://github.com/Ruthraas/Nestjs-api-fastfeet",
    label: "Logistics / Backend",
    year: "2026",
    code: "FF-01",
    description:
      "A NestJS delivery API for administrators and delivery workers, covering authentication, order lifecycle, nearby delivery discovery, notifications and photo proof.",
    result:
      "Role-based logistics flow with clear domain actions and production-minded API structure.",
    technologies: ["NestJS", "TypeScript", "Prisma", "JWT", "REST API", "Multer", "Jest"],
    accent: "#d8f36a"
  },
  {
    title: "Help Desk",
    repo: "https://github.com/Ruthraas/Help_Desk",
    label: "Support Platform",
    year: "2026",
    code: "HD-02",
    description:
      "A full-stack ticket management platform with Express API, JWT authentication, role-based screens and a React/Vite/Tailwind interface.",
    result:
      "A practical operational product: tickets, roles, status tracking and clean support workflows.",
    technologies: ["React", "Vite", "TailwindCSS", "Node.js", "Express", "Prisma", "PostgreSQL"],
    accent: "#f2c36b"
  },
  {
    title: "Archteturis",
    repo: "https://github.com/Ruthraas/Archteturis",
    label: "Discord Bot Framework",
    year: "2026",
    code: "AR-03",
    description:
      "A TypeScript framework for Discord.js v14 bots with modular slash commands, organized setup and package-ready developer experience.",
    result:
      "Reusable bot architecture that removes repeated boilerplate and improves command structure.",
    technologies: ["TypeScript", "Discord.js", "Node.js", "TSX", "Framework Design", "DX"],
    accent: "#8dd7ff"
  }
];

export const capabilities = [
  "Modern interfaces with React, Next.js, TypeScript and TailwindCSS",
  "REST APIs with Node.js, Express, NestJS, JWT and Prisma",
  "Dashboards, support flows and responsive product screens",
  "Discord.js bots with modular slash-command architecture",
  "Git, GitHub, Linux, Postman and practical delivery workflows"
];

export const stackGroups = [
  {
    title: "Interface",
    icon: MonitorCog,
    items: ["Next.js 15", "React", "TypeScript", "TailwindCSS", "Framer Motion"]
  },
  {
    title: "Motion",
    icon: Orbit,
    items: ["Spline", "GSAP", "ScrollTrigger", "Lenis", "Barba.js"]
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "NestJS", "Express", "REST APIs", "JWT"]
  },
  {
    title: "Data",
    icon: Database,
    items: ["Prisma", "PostgreSQL", "SQLite", "Knex.js", "Postman"]
  },
  {
    title: "Systems",
    icon: CircuitBoard,
    items: ["Embedded Systems", "Linux", "Git", "Discord.js", "Automation"]
  },
  {
    title: "Quality",
    icon: ShieldCheck,
    items: ["Responsive Design", "Performance", "Accessibility", "Clean Architecture"]
  }
];

export const motionStack = [
  {
    title: "Spline",
    body: "Primary interactive 3D stage embedded as a full-bleed hero asset.",
    icon: Box
  },
  {
    title: "GSAP",
    body: "Scroll-timed reveals, pinning, parallax tension and timeline choreography.",
    icon: GitBranch
  },
  {
    title: "Framer Motion",
    body: "Local hover states, magnetic CTA response and tactile interface movement.",
    icon: BadgeCheck
  }
];

export const socials = [
  { label: "GitHub", href: profile.github, icon: Code },
  { label: "LinkedIn", href: profile.linkedin, icon: BadgeCheck },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "Message", href: "#contact", icon: Send }
];
