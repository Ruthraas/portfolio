import { Award, BriefcaseBusiness, GraduationCap } from "lucide-react";

export const timelineIcons = {
  experience: BriefcaseBusiness,
  education: GraduationCap,
  certification: Award
};

export const timelineKindLabel = {
  pt: {
    experience: "Experiencia",
    education: "Formacao",
    certification: "Certificado"
  },
  en: {
    experience: "Experience",
    education: "Education",
    certification: "Certificate"
  }
} as const;

export const timelineAccent = {
  experience: {
    bar: "bg-white/58",
    icon: "text-white/66"
  },
  education: {
    bar: "bg-[var(--mist)]",
    icon: "text-[var(--mist)]"
  },
  certification: {
    bar: "bg-[var(--warm)]",
    icon: "text-[var(--warm)]"
  }
};
