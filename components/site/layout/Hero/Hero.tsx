import React from "react";
import Image from "next/image";
import Search from "@/components/common/Search";
import { Title72, Title18 } from "@/components/common/Typho";
import HappyStudentsCard from "./HappyStudentsCard";
import LearningProgressCard from "./LearningProgressCard";

// Background grid & center arch
import heroBgGrid from "@/assets/heroBG2.png";
import circleArch from "@/assets/circle1.png";
import avatarImg from "@/assets/Avatar.png";

// Floating 3D decorative shapes
import leftSpringImg from "@/assets/leftSpring.png";
import whiteSpringLeftImg from "@/assets/whiteSPring.png";
import bottomWhiteCircleImg from "@/assets/bottomWhiteCircle.png";
import rightCylinderImg from "@/assets/rightSilinder.png";
import whiteConeImg from "@/assets/whiteHatMask.png";
import bottomRightSpringImg from "@/assets/bottomRightSpringWHite.png";

const Hero = () => {
  return (
    <section className="relative w-full h-auto min-h-0 lg:h-screen lg:max-h-[960px] overflow-hidden flex flex-col justify-between bg-[#003be2]">
      {/* 1. Base Full-Width Blue Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={heroBgGrid}
          alt="Hero Grid Background"
          fill
          priority
          className="object-cover object-center select-none"
        />
      </div>

      {/* 2. Top-Left & Top-Right Neon Lime Elements (Hugging Viewport Edges) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Top Left Neon Lime Spring */}
        <div className="absolute -left-5 xs:-left-7 sm:-left-9 md:-left-11 lg:-left-13 xl:-left-14 top-[5%] xs:top-[7%] sm:top-[10%] md:top-[12%] lg:top-[12%] w-16 xs:w-22 sm:w-32 md:w-44 lg:w-56 xl:w-64 select-none">
          <Image
            src={leftSpringImg}
            alt="Neon Lime Spring"
            priority
            className="w-full h-auto object-contain drop-shadow-xl"
          />
        </div>

        {/* Top Right Neon Lime Cylinder */}
        <div className="absolute -right-5 xs:-right-7 sm:-right-9 md:-right-11 lg:-right-13 xl:-right-14 top-[4%] xs:top-[6%] sm:top-[8%] md:top-[10%] lg:top-[10%] w-16 xs:w-22 sm:w-32 md:w-44 lg:w-56 xl:w-64 select-none">
          <Image
            src={rightCylinderImg}
            alt="Neon Lime Cylinder"
            priority
            className="w-full h-auto object-contain drop-shadow-xl"
          />
        </div>
      </div>

      {/* 3. Hero Main Content Canvas with White Shapes in Content Area */}
      <div className="relative z-10 w-full Container flex flex-col items-center flex-1 justify-between pt-20 sm:pt-24 md:pt-28 lg:pt-32 section-padding-x overflow-hidden">
        {/* Floating White 3D Shapes positioned within Figma container */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Middle Left White Spring */}
          <div className="absolute left-2 xs:left-4 sm:left-8 md:left-14 lg:left-20 xl:left-24 top-[44%] xs:top-[42%] sm:top-[40%] md:top-[42%] lg:top-[40%] w-9 xs:w-11 sm:w-16 md:w-20 lg:w-26 select-none opacity-90 sm:opacity-100">
            <Image
              src={whiteSpringLeftImg}
              alt="White Zigzag Spring"
              priority
              className="w-full h-auto object-contain drop-shadow-md"
            />
          </div>

          {/* Bottom Left White Donut Ring */}
          <div className="absolute -left-2 xs:left-0 sm:left-4 md:left-8 lg:left-14 xl:left-18 bottom-[4%] sm:bottom-[6%] md:bottom-[10%] lg:bottom-[8%] w-24 xs:w-32 sm:w-44 md:w-56 lg:w-64 xl:w-72 select-none z-10">
            <Image
              src={bottomWhiteCircleImg}
              alt="White 3D Ring"
              priority
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Middle Right White Cone */}
          <div className="absolute right-2 xs:right-4 sm:right-8 md:right-14 lg:right-20 xl:right-28 top-[42%] xs:top-[40%] sm:top-[38%] md:top-[40%] lg:top-[38%] w-10 xs:w-13 sm:w-18 md:w-24 lg:w-30 select-none opacity-90 sm:opacity-100">
            <Image
              src={whiteConeImg}
              alt="White 3D Cone"
              priority
              className="w-full h-auto object-contain drop-shadow-md"
            />
          </div>

          {/* Bottom Right White Spring */}
          <div className="absolute -right-2 xs:right-0 sm:right-4 md:right-8 lg:right-14 xl:right-18 bottom-[4%] sm:bottom-[6%] md:bottom-[10%] lg:bottom-[8%] w-20 xs:w-26 sm:w-36 md:w-44 lg:w-52 xl:w-60 select-none z-10">
            <Image
              src={bottomRightSpringImg}
              alt="White 3D Spring"
              priority
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Banner Section (Title, Subtitle, Search) */}
        <div className="w-full max-w-[1040px] text-center flex flex-col items-center z-20">
          {/* Main Title (Poppins 72px) */}
          <div className="w-full">
            <Title72>
              Get Access to Hundreds
              <br className="hidden xs:inline" /> Courses Available
            </Title72>
          </div>

          {/* Subtitle */}
          <div className="mt-2.5 sm:mt-3 px-2">
            <Title18 className="whitespace-normal md:whitespace-nowrap text-white/90">
              Unlock your creativity, gain valuable knowledge, and grow your
              business with our wide range of courses.
            </Title18>
          </div>

          {/* Client-side Search Form */}
          <div className="mt-5 sm:mt-6 md:mt-8 lg:mt-10 w-full">
            <Search />
          </div>
        </div>

        {/* Center Visual: Neon Lime Circle Arch + Student Avatar + Floating UI Badges */}
        <div className="relative w-full max-w-[320px] xs:max-w-135 sm:max-w-155 lg:max-w-170 flex justify-center items-end mt-8 lg:mt-auto pt-4 z-10">
          {/* Neon Lime Green Circle Arch (Centered behind avatar) */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] xs:w-[380px] sm:w-[500px] md:w-[620px] lg:w-[740px] xl:w-[840px] pointer-events-none z-0">
            <Image
              src={circleArch}
              alt="Neon Lime Circle"
              priority
              className="w-full h-auto object-contain select-none"
            />
          </div>

          {/* Main Avatar Student with Laptop */}
          <div className="relative z-10 flex items-end">
            <Image
              src={avatarImg}
              alt="ByteSpace Student with Laptop"
              priority
              className="w-full h-auto object-contain block select-none drop-shadow-2xl"
            />
          </div>

          {/* Floating Card 1: Happy Students */}
          <HappyStudentsCard className="absolute -left-1 xs:-left-2 sm:-left-5 md:-left-8.75 lg:-left-20 bottom-[12%] xs:bottom-[16%] sm:bottom-[24%] md:bottom-[16%] z-20 w-[145px] xs:w-[175px] sm:w-[215px] md:w-full md:max-w-[258px]" />

          {/* Floating Card 2: Learning Progress */}
          <LearningProgressCard className="absolute -right-1 xs:-right-2 sm:-right-3.75 md:-right-6.25 lg:-right-8.7 top-[16%] xs:top-[18%] sm:top-[22%] md:top-[22%] z-20 w-[125px] xs:w-[145px] sm:w-[185px] md:w-full md:max-w-[232px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
