import { motion } from "framer-motion";
import { useState, useRef, useEffect, useCallback } from "react";
import ProfileCard from "./cards/ProfileCard";
import SkillsCard from "./cards/SkillsCard";
import PurposeCard from "./cards/PurposeCard";
import ExperienceCard from "./cards/ExperienceCard";
import ContactCard from "./cards/ContactCard";

// Shimmer Title Component
function ShimmerTitle({ children, className, color = "#00d9ff" }) {
  return (
    <motion.h2
      className={`${className} relative inline-block`}
      initial={{ opacity: 0.8 }}
      animate={{
        opacity: [0.8, 1, 0.8],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ color }}
    >
      {children}
    </motion.h2>
  );
}

// Shimmer Subtitle Component for h3
function ShimmerSubtitle({ children, className, color = "#4ecdc4" }) {
  return (
    <motion.h3
      className={className}
      initial={{ opacity: 0.8 }}
      animate={{
        opacity: [0.8, 1, 0.8],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ color }}
    >
      {children}
    </motion.h3>
  );
}

// Export shimmer components for use in cards
export { ShimmerTitle, ShimmerSubtitle };

// Circular Carousel with hover pause and swipe support
export default function Carousel() {
  const cards = [
    ProfileCard,
    SkillsCard,
    PurposeCard,
    ExperienceCard,
    ContactCard,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const touchStartRef = useRef(null);
  const containerRef = useRef(null);

  // Auto rotation - pauses on hover
  useEffect(() => {
    if (!isAutoRotating || isHovering) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoRotating, isHovering, cards.length]);

  // Swipe handlers
  const handleTouchStart = useCallback((e) => {
    touchStartRef.current = e.touches[0].clientX;
    setIsAutoRotating(false);
  }, []);

  const handleTouchMove = useCallback(
    (e) => {
      if (touchStartRef.current === null) return;

      const touchEnd = e.touches[0].clientX;
      const diff = touchStartRef.current - touchEnd;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          setCurrentIndex((prev) => (prev + 1) % cards.length);
        } else {
          setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
        }
        touchStartRef.current = touchEnd;
      }
    },
    [cards.length],
  );

  const handleTouchEnd = useCallback(() => {
    touchStartRef.current = null;
    setTimeout(() => setIsAutoRotating(true), 5000);
  }, []);

  // Mouse drag handlers
  const handleMouseDown = useCallback((e) => {
    touchStartRef.current = e.clientX;
    setIsAutoRotating(false);
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (touchStartRef.current === null) return;

      const diff = touchStartRef.current - e.clientX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          setCurrentIndex((prev) => (prev + 1) % cards.length);
        } else {
          setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
        }
        touchStartRef.current = e.clientX;
      }
    },
    [cards.length],
  );

  const handleMouseUp = useCallback(() => {
    touchStartRef.current = null;
    setTimeout(() => setIsAutoRotating(true), 3000);
  }, []);

  // Container hover handlers
  const handleContainerMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleContainerMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full mx-auto px-4 flex items-center justify-center"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleContainerMouseLeave}
    >
      {/* Circular card container */}
      <div className="relative w-full flex items-center justify-center h-96">
        {cards.map((Card, index) => {
          const offset = (index - currentIndex + cards.length) % cards.length;

          // Calculate position in circle
          const angle = (offset / cards.length) * 2 * Math.PI;
          const radius = 120; // pixels
          const x = Math.sin(angle) * radius;
          const y = -Math.cos(angle) * radius * 0.3;
          const scale = offset === 0 ? 1 : 0.85;
          const opacity = offset === 0 ? 1 : 0.5;
          const zIndex = offset === 0 ? 10 : 0;
          const rotation = offset * 15;

          return (
            <div
              key={index}
              className="absolute transition-all duration-500 ease-out"
              style={{
                transform: `translate(${x}px, ${y}px) scale(${scale}) rotate(${rotation}deg)`,
                opacity: opacity,
                zIndex: zIndex,
              }}
            >
              <Card
                isActive={offset === 0}
                onHover={(hovering) => {
                  setIsHovering(hovering);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
