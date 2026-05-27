export type Locale = "pt" | "en";

export const locales: Locale[] = ["pt", "en"];

export const translations = {
  pt: {
    nav: {
      work: "Projetos",
      about: "Sobre",
      stack: "Stack",
      contact: "Contato"
    },
    sidebar: {
      role: "Creative Developer",
      social: "Social",
      language: "Idioma"
    },
    hero: {
      name: "ARTHUR",
      role: "Creative Developer",
      line: "Construindo experiencias digitais imersivas.",
      location: "Sao Paulo, Brasil",
      scroll: "Role",
      cta: "Ver projetos",
      resume: "Curriculo",
      github: "GitHub"
    },
    about: {
      kicker: "Sobre",
      title: "Interfaces silenciosas com sistemas bem pensados por tras.",
      lead:
        "Sou Arthur Almeida, tambem Ruhtra. Desenvolvo interfaces modernas, APIs, dashboards, sistemas de suporte e automacoes com React, Next.js, TypeScript e Node.js.",
      body:
        "O foco deste portfolio e uma experiencia espacial e minimalista: menos ruido visual, mais atmosfera, leitura limpa, movimento lento e detalhes que fazem o produto parecer feito a mao.",
      blocks: [
        {
          title: "Visual",
          text: "Foco em UI/UX, hierarquia, espacamento, responsividade e qualidade visual."
        },
        {
          title: "Sistema",
          text: "Experiencia pratica com frontend, backend, autenticacao, REST APIs e integracao de fluxos."
        },
        {
          title: "Formacao",
          text: "Rocketseat ONE e estudo continuo em React, Next.js, Node.js e TypeScript."
        }
      ]
    },
    work: {
      kicker: "Projetos",
      title: "Projetos principais, apresentados com calma.",
      description:
        "Cards minimalistas com profundidade sutil, luz seguindo o cursor e foco no que cada sistema entrega.",
      open: "Abrir repositorio",
      projects: [
        {
          title: "FastFeet API",
          type: "API de logistica",
          summary:
            "Backend em NestJS para administradores e entregadores, com autenticacao, ciclo de entregas, entregas proximas, notificacoes e foto de comprovacao.",
          outcome:
            "Fluxo operacional com papeis claros, rotas protegidas e estrutura pensada para dominio."
        },
        {
          title: "Help Desk",
          type: "Sistema de suporte",
          summary:
            "Plataforma full-stack de chamados com Express, autenticacao JWT, telas por perfil e interface React/Vite/Tailwind.",
          outcome:
            "Organizacao de tickets, status e responsabilidades em uma experiencia pratica e responsiva."
        },
        {
          title: "Archteturis",
          type: "Framework para bots",
          summary:
            "Framework TypeScript para bots Discord.js v14 com comandos slash modulares e arquitetura reutilizavel.",
          outcome:
            "Base organizada para evitar boilerplate repetido e acelerar criacao de bots."
        }
      ]
    },
    stack: {
      kicker: "Stack",
      title: "Ferramentas organizadas por intencao.",
      description:
        "A stack equilibra interface, movimento, backend e camada espacial sem transformar o site em vitrine de efeitos."
    },
    contact: {
      kicker: "Contato",
      title: "Vamos construir algo com calma, forma e funcao.",
      description:
        "Envie uma mensagem para trabalho, colaboracao ou conversa tecnica. O formulario esta pronto para conectar a um provedor real de email.",
      name: "Nome",
      email: "Email",
      message: "Mensagem",
      namePlaceholder: "Seu nome",
      emailPlaceholder: "voce@email.com",
      messagePlaceholder: "Conte o que precisa ser criado.",
      idle: "Linha direta",
      sent: "Mensagem recebida. Respondo em breve.",
      error: "Confira os campos e tente novamente.",
      send: "Enviar",
      sending: "Enviando"
    }
  },
  en: {
    nav: {
      work: "Work",
      about: "About",
      stack: "Stack",
      contact: "Contact"
    },
    sidebar: {
      role: "Creative Developer",
      social: "Social",
      language: "Language"
    },
    hero: {
      name: "ARTHUR",
      role: "Creative Developer",
      line: "Building immersive digital experiences.",
      location: "Sao Paulo, Brazil",
      scroll: "Scroll",
      cta: "View work",
      resume: "Resume",
      github: "GitHub"
    },
    about: {
      kicker: "About",
      title: "Silent interfaces with thoughtful systems behind them.",
      lead:
        "I am Arthur Almeida, also Ruhtra. I build modern interfaces, APIs, dashboards, support systems and automations with React, Next.js, TypeScript and Node.js.",
      body:
        "This portfolio is shaped as a spatial minimalist experience: less visual noise, more atmosphere, clean reading, slow motion and details that feel handcrafted.",
      blocks: [
        {
          title: "Visual",
          text: "Focused on UI/UX, hierarchy, spacing, responsiveness and visual quality."
        },
        {
          title: "System",
          text: "Practical frontend/backend experience with authentication, REST APIs and integrated flows."
        },
        {
          title: "Formation",
          text: "Rocketseat ONE and continuous study around React, Next.js, Node.js and TypeScript."
        }
      ]
    },
    work: {
      kicker: "Work",
      title: "Main projects, presented with quiet focus.",
      description:
        "Minimal cards with subtle depth, cursor-following light and emphasis on what each system delivers.",
      open: "Open repository",
      projects: [
        {
          title: "FastFeet API",
          type: "Logistics API",
          summary:
            "NestJS backend for administrators and delivery workers, with authentication, delivery lifecycle, nearby deliveries, notifications and proof photos.",
          outcome:
            "Operational flow with clear roles, protected routes and domain-minded structure."
        },
        {
          title: "Help Desk",
          type: "Support system",
          summary:
            "Full-stack ticket platform with Express, JWT authentication, role-based screens and a React/Vite/Tailwind interface.",
          outcome:
            "Ticket organization, status tracking and responsibilities in a practical responsive experience."
        },
        {
          title: "Archteturis",
          type: "Bot framework",
          summary:
            "TypeScript framework for Discord.js v14 bots with modular slash commands and reusable architecture.",
          outcome:
            "Organized foundation to avoid repeated boilerplate and speed up bot creation."
        }
      ]
    },
    stack: {
      kicker: "Stack",
      title: "Tools organized by intention.",
      description:
        "The stack balances interface, motion, backend and spatial layers without turning the site into an effects showcase."
    },
    contact: {
      kicker: "Contact",
      title: "Let's build something with calm, form and function.",
      description:
        "Send a message for work, collaboration or a technical conversation. The form is ready to connect to a real email provider.",
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
      sending: "Sending"
    }
  }
} as const;

export type TranslationTree = (typeof translations)[Locale];
