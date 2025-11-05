"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function ArtWorkLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen font-montserrat bg-white">
      {/* Header */}
      <header className="z-50">
        <NavBar />
      </header>

      {/* Main Content */}
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="flex-1 flex flex-col"
      >
        {children}
      </motion.main>

      {/* Footer */}
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}