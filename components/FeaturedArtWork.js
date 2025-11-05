"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FeaturedArtWork({ artworks = [] }) {
  const cardColors = [
    "bg-royal",
    "bg-forest",
    "bg-wood"
  ];

  // Animation for each card
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-28 relative overflow-hidden bg-gradient-to-br from-[var(--color-blush)]/30 to-white">
      <div className="max-w-6xl mx-auto px-6 text-center relative">
        {/* ===== Heading ===== */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-semibold text-forest mb-5 tracking-tight"
        >
          Featured Artworks
        </motion.h2>

        {/* ===== Subheading ===== */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="text-[var(--color-charcoal)]/70 max-w-2xl mx-auto mb-20 text-base sm:text-lg leading-relaxed"
        >
          A glimpse into the elegance of pencil drawings — each portrait tells a
          story through emotion, light, and graceful detail.
        </motion.p>

        {/* ===== Artworks Grid ===== */}
        <div className="flex flex-wrap justify-center gap-10">
          {artworks.map((art, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }} // triggers when 30% of the card is visible
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`relative overflow-hidden rounded-2xl shadow-lg max-w-xs w-full sm:w-64 group ${cardColors[index % cardColors.length]}`}
            >
              {/* Decorative SVG */}
              <svg
                className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] opacity-10 transition-transform duration-500"
                viewBox="0 0 375 283"
                fill="none"
              >
                <rect
                  x="159.52"
                  y="175"
                  width="152"
                  height="152"
                  rx="8"
                  transform="rotate(-45 159.52 175)"
                  fill="white"
                />
                <rect
                  y="107.48"
                  width="152"
                  height="152"
                  rx="8"
                  transform="rotate(-45 0 107.48)"
                  fill="white"
                />
              </svg>

              {/* Artwork Image */}
              <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <div
                  className="absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                  style={{
                    background: "radial-gradient(black, transparent 60%)",
                    transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                    opacity: 0.25,
                  }}
                />
                <Image
                  src={art.image}
                  alt={art.title}
                  width={160}
                  height={160}
                  className="relative w-40 h-auto object-contain drop-shadow-md"
                />
              </div>

              {/* Artwork Info */}
              <div className="relative text-white px-6 pb-6 mt-6 text-center">
                <span className="block opacity-75 text-sm mb-1">
                  {art.category}
                </span>
                <span className="block font-semibold text-lg sm:text-xl">
                  {art.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}