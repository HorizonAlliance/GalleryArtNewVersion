"use client";

import RetroGrid from "@/components/ui/RetroBg";
import { HyperTextDemo } from "./Hypertext";
import { TextGenerateEffectDemo } from "./TextGenerate";
import LightButton from "./LightButton";
import ButtonGetStarted from "./ButtonGetStarted";
import DarkModeToggle from "./buttondarkmode";

export function RetroGridDemo() {
  return (
    <div className="relative flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background border-none">
      <DarkModeToggle/>
        <HyperTextDemo />
        <TextGenerateEffectDemo />
        <ButtonGetStarted/>
      <RetroGrid />
    </div>
  );
}
