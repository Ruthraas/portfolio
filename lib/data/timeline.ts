import type { Locale } from "@/lib/i18n/translations";

export type TimelineItem = {
  date: string;
  kind: "experience" | "education" | "certification";
  credentialId?: string;
  content: Record<Locale, { title: string; place: string; description: string }>;
};

export const timelineItems: TimelineItem[] = [
  {
    date: "2021 - 2023",
    kind: "education",
    content: {
      pt: {
        title: "Mecatronica",
        place: "ETEC / Etec Dr. Domingos Minicucci Filho",
        description: "Formacao tecnica com base em eletronica, automacao e sistemas."
      },
      en: {
        title: "Mechatronics",
        place: "ETEC / Etec Dr. Domingos Minicucci Filho",
        description: "Technical education around electronics, automation and systems."
      }
    }
  },
  {
    date: "2024 - 2025",
    kind: "experience",
    content: {
      pt: {
        title: "Tecnico em Eletronica",
        place: "ONsTECH - Solucoes em Tecnologia",
        description: "Atuacao pratica com suporte tecnico, eletronica e operacao."
      },
      en: {
        title: "Electronics Technician",
        place: "ONsTECH - Technology Solutions",
        description: "Hands-on work with technical support, electronics and operations."
      }
    }
  },
  {
    date: "Out 2025",
    kind: "certification",
    credentialId: "1977a802-7b17-44df-b6e1-d677f30cbb35",
    content: {
      pt: {
        title: "Desbloqueando a programacao",
        place: "Rocketseat",
        description: "Fundamentos de logica, base de programacao e evolucao de raciocinio tecnico."
      },
      en: {
        title: "Unlocking Programming",
        place: "Rocketseat",
        description: "Logic fundamentals, programming base and technical reasoning growth."
      }
    }
  },
  {
    date: "Out 2025",
    kind: "certification",
    credentialId: "4d3e0098-8269-413e-a366-2c9865a6d257",
    content: {
      pt: {
        title: "O basico de Git e GitHub",
        place: "Rocketseat",
        description: "Versionamento, repositorios, fluxo de commits e colaboracao com GitHub."
      },
      en: {
        title: "Git and GitHub Basics",
        place: "Rocketseat",
        description: "Version control, repositories, commit flow and collaboration with GitHub."
      }
    }
  },
  {
    date: "Nov 2025",
    kind: "certification",
    credentialId: "3ac80f12-db58-4d4c-8170-2696ad59a67a",
    content: {
      pt: {
        title: "JavaScript",
        place: "Rocketseat",
        description: "Fundamentos da linguagem, manipulacao de dados e construcao de interfaces."
      },
      en: {
        title: "JavaScript",
        place: "Rocketseat",
        description: "Language fundamentals, data handling and interface development."
      }
    }
  },
  {
    date: "Nov 2025",
    kind: "certification",
    credentialId: "8a160074-acec-44d7-a5ec-fbac3ddcb11b",
    content: {
      pt: {
        title: "Portfolio Ninja",
        place: "Rocketseat",
        description: "Apresentacao profissional, posicionamento e construcao de presenca digital."
      },
      en: {
        title: "Portfolio Ninja",
        place: "Rocketseat",
        description: "Professional presentation, positioning and digital presence."
      }
    }
  },
  {
    date: "Abr 2026",
    kind: "certification",
    credentialId: "eb81f751-4198-44a4-8960-c3ddf9670817",
    content: {
      pt: {
        title: "Fullstack",
        place: "Rocketseat",
        description: "Criacao de aplicacoes completas conectando frontend, backend e dados."
      },
      en: {
        title: "Fullstack",
        place: "Rocketseat",
        description: "Complete application development connecting frontend, backend and data."
      }
    }
  },
  {
    date: "Abr 2026",
    kind: "certification",
    credentialId: "c51e7824-2f87-4905-86dd-ad585b19702f",
    content: {
      pt: {
        title: "Fundamentos do Node.js",
        place: "Rocketseat",
        description: "Base solida em Node.js, APIs e fundamentos de backend."
      },
      en: {
        title: "Node.js Fundamentals",
        place: "Rocketseat",
        description: "Solid base in Node.js, APIs and backend fundamentals."
      }
    }
  },
  {
    date: "Mai 2026",
    kind: "certification",
    credentialId: "a0c60bc6-dbda-4e05-b3b6-93723998092a",
    content: {
      pt: {
        title: "DDD no Node.js",
        place: "Rocketseat",
        description: "Modelagem de dominio, organizacao de regras e arquitetura backend."
      },
      en: {
        title: "DDD in Node.js",
        place: "Rocketseat",
        description: "Domain modeling, business rule organization and backend architecture."
      }
    }
  },
  {
    date: "Mai 2026",
    kind: "certification",
    credentialId: "09887d96-4764-46f4-86a1-9daab6f2c615",
    content: {
      pt: {
        title: "NestJS",
        place: "Rocketseat",
        description: "APIs estruturadas com NestJS, modulos, injecao de dependencia e arquitetura."
      },
      en: {
        title: "NestJS",
        place: "Rocketseat",
        description: "Structured APIs with NestJS, modules, dependency injection and architecture."
      }
    }
  },
  {
    date: "Mai 2026",
    kind: "certification",
    credentialId: "2f6138ea-b7be-4dc4-abed-d60147e62a68",
    content: {
      pt: {
        title: "Node.js",
        place: "Rocketseat",
        description: "Desenvolvimento backend com Node.js, servicos HTTP e integracoes."
      },
      en: {
        title: "Node.js",
        place: "Rocketseat",
        description: "Backend development with Node.js, HTTP services and integrations."
      }
    }
  },
  {
    date: "Mai 2026",
    kind: "certification",
    credentialId: "9e1c61d1-cbd4-4bdc-a097-d6994de79988",
    content: {
      pt: {
        title: "API com Bun",
        place: "Rocketseat",
        description: "Criacao de APIs performaticas usando Bun e ferramentas modernas do ecossistema."
      },
      en: {
        title: "API with Bun",
        place: "Rocketseat",
        description: "High-performance API development with Bun and modern ecosystem tools."
      }
    }
  },
  {
    date: "Mai 2026",
    kind: "certification",
    credentialId: "6d7583f1-300a-4ccb-8cdc-e1edc955a775",
    content: {
      pt: {
        title: "Engenharia de Prompt",
        place: "Rocketseat",
        description: "Uso de IA com prompts claros, contexto bem definido e saidas orientadas a produto."
      },
      en: {
        title: "Prompt Engineering",
        place: "Rocketseat",
        description: "AI usage with clear prompts, defined context and product-oriented outputs."
      }
    }
  },
  {
    date: "2025 - 2026",
    kind: "experience",
    content: {
      pt: {
        title: "Support Technician",
        place: "Net Infinito Telecom",
        description: "Suporte tecnico em ambiente real, atendimento e resolucao de problemas."
      },
      en: {
        title: "Support Technician",
        place: "Net Infinito Telecom",
        description: "Technical support in a real operation, service and problem solving."
      }
    }
  }
];
