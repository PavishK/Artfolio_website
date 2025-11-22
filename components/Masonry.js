"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { EyeClosedIcon, EyeIcon } from "lucide-react";

export default function ModernGridGallery({ items }) {
  return (
    <div className="w-full max-w-6xl mx-auto p-4">

      {/* TOP ROW */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {items.slice(0, 3).map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl overflow-hidden shadow-md h-60"
          >
            <Image
              src={img}
              alt="Gallery"
              width={500}
              height={300}
              className="object-cover object-center  rounded-xl w-full h-full"
            />
          </motion.div>
        ))}
      </div>

      {/* BOTTOM ROW */}
      <div className="hidden sm:grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-4">
        {items.slice(3, 5).map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl overflow-hidden shadow-md h-60"
          >
            <Image
              src={img}
              alt="Gallery"
              width={500}
              height={300}
              className="object-cover object-center rounded-xl w-full h-full"
            />
          </motion.div>
        ))}
      </div>

      {/* VIEW MORE BUTTON */}
      <div className="flex justify-center mt-8">
        <Link href="/gallery">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-royal text-blush hover:bg-forest
                    px-8 py-3 rounded-full font-medium shadow-lg 
                    flex items-center gap-2 group"
        >
          <EyeClosedIcon className="group-hover:hidden" />
          <EyeIcon className="hidden group-hover:block"/>
          View More
        </motion.button>
        </Link>
      </div>
    </div>
  );
}