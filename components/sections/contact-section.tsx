"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { useRef } from "react";
import { usePortfolioI18n } from "@/components/providers/i18n-provider";
import { ActionButton } from "@/components/ui/action-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { profile, socials } from "@/lib/site-data";

export function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const { content, locale } = usePortfolioI18n();
  useGsapReveal(ref);

  return (
    <section id="contact" ref={ref} className="page-offset section-space pb-8">
      <div className="content-shell">
        <AnimatePresence mode="wait">
          <motion.div
            key={locale}
            initial={{ y: 14 }}
            animate={{ y: 0 }}
            exit={{ y: -8 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]"
          >
            <div className="reveal">
              <SectionHeading
                kicker={content.contact.kicker}
                title={content.contact.title}
                description={content.contact.description}
              />
              <div className="mt-8 flex flex-wrap gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                      data-cursor={social.label}
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-4 py-2 text-sm text-white/50 transition hover:border-white/24 hover:text-white"
                    >
                      <Icon size={16} />
                      {social.label}
                    </a>
                  );
                })}
              </div>
            </div>

            <div
              data-cta-depth
              className="reveal contact-cta-3d relative isolate overflow-hidden rounded-[1.7rem] p-6 sm:p-8"
            >
              <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(circle_at_24%_18%,rgba(216,201,165,0.16),transparent_32%),radial-gradient(circle_at_78%_78%,rgba(143,157,168,0.16),transparent_34%)]" />
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/42 to-transparent" />

              <div className="relative flex min-h-[24rem] flex-col justify-between">
                <div className="flex items-center justify-between gap-4">
                  <span className="grid size-12 place-items-center rounded-full border border-white/14 bg-black/35 text-white/70 shadow-[0_1.5rem_4rem_rgba(0,0,0,0.36)]">
                    <Mail size={19} />
                  </span>
                  <span className="text-right text-xs uppercase tracking-[0.26em] text-white/38">
                    {content.contact.idle}
                  </span>
                </div>

                <div>
                  <p className="max-w-[13rem] text-sm uppercase tracking-[0.24em] text-white/36">
                    {profile.email}
                  </p>
                  <h3
                    data-scroll-velocity
                    className="contact-cta-title mt-7 max-w-2xl text-[clamp(3rem,9vw,6.6rem)] font-black uppercase leading-[0.82] text-white"
                  >
                    {content.contact.ctaTitle}
                  </h3>
                  <p className="mt-7 max-w-xl text-base leading-8 text-white/58 md:text-lg">
                    {content.contact.ctaText}
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <ActionButton href={`mailto:${profile.email}?subject=Vamos criar um projeto juntos`}>
                    {content.contact.ctaButton}
                    <ArrowUpRight size={18} />
                  </ActionButton>
                  <span className="text-sm text-white/34">{profile.location}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <footer className="mt-20 flex flex-col gap-4 border-t border-[var(--line)] py-8 text-sm text-white/32 sm:flex-row sm:items-center sm:justify-between">
          <p>Arthur Pedroso de Almeida | Ruhtra</p>
          <p>{profile.title}</p>
        </footer>
      </div>
    </section>
  );
}
