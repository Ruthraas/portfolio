import { Cpu, Database, Monitor, Server, Settings, SquareTerminal } from "lucide-react";

export const stackGroups = [
  {
    key: "interface",
    layer: "01",
    label: "Interface",
    icon: Monitor,
    signal: "Onde o produto vira experiencia.",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    key: "api",
    layer: "02",
    label: "API",
    icon: Server,
    signal: "Contratos, rotas, autenticacao e regras.",
    items: ["Node.js", "NestJS", "Fastify", "Elysia"]
  },
  {
    key: "data",
    layer: "03",
    label: "Dados",
    icon: Database,
    signal: "Persistencia, consultas e integridade.",
    items: ["Prisma", "Drizzle", "PostgreSQL", "SQLite"]
  },
  {
    key: "architecture",
    layer: "04",
    label: "Arquitetura",
    icon: SquareTerminal,
    signal: "Codigo separado por dominio, nao por improviso.",
    items: ["DDD", "SOLID", "Use Cases", "Tests"]
  },
  {
    key: "automation",
    layer: "05",
    label: "Automacao",
    icon: Settings,
    signal: "Ferramentas que deixam o fluxo rapido.",
    items: ["Bun", "Vite", "Docker", "GitHub"]
  },
  {
    key: "systems",
    layer: "06",
    label: "Sistemas",
    icon: Cpu,
    signal: "Base tecnica alem da tela.",
    items: ["Eletronica", "Mecatronica", "Linux", "Suporte"]
  }
];
