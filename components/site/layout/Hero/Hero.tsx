import React from "react";
import Image from "next/image";
import Search from "@/components/common/Search";
import { Title72, Title18 } from "@/components/common/Typho";
import HeroFloatingShapes from "./HeroFloatingShapes";
import HeroAvatarSection from "./HeroAvatarSection";
import heroBgGrid from "@/assets/hero/heroBG2.png";

const Hero = () => {
  return (
    <section className="relative w-full h-auto min-h-0 lg:h-screen lg:max-h-[960px] overflow-hidden flex flex-col justify-between bg-[#003be2]">
      {/* 1. Base Full-Width Blue Grid Background (SSR) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={heroBgGrid}
          alt="Hero Grid Background"
          fill
          priority
          className="object-cover object-center select-none"
        />
      </div>

      {/* 2. Floating 3D Graphic Shapes (Framer Motion Client Animation) */}
      <HeroFloatingShapes />

      {/* 3. Hero Main Content (SSR Text/Search + Framer Animated Avatar & Cards) */}
      <div className="relative z-10 w-full Container flex flex-col items-center flex-1 justify-between pt-20 sm:pt-24 md:pt-28 lg:pt-32 section-padding-x overflow-hidden">
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

        {/* Center Visual: Framer Motion Avatar + Circle Arch + Floating Cards */}
        <HeroAvatarSection />
      </div>
    </section>
  );
};

export default Hero;
