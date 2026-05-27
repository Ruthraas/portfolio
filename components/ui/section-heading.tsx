import type { ReactNode } from "react";

type SectionHeadingProps = {
  kicker: string;
  title: ReactNode;
  description?: string;
};

export function SectionHeading({
  kicker,
  title,
  description
}: SectionHeadingProps) {
  return (
    <div className="max-w-4xl">
      <p className="section-kicker">{kicker}</p>
      <h2 className="mt-5 text-balance text-4xl font-black leading-[0.96] text-[var(--foreground)] sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
