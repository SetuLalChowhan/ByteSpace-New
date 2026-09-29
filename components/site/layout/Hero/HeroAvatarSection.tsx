"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import HappyStudentsCard from "./HappyStudentsCard";
import LearningProgressCard from "./LearningProgressCard";

import circleArch from "@/assets/hero/circle1.png";
import avatarImg from "@/assets/hero/Avatar.png";

export const HeroAvatarSection: React.FC = () => {
  return (
    <div className="relative w-full max-w-[320px] xs:max-w-135 sm:max-w-155 lg:max-w-170 flex justify-center items-end mt-8 lg:mt-auto pt-4 z-10">
      {/* Neon Lime Green Circle Arch (Centered behind avatar) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] xs:w-[380px] sm:w-[500px] md:w-[620px] lg:w-[740px] xl:w-[840px] pointer-events-none z-0"
      >
        <Image
          src={circleArch}
          alt="Neon Lime Circle"
          priority
          className="w-full h-auto object-contain select-none"
        />
      </motion.div>

      {/* Main Avatar Student with Laptop (Slides up smoothly from bottom) */}
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.95, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex items-end"
      >
        <Image
          src={avatarImg}
          alt="ByteSpace Student with Laptop"
          priority
          className="w-full h-auto object-contain block select-none drop-shadow-2xl"
        />
      </motion.div>

      {/* Card 1: Happy Students (Enters smoothly to fixed position) */}
      <motion.div
        initial={{ opacity: 0, x: -50, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.85, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -left-1 xs:-left-2 sm:-left-5 md:-left-8.75 lg:-left-20 bottom-[12%] xs:bottom-[16%] sm:bottom-[24%] md:bottom-[16%] z-20 w-[145px] xs:w-[175px] sm:w-[215px] md:w-full md:max-w-[258px]"
      >
        <HappyStudentsCard />
      </motion.div>

      {/* Card 2: Learning Progress (Enters smoothly to fixed position) */}
      <motion.div
        initial={{ opacity: 0, x: 50, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.85, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -right-1 xs:-right-2 sm:-right-3.75 md:-right-6.25 lg:-right-8.7 top-[16%] xs:top-[18%] sm:top-[22%] md:top-[22%] z-20 w-[125px] xs:w-[145px] sm:w-[185px] md:w-full md:max-w-[232px]"
      >
        <LearningProgressCard />
      </motion.div>
    </div>
  );
};

export default HeroAvatarSection;
