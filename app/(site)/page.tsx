import type { Metadata } from "next";
import Hero from "@/components/site/layout/Hero";
import BrandSection from "@/components/site/layout/BrandSection";
import DIscoverSection from "@/components/site/layout/DIscoverSection";

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
    <main className="w-full Container">
      <Hero />
      <BrandSection />
      <DIscoverSection />
    </main>
  );
};

export default Page;
