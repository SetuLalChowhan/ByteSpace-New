"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import logoImg from "@/assets/shared/logo.png";
import { ShopSvg } from "@/components/common/CustomSvg";

interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

interface MobileNavMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

const MobileNavMenu: React.FC<MobileNavMenuProps> = ({
  isOpen,
  onClose,
  navItems,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] pointer-events-auto">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.65)" }}
            aria-hidden="true"
          />

          {/* Drawer coming from the right */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[340px] h-full p-6 shadow-2xl flex flex-col justify-between border-l border-white/15 z-[100000] overflow-y-auto"
            style={{ backgroundColor: "#063FD8" }}
          >
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-white/15">
                <Link href="/" onClick={onClose} className="flex items-center">
                  <Image
                    src={logoImg}
                    alt="ByteSpace Logo"
                    height={32}
                    className="h-8 w-auto object-contain"
                  />
                </Link>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close navigation menu"
                  className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation links */}
              <nav className="flex flex-col gap-3 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={onClose}
                    className={`text-base px-4 py-2.5 rounded-xl transition-colors ${item.active
                      ? "font-medium text-[#F5F5F6] bg-white/15"
                      : "font-normal text-[#F5F5F6]/90 hover:text-white hover:bg-white/10"
                      }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6  flex flex-col gap-3">

              <Link
                href="/login"
                onClick={onClose}
                className="w-full text-center py-3 rounded-full border border-white/20 text-[#F5F5F6] font-medium hover:bg-white/10 transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                onClick={onClose}
                className="w-full text-center py-3 rounded-full bg-[#d4fb20] text-textPrimary font-medium hover:brightness-105 transition-all shadow-md"
              >
                Join Us
              </Link>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default MobileNavMenu;