export type Product = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
};

export const productss: Product[] = [
  {
    id: 1,
    name: "Bloom by Gucci",
    image: "/perf.jpg",
    description: "A floral fragrance for women.",
    price: "₦25,000",
  },
  {
    id: 2,
    name: "Dior Sauvage",
    image: "/perf.jpg",
    description: "A fresh, spicy fragrance for men.",
    price: "₦30,000",
  },
  {
    id: 3,
    name: "YSL Libre",
    image: "/perf.jpg",
    description: "Lavender and orange blossom fusion.",
    price: "₦27,000",
  },
  {
    id: 4,
    name: "Tom Ford Black Orchid",
    image: "/perf.jpg",
    description: "Rich, dark, and opulent unisex scent.",
    price: "₦42,000",
  },
  {
    id: 5,
    name: "Chanel No. 5",
    image: "/perf.jpg",
    description: "Timeless classic for sophisticated women.",
    price: "₦35,000",
  },
  {
    id: 6,
    name: "Armani Acqua di Gio",
    image: "/perf.jpg",
    description: "A fresh aquatic fragrance for men.",
    price: "₦28,000",
  },
];