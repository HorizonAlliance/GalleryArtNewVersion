"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Define the card structure
type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
  title: string;
};

const cards = [
  {
    id: 1,
    content: (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          House in the woods
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          A serene and tranquil retreat, this house in the woods offers a
          peaceful escape from the hustle and bustle of city life.
        </p>
      </div>
    ),
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "House in the Woods",
  },
  {
    id: 2,
    content: (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          House above the clouds
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Perched high above the world, this house offers breathtaking views and
          a unique living experience.
        </p>
      </div>
    ),
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "House Above the Clouds",
  },
  {
    id: 3,
    content: (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Greens all over
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
          perfect place to relax, unwind, and enjoy life.
        </p>
      </div>
    ),
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Greens All Over",
  },
  {
    id: 4,
    content: (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Rivers are serene
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          A house by the river is a place of peace and tranquility.
        </p>
      </div>
    ),
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Rivers Are Serene",
  },
];

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
    <motion.img
      src={card.thumbnail}
      height="500"
      width="500"
      className="object-cover object-top absolute inset-0 h-full w-full transition-transform duration-200 img-modal"
      alt="thumbnail"
    />
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

export function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}
