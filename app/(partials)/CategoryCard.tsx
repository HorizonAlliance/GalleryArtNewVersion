import Image from "next/image";

export type Category = {
  id: number;
  title: string;
  thumbnail: string;
  category: string;
};

export const Categories: Category[] = [
  {
    id: 1,
    category: "Abstract",
    thumbnail: "/assets/img/Tiger notes paper moon stars -MollyRoselee.jpg",
    title: "Abstract",
  },
  {
    id: 2,
    category: "Fantasy",
    thumbnail: "/assets/img/Nature art landscape mountain - Wafidnside.jpg",
    title: "Fantasy",
  },
  {
    id: 2,
    category: "Fantasy",
    thumbnail: "/assets/img/Nature art landscape mountain - Wafidnside.jpg",
    title: "Fantasy",
  },
  {
    id: 2,
    category: "Fantasy",
    thumbnail: "/assets/img/Nature art landscape mountain - Wafidnside.jpg",
    title: "Fantasy",
  },
  {
    id: 2,
    category: "Fantasy",
    thumbnail: "/assets/img/Nature art landscape mountain - Wafidnside.jpg",
    title: "Fantasy",
  },
  {
    id: 2,
    category: "Fantasy",
    thumbnail: "/assets/img/Nature art landscape mountain - Wafidnside.jpg",
    title: "Fantasy",
  },
  {
    id: 2,
    category: "Fantasy",
    thumbnail: "/assets/img/Nature art landscape mountain - Wafidnside.jpg",
    title: "Fantasy",
  },
];

// Menggunakan Image di komponen Anda
const CategoryCard = ({ category }: { category: Category }) => (
  <div>
    <Image
      src={category.thumbnail}
      alt={category.title}
      width={300} // Atur lebar sesuai kebutuhan
      height={200} // Atur tinggi sesuai kebutuhan
    />
    <h2>{category.title}</h2>
  </div>
);
