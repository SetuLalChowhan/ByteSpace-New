import React from "react";
import Image, { StaticImageData } from "next/image";
import { Title20 } from "@/components/common/Typho";
import { WhiteStar, Graph } from "@/components/common/CustomSvg";

export interface CourseCardProps {
  id?: number | string;
  image: StaticImageData | string;
  title: string;
  author: string;
  rating?: string | number;
  level?: string;
  members?: (StaticImageData | string)[];
  memberCount?: string;
  price: string;
  billingPeriod?: string;
  className?: string;
  tags?: string[];
  badges?: string[];
}

export const CourseCard: React.FC<CourseCardProps> = ({
  image,
  title,
  author,
  rating = "4.5",
  level = "Beginner",
  members = [],
  memberCount = "26+",
  price,
  billingPeriod = "/lifetime",
  className = "",
  tags,
  badges,
}) => {
  const displayTags = tags || badges;

  return (
    <div
      className={`group bg-white rounded-[24px] sm:rounded-[28px] border border-[#CED0D3] p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 cursor-pointer ${className}`}
    >
      {/* Course Image & Glassmorphism Tags */}
      <div className="relative w-full aspect-[340/200] rounded-[18px] sm:rounded-[20px] overflow-hidden bg-[#F5F5F6]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {displayTags && displayTags.length > 0 && (
          <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 sm:right-3 flex flex-wrap items-center gap-1.5 sm:gap-2 z-10">
            {displayTags.map((tag, i) => (
              <span
                key={i}
                className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-[24px] bg-[rgba(246,246,246,0.60)] backdrop-blur-[4px] font-satoshi text-[11px] sm:text-[12px] font-medium leading-[120%] text-[#4F4F4F] text-center shrink-0 select-none"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col mt-4 space-y-3">
        {/* Title and Rating */}
        <div className="flex items-center justify-between gap-2">
          <Title20 className="truncate text-black flex-1 min-w-0 font-poppins font-semibold">
            {title}
          </Title20>
          <div className="flex items-center gap-1 shrink-0">
            <span className="font-satoshi text-[16px] sm:text-[18px] font-normal leading-[160%] text-[#4F4F4F]">
              {rating}
            </span>
            <WhiteStar className="w-[18px] h-[18px]" />
          </div>
        </div>

        {/* Author / Studio */}
        <div className="-mt-1">
          <span className="font-satoshi text-[12px] font-normal leading-[160%] text-[#4F4F4F]">
            by{" "}
            <span className="text-[#003BE2] hover:underline cursor-pointer">
              {author}
            </span>
          </span>
        </div>

        {/* Level and Members */}
        <div className="flex items-center justify-between gap-2 pt-1">
          {/* Level Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F5F5F6] rounded-full">
            <Graph className="w-4 h-4" />
            <span className="font-satoshi text-[12px] font-medium leading-[120%] text-[#4B4C53] text-center">
              {level}
            </span>
          </div>

          {/* Members Avatar Group */}
          <div className="flex items-center -space-x-2 shrink-0">
            {members.map((member, index) => (
              <div
                key={index}
                style={{ zIndex: index + 1 }}
                className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden ring-2 ring-white shrink-0"
              >
                <Image
                  src={member}
                  alt={`Member ${index + 1}`}
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
            ))}
            {memberCount && (
              <span
                style={{ zIndex: members.length + 1 }}
                className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#D4FB20] text-[#040819] font-satoshi text-[11px] sm:text-[12px] font-semibold flex items-center justify-center ring-2 ring-white shrink-0"
              >
                {memberCount}
              </span>
            )}
          </div>
        </div>

        {/* Pricing */}
        <div className="pt-2 flex items-baseline gap-1">
          <span className="font-poppins text-[20px] font-semibold leading-[120%] tracking-[-0.2px] text-[#003BE2]">
            {price}
          </span>
          <span className="font-satoshi text-[12px] font-normal leading-[160%] text-[#4F4F4F]">
            {billingPeriod}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
