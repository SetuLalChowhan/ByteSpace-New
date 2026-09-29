"use client";

import React from "react";
import CountUp from "react-countup";

interface StatItem {
  end: number;
  suffix?: string;
  label: string;
}

const statsData: StatItem[] = [
  { end: 12, suffix: "K", label: "Students" },
  { end: 70, suffix: "+", label: "Courses" },
  { end: 16, suffix: "", label: "Creators" },
];

interface ProfessionalStatsProps {
  className?: string;
}

export const ProfessionalStats: React.FC<ProfessionalStatsProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex items-center gap-8 sm:gap-12 md:gap-14 ${className}`}
    >
      {statsData.map((stat, index) => (
        <div key={index} className="flex flex-col">
          <span className="font-poppins text-[30px] sm:text-[36px] font-medium leading-[44px] tracking-[-0.36px] text-[#003BE2]">
            <CountUp
              end={stat.end}
              duration={2.5}
              enableScrollSpy
              scrollSpyOnce
            />
            {stat.suffix}
          </span>
          <span className="font-satoshi text-[15px] sm:text-[18px] font-normal leading-[160%] text-[#4B4C53] -mt-0.5">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ProfessionalStats;
