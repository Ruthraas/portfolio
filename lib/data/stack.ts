import { Cpu, Database, Monitor, Server, Settings, SquareTerminal } from "lucide-react";

export const stackGroups = [
  {
    key: "frontend",
    label: "Frontend",
    icon: Monitor,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    key: "backend",
    label: "Backend",
    icon: Server,
    items: ["Node.js", "NestJS", "Express", "REST APIs"]
  },
  {
    key: "data",
    label: "Dados",
    icon: Database,
    items: ["Prisma", "PostgreSQL", "SQLite", "Knex.js"]
  },
  {
    key: "systems",
    label: "Sistemas",
    icon: Cpu,
    items: ["Eletrônica", "Mecatrônica", "Linux", "Git"]
  },
  {
    key: "tools",
    label: "Ferramentas",
    icon: Settings,
    items: ["Figma", "Postman", "Discord.js", "Vite"]
  },
  {
    key: "language",
    label: "Base",
    icon: SquareTerminal,
    items: ["JavaScript", "TypeScript", "HTML", "CSS"]
  }
];
