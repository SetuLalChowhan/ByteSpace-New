"use client";

import React, { useState } from "react";
import SectionHeader from "@/components/common/SectionHeader";

const skills = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

interface SkillsSectionProps {
  className?: string;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ className = "" }) => {
  const [activeSkill, setActiveSkill] = useState("Featured");

  return (
    <section
      className={`w-full flex flex-col items-center text-center ${className}`}
    >
      <SectionHeader
        title={
          <>
            Discover Your Passion,
            <br />
            Build Your Skills
          </>
        }
        subtitle="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
      />

      {/* Skills Category Chips */}
      <div className="mt-8 sm:mt-10 md:mt-12 w-full max-w-[1260px] mx-auto flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 md:gap-3.5">
        {skills.map((skill) => {
          const isActive = activeSkill === skill;
          return (
            <button
              key={skill}
              type="button"
              onClick={() => setActiveSkill(skill)}
              className={`text-[15px] sm:text-[16px] font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-200 cursor-pointer ${isActive
                ? "bg-primary text-textPrimary shadow-sm"
                : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#ebebed]"
                }`}
            >
              {skill}
            </button>
          );
        })}

        {/* More Button */}
        <button
          type="button"
          className="text-[#003BE2] text-[15px] sm:text-[16px] font-medium px-3 py-2 hover:underline cursor-pointer transition-colors"
        >
          + More
        </button>
      </div>
    </section>
  );
};

export default SkillsSection;
