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
  featured?: boolean;
};

export const products: Product[] = [];
