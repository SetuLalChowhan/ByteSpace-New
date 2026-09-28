import React, { ReactNode } from "react";

interface TypographyProps {
  className?: string;
  children: ReactNode;
}

/**
 * Title72 (Heading L): Only header h1 uses Poppins font
 */
export const Title72 = ({ className = "", children }: TypographyProps) => {
  return (
    <h1
      className={`font-poppins text-[28px] xxs:text-[32px] xs:text-[38px] sm:text-[48px] md:text-[58px] lg:text-[66px] xl:text-[72px] font-semibold leading-[120%] tracking-[-0.72px] text-white text-center ${className}`}
    >
      {children}
    </h1>
  );
};

/**
 * Title44 (Heading M): Poppins 44px, 600 weight, 120% line-height, -0.44px tracking, text-[#040819], text-center
 */
export const Title44 = ({ className = "", children }: TypographyProps) => {
  return (
    <h2
      className={`font-poppins text-[26px] xs:text-[32px] sm:text-[38px] md:text-[42px] lg:text-[44px] font-semibold leading-[120%] tracking-[-0.44px] text-[#040819] text-center ${className}`}
    >
      {children}
    </h2>
  );
};

/**
 * Title18 (Body L / Subtitle): Defaults to body Satoshi font
 */
export const Title18 = ({ className = "", children }: TypographyProps) => {
  const hasCustomColor = className.includes("text-");
  return (
    <p
      className={`text-[13px] sm:text-[15px] md:text-[17px] lg:text-[18px] font-normal leading-[160%] ${
        hasCustomColor ? "" : "text-[#E5E6E8]"
      } text-center ${className}`}
    >
      {children}
    </p>
  );
};

/**
 * Title16 (Body M / Navbar / Label): Defaults to body Satoshi font
 */
export const Title16 = ({ className = "", children }: TypographyProps) => {
  return (
    <span
      className={`text-[15px] sm:text-[16px] font-normal leading-[160%] text-[#F5F5F6] ${className}`}
    >
      {children}
    </span>
  );
};

export default Title72;
