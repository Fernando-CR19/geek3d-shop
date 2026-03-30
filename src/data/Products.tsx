export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Spider-Man",
    category: "Marvel",
    price: 89.9,
    image: "",
  },
  {
    id: 2,
    name: "Batman",
    category: "DC",
    price: 89.9,
    image: "",
  },
  {
    id: 3,
    name: "Goku",
    category: "Animes",
    price: 99.9,
    image: "",
  },
  {
    id: 4,
    name: "Master Chief",
    category: "Games",
    price: 109.9,
    image: "",
  },
  {
    id: 5,
    name: "Sherlock Holmes",
    category: "Filmes & Séries",
    price: 100.0,
    image: "",
  },
];
