import { useLayoutEffect } from "react";
import { createScope } from "animejs";

export const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Runs an anime.js animation the first time `rootRef` scrolls into view.
// `prepare` sets the hidden start state before first paint; `play` animates to the final state.
// Both run inside an anime.js scope rooted at `rootRef`, so selectors only match inside it.
// Pass module-level functions (they are effect dependencies); change `key` to replay.
// `rootMargin` (not a ratio threshold) decides "in view", so very tall elements still trigger.
export default function useInViewAnimation(
  rootRef,
  { prepare, play },
  { rootMargin = "0px 0px -10% 0px", key } = {},
) {
  useLayoutEffect(() => {
    if (!rootRef.current || prefersReducedMotion()) return;

    const scope = createScope({ root: rootRef });
    if (prepare) scope.add(prepare);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        scope.add(play);
      },
      { rootMargin },
    );
    observer.observe(rootRef.current);

    return () => {
      observer.disconnect();
      scope.revert();
    };
  }, [rootRef, prepare, play, rootMargin, key]);
}
