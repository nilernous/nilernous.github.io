import { useLayoutEffect, useRef } from "react";
import { animate, createDraggable, createScope } from "animejs";
import { prefersReducedMotion } from "../../hooks/useInViewAnimation";

const DESKTOP_QUERY = "(min-width: 1024px) and (pointer: fine)";

// Wraps `children` so they bob gently once visible. On desktop they can also be grabbed and
// thrown anywhere inside `containerRef` (the hero section); they spring to a stop at the edges.
// Two layers: the outer one is moved by the draggable, the inner one runs the float loop.
export default function FloatingCard({ containerRef, className = "", children }) {
  const dragRef = useRef(null);
  const floatRef = useRef(null);

  useLayoutEffect(() => {
    const scope = createScope({ root: dragRef, mediaQueries: { desktop: DESKTOP_QUERY } });

    // Re-runs automatically when the desktop media query changes.
    scope.add((self) => {
      const float = prefersReducedMotion()
        ? null
        : animate(floatRef.current, {
            translateY: [-10, 10],
            rotate: [-1, 1],
            duration: 3200,
            ease: "inOutSine",
            loop: true,
            alternate: true,
            autoplay: false,
          });

      // Start floating only once the card is on screen.
      const observer = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        float?.resume();
      });
      observer.observe(dragRef.current);

      if (self.matches.desktop) {
        createDraggable(dragRef.current, {
          container: containerRef.current,
          // [top, right, bottom, left]; the top clears the fixed navbar.
          containerPadding: [96, 16, 16, 16],
          velocityMultiplier: 1.6,
          releaseStiffness: 60,
          releaseDamping: 14,
          onGrab: () => float?.pause(),
          onSettle: () => float?.resume(),
        });
      }

      return () => observer.disconnect();
    });

    return () => scope.revert();
  }, [containerRef]);

  return (
    <div ref={dragRef} className={`relative z-20 select-none ${className}`}>
      <div ref={floatRef} className="relative">
        {children}
      </div>
    </div>
  );
}
