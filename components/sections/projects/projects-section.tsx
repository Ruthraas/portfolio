"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { usePortfolioI18n } from "@/components/providers/i18n-provider";
import { ProjectCard } from "@/components/sections/projects/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { projectMeta } from "@/lib/site-data";

export function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const { content, locale } = usePortfolioI18n();
  useGsapReveal(ref);

  return (
    <section id="work" ref={ref} className="page-offset section-space">
      <div className="content-shell">
        <AnimatePresence mode="wait">
          <motion.div
            key={locale}
            initial={{ y: 14 }}
            animate={{ y: 0 }}
            exit={{ y: -8 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="reveal mb-10">
              <SectionHeading
                kicker={content.work.kicker}
                title={content.work.title}
                description={content.work.description}
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {projectMeta.map((meta, index) => (
                <ProjectCard
                  key={meta.repo}
                  meta={meta}
                  project={content.work.projects[index]}
                  openLabel={content.work.open}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
