"use client";
import React from "react";
import { motion } from "motion/react";

type StarProps = {
  className?: string;
  color: string;
  delay?: number;
  duration?: number;
};

function Star({ className, color, delay = 0, duration = 1.2 }: StarProps) {
  return (
    <motion.svg
      width="77"
      height="77"
      viewBox="0 0 77 77"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ opacity: 0.9 }}
      whileHover={{ scale: 1.1 }}
      animate={{ opacity: [1, 0.25, 1] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <path
        d="M38.562 1.13769e-06C38.5597 0.174913 38.5585 0.350105 38.5585 0.525573C38.5585 21.768 55.7636 38.9921 77 39.0256L76.9999 39.0259C55.9391 39.0592 38.8433 56 38.562 77C38.5596 77 38.5572 77 38.5548 77C38.2733 55.9794 21.1442 39.0258 0.0548897 39.0258C0.0365889 39.0258 0.0182948 39.0259 0 39.0259V39.0256C0.0182937 39.0256 0.0365901 39.0258 0.0548897 39.0258C21.3198 39.0258 38.5585 21.7887 38.5585 0.525573C38.5585 0.350102 38.5572 0.174916 38.5548 1.13769e-06C38.5572 4.4741e-06 38.5596 -2.63654e-06 38.562 1.13769e-06Z"
        fill={color}
      />
    </motion.svg>
  );
}

export default Star;
