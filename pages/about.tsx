import Head from "next/head";
import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About – Essence by Titi</title>
        <meta name="description" content="Learn more about Essence by Titi, our values, and our perfume journey." />
      </Head>
      <section className="py-16 px-4 max-w-4xl mx-auto animate-fadeIn">
        <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
        <p className="text-white text-lg leading-relaxed">
          Welcome to <span className="font-semibold text-purple-700">Essence by Titi</span> – where fragrance meets elegance. Our mission is to
          help you discover premium scents that express your unique style and personality.
        </p>
        <p className="mt-6 text-white text-lg leading-relaxed">
          Carefully curated and passionately presented, each perfume in our catalog is handpicked for quality and lasting impression.
          Whether you're shopping for yourself or a loved one, you're in good hands.
        </p>
        <p className="mt-6 text-white text-lg leading-relaxed">
          Ready to elevate your scent game? <a href="https://wa.me/2348012345678" className="text-purple-600 underline">Message us</a> to place your order today.
        </p>
      </section>
    </Layout>
  );
}

