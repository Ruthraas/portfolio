"use client";

import { FormEvent, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { profile, socials } from "@/lib/site-data";

export function ContactSection() {
  const ref = useRef<HTMLElement>(null);
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

  return (
    <section id="contact" ref={ref} className="section-space pb-8">
      <div className="page-shell">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="motion-reveal">
            <SectionHeading
              kicker="Contact"
              title="Build the next version with taste and structure."
              description="Open a direct line for work, collaboration or a technical conversation. The portfolio already includes the downloadable resume."
            />

            <div className="mt-8 flex flex-wrap gap-2">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                    data-cursor={social.label}
                    className="inline-flex items-center gap-2 border border-[var(--line)] bg-white/[0.035] px-4 py-2 text-xs font-bold uppercase text-white/58 transition hover:border-white/28 hover:bg-white/[0.07] hover:text-white"
                  >
                    <Icon size={15} />
                    {social.label}
                  </a>
                );
              })}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="motion-reveal rule-box rounded-[8px] p-5 sm:p-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="input-shell rounded-[8px] p-4">
                <span className="text-xs font-black uppercase text-white/34">Name</span>
                <input
                  name="name"
                  required
                  className="mt-3 w-full bg-transparent text-white outline-none placeholder:text-white/22"
                  placeholder="Your name"
                />
              </label>
              <label className="input-shell rounded-[8px] p-4">
                <span className="text-xs font-black uppercase text-white/34">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-3 w-full bg-transparent text-white outline-none placeholder:text-white/22"
                  placeholder="you@email.com"
                />
              </label>
            </div>
            <label className="input-shell mt-4 block rounded-[8px] p-4">
              <span className="text-xs font-black uppercase text-white/34">Message</span>
              <textarea
                name="message"
                required
                rows={7}
                className="mt-3 w-full resize-none bg-transparent text-white outline-none placeholder:text-white/22"
                placeholder="Tell me what needs to be built."
              />
            </label>

            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="min-h-6 text-sm text-white/48">
                {status === "sent"
                  ? "Message received."
                  : status === "error"
                    ? "Check the fields and try again."
                    : `Direct line: ${profile.email}`}
              </p>
              <MagneticButton type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Sending" : "Send"}
                <ArrowUpRight size={18} />
              </MagneticButton>
            </div>
          </form>
        </div>

        <footer className="mt-20 flex flex-col gap-4 border-t border-[var(--line)] py-8 text-sm text-white/38 sm:flex-row sm:items-center sm:justify-between">
          <p>Arthur Almeida | Ruhtra</p>
          <p>Full-Stack Developer | Embedded Systems | React & Node.js</p>
        </footer>
      </div>
    </section>
  );
}
