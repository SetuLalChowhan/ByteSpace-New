import React from "react";
import type { Metadata } from "next";
import UnderDevelopment from "@/components/common/UnderDevelopment";

export const metadata: Metadata = {
  title: "Courses | ByteSpace",
  description: "Explore our upcoming courses taught by top creators worldwide.",
};

export default function CoursesPage() {
  return (
    <UnderDevelopment
      pageTitle="Courses Under Development"
      badgeText="Coming Soon"
      description="We are curating an extensive library of courses across Design, Development, Business, Marketing, and more. Stay tuned for launch!"
    />
  );
}
