import Image from "next/image";

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
    <div className="bg-black border border-white text-white rounded-lg shadow-md p-3 hover:shadow-lg transition-all">
      <div className="relative w-full h-48 rounded-md overflow-hidden mb-3">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      <h3 className="text-base font-semibold">{product.name}</h3>
      <p className="text-xs text-gray-300 mb-1">{product.description}</p>
      <p className="text-sm font-medium text-purple-500">{product.price}</p>
      <a
        href={`https://wa.me/2348012345678?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 w-full text-center inline-block bg-purple-600 text-xs px-3 py-2 font-bold rounded-md hover:bg-purple-700 transition"
      >
        Message to Order
      </a>
    </div>
  );
}
