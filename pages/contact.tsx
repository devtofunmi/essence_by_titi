import Head from "next/head";
import Layout from "@/components/Layout";

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

      <section className="min-h-[80vh] flex items-center justify-center px-6 animate-fadeIn bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-300">
        <div className="bg-gradient-to-tr from-purple-900/60 via-black/70 to-purple-900/60 shadow-xl rounded-2xl p-10 max-w-md w-full backdrop-blur-md border border-purple-700/50">
          <h1 className="text-3xl font-extrabold text-purple-400 mb-6 tracking-wide">
            Get in Touch
          </h1>
          <p className="mb-8 text-gray-400">
            For inquiries or custom orders, reach out via any of the following:
          </p>

          <ul className="space-y-6 text-sm">
            <li className="flex items-center space-x-3">
              <span className="text-purple-500 text-xl">📞</span>
              <span>
                <strong className="text-white">Phone / WhatsApp:</strong>{" "}
                <a
                  href="https://wa.me/2348012345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-600 underline transition"
                >
                  +234 801 234 5678
                </a>
              </span>
            </li>

            <li className="flex items-center space-x-3">
              <span className="text-purple-500 text-xl">📧</span>
              <span>
                <strong className="text-white">Email:</strong>{" "}
                <a
                  href="mailto:essencebytiti@gmail.com"
                  className="text-purple-400 hover:text-purple-600 underline transition"
                >
                  essencebytiti@gmail.com
                </a>
              </span>
            </li>

            <li className="flex items-center space-x-3">
              <span className="text-purple-500 text-xl">📍</span>
              <span>
                <strong className="text-white">Instagram:</strong>{" "}
                <a
                  href="https://instagram.com/essencebytiti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-600 underline transition"
                >
                  @essencebytiti
                </a>
              </span>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}

