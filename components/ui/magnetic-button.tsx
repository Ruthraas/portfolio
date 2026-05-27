"use client";

import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "outline";
};

type MagneticButtonProps =
  | (SharedProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
  | (SharedProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never });

export function MagneticButton({
  children,
  className,
  variant = "primary",
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);

  function applyMagnet(event: React.MouseEvent<HTMLElement>) {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    element.style.transform = `translate3d(${x * 0.14}px, ${y * 0.14}px, 0)`;
  }

  function resetMagnet() {
    if (ref.current) ref.current.style.transform = "translate3d(0, 0, 0)";
  }

  const classes = cn(
    "gpu-layer inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] px-5 text-sm font-bold uppercase transition duration-300",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--acid)]",
    variant === "primary"
      ? "border border-[var(--acid)] bg-[var(--acid)] text-[#050505] shadow-[0_20px_70px_rgba(216,243,106,0.16)] hover:bg-[var(--foreground)]"
      : "border border-[var(--line)] bg-white/[0.035] text-white/75 hover:border-white/28 hover:bg-white/[0.07] hover:text-white",
    className
  );

  if ("href" in props && props.href) {
    const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
    };

    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        {...anchorProps}
        className={classes}
        data-cursor="Open"
        onMouseMove={(event) => {
          applyMagnet(event);
          anchorProps.onMouseMove?.(event);
        }}
        onMouseLeave={(event) => {
          resetMagnet();
          anchorProps.onMouseLeave?.(event);
        }}
      >
        <span
          className="relative z-10 inline-flex items-center gap-2"
          style={variant === "primary" ? { color: "#050505" } : undefined}
        >
          {children}
        </span>
      </a>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      {...buttonProps}
      className={classes}
      data-cursor="Send"
      onMouseMove={(event) => {
        applyMagnet(event);
        buttonProps.onMouseMove?.(event);
      }}
      onMouseLeave={(event) => {
        resetMagnet();
        buttonProps.onMouseLeave?.(event);
      }}
    >
      <span
        className="relative z-10 inline-flex items-center gap-2"
        style={variant === "primary" ? { color: "#050505" } : undefined}
      >
        {children}
      </span>
    </button>
  );
}
