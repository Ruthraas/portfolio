export type Locale = "pt" | "en";

export const locales: Locale[] = ["pt", "en"];

export const translations = {
  pt: {
    nav: {
      work: "Projetos",
      about: "Sobre",
      timeline: "Trajetoria",
      stack: "Stack",
      contact: "Contato",
    },
    actions: {
      label: "Acoes rapidas",
      items: {
        linkedin: {
          title: "Acessar LinkedIn",
          description: "Perfil profissional e trajetoria.",
        },
        projects: {
          title: "Acessar projetos",
          description: "Repositorios principais no portfolio.",
        },
        resume: {
          title: "Baixar curriculo",
          description: "Resumo profissional em PDF.",
        },
      },
    },
    hero: {
      eyebrow: "Arthur Pedroso de Almeida | Sao Paulo, Brasil",
      name: "RUHTRA",
      role: "Creative Developer",
      line: "Desenvolvedor full-stack, tecnico em eletronica e mecatronica, criando produtos digitais com precisao visual e base tecnica.",
      location: "Sao Paulo, Brasil",
      scroll: "Scroll",
      cta: "Ver projetos",
      resume: "Curriculo",
      github: "GitHub",
    },
    about: {
      kicker: "Sobre",
      title: "Sobre mim, sem pose e sem ruido.",
      lead: "Sou Arthur Pedroso de Almeida, tambem conhecido como Ruhtra. Minha trajetoria mistura desenvolvimento full-stack, eletronica, mecatronica, suporte tecnico e lideranca tecnica.",
      body: "Atuo com React, Next.js, TypeScript, Node.js, APIs REST, autenticacao JWT, dashboards e sistemas de suporte. A base e direta: tecnologia, operacao, produto e vontade de construir com responsabilidade.",
      blocks: [
        {
          title: "Full-stack",
          text: "Interfaces modernas conectadas a APIs, autenticacao, bancos de dados e fluxos reais.",
        },
        {
          title: "Tecnico",
          text: "Formacao em eletronica e mecatronica, com experiencia pratica em suporte tecnico.",
        },
        {
          title: "Produto",
          text: "Perfil empreendedor, CTO e socio proprietario da Aurora Technology Society.",
        },
      ],
    },
    timeline: {
      kicker: "Trajetoria",
      title: "Uma linha curva para seguir a historia pelo scroll.",
      description:
        "Experiencia, formacao e certificados agora entram em uma narrativa guiada: a linha progride, o card ativo muda no scroll e nada depende de fade com blur.",
    },
    work: {
      kicker: "Projetos",
      title: "Mais repositorios, menos card gigante sem necessidade.",
      description:
        "Cards compactos no estilo GitHub: nome, contexto, stack e acesso rapido ao repositorio.",
      open: "Abrir repositorio",
      projects: [
        {
          title: "Portfolio",
          type: "Portfolio interativo",
          summary:
            "Next.js com Lenis, GSAP, Spline e Tailwind para uma experiencia de scroll mais autoral.",
          outcome:
            "A propria vitrine do perfil, com foco em movimento, narrativa e projetos reais.",
        },
        {
          title: "Pizza Shop API",
          type: "API operacional",
          summary:
            "Backend moderno para pedidos, metricas e fluxo de restaurante usando stack TypeScript.",
          outcome:
            "Projeto bom para demonstrar API, dados, autenticacao e organizacao de dominio.",
        },
        {
          title: "FastFeet API",
          type: "API de logistica",
          summary:
            "Backend em NestJS para administradores e entregadores, com autenticacao, entregas proximas, notificacoes e comprovante por foto.",
          outcome:
            "Fluxo operacional com papeis claros, rotas protegidas e estrutura pensada para dominio.",
        },
        {
          title: "Clean Auth API",
          type: "API com arquitetura limpa",
          summary:
            "Autenticacao em NestJS com separacao de camadas, regras de negocio e base para testes.",
          outcome:
            "Mostra maturidade em organizacao de backend, nao so endpoint funcionando.",
        },
        {
          title: "DDD Domain Driven Design",
          type: "Repositorio didatico",
          summary:
            "Exemplo em TypeScript para entidades, casos de uso e regras de dominio isoladas.",
          outcome:
            "Material direto para explicar como codigo de dominio fica longe de framework.",
        },
        {
          title: "Find A Friend API",
          type: "API REST",
          summary:
            "Sistema de adocao com busca por proximidade, regras de organizacao e estrutura SOLID.",
          outcome:
            "Boa prova de modelagem, filtros e regras de negocio em API real.",
        },
        {
          title: "Help Desk",
          type: "Sistema full-stack",
          summary:
            "Plataforma de chamados com Express, JWT, telas por perfil e interface React/Vite/Tailwind.",
          outcome:
            "Organiza tickets, status e responsabilidades em uma experiencia pratica.",
        },
        {
          title: "API SOLID Node.js",
          type: "API com testes",
          summary:
            "API Node.js com Fastify, Prisma, autenticacao e testes, seguindo boas praticas de arquitetura.",
          outcome:
            "Mostra criterio tecnico em contrato HTTP, persistencia e validacao.",
        },
        {
          title: "Daily Diet API",
          type: "API de habitos",
          summary:
            "Backend para registro de refeicoes, metricas e controle de dieta com Node.js.",
          outcome:
            "Projeto enxuto, bom para demonstrar regras simples bem implementadas.",
        },
        {
          title: "Archteturis",
          type: "Framework para bots",
          summary:
            "Framework TypeScript para bots Discord.js v14 com comandos slash modulares e arquitetura reutilizavel.",
          outcome:
            "Base organizada para evitar boilerplate repetido e acelerar criacao de bots.",
        },
      ],
    },
    stack: {
      kicker: "Stack",
      title: "Stack apresentada como processo, nao como vitrine de tags.",
      description:
        "As tecnologias estao separadas por camada: interface, API, dados, arquitetura, automacao e base tecnica.",
    },
    contact: {
      kicker: "Contato",
      title: "Vamos construir algo com calma, forma e funcao.",
      description:
        "Me envie um email e vamos transformar uma ideia em uma experiencia digital clara, bonita e funcional.",
      ctaTitle: "Me envie um email",
      ctaText:
        "Vamos criar um projeto juntos, com visual forte, interface precisa e tecnologia bem resolvida.",
      ctaButton: "Enviar email",
      name: "Nome",
      email: "Email",
      message: "Mensagem",
      namePlaceholder: "Seu nome",
      emailPlaceholder: "seu@email.com",
      messagePlaceholder: "Conte o que precisa ser criado.",
      idle: "Linha direta",
      sent: "Mensagem recebida. Respondo em breve.",
      error: "Confira os campos e tente novamente.",
      send: "Enviar",
      sending: "Enviando",
    },
  },
  en: {
    nav: {
      work: "Work",
      about: "About",
      timeline: "Timeline",
      stack: "Stack",
      contact: "Contact",
    },
    actions: {
      label: "Quick actions",
      items: {
        linkedin: {
          title: "Open LinkedIn",
          description: "Professional profile and career path.",
        },
        projects: {
          title: "Open projects",
          description: "Main repositories in the portfolio.",
        },
        resume: {
          title: "Download resume",
          description: "Professional summary in PDF.",
        },
      },
    },
    hero: {
      eyebrow: "Arthur Pedroso de Almeida | Sao Paulo, Brazil",
      name: "RUHTRA",
      role: "Creative Developer",
      line: "Full-stack developer, electronics and mechatronics technician, building digital products with visual precision and technical depth.",
      location: "Sao Paulo, Brazil",
      scroll: "Scroll",
      cta: "View work",
      resume: "Resume",
      github: "GitHub",
    },
    about: {
      kicker: "About",
      title: "About me, no pose and no noise.",
      lead: "I am Arthur Pedroso de Almeida, also known as Ruhtra. My path combines full-stack development, electronics, mechatronics, technical support and technical leadership.",
      body: "I work with React, Next.js, TypeScript, Node.js, REST APIs, JWT authentication, dashboards and support systems. The base is direct: technology, operations, product thinking and the will to build responsibly.",
      blocks: [
        {
          title: "Full-stack",
          text: "Modern interfaces connected to APIs, authentication, databases and real workflows.",
        },
        {
          title: "Technical",
          text: "Education in electronics and mechatronics, with practical technical support experience.",
        },
        {
          title: "Product",
          text: "Entrepreneurial profile, CTO and owner-partner at Aurora Technology Society.",
        },
      ],
    },
    timeline: {
      kicker: "Timeline",
      title: "A curved line that follows the story through scroll.",
      description:
        "Experience, education and certificates now run as a guided narrative: the line progresses, the active card changes with scroll and nothing depends on blur fades.",
    },
    work: {
      kicker: "Work",
      title: "More repositories, fewer oversized cards.",
      description:
        "Compact GitHub-style cards: name, context, stack and quick access to the repository.",
      open: "Open repository",
      projects: [
        {
          title: "Portfolio",
          type: "Interactive portfolio",
          summary:
            "Next.js with Lenis, GSAP, Spline and Tailwind for a more authored scroll experience.",
          outcome:
            "The profile showcase itself, focused on motion, narrative and real projects.",
        },
        {
          title: "Pizza Shop API",
          type: "Operational API",
          summary:
            "Modern backend for orders, metrics and restaurant workflows using a TypeScript stack.",
          outcome:
            "Useful to show API work, data, authentication and domain organization.",
        },
        {
          title: "FastFeet API",
          type: "Logistics API",
          summary:
            "NestJS backend for administrators and delivery workers, with authentication, nearby deliveries, notifications and proof photos.",
          outcome:
            "Operational flow with clear roles, protected routes and domain-minded structure.",
        },
        {
          title: "Clean Auth API",
          type: "Clean architecture API",
          summary:
            "NestJS authentication with separated layers, business rules and a testing-friendly base.",
          outcome:
            "Shows backend organization maturity, not just working endpoints.",
        },
        {
          title: "DDD Domain Driven Design",
          type: "Teaching repository",
          summary:
            "TypeScript example for entities, use cases and isolated domain rules.",
          outcome:
            "Clear material to explain how domain code stays away from framework concerns.",
        },
        {
          title: "Find A Friend API",
          type: "REST API",
          summary:
            "Adoption system with nearby search, organization rules and SOLID structure.",
          outcome:
            "Strong proof of modeling, filters and business rules in a real API.",
        },
        {
          title: "Help Desk",
          type: "Full-stack system",
          summary:
            "Ticket platform with Express, JWT, role-based screens and a React/Vite/Tailwind interface.",
          outcome:
            "Organizes tickets, status and responsibilities in a practical experience.",
        },
        {
          title: "API SOLID Node.js",
          type: "API with tests",
          summary:
            "Node.js API with Fastify, Prisma, authentication and tests following architecture practices.",
          outcome:
            "Shows technical judgment in HTTP contracts, persistence and validation.",
        },
        {
          title: "Daily Diet API",
          type: "Habit API",
          summary:
            "Backend for meal records, metrics and diet tracking with Node.js.",
          outcome:
            "Lean project that shows simple rules implemented cleanly.",
        },
        {
          title: "Archteturis",
          type: "Bot framework",
          summary:
            "TypeScript framework for Discord.js v14 bots with modular slash commands and reusable architecture.",
          outcome:
            "Organized foundation to avoid repeated boilerplate and speed up bot creation.",
        },
      ],
    },
    stack: {
      kicker: "Stack",
      title: "Stack presented as process, not as a tag wall.",
      description:
        "Technologies are grouped by layer: interface, API, data, architecture, automation and technical base.",
    },
    contact: {
      kicker: "Contact",
      title: "Let's build something with calm, form and function.",
      description:
        "Send me an email and let's turn an idea into a clear, polished and functional digital experience.",
      ctaTitle: "Send me an email",
      ctaText:
        "Let's create a project together, with strong visuals, precise interface work and solid technology.",
      ctaButton: "Send email",
      name: "Name",
      email: "Email",
      message: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@email.com",
      messagePlaceholder: "Tell me what needs to be created.",
      idle: "Direct line",
      sent: "Message received. I will answer soon.",
      error: "Check the fields and try again.",
      send: "Send",
      sending: "Sending",
    },
  },
} as const;

export type TranslationTree = (typeof translations)[Locale];
