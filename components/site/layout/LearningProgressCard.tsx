import React from "react";

interface LearningProgressCardProps {
  className?: string;
}

export const LearningProgressCard: React.FC<LearningProgressCardProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`bg-white w-full max-w-[232px] rounded-2xl sm:rounded-[22px] p-3 sm:p-4 shadow-[0px_10px_30px_rgba(0,0,0,0.16)] border border-black/5 ${className}`}
    >
      <span className="text-[10px] sm:text-sm font-medium text-textPrimary block">
        Learning Progress
      </span>
      <span className="font-poppins text-[22px] md:text-[48px] font-bold text-textPrimary leading-[1.1] block my-0.5 sm:my-1">
        55%
      </span>
      {/* Progress Bar */}
      <div className="w-full bg-[#F0F1F3] h-2 sm:h-2.5 rounded-full overflow-hidden mt-1.5 sm:mt-2">
        <div
          className="bg-[#D4FB20] h-full rounded-full"
          style={{ width: "55%" }}
        />
      </div>
    </div>
  );
};

export default LearningProgressCard;
