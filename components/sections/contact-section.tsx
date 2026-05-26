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
    <section id="contact" ref={ref} className="section-pad relative overflow-hidden pb-8">
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 h-96 w-[70rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--cyan)_0%,transparent_60%)] opacity-10 blur-3xl"
      />
      <div className="section-inner">
        <div data-reveal className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let's build something that does not look rented."
              description="Send a direct message, download the resume or open the social channels. The form runs locally through a Next route handler, ready to connect with a real email provider later."
            />

            <div className="mt-8 flex flex-wrap gap-3">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={social.href.startsWith("mailto:") ? undefined : "noreferrer"}
                    data-cursor={social.label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/7 px-4 py-2 text-sm text-white/62 transition hover:border-white/24 hover:bg-white/12 hover:text-white"
                  >
                    <Icon size={16} />
                    {social.label}
                  </a>
                );
              })}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="glass-panel rounded-[2rem] p-5 sm:p-7"
            data-reveal
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="input-shell rounded-2xl p-4">
                <span className="text-xs uppercase text-white/40">Name</span>
                <input
                  name="name"
                  required
                  className="mt-2 w-full bg-transparent text-white outline-none placeholder:text-white/24"
                  placeholder="Your name"
                />
              </label>
              <label className="input-shell rounded-2xl p-4">
                <span className="text-xs uppercase text-white/40">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full bg-transparent text-white outline-none placeholder:text-white/24"
                  placeholder="you@email.com"
                />
              </label>
            </div>
            <label className="input-shell mt-4 block rounded-2xl p-4">
              <span className="text-xs uppercase text-white/40">Message</span>
              <textarea
                name="message"
                required
                rows={7}
                className="mt-2 w-full resize-none bg-transparent text-white outline-none placeholder:text-white/24"
                placeholder="Tell me about the product, system or interface."
              />
            </label>

            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="min-h-6 text-sm text-white/52">
                {status === "sent"
                  ? "Message received. Cinematic success animation armed."
                  : status === "error"
                    ? "Check the fields and try again."
                    : `Direct line: ${profile.email}`}
              </p>
              <MagneticButton type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Sending..." : "Transmit"}
                <ArrowUpRight size={18} />
              </MagneticButton>
            </div>
          </form>
        </div>

        <footer className="mt-20 flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>Arthur Almeida | Ruhtra</p>
          <p>Full-Stack Developer | Embedded Systems | React & Node.js</p>
        </footer>
      </div>
    </section>
  );
}
