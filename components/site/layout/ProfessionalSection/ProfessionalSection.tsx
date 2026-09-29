import React from "react";
import Image from "next/image";
import { Title44, Title18 } from "@/components/common/Typho";
import { CheckCircleSvg } from "@/components/common/CustomSvg";
import ProfessionalStats from "./ProfessionalStats";

import ProfessinalBg from "@/assets/ProfessinalBg.png";
import rowOneImage from "@/assets/rowOneImage.png";
import rowTwoImage from "@/assets/rowTwoImage.png";

const checklistItems = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

interface ProfessinalSectionProps {
  className?: string;
}

const ProfessinalSection: React.FC<ProfessinalSectionProps> = ({
  className = "",
}) => {
  return (
    <section
      className={`relative w-full overflow-hidden my-8 sm:my-14 ${className}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={ProfessinalBg}
          alt="Professional Section Background"
          fill
          priority
          className="object-cover object-center select-none"
        />
      </div>

      {/* Inner Content */}
      <div className="relative z-10 w-full Container section-padding-x py-14 sm:py-18 md:py-24 flex flex-col ">
        {/* ROW 1: Your Path to Professional Growth */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-14 items-center">
          {/* Left Text & Stats Column */}
          <div className="flex flex-col">
            <Title44 className="text-left text-[#242528]">
              Your Path to Professional Growth Starts Here!
            </Title44>
            <Title18 className="text-left text-[#4B4C53]! max-w-[540px] mt-4 sm:mt-5">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </Title18>

            {/* Separate Animated Stats Section with react-countup */}
            <div className="mt-8 sm:mt-10">
              <ProfessionalStats />
            </div>
          </div>

          {/* Right Visual Composition (rowOneImage with smooth hover scale) */}
          <div className="relative w-full flex justify-center items-center overflow-hidden rounded-2xl">
            <Image
              src={rowOneImage}
              alt="Your Path to Professional Growth"
              priority
              className="w-full h-auto max-w-[560px] object-contain select-none drop-shadow-sm transition-transform duration-500 ease-out hover:scale-[1.03] cursor-pointer"
            />
          </div>
        </div>

        {/* ROW 2: Create & Manage Courses Easily */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-14 items-center">
          {/* Left Visual Composition (rowTwoImage with smooth hover scale) */}
          <div className="relative w-full flex justify-center items-center order-2 lg:order-1 overflow-hidden rounded-2xl">
            <Image
              src={rowTwoImage}
              alt="Create & Manage Courses Easily"
              priority
              className="w-full h-auto max-w-[560px] object-contain select-none drop-shadow-sm transition-transform duration-500 ease-out hover:scale-[1.03] cursor-pointer"
            />
          </div>

          {/* Right Text & Checklist Column */}
          <div className="flex flex-col order-1 lg:order-2">
            <Title44 className="text-left text-[#242528]">
              Create & Manage Courses Easily.
            </Title44>
            <Title18 className="text-left text-[#4B4C53]! max-w-[540px] mt-4 sm:mt-5">
              <span className="font-bold text-[#242528]">ByteSpace</span>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </Title18>

            {/* Checklist */}
            <div className="mt-7 sm:mt-8 flex flex-col gap-3.5 sm:gap-4">
              {checklistItems.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircleSvg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                  <span className="font-satoshi text-[16px] sm:text-[18px] font-medium leading-[120%] text-[#242528]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessinalSection;
