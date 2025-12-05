"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import CustomButton from "./CustomButton";

export default function ModernGridGallery({ items }) {
  const route = useRouter();

  let images = items.map((item) => item.imageUrl || "");

  if (images.length < 4) {
    images = [...images, ...images, ...images, ...images, ...images]; // now 4 copies
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-4">

      {/* TOP ROW */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {images.slice(0, 3).map((img, i) => (
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

      {/* BOTTOM ROW */}
      <div className="hidden sm:grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-4">
        {images.slice(3, 5).map((img, i) => (
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
        <CustomButton
          rightIcon={
            <ArrowRight className="transition-transform group-hover:translate-x-2" />
          }
          name="View More"
          className="bg-royal hover:bg-forest rounded-full"
          func={() => route.push("/artwork/gallery")}
        />
      </div>
    </div>
  );
}
