import { Variants } from "framer-motion";

export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const containerVariantsStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: "-100%" },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" as const },
  },
};

export const fadeInLeft50: Variants = {
  hidden: { opacity: 0, x: "-50%" },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" as const },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: "100%" },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" as const },
  },
};

export const fadeInRight50: Variants = {
  hidden: { opacity: 0, x: "50%" },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" as const },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: "50%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" as const },
  },
};

export const fadeInTop: Variants = {
  hidden: { opacity: 0, y: "-100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" as const },
  },
};

export const fadeInBottom: Variants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" as const },
  },
};

export const barVariants: Variants = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const progressBarVariants: Variants = {
  hidden: { width: 0 },
  visible: { width: "100%" },
};

export const commonTransitions = {
  duration: 1,
  ease: "easeInOut" as const,
};

export const quickTransition = {
  duration: 0.6,
  ease: "easeInOut" as const,
};

export const slowTransition = {
  duration: 1.5,
  ease: "easeOut" as const,
}; 