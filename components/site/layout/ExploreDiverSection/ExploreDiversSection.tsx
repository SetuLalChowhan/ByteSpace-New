import React from "react";
import SectionHeader from "@/components/common/SectionHeader";
import CategoryCard from "@/components/cards/CategoryCard";
import { exploreCategoriesData } from "@/utils/Data";

interface ExploreDiversSectionProps {
  className?: string;
}

const ExploreDiversSection: React.FC<ExploreDiversSectionProps> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-full Container flex flex-col gap-6 xs:gap-8 sm:gap-10 md:gap-14 items-center section-padding-x py-8 xs:py-10 sm:py-14 md:py-20 ${className}`}
    >
      {/* Reusable Section Header */}
      <SectionHeader
        title="Explore Diverse Learning Paths at Bytespace"
        subtitle="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
      />

      {/* Categories Grid */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 xs:gap-3.5 sm:gap-4 md:gap-5 lg:gap-6">
        {exploreCategoriesData.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.title}
            Icon={category.Icon}
          />
        ))}
      </div>
    </section>
  );
};

export default ExploreDiversSection;
