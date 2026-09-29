import type { Metadata } from "next";
import Hero from "@/components/site/layout/Hero/Hero";
import BrandSection from "@/components/site/layout/BrandSection/BrandSection";
import DIscoverSection from "@/components/site/layout/DiscoverSection/DIscoverSection";
import ExploreDiversSection from "@/components/site/layout/ExploreDiverSection/ExploreDiversSection";
import ProfessinalSection from "@/components/site/layout/ProfessionalSection/ProfessionalSection";
import ReviewSection from "@/components/site/layout/reviewSection/ReviewSection";
import CtaSection from "@/components/site/layout/CtaSection/CtaSection";
import { MotionSection } from "@/components/common/MotionWrapper";

export const metadata: Metadata = {
  title: "ByteSpace - Get Access to Hundreds Courses Available",
  description:
    "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
  keywords: [
    "ByteSpace",
    "online learning",
    "courses",
    "creators",
    "skills",
    "education",
  ],
  openGraph: {
    title: "ByteSpace - Get Access to Hundreds Courses Available",
    description:
      "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
    type: "website",
  },
};

const Page = () => {
  return (
    <main className="w-full">
      <Hero />
      <MotionSection>
        <BrandSection />
      </MotionSection>
      <MotionSection>
        <DIscoverSection />
      </MotionSection>
      <MotionSection>
        <ExploreDiversSection />
      </MotionSection>
      <MotionSection>
        <ProfessinalSection />
      </MotionSection>
      <MotionSection>
        <CtaSection />
      </MotionSection>
      <MotionSection>
        <ReviewSection />
      </MotionSection>
    </main>
  );
};

export default Page;
