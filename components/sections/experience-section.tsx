"use client";

import { useRef, type CSSProperties } from "react";
import { usePortfolioI18n } from "@/components/providers/i18n-provider";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { orbitStack } from "@/lib/site-data";

export function ExperienceSection() {
  const ref = useRef<HTMLElement>(null);
  const { locale } = usePortfolioI18n();
  useGsapReveal(ref);

  const copy =
    locale === "pt"
      ? {
          kicker: "Ambiente",
          title: "A interface se move como uma câmera lenta no espaço.",
          description:
            "Camadas de partículas, scroll suave e pequenos deslocamentos criam profundidade sem transformar a página em um espetáculo de efeitos.",
          center: "Espaço digital"
        }
      : {
          kicker: "Environment",
          title: "The interface moves like a slow camera through space.",
          description:
            "Particle layers, smooth scroll and tiny offsets create depth without turning the page into an effects spectacle.",
          center: "Digital space"
        };

  return (
    <section ref={ref} className="page-offset section-space">
      <div className="content-shell grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div className="reveal">
          <p className="kicker">{copy.kicker}</p>
          <h2 className="mt-5 text-balance text-4xl font-normal leading-tight tracking-[-0.035em] text-white md:text-6xl">
            {copy.title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted)]">
            {copy.description}
          </p>
        </div>

        <div className="reveal relative aspect-square max-h-[560px] overflow-hidden rounded-[2rem] border border-[var(--line)] bg-white/[0.012]">
          <div className="absolute inset-0 soft-grid opacity-55" />
          <div className="absolute inset-[18%] rounded-full border border-[var(--line-soft)]" />
          <div className="absolute inset-[34%] rounded-full border border-[var(--line-soft)]" />
          {orbitStack.map((item, index) => {
            const Icon = item.icon;
            const radius = index % 2 === 0 ? "170px" : "112px";
            return (
              <div
                key={item.name}
                className="absolute left-1/2 top-1/2"
                style={{
                  "--orbit-radius": radius,
                  animation: `stack-orbit ${28 + index * 2}s linear infinite`,
                  animationDelay: `${index * -2.5}s`
                } as CSSProperties}
              >
                <div className="-translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--line)] bg-black/54 p-3 text-white/42 transition hover:text-white">
                  <Icon size={18} />
                </div>
              </div>
            );
          })}
          <div className="absolute inset-0 grid place-items-center">
            <div className="max-w-44 text-center">
              <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                {copy.center}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
