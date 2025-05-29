import Head from "next/head";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About – Essence by Titi</title>
        <meta
          name="description"
          content="Learn more about Essence by Titi, our values, and our perfume journey."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-28 text-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute w-72 h-72 bg-purple-800/30 rounded-full blur-3xl animate-blob top-0 left-1/4"></div>
          <div className="absolute w-72 h-72 bg-fuchsia-600/20 rounded-full blur-2xl animate-blob animation-delay-2000 top-1/3 left-2/3"></div>
          <div className="absolute w-80 h-80 bg-purple-500/20 rounded-full blur-2xl animate-blob animation-delay-4000 top-2/3 left-1/5"></div>
        </div>

        <h1 className="text-5xl md:text-6xl text-white font-extrabold tracking-tight mb-3">
          Our Story
        </h1>
        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
          Passion. Scent. Identity. Discover how Essence by Titi came to life.
        </p>
      </section>

      {/* Content Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative py-20 px-6 max-w-3xl mx-auto text-black"
      >
        <p className="text-lg leading-relaxed">
          Welcome to{" "}
          <span className="font-semibold text-purple-500">Essence by Titi</span> – where fragrance meets elegance. Our mission
          is to help you discover premium scents that speak your story and elevate your presence.
        </p>

        <p className="mt-6 text-lg leading-relaxed">
          Each perfume in our collection is curated with care, handpicked for its richness, depth, and lasting impression.
          We believe that scent isn’t just an accessory — it’s a form of expression.
        </p>

        <p className="mt-6 text-lg leading-relaxed">
          Whether you're shopping for yourself or searching for the perfect gift, you're in trusted hands.
        </p>

        <p className="mt-6 text-lg leading-relaxed">
          Ready to elevate your scent journey?{" "}
          <a
            href="https://wa.me/2348012345678"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 underline hover:text-purple-400 transition"
          >
            Message us
          </a>{" "}
          to place your order today.
        </p>
      </motion.section>
    </Layout>
  );
}

