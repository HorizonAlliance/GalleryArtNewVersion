"use client";
export type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
  title: string;
  category: string;
};

export const cards: Card[] = [
  {
    id: 1,
    content: (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Tiger notes paper moon stars
        </p>
        <p className="font-normal text-base max-w-lg text-neutral-200">
          Created by MollyRoselee
        </p>
      </div>
    ),
    className: "md:col-span-2",
    category: "Fantasy",

    // thumbnail:
    thumbnail: "/assets/img/Tiger notes paper moon stars -MollyRoselee.jpg",
    title: "Tiger notes paper moon stars",
  },
  {
    id: 2,
    content: (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Nature art landscape mountain
        </p>
        <p className="font-normal text-base max-w-lg text-neutral-200">
          Created by Wafidnside
        </p>
      </div>
    ),
    className: "col-span-1",
    category: "Moon",
    thumbnail: "/assets/img/Nature art landscape mountain - Wafidnside.jpg",
    title: "Nature art landscape mountain",
  },
  {
    id: 3,
    content: (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Woman face grunge drawing line art
        </p>
        <p className="font-normal text-base max-w-lg text-neutral-200">
          Created by BiancaVandijk
        </p>
      </div>
    ),
    className: "col-span-1",
    category: "Person",
    thumbnail:
      "/assets/img/Woman face grunge drawing line art - BiancaVandijk.jpg",
    title: "Woman face grunge drawing line art",
  },
  {
    id: 4,
    content: (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          AI generated girl rain child
        </p>
        <p className="font-normal text-base max-w-lg text-neutral-200">
          Created by Jhollu7
        </p>
      </div>
    ),
    className: "col-span-1",
    category: "AI",
    thumbnail: "/assets/img/AI generated girl rain child - Jhollu7.jpg",
    title: "AI generated girl rain child",
  },
  {
    id: 5,
    content: (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Amber nature water architecture
        </p>
        <p className="font-normal text-base max-w-lg text-neutral-200">
          Created by designtrickacademy
        </p>
      </div>
    ),
    className: "col-span-1",
    category: "Abstract",
    thumbnail:
      "/assets/img/Amber nature water architecture -designtrickacademy.jpg",
    title: "Amber nature water architecture",
  },
  {
    id: 7,
    content: (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Background bohemian painting boho
        </p>
        <p className="font-normal text-base max-w-lg text-neutral-200">
          Created by BiancaVanDijk
        </p>
      </div>
    ),
    className: "col-span-1",
    category: "Abstract",
    thumbnail:
      "/assets/img/Background bohemian painting boho - BiancaVanDijk.jpg",
    title: "Background bohemian painting boho",
  },
  {
    id: 6,
    content: (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Background abstract wallpaper
        </p>
        <p className="font-normal text-base max-w-lg text-neutral-200">
          Created by Annomaria
        </p>
      </div>
    ),
    className: "col-span-1",
    category: "Abstract",
    thumbnail: "/assets/img/Background abstract wallpaper - Annomaria.jpg",
    title: "Background abstract wallpaper",
  },
];
