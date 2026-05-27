"use client";

import { motion } from "framer-motion";
import { FileText, FolderGit2, Network } from "lucide-react";
import { usePortfolioI18n } from "@/components/providers/i18n-provider";
import { profile } from "@/lib/site-data";

const actionMeta = [
  {
    key: "linkedin",
    href: profile.linkedin,
    icon: Network,
    external: true
  },
  {
    key: "projects",
    href: "#work",
    icon: FolderGit2,
    external: false
  },
  {
    key: "resume",
    href: profile.resume,
    icon: FileText,
    external: false,
    download: true
  }
] as const;

export function ActionRail() {
  const { content } = usePortfolioI18n();

  return (
    <motion.aside
      initial={{ x: -18, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      aria-label={content.actions.label}
      className="fixed left-4 top-1/2 z-[65] hidden -translate-y-1/2 flex-col gap-3 md:flex xl:left-8"
    >
      {actionMeta.map((action) => {
        const Icon = action.icon;
        const copy = content.actions.items[action.key];

        return (
          <a
            key={action.key}
            href={action.href}
            target={action.external ? "_blank" : undefined}
            rel={action.external ? "noreferrer" : undefined}
            download={"download" in action && action.download ? true : undefined}
            aria-label={copy.title}
            className="group relative grid size-11 place-items-center rounded-full border border-white/12 bg-black/68 text-white/62 shadow-[0_1rem_3rem_rgba(0,0,0,0.36)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-white/70 hover:bg-black/80 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/70"
          >
            <Icon size={17} strokeWidth={1.8} />
            <span className="pointer-events-none absolute left-[calc(100%+0.85rem)] top-1/2 w-max max-w-[16rem] -translate-y-1/2 rounded-2xl border border-white/12 bg-black/88 px-4 py-3 text-left text-white opacity-0 shadow-[0_1.25rem_4rem_rgba(0,0,0,0.44)] transition duration-300 group-hover:translate-x-1 group-hover:opacity-100 group-focus-visible:translate-x-1 group-focus-visible:opacity-100">
              <span className="block text-xs font-bold">{copy.title}</span>
              <span className="mt-1 block text-[0.72rem] leading-4 text-white/58">
                {copy.description}
              </span>
            </span>
          </a>
        );
      })}
    </motion.aside>
  );
}
