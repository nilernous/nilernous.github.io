import { useRef } from "react";
import { animate, stagger, utils } from "animejs";
import useInViewAnimation from "../../hooks/useInViewAnimation";

const STEP_MS = 450;

const timelineAnimation = {
  prepare: () => {
    utils.set(".timeline-marker", { scale: 0 });
    utils.set(".timeline-line", { scaleY: 0 });
    utils.set(".timeline-content", { opacity: 0, translateX: -16 });
  },
  play: () => {
    animate(".timeline-marker", { scale: 1, duration: 500, delay: stagger(STEP_MS), ease: "outBack" });
    animate(".timeline-content", { opacity: 1, translateX: 0, duration: 500, delay: stagger(STEP_MS, { start: 120 }), ease: "outCubic" });
    animate(".timeline-line", { scaleY: 1, duration: STEP_MS, delay: stagger(STEP_MS, { start: 250 }), ease: "inOutSine" });
  },
};

// Vertical timeline. Each item: { period, desc, dotClass, markerClass }.
// The connector runs from the center of one marker to the center of the next.
export default function Timeline({ items }) {
  const root = useRef(null);
  useInViewAnimation(root, timelineAnimation);

  return (
    <ol ref={root}>
      {items.map((item, i) => (
        <li key={item.period} className="relative grid grid-cols-[2rem_1fr] gap-x-5 pb-10 last:pb-0">
          {i < items.length - 1 && (
            <span
              aria-hidden="true"
              className="timeline-line absolute left-4 top-4 -bottom-4 w-0.5 -translate-x-1/2 origin-top bg-slate-200"
            />
          )}
          <span
            aria-hidden="true"
            className={`timeline-marker relative z-10 w-8 h-8 rounded-full bg-white border-2 flex items-center justify-center ${item.markerClass}`}
          >
            <span className={`w-3 h-3 rounded-full ${item.dotClass}`} />
          </span>
          <div className="timeline-content pt-0.5">
            <h4 className="font-extrabold text-slate-900 text-lg leading-7">{item.period}</h4>
            <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
