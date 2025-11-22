"use client";

import React from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Error404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-blush">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        className="max-w-md w-full"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Image
            src="/images/404.svg"
            alt="Not Found"
            width={400}
            height={400}
            className="mx-auto mb-6"
          />
        </motion.div>

        {/* Button Animation */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="mx-auto"
        >
          <Link
            href="/artwork/home"
            className="inline-flex group items-center gap-2 
                       bg-forest text-white
                       hover:bg-wood
                       px-8 py-3 rounded-full font-semibold 
                       shadow-lg transition-all duration-200"
          >
            <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1"/>
            Go Back
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}