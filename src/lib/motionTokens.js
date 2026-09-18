// src/lib/motionTokens.js
export const transitions = {
  fast: { type: "spring", stiffness: 300, damping: 25 },
  base: { type: "spring", stiffness: 200, damping: 20 },
  slow: { type: "spring", stiffness: 100, damping: 15 },
  fluidEase: [0.25, 1, 0.5, 1], // Slick cubic-bezier
};

export const variants = {
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: transitions.fluidEase },
    },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4, ease: transitions.fluidEase },
    },
  },
  staggerContainer: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  cardHover: {
    rest: { y: 0 },
    hover: {
      y: -6,
      transition: transitions.fast,
    },
  },
  buttonTap: {
    hover: { scale: 1.03 },
    tap: { scale: 0.97 },
  },
};
