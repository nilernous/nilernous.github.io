import { motion } from "framer-motion";

// <h2> whose opacity pulses continuously.
export default function ShimmerTitle({ children, className, color = "#00d9ff" }) {
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
