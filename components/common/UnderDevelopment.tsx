import React from "react";
import Image from "next/image";
import Link from "next/link";
import heroBgGrid from "@/assets/hero/heroBG2.png";
import { Title72, Title18 } from "@/components/common/Typho";

interface UnderDevelopmentProps {
  pageTitle: string;
  badgeText?: string;
  description?: string;
}

export const UnderDevelopment: React.FC<UnderDevelopmentProps> = ({
  pageTitle,
  badgeText = "Under Development",
  description = "We are crafting an extraordinary experience for you. This section is currently in development and will be launching soon with curated content and interactive features.",
}) => {
  return (
    <div className="relative w-full min-h-[85vh] lg:min-h-screen bg-[#003be2] overflow-hidden flex flex-col items-center justify-center pt-24 sm:pt-28 md:pt-32 pb-16 section-padding-x text-center">
      {/* Background Grid Pattern (Same as Hero and Auth) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={heroBgGrid}
          alt="ByteSpace Grid Pattern"
          fill
          priority
          className="object-cover object-center select-none opacity-90"
        />
      </div>

      {/* Main Card Content */}
      <div className="relative z-10 w-full max-w-[860px] mx-auto flex flex-col items-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-[#d4fb20] animate-pulse" />
          <span className="font-satoshi text-[13px] sm:text-[14px] font-medium text-white tracking-wide uppercase">
            {badgeText}
          </span>
        </div>

        {/* Page Title */}
        <Title72 className="text-white drop-shadow-sm">
          {pageTitle}
        </Title72>

        {/* Subtitle / Description */}
        <div className="mt-4 sm:mt-6 max-w-[640px] px-4">
          <Title18 className="text-white/90">
            {description}
          </Title18>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-[#d4fb20] text-[#242528] font-satoshi font-semibold text-[15px] sm:text-[16px] px-8 py-3.5 hover:brightness-105 active:scale-95 transition-all shadow-lg"
          >
            Back to Home
          </Link>
          <Link
            href="/register"
            className="rounded-full bg-white/15 border border-white/25 text-white font-satoshi font-medium text-[15px] sm:text-[16px] px-8 py-3.5 hover:bg-white/25 active:scale-95 transition-all"
          >
            Join as Creator
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UnderDevelopment;
