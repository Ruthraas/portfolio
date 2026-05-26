import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";

export default function Home() {
  return (
    <main data-barba="wrapper">
      <div data-barba="container" data-barba-namespace="home">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <TechStackSection />
        <ContactSection />
      </div>
    </main>
  );
}
