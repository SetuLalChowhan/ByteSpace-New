import React from "react";

export interface CategoryCardProps {
  id?: number | string;
  title: string;
  Icon: React.ComponentType<{ className?: string; width?: number | string; height?: number | string }>;
  className?: string;
  onClick?: () => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  Icon,
  className = "",
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`group bg-white rounded-[18px] xs:rounded-[20px] sm:rounded-[24px] border border-[#CED0D3] py-4 px-2.5 xs:py-5 xs:px-3 sm:py-7 sm:px-5 md:py-8 md:px-6 flex flex-col items-center justify-center gap-2.5 xs:gap-3 sm:gap-4 md:gap-5 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 cursor-pointer ${className}`}
    >
      {/* Icon Circle */}
      <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shrink-0">
        <Icon className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9" width={32} height={32} />
      </div>

      {/* Card Title */}
      <span className="font-satoshi text-[13px] xs:text-[14px] sm:text-[17px] md:text-[20px] font-medium leading-[120%] text-[#242528] text-center whitespace-normal xs:whitespace-nowrap">
        {title}
      </span>
    </div>
  );
};

export default CategoryCard;
