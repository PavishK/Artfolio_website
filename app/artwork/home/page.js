"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { socials } from "@/data/links";
import FeaturedArtWork from "@/components/FeaturedArtWork";

  const artworks = [
    {
      image: "/images/home-img.svg",
      title: "Peace Lily",
      category: "Digital Illustration",
    },
    {
      image: "/images/home-img.svg",
      title: "Monstera",
      category: "Concept Art",
    },
    {
      image: "/images/home-img.svg",
      title: "Oak Tree",
      category: "Nature Design",
    }
  ];

function Home() {

  const exploreRef = useRef();

  const onClickExplore = () => {
    exploreRef.current.scrollIntoView({ behavior:'smooth'});
  }

  return (
    <div className="w-full bg-gradient-to-br from-blush to-white">
      {/* ====== Hero Section ====== */}
      <section className="relative min-h-screen w-full flex items-center justify-center px-6 sm:px-12 lg:px-20 py-12 overflow-hidden">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20 w-full max-w-7xl mt-14">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut",  type: "spring", stiffness: 200 }}
            className="flex-1 space-y-6 text-center lg:text-left"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-normal text-wood">
              MAKE
              <br /> <b className="text-royal">AN ART</b>
            </h1>

            <p className="text-charcoal/80 text-base sm:text-lg max-w-lg mx-auto lg:mx-0">
              Turn your memories into hand-drawn portraits made with heart and
              creativity. Each piece captures emotion and personality, making
              your photo a truly one-of-a-kind artwork.
            </p>

            <motion.button
             whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-royal text-blush hover:bg-wood
                       px-8 py-3 rounded-full font-medium shadow-lg mx-auto lg:mx-0"
            onClick={onClickExplore}
            >
              EXPLORE
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileHover={{ scale: 1.1 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", type: "spring", stiffness: 160 }}
            className="flex-1 flex justify-center"
          >
            <Image
              src="/images/home-img.svg"
              width={600}
              height={600}
              alt="main-image"
              className="w-[80%] sm:w-[70%] lg:w-[100%] h-auto drop-shadow-2xl"
              priority
            />
          </motion.div>
        </div>

        <ul
        className="absolute left-1/2 -translate-x-1/2 bottom-0 flex items-center justify-center gap-x-5 text-wood">
        { socials.map((v,i)=>(
          <motion.li 
          key={i}
          whileHover={{ scale: 1.1 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} 
          transition={{ duration: 0.8, ease: "easeOut", type: "spring", stiffness: 160 }}>
            <Link href={v.link}>{v.icon}</Link>
          </motion.li>
        ))}
        </ul>

      </section>

      <section ref={exploreRef}>
        <FeaturedArtWork artworks={artworks} />
      </section>
  
   </div>
  );
}

export default Home;
