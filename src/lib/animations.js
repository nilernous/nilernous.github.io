import { animate, stagger, utils } from "animejs";

// Reusable prepare/play pairs for useInViewAnimation.

// Elements marked `.reveal-item` fade and slide up one after another.
export const revealItems = {
  prepare: () => utils.set(".reveal-item", { opacity: 0, translateY: 24 }),
  play: () =>
    animate(".reveal-item", {
      opacity: 1,
      translateY: 0,
      duration: 700,
      delay: stagger(90),
      ease: "outCubic",
    }),
};

// For a single element observed on its own: the root itself fades and slides up,
// waiting `data-reveal-delay` ms so items in the same row still appear one after another.
export const revealSelf = {
  prepare: (scope) => utils.set(scope.root, { opacity: 0, translateY: 24 }),
  play: (scope) =>
    animate(scope.root, {
      opacity: 1,
      translateY: 0,
      duration: 700,
      delay: Number(scope.root.dataset.revealDelay || 0),
      ease: "outCubic",
    }),
};
