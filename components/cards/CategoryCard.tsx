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
      className={`group bg-white rounded-[24px] border border-[#CED0D3] py-7 px-4 sm:py-8 sm:px-6 flex flex-col items-center justify-center gap-4 sm:gap-5 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 cursor-pointer ${className}`}
    >
      {/* Icon Circle */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[40px] bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        <Icon className="w-8 h-8 sm:w-9 sm:h-9" width={36} height={36} />
      </div>

      {/* Card Title */}
      <span className="font-satoshi text-[17px] sm:text-[20px] font-medium leading-[120%] text-[#242528] text-center whitespace-nowrap">
        {title}
      </span>
    </div>
  );
};

export default CategoryCard;
