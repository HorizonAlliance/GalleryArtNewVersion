"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { LayoutGridDemo } from "./GalleryCard";
import { BlurInDemo } from "./TextBlur";

export function SparklesPreview() {
  return (
    <div className="relative w-full h-[100-rem] bg-transparent dark:bg-black overflow-hidden rounded-md">
      {/* Sparkles Background */}
      <SparklesCore
        background="transparent"
        minSize={0.6}
        maxSize={10}
        particleDensity={10}
        className="absolute inset-0 z-1"
        particleColor="#FFD700"
      />
      {/* Content on top of Sparkles */}
      <div className="relative z-2 h-full overflow-y-auto mt-12">
        {/* <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-blue dark:text-white">
          Gallery
        </h1> */}
        <BlurInDemo/>
        <div className="mt-10"></div>
        <LayoutGridDemo />
      </div>
    </div>
  );
}
