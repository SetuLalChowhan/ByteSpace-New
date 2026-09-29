import React from "react";

interface YearToDateCardProps {
  className?: string;
}

export const YearToDateCard: React.FC<YearToDateCardProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`bg-[#003BE2] text-white rounded-2xl p-3 sm:p-3.5 shadow-[0px_10px_30px_rgba(0,59,226,0.3)] w-[150px] sm:w-[170px] ${className}`}
    >
      <span className="font-satoshi text-[12px] sm:text-[13px] font-medium text-white/90 block">
        Year to Date
      </span>
      <span className="font-satoshi text-[10px] text-white/60 block -mt-0.5">
        2023
      </span>
      <span className="font-poppins text-[19px] sm:text-[22px] font-semibold text-white block mt-1">
        $1,200.38
      </span>
      <div className="mt-1.5">
        <span className="bg-[#D4FB20] text-[#040819] font-satoshi text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-full inline-block">
          +12%
        </span>
      </div>
    </div>
  );
};

export default YearToDateCard;
