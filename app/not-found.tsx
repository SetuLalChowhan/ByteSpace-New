import React from "react";
import SiteLayout from "@/layout/SiteLayout";
import UnderDevelopment from "@/components/common/UnderDevelopment";

export default function NotFound() {
  return (
    <SiteLayout>
      <UnderDevelopment
        pageTitle="Page Under Development"
        badgeText="Coming Soon"
        description="This section is currently under development. Please check back soon or explore our home page."
      />
    </SiteLayout>
  );
}
