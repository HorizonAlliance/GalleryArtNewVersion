"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { GalleryCard } from "./GalleryCard";
import { BlurInDemo } from "./TextBlur";

export function SparklesPreview() {
  return (
    <div className="relative w-full h-[100-rem] bg-transparent dark:bg-black overflow-hidden rounded-md">
      <div className="relative z-2 h-full overflow-y-auto mt-12">
        <BlurInDemo />
        <GalleryCard />
      </div>
    </div>
  );
}
