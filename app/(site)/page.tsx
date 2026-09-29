import type { Metadata } from "next";
import Hero from "@/components/site/layout/Hero/Hero";
import BrandSection from "@/components/site/layout/BrandSection/BrandSection";
import DIscoverSection from "@/components/site/layout/DiscoverSection/DIscoverSection";
import ExploreDiversSection from "@/components/site/layout/ExploreDiverSection/ExploreDiversSection";
import ProfessinalSection from "@/components/site/layout/ProfessionalSection/ProfessionalSection";
import ReviewSection from "@/components/site/layout/reviewSection/ReviewSection";
import CtaSection from "@/components/site/layout/CtaSection/CtaSection";


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
    <main className="w-full ">
      <Hero />
      <BrandSection />
      <DIscoverSection />
      <ExploreDiversSection />
      <ProfessinalSection />
      <CtaSection />
      <ReviewSection />
    </main>
  );
};

export default Page;
