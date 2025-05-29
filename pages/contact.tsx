import Head from "next/head";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact – Essence by Titi</title>
        <meta
          name="description"
          content="Contact Essence by Titi to place your perfume order or ask questions."
        />
      </Head>

      {/* Hero Section */}
      <section className="px-6 py-28 text-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <h1 className="text-5xl md:text-6xl text-white font-extrabold mb-3 tracking-tight">
          Let’s Connect
        </h1>
        <p className="text-white max-w-xl mx-auto text-sm sm:text-base">
          We’d love to hear from you — whether you’re placing an order, asking a
          question, or just saying hello.
        </p>
      </section>

      {/* Contact Section */}
      <section className="min-h-[80vh] flex items-center justify-center px-6  text-black">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full max-w-md backdrop-blur-xl bg-white/5 border border-purple-500/30 shadow-2xl rounded-3xl p-10"
        >
          <p className="mb-8 text-sm text-black text-center">
            Reach out via any of the following platforms.
          </p>

          <ul className="space-y-6 text-sm">
            <li className="flex items-center space-x-3">
              <span>
                <strong className="">Phone / WhatsApp:</strong>{" "}
                <a
                  href="https://wa.me/08069234350"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 underline transition duration-200"
                >
                  +2348069234350
                </a>
              </span>
            </li>

            <li className="flex items-start space-x-3">
              <span>
                <strong className="">Email:</strong>{" "}
                <a
                  href="mailto:essencebytiti@gmail.com"
                  className="text-purple-400 hover:text-purple-300 underline transition duration-200"
                >
                  essencebytiti@gmail.com
                </a>
              </span>
            </li>

            <li className="flex items-start space-x-3">
              <span>
                <strong className="">Instagram:</strong>{" "}
                <a
                  href="https://instagram.com/essencebytiti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 underline transition duration-200"
                >
                  @essencebytiti
                </a>
              </span>
            </li>
          </ul>
        </motion.div>
      </section>
    </Layout>
  );
}


