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
      eyebrow: "Arthur Almeida | São Paulo, Brasil",
      name: "RUHTRA",
      role: "Creative Developer",
      line: "Desenvolvendo interfaces, APIs e experiências digitais com React, Next.js, TypeScript e Node.js.",
      location: "São Paulo, Brasil",
      scroll: "Role",
      cta: "Ver projetos",
      resume: "Currículo",
      github: "GitHub"
    },
    about: {
      kicker: "Sobre",
      title: "Desenvolvedor full-stack com olhar forte para interface, produto e sistemas.",
      lead:
        "Sou Arthur Pedroso de Almeida, também conhecido como Ruhtra. Construo aplicações modernas com foco em usabilidade, organização de código e integração real entre frontend e backend.",
      body:
        "Minha base une React, Next.js, TypeScript, Node.js, APIs REST, autenticação JWT, dashboards e sistemas de suporte. Gosto de criar produtos que parecem simples por fora, mas são bem estruturados por dentro.",
      blocks: [
        {
          title: "Interface",
          text: "Foco em UI/UX, hierarquia visual, responsividade, acessibilidade e qualidade de interação."
        },
        {
          title: "Sistema",
          text: "Experiência prática com frontend, backend, autenticação, APIs REST, bancos de dados e fluxos completos."
        },
        {
          title: "Evolução",
          text: "Formação Rocketseat ONE e estudo contínuo em React, Next.js, Node.js, TypeScript e Linux."
        }
      ]
    },
    work: {
      kicker: "Projetos",
      title: "Repositórios principais, com cara de GitHub e contexto de produto.",
      description:
        "Cards diretos, escaneáveis e focados no que importa: nome, descrição, stack e link para o repositório.",
      open: "Abrir repositório",
      projects: [
        {
          title: "FastFeet API",
          type: "API de logística",
          summary:
            "Backend em NestJS para administradores e entregadores, com autenticação, ciclo de entregas, entregas próximas, notificações e foto de comprovação.",
          outcome:
            "Fluxo operacional com papéis claros, rotas protegidas e estrutura pensada para domínio."
        },
        {
          title: "Help Desk",
          type: "Sistema de suporte",
          summary:
            "Plataforma full-stack de chamados com Express, autenticação JWT, telas por perfil e interface React/Vite/Tailwind.",
          outcome:
            "Organização de tickets, status e responsabilidades em uma experiência prática e responsiva."
        },
        {
          title: "Archteturis",
          type: "Framework para bots",
          summary:
            "Framework TypeScript para bots Discord.js v14 com comandos slash modulares e arquitetura reutilizável.",
          outcome:
            "Base organizada para evitar boilerplate repetido e acelerar criação de bots."
        }
      ]
    },
    stack: {
      kicker: "Stack",
      title: "Ferramentas organizadas por intenção.",
      description:
        "A stack equilibra interface, movimento, backend e camada espacial sem transformar o site em vitrine de efeitos."
    },
    contact: {
      kicker: "Contato",
      title: "Vamos construir algo com calma, forma e função.",
      description:
        "Envie uma mensagem para trabalho, colaboração ou conversa técnica. O formulário está pronto para conectar a um provedor real de email.",
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
      eyebrow: "Arthur Almeida | Sao Paulo, Brazil",
      name: "RUHTRA",
      role: "Creative Developer",
      line: "Building interfaces, APIs and digital experiences with React, Next.js, TypeScript and Node.js.",
      location: "Sao Paulo, Brazil",
      scroll: "Scroll",
      cta: "View work",
      resume: "Resume",
      github: "GitHub"
    },
    about: {
      kicker: "About",
      title: "Full-stack developer with a strong eye for interface, product and systems.",
      lead:
        "I am Arthur Pedroso de Almeida, also known as Ruhtra. I build modern applications with a focus on usability, code organization and real integration between frontend and backend.",
      body:
        "My foundation combines React, Next.js, TypeScript, Node.js, REST APIs, JWT authentication, dashboards and support systems. I like creating products that feel simple on the surface and well structured underneath.",
      blocks: [
        {
          title: "Interface",
          text: "Focused on UI/UX, visual hierarchy, responsiveness, accessibility and interaction quality."
        },
        {
          title: "System",
          text: "Practical frontend/backend experience with authentication, REST APIs, databases and complete flows."
        },
        {
          title: "Growth",
          text: "Rocketseat ONE education and continuous study around React, Next.js, Node.js, TypeScript and Linux."
        }
      ]
    },
    work: {
      kicker: "Work",
      title: "Main repositories, with GitHub-like clarity and product context.",
      description:
        "Direct, scannable cards focused on what matters: name, description, stack and repository link.",
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
