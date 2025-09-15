// @/lib/motion.ts
export const slideInFromLeft = (delay = 0) => ({
  hidden: { x: -40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  },
});

export const slideInFromRight = (delay = 0) => ({
  hidden: { x: 40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  },
});

export const slideInFromTop = (delay = 0) => ({
  hidden: { y: -40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  },
});

// <-- ADD THIS:
export const slideInFromBottom = (delay = 0) => ({
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  },
});
