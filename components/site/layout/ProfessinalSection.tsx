import React from "react";
import Image from "next/image";
import CourseCard from "@/components/cards/CourseCard";
import LearningProgressCard from "@/components/site/layout/LearningProgressCard";
import HappyStudentsCard from "@/components/site/layout/HappyStudentsCard";
import TotalRevenueCard from "@/components/site/layout/TotalRevenueCard";
import YearToDateCard from "@/components/site/layout/YearToDateCard";
import { CheckCircleSvg } from "@/components/common/CustomSvg";
import { coursesData } from "@/utils/Data";

import avatarImg from "@/assets/Avatar.png";
import femaleAvatarImg from "@/assets/FemaleAvatar.png";
import springSvg from "@/assets/springSVG.png";

const checklistItems = [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community",
];

const stats = [
    { value: "12K", label: "Students" },
    { value: "70+", label: "Courses" },
    { value: "16", label: "Creators" },
];

interface ProfessinalSectionProps {
    className?: string;
}

const ProfessinalSection: React.FC<ProfessinalSectionProps> = ({
    className = "",
}) => {
    const sampleCourse = coursesData[0];

    return (
        <section
            className={`relative w-full bg-[#FAFAFA] section-padding-x py-16 sm:py-20 md:py-28 overflow-hidden rounded-[28px] sm:rounded-[36px] md:rounded-[44px] my-10 sm:my-16 ${className}`}
        >
            {/* Left Area Lime Radial Gradient */}
            <div
                className="absolute -left-[150px] sm:-left-[250px] lg:-left-[350px] top-[5%] sm:top-[8%] w-[500px] sm:w-[750px] lg:w-[1000px] h-[500px] sm:h-[750px] lg:h-[1000px] rounded-[1137px] pointer-events-none z-0"
                style={{
                    background:
                        "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.40) 0%, rgba(203, 252, 1, 0.09) 53%, rgba(203, 252, 1, 0.02) 75%, rgba(203, 252, 1, 0.00) 100%)",
                    filter: "blur(20px)",
                }}
            />

            {/* Right Area Blue Radial Gradient */}
            <div
                className="absolute -right-[150px] sm:-right-[250px] lg:-right-[350px] top-[40%] sm:top-[45%] w-[500px] sm:w-[750px] lg:w-[1000px] h-[500px] sm:h-[750px] lg:h-[1000px] rounded-[1137px] pointer-events-none z-0"
                style={{
                    background:
                        "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.24) 0%, rgba(0, 59, 226, 0.06) 53%, rgba(0, 59, 226, 0.01) 75%, rgba(0, 59, 226, 0.00) 100%)",
                    filter: "blur(20px)",
                }}
            />

            {/* Inner Content */}
            <div className="relative z-10 w-full flex flex-col gap-20 sm:gap-28 md:gap-36">
                {/* ROW 1: Your Path to Professional Growth */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">
                    {/* Left Text & Stats Column */}
                    <div className="flex flex-col">
                        <h2 className="font-poppins text-[30px] xs:text-[36px] sm:text-[42px] lg:text-[44px] font-semibold leading-[120%] tracking-[-0.44px] text-[#242528]">
                            Your Path to Professional Growth Starts Here!
                        </h2>
                        <p className="mt-4 sm:mt-5 font-satoshi text-[15px] sm:text-[17px] lg:text-[18px] font-normal leading-[160%] text-[#4B4C53] max-w-[540px]">
                            Explore our curated selection of courses tailored to enhance your
                            capabilities and accelerate your career journey. Whether you are
                            looking to sharpen specific skills, gain industry expertise, or
                            embark on a new career path entirely, we have the resources you
                            need.
                        </p>

                        {/* Stats Row */}
                        <div className="mt-8 sm:mt-10 flex items-center gap-8 sm:gap-12 md:gap-14">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex flex-col">
                                    <span className="font-poppins text-[30px] sm:text-[36px] font-medium leading-[44px] tracking-[-0.36px] text-[#003BE2]">
                                        {stat.value}
                                    </span>
                                    <span className="font-satoshi text-[15px] sm:text-[18px] font-normal leading-[160%] text-[#4B4C53] -mt-0.5">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Visual Composition */}
                    <div className="relative w-full flex justify-center items-center min-h-[380px] sm:min-h-[460px] lg:min-h-[500px]">
                        {/* Background Course Card */}
                        <div className="absolute -left-2 sm:left-2 md:left-6 top-0 w-[240px] sm:w-[280px] md:w-[300px] z-0 opacity-80 sm:opacity-100 scale-90 sm:scale-100 origin-top-left pointer-events-none sm:pointer-events-auto">
                            <CourseCard
                                image={sampleCourse.image}
                                title={sampleCourse.title}
                                author={sampleCourse.author}
                                rating={sampleCourse.rating}
                                level={sampleCourse.level}
                                members={sampleCourse.members}
                                memberCount={sampleCourse.memberCount}
                                price={sampleCourse.price}
                                billingPeriod={sampleCourse.billingPeriod}
                                badges={["17 Lessons", "2 hours 16 mins"]}
                                className="shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
                            />
                        </div>

                        {/* Spring Doodle */}
                        <Image
                            src={springSvg}
                            alt="Spring decoration"
                            className="absolute right-4 sm:right-8 md:right-12 top-6 sm:top-8 w-20 sm:w-28 md:w-32 h-auto z-0 select-none pointer-events-none drop-shadow-sm"
                        />

                        {/* Foreground Avatar */}
                        <div className="relative z-10 w-full  flex justify-center items-end mt-12 sm:mt-8">
                            <Image
                                src={avatarImg}
                                alt="Student with laptop"
                                priority
                                className="w-full h-auto object-contain select-none drop-shadow-2xl"
                            />
                        </div>

                        {/* Floating Learning Progress Card */}
                        <LearningProgressCard className="absolute -right-2 sm:right-0 md:right-2 top-[32%] sm:top-[30%] z-20 w-[170px] sm:w-[210px] md:w-[230px]" />
                    </div>
                </div>

                {/* ROW 2: Create & Manage Courses Easily */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">
                    {/* Left Visual Composition */}
                    <div className="relative w-full flex justify-center items-center min-h-[380px] sm:min-h-[460px] lg:min-h-[500px] order-2 lg:order-1">
                        {/* Spring Doodle */}
                        <Image
                            src={springSvg}
                            alt="Spring decoration"
                            className="absolute right-6 sm:right-12 md:right-16 top-[24%] sm:top-[26%] w-20 sm:w-28 md:w-32 h-auto z-0 select-none pointer-events-none drop-shadow-sm"
                        />

                        {/* Floating Total Revenue Card */}
                        <TotalRevenueCard className="absolute -left-2 sm:left-2 md:left-4 top-[8%] sm:top-[10%] z-20" />

                        {/* Floating Year to Date Card */}
                        <YearToDateCard className="absolute -left-2 sm:left-2 md:left-4 top-[38%] sm:top-[42%] z-20" />

                        {/* Foreground Female Avatar */}
                        <div className="relative z-10 w-full  flex justify-center items-end">
                            <Image
                                src={femaleAvatarImg}
                                alt="Female Instructor"
                                priority
                                className="w-full h-auto object-contain select-none drop-shadow-2xl"
                            />
                        </div>

                        {/* Floating Happy Students Card */}
                        <HappyStudentsCard className="absolute -right-2 sm:right-2 md:right-6 bottom-0 sm:bottom-2 z-20 w-[200px] sm:w-[245px] md:w-[258px]" />
                    </div>

                    {/* Right Text & Checklist Column */}
                    <div className="flex flex-col order-1 lg:order-2">
                        <h2 className="font-poppins text-[30px] xs:text-[36px] sm:text-[42px] lg:text-[44px] font-semibold leading-[120%] tracking-[-0.44px] text-[#242528]">
                            Create & Manage Courses Easily.
                        </h2>
                        <p className="mt-4 sm:mt-5 font-satoshi text-[15px] sm:text-[17px] lg:text-[18px] font-normal leading-[160%] text-[#4B4C53] max-w-[540px]">
                            <span className="font-bold text-[#242528]">ByteSpace</span>{" "}
                            supports individuals or entities in the creation, publication, and
                            administration of educational courses.
                        </p>

                        {/* Checklist */}
                        <div className="mt-7 sm:mt-8 flex flex-col gap-3.5 sm:gap-4">
                            {checklistItems.map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircleSvg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                                    <span className="font-satoshi text-[16px] sm:text-[18px] font-medium leading-[120%] text-[#242528]">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfessinalSection;