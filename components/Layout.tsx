import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: ReactNode }) {

  return (
    <div className="flex flex-col min-h-screen bg-white  text-black  transition-colors duration-300">
      <Navbar  />
      <main className="flex-1">{children}</main>
      <div className="bg-black text-white">
      <Footer />
      </div>
    </div>
  );
}




