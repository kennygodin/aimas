"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    "/images/aimas1.png",
    "/images/aimas2.png",
    "/images/aimas3.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="h-[80vh] relative">
      <Image
        src="/images/hero-bg.svg"
        alt="hero"
        fill
        className="object-cover object-top"
      />

      <div className="p-20 absolute inset-0 flex items-center w-full h-[700px] gap-30 justify-between">
        <div className="flex-1 relative flex flex-col h-full p-10 space-y-6">
          <div className="absolute inset-0 bg-[#DB0404] z-0 h-full" />

          <svg
            className="absolute left-0 top-0 h-full w-auto z-10"
            viewBox="0 0 211 612"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M211 458.741L0 0V612H133.827L211 458.741Z"
              fill="#DF4545"
            />
          </svg>

          <div className="relative z-20 space-y-10">
            <h1 className="text-[64px] font-semibold leading-20 font-clash text-white">
              <span className="text-[#FFD900]">Africa’s</span> Media{" "}
              <span className="text-[#A4C565]">Future </span>Starts Here
            </h1>
            <p className="font-sora text-xl text-white font-medium leading-10 tracking-wider">
              The African Independent Media Marketing & Advertising Sales Expo
              brings together Africa’s media, brands, and advertisers to explore
              innovations, opportunities, and deals in media sales
            </p>
            <div className="space-x-4">
              <Button
                variant="heroPrimary"
                className="rounded-none font-sora h-11"
              >
                Register Now
              </Button>
              <Button
                variant="heroSecondary"
                className="rounded-none font-sora h-11"
              >
                Become an Exhibitor
              </Button>
            </div>
          </div>
        </div>
        <div className="flex-1 relative h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === activeSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide}
                alt={`slide ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}

          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`h-2 transition-all duration-300 ${
                  index === activeSlide
                    ? "w-12 bg-white"
                    : "w-2 bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
