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
    category: "Abstract",

    // thumbnail:
    thumbnail: "/assets/img/Tiger notes paper moon stars -MollyRoselee.jpg",
    title: "Tiger notes paper moon stars",
  },
  {
    id: 2,
    content: (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          House above the clouds
        </p>
        <p className="font-normal text-base max-w-lg text-neutral-200">
          Created by Wafidnside
        </p>
      </div>
    ),
    className: "col-span-1",
    category: "Abstract",
    thumbnail: "/assets/img/Nature art landscape mountain - Wafidnside.jpg",
    title: "House Above the Clouds",
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
    category: "ANJAY",
    thumbnail:
      "/assets/img/Woman face grunge drawing line art - BiancaVandijk.jpg",
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
    category: "ANJAY",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Rivers Are Serene",
  },
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
    category: "MANGA",
    // thumbnail:
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "House in the Woods",
  },
];
