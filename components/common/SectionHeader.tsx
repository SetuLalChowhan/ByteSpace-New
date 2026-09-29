import React, { ReactNode } from "react";
import { Title44, Title18 } from "@/components/common/Typho";

interface SectionHeaderProps {
  title: ReactNode;
  subtitle: ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  subtitleMaxWidth?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  className = "",
  titleClassName = "",
  subtitleClassName = "text-[#82868E]!",
  subtitleMaxWidth = "max-w-[860px]",
}) => {
  return (
    <div className={`w-full flex flex-col items-center text-center ${className}`}>
      {/* Heading M (Poppins 44px, 600 weight, 120% line-height, #040819) */}
      <Title44 className={titleClassName}>{title}</Title44>

      {/* Subtitle (Title18) */}
      <div className={`mt-3.5 sm:mt-4 ${subtitleMaxWidth} mx-auto px-2`}>
        <Title18 className={subtitleClassName}>{subtitle}</Title18>
      </div>
    </div>
  );
};

export default SectionHeader;
