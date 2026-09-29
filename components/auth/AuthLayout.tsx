import React from "react";
import Image from "next/image";
import Link from "next/link";
import heroBgGrid from "@/assets/hero/heroBG2.png";
import authLogo from "@/assets/auth/authLogo.png";
import authImage from "@/assets/auth/authImage.png";

interface AuthLayoutProps {
  leftTitle: string;
  leftSubtitle: string;
  children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  leftTitle,
  leftSubtitle,
  children,
}) => {
  return (
    <div className="relative w-full min-h-screen bg-[#003be2] overflow-x-hidden flex flex-col justify-between">
      {/* 1. Background Grid Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={heroBgGrid}
          alt="Auth Grid Background"
          fill
          priority
          className="object-cover object-center select-none"
        />
      </div>

      {/* 2. Main Content Container */}
      <div className="relative z-10 w-full Container px-4 xs:px-6 sm:px-8 md:px-12 lg:section-padding-x min-h-screen py-4 xs:py-6 sm:py-10 lg:py-12 flex flex-col justify-between">
        {/* Top Header with Logo */}
        <div className="w-full">
          <Link
            href="/"
            className="inline-flex items-center transition-opacity hover:opacity-90"
            aria-label="ByteSpace Home"
          >
            <Image
              src={authLogo}
              alt="ByteSpace"
              width={34}
              height={34}
              priority
              className="h-7 sm:h-8 md:h-9 w-auto object-contain select-none"
            />
          </Link>
        </div>

        {/* 2-Column Responsive Body */}
        <div className="w-full my-auto py-3 sm:py-6 lg:py-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Title, Subtitle, and Auth Decorative Graphic */}
          <div className="flex flex-col items-start justify-center max-w-[540px]">
            {/* Left Title: Poppins 20px 600 weight #F5F5F6 */}
            <h2 className="font-poppins text-[18px] sm:text-[20px] font-semibold leading-[120%] tracking-[-0.2px] text-[#F5F5F6]">
              {leftTitle}
            </h2>

            {/* Left Subtitle: Satoshi 18px 400 weight #F5F5F6 */}
            <p className="font-satoshi text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[150%] sm:leading-[160%] text-[#F5F5F6]/90 mt-1.5 sm:mt-3 max-w-[490px]">
              {leftSubtitle}
            </p>

            {/* Left Visual Illustration (Hidden on mobile/tablet, only shown on lg+ screens) */}
            <div className="hidden lg:block mt-6 sm:mt-8 md:mt-10 w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[500px]">
              <Image
                src={authImage}
                alt="ByteSpace Courses Visual"
                priority
                className="w-full h-auto object-contain select-none drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right Column: Form Card Container */}
          <div className="w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-[560px] bg-white rounded-2xl sm:rounded-[28px] md:rounded-[36px] lg:rounded-[40px] p-5 xs:p-6 sm:p-10 md:p-12 lg:p-14 shadow-[0_10px_35px_rgba(0,0,0,0.12)] sm:shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
              {children}
            </div>
          </div>
        </div>

        {/* Empty bottom spacer to balance flex layout */}
        <div className="hidden lg:block w-full h-4" />
      </div>
    </div>
  );
};

export default AuthLayout;
