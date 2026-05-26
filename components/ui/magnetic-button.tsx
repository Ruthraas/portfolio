"use client";

import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "ghost";
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

  const applyMagnet = (event: React.MouseEvent<HTMLElement>) => {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    element.style.transform = `translate3d(${x * 0.18}px, ${y * 0.18}px, 0)`;
  };

  const resetMagnet = () => {
    if (ref.current) ref.current.style.transform = "translate3d(0, 0, 0)";
  };

  const classes = cn(
    "gpu-layer inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition duration-300",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--cyan)]",
    variant === "primary"
      ? "bg-white text-black shadow-[0_0_44px_rgba(200,255,100,0.18)] hover:bg-[var(--lime)]"
      : "border border-white/14 bg-white/7 text-white/78 hover:border-white/26 hover:bg-white/12 hover:text-white",
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
        {children}
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
      {children}
    </button>
  );
}
