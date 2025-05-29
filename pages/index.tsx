import Head from "next/head";
import Layout from "@/components/Layout";
import { products } from "@/data/product";
import ProductCard from "@/components/ProductCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Home() {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: {
      perView: 2,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 479px)": {
        slides: { perView: 1, spacing: 10 },
      },
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(min-width: 768px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
  });

  return (
    <Layout>
      <Head>
        <title>Essence by Titi – Perfume Catalog</title>
        <meta
          name="description"
          content="Browse premium perfumes by Essence by Titi. Order by messaging us directly."
        />
      </Head>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-4 text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-800 dark:text-white mb-4">
          Essence by Titi
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg max-w-xl mx-auto mb-6">
          Discover luxury fragrances that define your essence. Premium scents,
          timeless elegance.
        </p>
        <a
          href="#catalog"
          className="bg-purple-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-purple-800 transition duration-300"
        >
          Shop Catalog
        </a>
      </motion.section>

      {/* Product Carousel */}
      <motion.section
        id="catalog"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-16 px-4 max-w-6xl mx-auto"
      >
        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                className="keen-slider__slide p-2"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={() => slider.current?.prev()}
            className="absolute cursor-pointer top-1/2 left-0 transform -translate-y-1/2 bg-white text-purple-700 shadow-md p-2 rounded-full hover:bg-purple-100 z-10"
            aria-label="Previous"
          >
            <FiChevronLeft size={24} />
          </button>

          <button
            onClick={() => slider.current?.next()}
            className="absolute cursor-pointer top-1/2 right-0 transform -translate-y-1/2 bg-white text-purple-700 shadow-md p-2 rounded-full hover:bg-purple-100 z-10"
            aria-label="Next"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      </motion.section>
    </Layout>
  );
}
