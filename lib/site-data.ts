import {
  BriefcaseBusiness,
  Code,
  Cpu,
  Database,
  Layers,
  Mail,
  Rocket,
  Server,
  Sparkles,
  SquareTerminal
} from "lucide-react";

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
  summary:
    "Frontend-focused full-stack developer building modern interfaces, APIs, dashboards and support systems with performance, responsive design and clean architecture in mind.",
  philosophy:
    "I like systems that feel sharp on the outside and organized on the inside: fast screens, clear flows, good APIs and a visual layer that makes the product feel serious."
};

export const navItems = [
  { label: "Work", href: "#projects" },
  { label: "Profile", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" }
];

export const stats = [
  { label: "Primary focus", value: "UI/UX + APIs" },
  { label: "Core stack", value: "React / Node" },
  { label: "Formation", value: "Rocketseat ONE" }
];

export const differentiators = [
  "Strong focus on UI/UX and visual experience",
  "Project organization for scalable codebases",
  "Practical learning with modern web technologies",
  "Linux workflow and modern development environments",
  "End-to-end application delivery from frontend to backend"
];

export const skillGroups = [
  {
    label: "Frontend",
    value: 92,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"]
  },
  {
    label: "Backend",
    value: 82,
    items: ["Node.js", "NestJS", "Express", "REST APIs", "JWT", "Prisma"]
  },
  {
    label: "Systems",
    value: 76,
    items: ["Embedded Systems", "Linux", "Git", "Discord.js", "Postman", "SQLite"]
  }
];

export const projects = [
  {
    title: "FastFeet API",
    repo: "https://github.com/Ruthraas/Nestjs-api-fastfeet",
    type: "Logistics backend",
    year: "2026",
    metric: "Role-based delivery flow",
    description:
      "A NestJS transport API for administrators and delivery workers, covering authentication, order lifecycle, nearby deliveries, notifications and mandatory photo proof on delivery.",
    impact:
      "Designed as a complete backend challenge with clear domain operations, protected routes and delivery-status automation.",
    stack: ["NestJS", "TypeScript", "Prisma", "JWT", "REST API", "Multer", "Jest"],
    accent: "var(--cyan)"
  },
  {
    title: "Help Desk",
    repo: "https://github.com/Ruthraas/Help_Desk",
    type: "Full-stack support platform",
    year: "2026",
    metric: "Client / technician / admin flows",
    description:
      "A full-stack ticket management platform with an Express API, JWT authentication, role-based interfaces and a React/Vite/Tailwind web application.",
    impact:
      "Built around real operational flows: opening tickets, distributing work, tracking status and keeping each role in the right interface.",
    stack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "Prisma", "PostgreSQL"],
    accent: "var(--lime)"
  },
  {
    title: "Archteturis",
    repo: "https://github.com/Ruthraas/Archteturis",
    type: "Discord bot framework",
    year: "2026",
    metric: "Slash-command-first architecture",
    description:
      "A TypeScript framework for building Discord bots with discord.js v14, focused on modular commands, cleaner structure and faster bot setup.",
    impact:
      "Transforms repeated Discord bot boilerplate into a reusable developer framework with a package-ready TypeScript architecture.",
    stack: ["TypeScript", "Discord.js", "Node.js", "TSX", "Framework Design", "DX"],
    accent: "var(--amber)"
  }
];

export const experience = [
  {
    title: "Frontend Developer",
    body: "Modern interfaces with React, Next.js, TypeScript and Tailwind CSS, focused on responsiveness, performance and visual quality."
  },
  {
    title: "APIs and Backend Development",
    body: "REST APIs with Node.js, Express and NestJS, using JWT authentication, modular structure and frontend/backend integration."
  },
  {
    title: "Dashboards and Modern Interfaces",
    body: "Responsive dashboards and operational screens with clean hierarchy, useful flows and polished interaction details."
  },
  {
    title: "Discord Bots",
    body: "Modular Discord.js bots with slash commands, organized architecture and command-focused developer experience."
  }
];

export const stack = [
  { name: "Next.js 15", group: "Frontend", icon: Rocket },
  { name: "React", group: "Frontend", icon: Sparkles },
  { name: "TypeScript", group: "Language", icon: SquareTerminal },
  { name: "TailwindCSS", group: "Design", icon: Layers },
  { name: "Node.js", group: "Backend", icon: Server },
  { name: "NestJS", group: "Backend", icon: Server },
  { name: "Express", group: "Backend", icon: Server },
  { name: "Prisma", group: "Data", icon: Database },
  { name: "PostgreSQL", group: "Data", icon: Database },
  { name: "GSAP", group: "Motion", icon: Sparkles },
  { name: "Lenis", group: "Scroll", icon: Sparkles },
  { name: "Three.js", group: "3D", icon: Cpu },
  { name: "React Three Fiber", group: "3D", icon: Cpu },
  { name: "GLSL Shaders", group: "Rendering", icon: Cpu },
  { name: "Framer Motion", group: "Motion", icon: Sparkles },
  { name: "Barba.js", group: "Transitions", icon: Layers }
];

export const socials = [
  { label: "GitHub", href: profile.github, icon: Code },
  { label: "LinkedIn", href: profile.linkedin, icon: BriefcaseBusiness },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail }
];
