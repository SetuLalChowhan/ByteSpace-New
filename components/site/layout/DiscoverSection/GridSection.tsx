import React from "react";
import CourseCard from "@/components/cards/CourseCard";
import { coursesData } from "@/utils/Data";
import { MotionStagger, MotionItem } from "@/components/common/MotionWrapper";

interface GridSectionProps {
  className?: string;
}

const GridSection: React.FC<GridSectionProps> = ({ className = "" }) => {
  return (
    <section className={`w-full ${className}`}>
      <MotionStagger
        staggerDelay={0.14}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8"
      >
        {coursesData.map((course) => (
          <MotionItem key={course.id} className="h-full flex">
            <CourseCard
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
              className="w-full h-full"
            />
          </MotionItem>
        ))}
      </MotionStagger>
    </section>
  );
};

export default GridSection;
