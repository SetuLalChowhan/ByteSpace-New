"use client";

import React, { ReactNode } from "react";
import { motion, HTMLMotionProps, Variants } from "framer-motion";

// 1. MotionSection: Smooth section/block viewport fade-in
export interface MotionSectionProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  once?: boolean;
  amount?: number | "some" | "all";
  margin?: string;
}

export const MotionSection: React.FC<MotionSectionProps> = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 36,
  duration = 0.85,
  once = true,
  amount = 0.1,
  margin = "0px 0px -40px 0px",
  ...props
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0 };
      case "down":
        return { y: -distance, x: 0 };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      case "none":
      default:
        return { x: 0, y: 0 };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...getInitialPosition() }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount, margin }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// 2. MotionStagger: Orchestrates cards/items one after another
export interface MotionStaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
  once?: boolean;
  amount?: number | "some" | "all";
  margin?: string;
}

const staggerContainerVariants = (
  staggerDelay: number,
  delayChildren: number
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: delayChildren,
    },
  },
});

export const MotionStagger: React.FC<MotionStaggerProps> = ({
  children,
  className = "",
  staggerDelay = 0.14,
  delayChildren = 0.08,
  once = true,
  amount = 0.1,
  margin = "0px 0px -40px 0px",
}) => {
  return (
    <motion.div
      variants={staggerContainerVariants(staggerDelay, delayChildren)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// 3. MotionItem: Individual card/element within a stagger group
export interface MotionItemProps {
  children: ReactNode;
  className?: string;
  distance?: number;
  duration?: number;
}

const itemVariants = (distance: number, duration: number): Variants => ({
  hidden: { opacity: 0, y: distance, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration,
      ease: [0.16, 1, 0.3, 1],
    },
  },
});

export const MotionItem: React.FC<MotionItemProps> = ({
  children,
  className = "",
  distance = 32,
  duration = 0.75,
}) => {
  return (
    <motion.div
      variants={itemVariants(distance, duration)}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// 4. MotionFade: For buttons or small CTA elements
export interface MotionFadeProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  delay?: number;
  scale?: number;
  duration?: number;
}

export const MotionFade: React.FC<MotionFadeProps> = ({
  children,
  className = "",
  delay = 0.2,
  scale = 0.94,
  duration = 0.65,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale, y: 16 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -30px 0px" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export type MotionWrapperProps = MotionSectionProps;
export const MotionWrapper = MotionSection;
export default MotionSection;
