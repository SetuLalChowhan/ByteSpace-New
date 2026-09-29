

"use client";

import React from "react";
import { motion } from "framer-motion";

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  yOffset?: number;
  xOffset?: number;
  rotateOffset?: number;
  delay?: number;
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  className = "",
  duration = 4,
  yOffset = 10,
  xOffset = 0,
  rotateOffset = 2,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -yOffset, 0, yOffset, 0],
        x: [0, xOffset, 0, -xOffset, 0],
        rotate: [0, rotateOffset, 0, -rotateOffset, 0],
      }}
      transition={{
        opacity: { duration: 0.8, delay },
        scale: { duration: 0.8, delay },
        y: {
          duration,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay,
        },
        x: {
          duration: duration * 1.2,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay,
        },
        rotate: {
          duration: duration * 1.5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay,
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement;
