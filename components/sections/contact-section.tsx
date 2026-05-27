"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FormEvent, useRef, useState } from "react";
import { usePortfolioI18n } from "@/components/providers/i18n-provider";
import { ActionButton } from "@/components/ui/action-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { profile, socials } from "@/lib/site-data";

export function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const { content, locale } = usePortfolioI18n();
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  useGsapReveal(ref);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setStatus("loading");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message")
      })
    });

    if (response.ok) {
      setStatus("sent");
      form.reset();
      return;
    }

    setStatus("error");
  }

  const statusText =
    status === "sent"
      ? content.contact.sent
      : status === "error"
        ? content.contact.error
        : `${content.contact.idle}: ${profile.email}`;

  return (
    <section id="contact" ref={ref} className="page-offset section-space pb-8">
      <div className="content-shell">
        <AnimatePresence mode="wait">
          <motion.div
            key={locale}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
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

            <form onSubmit={handleSubmit} className="reveal rounded-[1.7rem] border border-[var(--line)] bg-white/[0.014] p-5 sm:p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="input-shell rounded-2xl p-4">
                  <span className="text-xs uppercase text-white/34">{content.contact.name}</span>
                  <input
                    name="name"
                    required
                    className="mt-3 w-full bg-transparent text-white outline-none placeholder:text-white/22"
                    placeholder={content.contact.namePlaceholder}
                  />
                </label>
                <label className="input-shell rounded-2xl p-4">
                  <span className="text-xs uppercase text-white/34">{content.contact.email}</span>
                  <input
                    name="email"
                    type="email"
                    required
                    className="mt-3 w-full bg-transparent text-white outline-none placeholder:text-white/22"
                    placeholder={content.contact.emailPlaceholder}
                  />
                </label>
              </div>

              <label className="input-shell mt-4 block rounded-2xl p-4">
                <span className="text-xs uppercase text-white/34">{content.contact.message}</span>
                <textarea
                  name="message"
                  required
                  rows={7}
                  className="mt-3 w-full resize-none bg-transparent text-white outline-none placeholder:text-white/22"
                  placeholder={content.contact.messagePlaceholder}
                />
              </label>

              <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="min-h-6 text-sm text-white/46">{statusText}</p>
                <ActionButton type="submit" disabled={status === "loading"}>
                  {status === "loading" ? content.contact.sending : content.contact.send}
                  <ArrowUpRight size={18} />
                </ActionButton>
              </div>
            </form>
          </motion.div>
        </AnimatePresence>

        <footer className="mt-20 flex flex-col gap-4 border-t border-[var(--line)] py-8 text-sm text-white/32 sm:flex-row sm:items-center sm:justify-between">
          <p>Arthur Almeida | Ruhtra</p>
          <p>{profile.title}</p>
        </footer>
      </div>
    </section>
  );
}
