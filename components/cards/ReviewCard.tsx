import React from "react";
import Image, { StaticImageData } from "next/image";
import { Title20 } from "@/components/common/Typho";

export interface ReviewCardProps {
  id?: number | string;
  name: string;
  role: string;
  avatar: StaticImageData | string;
  review: string;
  className?: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  role,
  avatar,
  review,
  className = "",
}) => {
  return (
    <div
      className={`rounded-[24px] bg-[#FFFFFF] p-6 sm:p-7 md:p-8 flex flex-col gap-5 sm:gap-6 shadow-[0px_4px_24px_rgba(0,0,0,0.04)] border border-black/5 hover:shadow-md transition-all duration-300 ${className}`}
    >
      {/* User Header */}
      <div className="flex flex-col gap-3.5 sm:gap-4">
        {/* Avatar Image */}
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shrink-0">
          <Image
            src={avatar}
            alt={name}
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>

        {/* Name and Designation */}
        <div className="flex flex-col">
          <Title20 className="text-[#000000] font-semibold text-[20px] leading-[120%] tracking-[-0.2px]">
            {name}
          </Title20>
          <span className="font-satoshi text-[16px] sm:text-[18px] font-normal leading-[160%] text-[#003BE2] mt-0.5">
            {role}
          </span>
        </div>
      </div>

      {/* Review Body */}
      <p className="font-satoshi text-[15px] sm:text-[17px] md:text-[18px] font-normal leading-[160%] text-[#4F4F4F]">
        {review}
      </p>
    </div>
  );
};

export default ReviewCard;