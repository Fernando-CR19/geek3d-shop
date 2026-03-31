export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  images: string[];
  description: string;
  dimensions: string;
  modelAuthor?: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Spider-Man",
    category: "Marvel",
    price: 89.9,
    image: "",
    images: [],
    description: "Boneco do Homem-Aranha impresso em 3D com alta precisão.",
    dimensions: "15cm x 8cm x 6cm",
  },
  {
    id: 2,
    name: "Batman",
    category: "DC",
    price: 89.9,
    image: "",
    images: [],
    description: "Boneco do Batman impresso em 3D com alta precisão.",
    dimensions: "16cm x 8cm x 6cm",
  },
  {
    id: 3,
    name: "Goku",
    category: "Animes",
    price: 99.9,
    image: "",
    images: [],
    description: "Boneco do Goku impresso em 3D com alta precisão.",
    dimensions: "17cm x 8cm x 6cm",
  },
  {
    id: 4,
    name: "Master Chief",
    category: "Games",
    price: 109.9,
    image: "",
    images: [],
    description: "Boneco do Master Chief impresso em 3D com alta precisão.",
    dimensions: "18cm x 9cm x 7cm",
  },
  {
    id: 5,
    name: "Sherlock Holmes",
    category: "Filmes & Séries",
    price: 100.0,
    image: "",
    images: [],
    description: "Boneco do Sherlock Holmes impresso em 3D com alta precisão.",
    dimensions: "15cm x 7cm x 6cm",
  },
];
