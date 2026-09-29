import React from "react";

interface TotalRevenueCardProps {
  className?: string;
}

export const TotalRevenueCard: React.FC<TotalRevenueCardProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`bg-[#003BE2] text-white rounded-2xl p-3 sm:p-3.5 shadow-[0px_10px_30px_rgba(0,59,226,0.3)] w-[160px] sm:w-[185px] ${className}`}
    >
      <span className="font-satoshi text-[12px] sm:text-[13px] font-medium text-white/90 block">
        Total Revenue
      </span>
      <span className="font-satoshi text-[10px] text-white/60 block -mt-0.5">
        July 1-28
      </span>
      <span className="font-poppins text-[19px] sm:text-[22px] font-semibold text-white block mt-1">
        $120.29
      </span>
      <div className="w-full bg-white/25 h-1.5 rounded-full overflow-hidden mt-2">
        <div className="bg-white h-full rounded-full w-[70%]" />
      </div>
    </div>
  );
};

export default TotalRevenueCard;
