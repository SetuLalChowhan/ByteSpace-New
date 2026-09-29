import React from "react";
import CourseCard from "@/components/cards/CourseCard";
import { coursesData } from "@/utils/Data";

interface GridSectionProps {
  className?: string;
}

const GridSection: React.FC<GridSectionProps> = ({ className = "" }) => {
  return (
    <section className={`w-full ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
        {coursesData.map((course) => (
          <CourseCard
            key={course.id}
            image={course.image}
            title={course.title}
            author={course.author}
            rating={course.rating}
            level={course.level}
            members={course.members}
            memberCount={course.memberCount}
            price={course.price}
            billingPeriod={course.billingPeriod}
            tags={course.tags}
          />
        ))}
      </div>
    </section>
  );
};

export default GridSection;
