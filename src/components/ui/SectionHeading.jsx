import { useRef } from "react";
import useInViewAnimation from "../../hooks/useInViewAnimation";
import { revealItems } from "../../lib/animations";

// Shared header for every content section: eyebrow pill, gradient-highlighted title, description.
export default function SectionHeading({
  icon: Icon,
  eyebrow,
  eyebrowClass,
  title,
  highlight,
  highlightClass,
  description,
}) {
  const root = useRef(null);
  useInViewAnimation(root, revealItems);

  return (
    <div ref={root} className="text-center max-w-3xl mx-auto mb-16 space-y-4">
      <div className={`reveal-item inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider ${eyebrowClass}`}>
        <Icon className="w-3.5 h-3.5" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="reveal-item text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
        {title} <span className={`bg-gradient-to-r ${highlightClass} bg-clip-text text-transparent`}>{highlight}</span>
      </h2>
      <p className="reveal-item text-slate-600 text-base sm:text-lg">{description}</p>
    </div>
  );
}
