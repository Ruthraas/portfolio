export type Locale = "pt" | "en";

export const locales: Locale[] = ["pt", "en"];

export const translations = {
  pt: {
    nav: {
      work: "Projetos",
      about: "Sobre",
      timeline: "Trajetória",
      stack: "Stack",
      contact: "Contato"
    },
    actions: {
      label: "Ações rápidas",
      items: {
        linkedin: {
          title: "Acessar LinkedIn",
          description: "Perfil profissional e trajetória."
        },
        projects: {
          title: "Acessar projetos",
          description: "Repositórios principais no portfolio."
        },
        resume: {
          title: "Baixar currículo",
          description: "Resumo profissional em PDF."
        }
      }
    },
    hero: {
      eyebrow: "Arthur Pedroso de Almeida | São Paulo, Brasil",
      name: "RUHTRA",
      role: "Creative Developer",
      line: "Desenvolvedor full-stack, técnico em eletrônica e mecatrônica, criando produtos digitais com precisão visual e base técnica.",
      location: "São Paulo, Brasil",
      scroll: "Role",
      cta: "Ver projetos",
      resume: "Currículo",
      github: "GitHub"
    },
    about: {
      kicker: "Sobre",
      title: "Sobre mim, sem pose e sem ruído.",
      lead:
        "Sou Arthur Pedroso de Almeida, também conhecido como Ruhtra. Minha trajetória mistura desenvolvimento full-stack, eletrônica, mecatrônica, suporte técnico e liderança técnica.",
      body:
        "Atuo com React, Next.js, TypeScript, Node.js, APIs REST, autenticação JWT, dashboards e sistemas de suporte. No LinkedIn, minha base aparece bem direta: tecnologia, operação, produto e vontade de construir com responsabilidade.",
      blocks: [
        {
          title: "Full-stack",
          text: "Interfaces modernas conectadas a APIs, autenticação, bancos de dados e fluxos reais."
        },
        {
          title: "Técnico",
          text: "Formação em eletrônica e mecatrônica, com experiência prática em suporte técnico."
        },
        {
          title: "Produto",
          text: "Perfil empreendedor, CTO e sócio proprietário da Aurora Technology Society."
        }
      ]
    },
    timeline: {
      kicker: "Trajetória",
      title: "Experiência, formação e certificados em uma linha só.",
      description:
        "Uma leitura horizontal da minha base profissional: ETEC, eletrônica, suporte técnico e certificações Rocketseat."
    },
    work: {
      kicker: "Projetos",
      title: "Projetos principais, lado a lado e direto ao ponto.",
      description:
        "Cards menores no estilo repositório: nome, descrição, stack e acesso rápido ao GitHub.",
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
      title: "Stack usada para construir produtos completos.",
      description:
        "Uma base prática entre frontend, backend, dados, sistemas e ferramentas do dia a dia."
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
      timeline: "Timeline",
      stack: "Stack",
      contact: "Contact"
    },
    actions: {
      label: "Quick actions",
      items: {
        linkedin: {
          title: "Open LinkedIn",
          description: "Professional profile and career path."
        },
        projects: {
          title: "Open projects",
          description: "Main repositories in the portfolio."
        },
        resume: {
          title: "Download resume",
          description: "Professional summary in PDF."
        }
      }
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
      github: "GitHub"
    },
    about: {
      kicker: "About",
      title: "About me, no pose and no noise.",
      lead:
        "I am Arthur Pedroso de Almeida, also known as Ruhtra. My path combines full-stack development, electronics, mechatronics, technical support and technical leadership.",
      body:
        "I work with React, Next.js, TypeScript, Node.js, REST APIs, JWT authentication, dashboards and support systems. My profile is direct: technology, operations, product thinking and the will to build responsibly.",
      blocks: [
        {
          title: "Full-stack",
          text: "Modern interfaces connected to APIs, authentication, databases and real workflows."
        },
        {
          title: "Technical",
          text: "Education in electronics and mechatronics, with practical technical support experience."
        },
        {
          title: "Product",
          text: "Entrepreneurial profile, CTO and owner-partner at Aurora Technology Society."
        }
      ]
    },
    timeline: {
      kicker: "Timeline",
      title: "Experience, education and certificates in one line.",
      description:
        "A horizontal read of my professional base: ETEC, electronics, technical support and Rocketseat certifications."
    },
    work: {
      kicker: "Work",
      title: "Main projects, side by side and straight to the point.",
      description:
        "Smaller repository-style cards: name, description, stack and quick access to GitHub.",
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
      title: "Stack used to build complete products.",
      description:
        "A practical base across frontend, backend, data, systems and everyday tools."
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
