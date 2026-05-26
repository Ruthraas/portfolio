export const ease = {
  cinematic: [0.16, 1, 0.3, 1],
  heavy: [0.19, 1, 0.22, 1],
  snap: [0.77, 0, 0.175, 1]
} as const;

export const revealVariants = {
  hidden: {
    opacity: 0,
    y: 36,
    filter: "blur(18px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: ease.cinematic
    }
  }
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08
    }
  }
};
