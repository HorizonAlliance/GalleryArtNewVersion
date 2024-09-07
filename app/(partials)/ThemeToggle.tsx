"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import React, { useContext } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

const SliderToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  if (!theme || !toggle) {
    throw new Error("ThemeContext is missing `theme` or `toggle`.");
  }

  return (
    <div className="flex w-full justify-endh-auto place-content-center transition-colors">
      <div className="relative flex w-fit items-center rounded-full">
        <button
          className={`${TOGGLE_CLASSES} ${
            theme === "light" ? "text-white" : "text-slate-300"
          }`}
          onClick={toggle}
        >
          <FiSun className="relative z-10 text-lg md:text-sm" />
          <span className="relative z-10">Light</span>
        </button>
        <button
          className={`${TOGGLE_CLASSES} ${
            theme === "dark" ? "text-white" : "text-slate-800"
          }`}
          onClick={toggle}
        >
          <FiMoon className="relative z-10 text-lg md:text-sm" />
          <span className="relative z-10">Dark</span>
        </button>
        <div
          className={`absolute inset-0 z-0 flex ${
            theme === "dark" ? "justify-end" : "justify-start"
          }`}
        >
          <motion.span
            layout
            transition={{ type: "spring", damping: 15, stiffness: 250 }}
            className="h-full w-1/2 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-400"
          />
        </div>
      </div>
    </div>
  );
};

export default SliderToggle;
