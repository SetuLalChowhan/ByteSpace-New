import React from "react";
import Image from "next/image";
import { Title44, Title18 } from "@/components/common/Typho";
import ctaBg from "@/assets/ctaBg.png";

interface CtaSectionProps {
    className?: string;
}

const CtaSection: React.FC<CtaSectionProps> = ({ className = "" }) => {
    return (
        <section
            className={`relative w-full -mt-28 overflow-hidden ${className}`}
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
                <Title44 className="text-[#F5F5F6] max-w-[800px]">
                    Unlock Your Potential as a
                    <br className="hidden sm:inline" /> Creator with ByteSpace
                </Title44>

                {/* Description */}
                <Title18 className="text-[#F5F5F6] max-w-[860px] mx-auto mt-4 sm:mt-5">
                    Experience the collaboration of numerous creators and an expanding
                    selection of courses. Register now and become a part of a community
                    comprising over 10,000 local and international creators. Utilize our
                    Course Editor, and showcase your expertise by publishing your finest
                    course on the ByteSpace Course Library.
                </Title18>

                {/* Action Button */}
                <div className="mt-6 sm:mt-8">
                    <button
                        type="button"
                        className="rounded-[24px] bg-primary px-6 sm:px-8 py-3.5 sm:py-4 font-satoshi font-medium text-[16px] sm:text-[18px] leading-[120%] text-textPrimary transition-all duration-300 active:scale-95 cursor-pointer shadow-md hover:opacity-95"
                    >
                        Join as Creator
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;