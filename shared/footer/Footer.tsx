"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Title14 } from "@/components/common/Typho";
import { footerColumns, footerBottomLinks } from "@/utils/Data";
import footerLogo from "@/assets/shared/footerLogo.png";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  return (
    <footer className={`w-full bg-white pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-12  ${className}`}>
      <div className="w-full Container  section-padding-x s ">
        {/* Main Footer Top Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 sm:gap-12 lg:gap-16">
          {/* Left Column: Brand & Newsletter */}
          <div className="flex flex-col max-w-[480px]">
            {/* Logo */}
            <Link href="/" className="inline-block w-fit">
              <Image
                src={footerLogo}
                alt="ByteSpace Logo"
                className="h-7 sm:h-8 w-auto object-contain select-none"
              />
            </Link>

            {/* Sub-logo text */}
            <div className="mt-5 sm:mt-6">
              <Title14 className="text-[#242528] block">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </Title14>
            </div>

            {/* Newsletter Subscription Form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 sm:mt-7 flex items-center gap-3 w-full"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-[#CED0D3] bg-white font-satoshi text-[14px] text-[#242528] placeholder-[#71727A] focus:outline-none focus:border-[#003BE2] transition-colors"
              />
              <button
                type="submit"
                className="rounded-full bg-primary px-6 sm:px-8 py-2.5 sm:py-3 font-satoshi font-medium text-[14px] sm:text-[15px] text-textPrimary hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shrink-0 shadow-sm"
              >
                Search
              </button>
            </form>

            {/* Privacy Policy disclaimer */}
            <p className="mt-3 font-satoshi text-[12px] font-normal leading-[160%] text-[#242528]">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Columns: Links Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-14 xl:gap-20">
            {footerColumns.map((col, colIdx) => (
              <ul key={colIdx} className="flex flex-col gap-3 sm:gap-4">
                {col.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className="font-satoshi text-[14px] font-normal leading-[160%] text-[#242528] hover:text-[#003BE2] transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-[#E5E6E8] pt-6 sm:pt-8 mt-12 sm:mt-16 md:mt-20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-satoshi text-[12px] font-normal leading-[160%] text-[#242528] text-center sm:text-left">
            @ 2023 ByteSpace. All rights reserved.
          </span>

          <div className="flex items-center flex-wrap justify-center gap-6 sm:gap-8">
            {footerBottomLinks.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="font-satoshi text-[12px] font-normal leading-[160%] text-[#242528] hover:text-[#003BE2] hover:underline transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;