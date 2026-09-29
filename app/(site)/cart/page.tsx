import React from "react";
import type { Metadata } from "next";
import UnderDevelopment from "@/components/common/UnderDevelopment";

export const metadata: Metadata = {
  title: "Cart | ByteSpace",
  description: "View and checkout your selected courses on ByteSpace.",
};

export default function CartPage() {
  return (
    <UnderDevelopment
      pageTitle="Your Cart is Coming Soon"
      badgeText="Under Development"
      description="The shopping bag and checkout experience are currently under development. Soon you will be able to enroll and purchase course packages smoothly."
    />
  );
}
