import Head from "next/head";
import Layout from "@/components/Layout";
import { products } from "@/data/product";
import ProductCard from "@/components/ProductCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";

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
        className="relative bg-gray-200 py-20 px-4 text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-800 mb-4">
          Essence by Titi
        </h1>
        <p className="text-gray-700 text-lg max-w-xl mx-auto mb-6">
          Discover luxury fragrances that define your essence. Premium scents, timeless elegance.
        </p>
        <a
          href="#catalog"
          className="bg-purple-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-purple-800 transition duration-300"
        >
          Shop Catalog
        </a>
      </motion.section>

      {/* Our Promise Section */}
      <section className="py-20 px-6 text-center bg-gray-50">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-purple-700">Our Promise</h2>
        <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed text-lg">
          At Essence by Titi, every bottle tells a story. We hand-select our perfumes to ensure quality,
          uniqueness, and lasting elegance. You deserve a scent as rare and special as you are.
        </p>
      </section>

      {/* Product Carousel Section - New Arrivals */}
      <div id="catalog" className="py-16 px-4 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-700 mb-4">New Arrivals</h1>
        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {products.map((product) => (
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
      </div>

      {/* Product Carousel Section - Most Popular */}
      <div className="py-16 px-4 max-w-6xl mx-auto ">
        <h1 className="text-3xl font-bold text-purple-700 mb-4">Most Popular</h1>
        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {products.map((product) => (
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
      </div>

      {/* How to Order Section */}
      <section className="py-20 px-6 text-center bg-gray-200">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">How to Order</h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-6 text-lg">
          See something you love? Ordering is easy — just send us a WhatsApp message and we’ll guide you through your purchase.
        </p>
        <a
          href="https://wa.me/2348012345678"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-purple-800 transition"
        >
          Message Us on WhatsApp
        </a>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-20 px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-purple-700 mb-10">
          What Our Customers Are Saying
        </h2>
        <div className="grid gap-8 max-w-5xl mx-auto md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-100 shadow-md rounded-xl p-6"
            >
              <p className="text-gray-800 italic mb-4">“{t.quote}”</p>
              <h4 className="text-purple-700 font-semibold">{t.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gray-50 text-center py-20 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-4">
          Smell Like Royalty
        </h2>
        <p className="text-gray-700 text-lg max-w-xl mx-auto mb-6">
          It’s more than a scent — it’s your signature. Let’s help you find it.
        </p>
        <a
          href="https://wa.me/2348012345678"
          className="bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-purple-800 transition"
        >
          Start Your Fragrance Journey
        </a>
      </section>
    </Layout>
  );
}
