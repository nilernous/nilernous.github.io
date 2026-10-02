// Pulsing "Available for projects" status pill. `className` sets display, spacing, shape and colors.
export default function AvailabilityBadge({ className = "" }) {
  return (
    <div className={`items-center gap-2 border text-emerald-700 text-xs font-medium ${className}`}>
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <span>Available for projects</span>
    </div>
  );
}
