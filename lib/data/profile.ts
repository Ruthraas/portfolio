import { Code, Mail, Network } from "lucide-react";

export const profile = {
  name: "Arthur Pedroso de Almeida",
  displayName: "Arthur Pedroso de Almeida",
  alias: "Ruhtra",
  title:
    "Desenvolvedor Full-Stack | Técnico em Eletrônica | Técnico em Mecatrônica | CTO",
  location: "São Paulo, Brasil",
  github: "https://github.com/Ruthraas",
  linkedin: "https://linkedin.com/in/Arthurdevin",
  email: "arthurpedrosodealmeida@gmail.com",
  resume: "/resume/arthur-almeida-resume.pdf"
};

export const socials = [
  { label: "GitHub", href: profile.github, icon: Code },
  { label: "LinkedIn", href: profile.linkedin, icon: Network },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail }
];
