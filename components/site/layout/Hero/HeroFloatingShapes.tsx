"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import leftSpringImg from "@/assets/hero/leftSpring.png";
import whiteSpringLeftImg from "@/assets/hero/whiteSPring.png";
import bottomWhiteCircleImg from "@/assets/hero/bottomWhiteCircle.png";
import rightCylinderImg from "@/assets/hero/rightSilinder.png";
import whiteConeImg from "@/assets/hero/whiteHatMask.png";
import bottomRightSpringImg from "@/assets/hero/bottomRightSpringWHite.png";

export const HeroFloatingShapes: React.FC = () => {
  return (
    <>
      {/* 1. Top-Left & Top-Right Neon Lime Elements (Anchored to Viewport Outer Edges) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Top Left Neon Lime Spring */}
        <motion.div
          initial={{ opacity: 0, x: -60, y: -20, rotate: -15 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -12, 0, 12, 0],
            rotate: [0, 4, 0, -4, 0],
          }}
          transition={{
            opacity: { duration: 0.9, delay: 0.1 },
            x: { duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
            rotate: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
          }}
          className="absolute -left-5 xs:-left-7 sm:-left-9 md:-left-11 lg:-left-13 xl:-left-14 top-[5%] xs:top-[7%] sm:top-[10%] md:top-[12%] lg:top-[12%] w-16 xs:w-22 sm:w-32 md:w-44 lg:w-56 xl:w-64 select-none"
        >
          <Image
            src={leftSpringImg}
            alt="Neon Lime Spring"
            priority
            className="w-full h-auto object-contain drop-shadow-xl"
          />
        </motion.div>

        {/* Top Right Neon Lime Cylinder */}
        <motion.div
          initial={{ opacity: 0, x: 60, y: -20, rotate: 15 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, 14, 0, -14, 0],
            rotate: [0, -3, 0, 3, 0],
          }}
          transition={{
            opacity: { duration: 0.9, delay: 0.15 },
            x: { duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] },
            y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
            rotate: { duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
          }}
          className="absolute -right-5 xs:-right-7 sm:-right-9 md:-right-11 lg:-right-13 xl:-right-14 top-[4%] xs:top-[6%] sm:top-[8%] md:top-[10%] lg:top-[10%] w-16 xs:w-22 sm:w-32 md:w-44 lg:w-56 xl:w-64 select-none"
        >
          <Image
            src={rightCylinderImg}
            alt="Neon Lime Cylinder"
            priority
            className="w-full h-auto object-contain drop-shadow-xl"
          />
        </motion.div>
      </div>

      {/* 2. Floating White 3D Shapes (Positioned inside Figma container) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Middle Left White Spring */}
        <motion.div
          initial={{ opacity: 0, x: -40, scale: 0.8 }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
            y: [0, -10, 0, 8, 0],
            rotate: [0, -4, 0, 4, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.3 },
            x: { duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] },
            scale: { duration: 0.8, delay: 0.3 },
            y: { duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 },
            rotate: { duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 },
          }}
          className="absolute left-2 xs:left-4 sm:left-8 md:left-14 lg:left-20 xl:left-24 top-[44%] xs:top-[42%] sm:top-[40%] md:top-[42%] lg:top-[40%] w-9 xs:w-11 sm:w-16 md:w-20 lg:w-26 select-none opacity-90 sm:opacity-100"
        >
          <Image
            src={whiteSpringLeftImg}
            alt="White Zigzag Spring"
            priority
            className="w-full h-auto object-contain drop-shadow-md"
          />
        </motion.div>

        {/* Bottom Left White Donut Ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 40 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, 8, 0, -8, 0],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            opacity: { duration: 0.9, delay: 0.35 },
            scale: { duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
            rotate: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
          }}
          className="absolute -left-2 xs:left-0 sm:left-4 md:left-8 lg:left-14 xl:left-18 bottom-[4%] sm:bottom-[6%] md:bottom-[10%] lg:bottom-[8%] w-24 xs:w-32 sm:w-44 md:w-56 lg:w-64 xl:w-72 select-none z-10"
        >
          <Image
            src={bottomWhiteCircleImg}
            alt="White 3D Ring"
            priority
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Middle Right White Cone */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.8 }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
            y: [0, 10, 0, -10, 0],
            rotate: [0, 6, 0, -6, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.3 },
            x: { duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] },
            scale: { duration: 0.8, delay: 0.3 },
            y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.45 },
            rotate: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.45 },
          }}
          className="absolute right-2 xs:right-4 sm:right-8 md:right-14 lg:right-20 xl:right-28 top-[42%] xs:top-[40%] sm:top-[38%] md:top-[40%] lg:top-[38%] w-10 xs:w-13 sm:w-18 md:w-24 lg:w-30 select-none opacity-90 sm:opacity-100"
        >
          <Image
            src={whiteConeImg}
            alt="White 3D Cone"
            priority
            className="w-full h-auto object-contain drop-shadow-md"
          />
        </motion.div>

        {/* Bottom Right White Spring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 40 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -9, 0, 9, 0],
            rotate: [0, -4, 0, 4, 0],
          }}
          transition={{
            opacity: { duration: 0.9, delay: 0.35 },
            scale: { duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] },
            y: { duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 0.55 },
            rotate: { duration: 6.8, repeat: Infinity, ease: "easeInOut", delay: 0.55 },
          }}
          className="absolute -right-2 xs:right-0 sm:right-4 md:right-8 lg:right-14 xl:right-18 bottom-[4%] sm:bottom-[6%] md:bottom-[10%] lg:bottom-[8%] w-20 xs:w-26 sm:w-36 md:w-44 lg:w-52 xl:w-60 select-none z-10"
        >
          <Image
            src={bottomRightSpringImg}
            alt="White 3D Spring"
            priority
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </>
  );
};

export default HeroFloatingShapes;
