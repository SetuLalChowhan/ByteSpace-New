"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Marquee from "react-fast-marquee";
import b1 from "@/assets/b1.png";
import b2 from "@/assets/b2.png";
import b3 from "@/assets/b3.png";
import b4 from "@/assets/b4.png";
import b5 from "@/assets/b5.png";

interface BrandLogo {
  src: StaticImageData;
  alt: string;
}

const brandLogos: BrandLogo[] = [
  { src: b1, alt: "Logoipsum Wave" },
  { src: b2, alt: "Logoipsum Sunburst" },
  { src: b3, alt: "Logoipsum Lightning" },
  { src: b4, alt: "Logoipsum Clover" },
  { src: b5, alt: "Logoipsum Spiral" },
];

interface BrandSectionProps {
  className?: string;
}

const BrandSection: React.FC<BrandSectionProps> = ({ className = "" }) => {
  return (
    <section
      className={`w-full bg-white py-10 sm:py-14 md:py-16 overflow-hidden ${className}`}
    >
      <div className="w-full Container section-padding-x">
        <Marquee
          speed={40}
          pauseOnHover={true}
          autoFill={true}
          gradient={false}
          className="flex items-center overflow-hidden"
        >
          {brandLogos.map((brand: BrandLogo, index: number) => (
            <div
              key={index}
              className="mx-6 sm:mx-10 md:mx-14 lg:mx-16 flex items-center justify-center shrink-0"
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                height={42}
                className="h-7 sm:h-8 md:h-10 w-auto object-contain select-none transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default BrandSection;
