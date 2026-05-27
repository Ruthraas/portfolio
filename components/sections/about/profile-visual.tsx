"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ProfileVisual() {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 28, rotate: -1 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto aspect-[4/5] w-full max-w-[24rem] lg:mr-0"
    >
      <div className="absolute -inset-4 rounded-full border border-white/[0.045]" />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -14, 0], rotate: [0, 1.5, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-6 top-12 h-28 w-28 rounded-full border border-white/10 bg-white/[0.025]"
      />
      <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
        <Image
          src="/images/arthur-profile.svg"
          alt="Retrato editorial de Arthur Pedroso de Almeida"
          width={900}
          height={1100}
          priority={false}
          className="h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,transparent,rgba(0,0,0,0.55)_72%)]" />
      </div>
      <figcaption className="absolute -bottom-4 left-6 right-6 flex justify-between rounded-full border border-white/10 bg-black/58 px-4 py-3 text-xs text-white/58 backdrop-blur-md">
        <span>Arthur Pedroso de Almeida</span>
        <span>Ruhtra</span>
      </figcaption>
    </motion.figure>
  );
}
