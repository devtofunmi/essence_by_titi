import { useState } from "react";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { GiClosedDoors } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-purple-700">
          Essence by Titi
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-4 text-sm items-center">
          <Link href="#catalog" className="text-purple-600">
            Catalog
          </Link>
          <Link href="/contact" className="text-purple-600">
            Contact
          </Link>
          <Link href="/about" className="text-purple-600">
            About
          </Link>
          <a
            href="https://wa.me/2348012345678"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
          >
            Order Now
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-purple-700"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <MdOutlineClose size={24} /> : <BiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 text-black space-y-3 text-sm shadow-sm">
          <Link href="#catalog" className="block" onClick={toggleMenu}>
            Catalog
          </Link>
          <Link href="/contact" className="block" onClick={toggleMenu}>
            Contact
          </Link>
          <Link href="/about" className="block" onClick={toggleMenu}>
            About
          </Link>
          <a
            href="https://wa.me/2348012345678"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-purple-600 w-fit text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
            onClick={toggleMenu}
          >
            Order Now
          </a>
        </div>
      )}
    </nav>
  );
}

