import React from "react";
import type { Metadata } from "next";
import UnderDevelopment from "@/components/common/UnderDevelopment";

export const metadata: Metadata = {
  title: "Creators | ByteSpace",
  description: "Join and explore top creators and instructors on ByteSpace.",
};

export default function CreatorsPage() {
  return (
    <UnderDevelopment
      pageTitle="Creators Hub Coming Soon"
      badgeText="Under Development"
      description="Our creator platform and community portal are being crafted to empower instructors worldwide to publish high-impact courses and connect with eager learners."
    />
  );
}
