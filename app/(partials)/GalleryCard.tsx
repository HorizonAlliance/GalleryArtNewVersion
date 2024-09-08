"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import BlurFade from "@/app/(partials)/BlurFade";
import { VelocityScroll } from "@/app/(partials)/Velocity";
import { Card, cards } from "@/app/(partials)/Card";

// LayoutGrid component
export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [hovered, setHovered] = useState<number | null>(null); // State for hover

  const handleClick = (card: Card) => {
    setSelected(card);
  };

  const handleClose = () => {
    setSelected(null);
  };

  const handleMouseEnter = (index: number) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          onClick={() => handleClick(card)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          className={cn(
            card.className,
            "relative overflow-hidden rounded-lg transition-all duration-300 ease-out cursor-pointer",
            hovered !== null && hovered !== index && "blur-sm scale-[0.98]" // Apply blur effect
          )}
          layoutId={`card-${card.id}`}
        >
          <ImageComponent card={card} />
          <motion.div className="absolute inset-0 bg-transparent flex items-end py-8 px-4 transition-opacity duration-300 opacity-0 hover:opacity-100">
            <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
              {card.title}
            </div>
          </motion.div>
        </motion.div>
      ))}
      <AnimatePresence>
        {selected && <Modal selected={selected} handleClose={handleClose} />}
      </AnimatePresence>
    </div>
  );
};

// Image component to display image
const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <div className="flex items-center justify-center h-full w-full bg-black text-white">
      <p className="text-4xl sm:text-7xl font-bold text-center text-blue dark:text-white">
        {card.category} {/* Tampilkan tulisan sebagai pengganti gambar */}
      </p>
    </div>
    // <motion.img
    //   src={card.thumbnail}
    //   height="500"
    //   width="500"
    //   className="object-cover object-top absolute inset-0 h-full w-full transition-transform duration-200 img-modal"
    //   alt="thumbnail"
    // />
  );
};

// Modal component
const Modal = ({
  selected,
  handleClose,
}: {
  selected: Card;
  handleClose: () => void;
}) => {
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    setImageSize({ width: img.naturalWidth, height: img.naturalHeight });
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      onClick={handleClose}
    >
      <motion.div
        className="relative bg-white rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        style={{
          width:
            imageSize.width > 0
              ? `${Math.min(imageSize.width, window.innerWidth * 0.9)}px`
              : "auto",
          height:
            imageSize.height > 0
              ? `${Math.min(imageSize.height, window.innerHeight * 0.9)}px`
              : "auto",
        }}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <img
          src={selected.thumbnail}
          alt="modal-thumbnail"
          onLoad={handleImageLoad}
          className="w-full h-auto"
        />
        <div className="p-8">{selected.content}</div>
        <button
          className="absolute top-4 right-4 text-white bg-black rounded-full p-2"
          onClick={handleClose}
        >
          &times;
        </button>
      </motion.div>
    </motion.div>
  );
};

export function BlurFadeDemo() {
  return (
    <section
      id="photos"
      className="w-full h-full p-10 grid grid-cols-1 max-w-7xl mx-auto relative"
    >
      <div className="columns-3 sm:columns-3">
        {cards.map((card, idx) => (
          <BlurFade key={card.thumbnail} delay={0.25 + idx * 0.05} inView>
            <img
              className="mb-4 size-full rounded-lg object-contain"
              src={card.thumbnail}
              alt={card.title}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
// photos 2

export function LayoutGridDemo() {
  return (
    <div className="h-full py-20 w-full">
      <VelocityScroll
        text="CATEGORY"
        default_velocity={2}
        className="font-display text-center text-7xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
      />
      <div className="h-screen">
        <LayoutGrid cards={cards} />
      </div>

      <VelocityScroll
        text="GALLERY"
        default_velocity={2}
        className="font-display text-center text-7xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
      />

      <BlurFadeDemo />
    </div>
  );
}
