import React from "react";
import Navbar from "@/shared/header/Navbar";
import Footer from "@/shared/footer/Footer";

interface SiteLayoutProps {
  children: React.ReactNode;
}

const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <div className="min-h-screen Container  w-full flex flex-col items-center selection:bg-[#d4fb20] selection:text-textPrimary relative overflow-x-hidden">
      <Navbar />
      <div className="w-full flex-1 flex flex-col">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default SiteLayout;
