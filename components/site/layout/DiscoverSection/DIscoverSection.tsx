import React from "react";
import SkillsSection from "./SkillsSection";
import GridSection from "./GridSection";

const DIscoverSection = () => {
  return (
    <div className=" flex flex-col gap-16 section-padding-x ">
      <SkillsSection />
      <GridSection />
    </div>
  );
};

export default DIscoverSection;
