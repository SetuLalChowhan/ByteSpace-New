import React from "react";
import Image from "next/image";
import ctaBg from "@/assets/ctaBg.png";

interface CtaSectionProps {
    className?: string;
}

const CtaSection: React.FC<CtaSectionProps> = ({ className = "" }) => {
    return (
        <section
            className={`relative w-full -mt-28 overflow-hidden   ${className}`}
        >
            {/* Background Graphic / Canvas */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                    src={ctaBg}
                    alt="CTA Background Pattern"
                    fill
                    priority
                    className="object-cover object-center select-none"
                />
            </div>

            {/* Inner Content */}
            <div className="relative z-10 w-full section-padding-x py-14 sm:py-18 md:py-24 flex flex-col items-center justify-center text-center">
                {/* Title */}
                <h2 className="font-poppins font-semibold text-[28px] xs:text-[34px] sm:text-[40px] md:text-[44px] leading-[120%] tracking-[-0.44px] text-[#F5F5F6] text-center max-w-[800px]">
                    Unlock Your Potential as a
                    <br className="hidden sm:inline" /> Creator with ByteSpace
                </h2>

                {/* Description */}
                <p className="font-satoshi font-normal text-[15px] sm:text-[17px] md:text-[18px] leading-[160%] text-[#F5F5F6] text-center max-w-[860px] mx-auto mt-4 sm:mt-5">
                    Experience the collaboration of numerous creators and an expanding
                    selection of courses. Register now and become a part of a community
                    comprising over 10,000 local and international creators. Utilize our
                    Course Editor, and showcase your expertise by publishing your finest
                    course on the ByteSpace Course Library.
                </p>

                {/* Action Button */}
                <div className="mt-6 sm:mt-8">
                    <button
                        type="button"
                        className="rounded-[24px] bg-primary px-6 sm:px-8 py-3.5 sm:py-4 font-satoshi font-medium text-[16px] sm:text-[18px] leading-[120%] text-textPrimary transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-md"
                    >
                        Join as Creator
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;