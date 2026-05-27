import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "ghost";
};

type ActionButtonProps =
  | (SharedProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
  | (SharedProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never });

export function ActionButton({
  children,
  className,
  variant = "primary",
  ...props
}: ActionButtonProps) {
  const classes = cn(
    "gpu-layer inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition duration-300",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--warm)]",
    variant === "primary"
      ? "bg-[var(--fg)] text-black shadow-[0_20px_80px_rgba(244,241,234,0.16)] hover:bg-[var(--warm)]"
      : "border border-[var(--line)] bg-white/[0.035] text-white/70 hover:border-white/24 hover:bg-transparent hover:text-white",
    className
  );

  if ("href" in props && props.href) {
    const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
    };

    return (
      <a {...anchorProps} className={classes}>
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
    <button {...buttonProps} className={classes}>
      <span
        className="relative z-10 inline-flex items-center gap-2"
        style={variant === "primary" ? { color: "#050505" } : undefined}
      >
        {children}
      </span>
    </button>
  );
}
