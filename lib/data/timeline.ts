import type { Locale } from "@/lib/i18n/translations";

type TimelineItem = {
  date: string;
  side: "top" | "bottom";
  kind: "experience" | "education" | "certification";
  content: Record<Locale, { title: string; place: string; description: string }>;
};

export const timelineItems: TimelineItem[] = [
  {
    date: "2021 - 2023",
    side: "top",
    kind: "education",
    content: {
      pt: {
        title: "Mecatrônica",
        place: "ETEC / Etec Dr. Domingos Minicucci Filho",
        description: "Formação técnica com base em eletrônica, automação e sistemas."
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
    side: "bottom",
    kind: "experience",
    content: {
      pt: {
        title: "Técnico em Eletrônica",
        place: "ONsTECH - Soluções em Tecnologia",
        description: "Atuação prática com suporte técnico, eletrônica e operação."
      },
      en: {
        title: "Electronics Technician",
        place: "ONsTECH - Technology Solutions",
        description: "Hands-on work with technical support, electronics and operations."
      }
    }
  },
  {
    date: "Rocketseat",
    side: "top",
    kind: "certification",
    content: {
      pt: {
        title: "Fundamentos do Node.js",
        place: "Certificação",
        description: "Base sólida em Node.js, APIs e fundamentos de backend."
      },
      en: {
        title: "Node.js Fundamentals",
        place: "Certification",
        description: "Solid base in Node.js, APIs and backend fundamentals."
      }
    }
  },
  {
    date: "Rocketseat",
    side: "bottom",
    kind: "certification",
    content: {
      pt: {
        title: "JavaScript Fullstack",
        place: "Certificação",
        description: "Construção de aplicações completas com JavaScript."
      },
      en: {
        title: "JavaScript Fullstack",
        place: "Certification",
        description: "Full application development with JavaScript."
      }
    }
  },
  {
    date: "2025 - 2026",
    side: "top",
    kind: "experience",
    content: {
      pt: {
        title: "Support Technician",
        place: "Net Infinito Telecom",
        description: "Suporte técnico em ambiente real, atendimento e resolução de problemas."
      },
      en: {
        title: "Support Technician",
        place: "Net Infinito Telecom",
        description: "Technical support in a real operation, service and problem solving."
      }
    }
  },
  {
    date: "Rocketseat",
    side: "bottom",
    kind: "certification",
    content: {
      pt: {
        title: "Portfólio Ninja",
        place: "Certificação",
        description: "Apresentação profissional, posicionamento e construção de presença digital."
      },
      en: {
        title: "Portfolio Ninja",
        place: "Certification",
        description: "Professional presentation, positioning and digital presence."
      }
    }
  }
];
