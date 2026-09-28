import React from "react";
import Image from "next/image";
import Search from "./Search";
import { Title72, Title18 } from "@/components/common/Typho";
import HappyStudentsCard from "./HappyStudentsCard";
import LearningProgressCard from "./LearningProgressCard";
import avatarImg from "@/assets/Avatar.png";
import heroBgImg from "@/assets/HeroBG.png";

const Hero = () => {
  return (
    <section className="relative w-full h-auto min-h-0 lg:h-screen lg:max-h-screen overflow-hidden flex flex-col justify-between">
      {/* Background Graphic Patterns & Shapes (Anchored to bottom) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={heroBgImg}
          alt="Hero Background Patterns"
          fill
          priority
          className="object-cover object-bottom select-none"
        />
      </div>

      {/* Hero Body Content (SSR - Natural height on mobile, full viewport on desktop) */}
      <div className="relative z-10 w-full flex flex-col items-center flex-1 justify-between pt-20 md:pt-32 section-padding-x overflow-hidden">
        {/* Banner Section (Title, Subtitle, Search) */}
        <div className="w-full max-w-[1040px] text-center flex flex-col items-center">
          {/* Main Title (Poppins 72px) */}
          <div className="w-full">
            <Title72>
              Get Access to Hundreds
              <br className="hidden xs:inline" /> Courses Available
            </Title72>
          </div>

          {/* Subtitle - One Line on Desktop (Satoshi by body default) */}
          <div className="mt-2.5 sm:mt-3 px-2">
            <Title18 className="whitespace-normal md:whitespace-nowrap">
              Unlock your creativity, gain valuable knowledge, and grow your
              business with our wide range of courses.
            </Title18>
          </div>

          {/* Client-side Search Form (With comfortable spacing) */}
          <div className="mt-5 sm:mt-6 md:mt-10 w-full">
            <Search />
          </div>
        </div>

        {/* Avatar & Floating Badges Section */}
        <div className="relative w-full max-w-135 sm:max-w-155 lg:max-w-170 flex justify-center items-end mt-8 lg:mt-auto pt-4">
          {/* Main Avatar Person (Resting at bottom edge) */}
          <div className="relative z-10  flex items-end">
            <Image
              src={avatarImg}
              alt="ByteSpace Student with Laptop"
              priority
              className="w-full h-auto object-contain block select-none drop-shadow-2xl"
            />
          </div>

          {/* Floating Card 1: Happy Students */}
          <HappyStudentsCard className="absolute -left-2.5 xs:left-0 sm:-left-5 md:-left-8.75 lg:-left-20 bottom-[26%] sm:bottom-[28%] md:bottom-[16%] z-20 w-full max-w-[258px]" />

          {/* Floating Card 2: Learning Progress */}
          <LearningProgressCard className="absolute -right-2.5 xs:right-0 sm:-right-3.75 md:-right-6.25 lg:-right-8.7 top-[22%] sm:top-[24%] md:top-[22%] z-20 w-full max-w-[232px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
