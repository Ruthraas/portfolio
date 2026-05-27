import { AboutSection } from "@/components/sections/about/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects/projects-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { TimelineSection } from "@/components/sections/timeline/timeline-section";

export default function Home() {
  return (
    <main data-page-root>
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <ProjectsSection />
      <TechStackSection />
      <ContactSection />
    </main>
  );
}
