"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import logoImg from "@/assets/shared/logo.png";
import { ShopSvg } from "@/components/common/CustomSvg";
import MobileNavMenu from "./MobileNavMenu";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Home", href: "/", active: pathname === "/" },
    { label: "Courses", href: "/courses", active: pathname.startsWith("/courses") },
    { label: "Creators", href: "/creators", active: pathname.startsWith("/creators") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 sm:py-3.5 bg-[#063FD8]/80 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.12)] border-b border-white/10"
          : "pt-4 sm:pt-6 md:pt-7 pb-2 bg-transparent"
      } ${className}`}
    >
      <div className="w-full max-w-[1440px] mx-auto section-padding-x flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center select-none group">
          <Image
            src={logoImg}
            alt="ByteSpace"
            height={34}
            priority
            className="h-7 sm:h-8 md:h-9 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
          />
        </Link>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-[16px] transition-all relative py-1 ${
                item.active
                  ? "font-medium text-[#F5F5F6] leading-[120%] -translate-y-0.5"
                  : "font-normal text-[#F5F5F6]/90 leading-[160%] hover:text-[#F5F5F6]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Nav Actions (Desktop) */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <Link
            href="/login"
            className="text-[16px] font-normal leading-[160%] text-[#F5F5F6] hover:text-white transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="text-[16px] font-normal leading-[160%] text-[#F5F5F6] hover:text-white transition-colors"
          >
            Join Us
          </Link>
          <Link
            href="/cart"
            aria-label="Shopping Cart"
            className="p-1 text-[#F5F5F6] hover:text-white hover:scale-110 transition-transform"
          >
            <ShopSvg className="w-6 h-6 fill-[#F5F5F6]" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-4">
          <Link
            href="/cart"
            aria-label="Shopping Cart"
            className="p-1 text-[#F5F5F6] hover:text-white"
          >
            <ShopSvg className="w-6 h-6 fill-[#F5F5F6]" />
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            className="p-2 rounded-lg text-[#F5F5F6] hover:bg-white/10 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <MobileNavMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navItems}
      />
    </header>
  );
};

export default Navbar;
