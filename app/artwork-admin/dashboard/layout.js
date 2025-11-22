"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import AdminNavBar from "@/components/AdminNavBar";
import Spinner from "@/components/Spinner";

export default function AdminLayout({ children }) {
  
  const pathname = usePathname();
  const audioRef = useRef(null);
  
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <>

    <audio ref={audioRef} src={"/audios/welcome.wav"} preload="auto"/>

    <div className="flex flex-col min-h-screen font-montserrat bg-white">
      {/* Header */}
      <header className="z-50">
        <AdminNavBar />
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
    </div>
    </>
  );
}