import Image from "next/image";
import { motion } from "framer-motion";

type Product = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const message = `Hello! I'm interested in ordering "${product.name}" (${product.price})`;

  return (
    <motion.div
      className="bg-gray-50 border border-white text-black rounded-lg shadow-md p-3 hover:shadow-lg transition-all"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.015 }}
    >
      <div className="relative w-full h-48 rounded-md overflow-hidden mb-3">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </div>
      <motion.h3
        className="text-base font-semibold"
        whileHover={{ x: 3 }}
        transition={{ duration: 0.3 }}
      >
        {product.name}
      </motion.h3>
      <motion.p
        className="text-xs text-gray-800 mb-1"
        whileHover={{ y: -2 }}
        transition={{ duration: 0.3 }}
      >
        {product.description}
      </motion.p>
      <p className="text-sm font-medium text-black">{product.price}</p>
      <a
        href={`https://wa.me/2348069234350?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 w-full text-white text-center inline-block bg-black text-xs px-3 py-2 font-bold rounded-md hover:bg-gray-800 transition"
      >
        Message to Order
      </a>
    </motion.div>
  );
}
