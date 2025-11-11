"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { socials } from "@/data/links";
import Masonry from "@/components/Masonry";
import { useRouter } from "next/navigation";
import PixelTransition from "@/components/PixelTransition";


const items = [
    {
      id: "1",
      img: "https://picsum.photos/id/1015/600/900?grayscale",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "2",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "3",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "4",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
      height: 500,
    },
    {
      id: "5",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "6",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "7",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "8",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "9",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
      {
      id: "10",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
      height: 500,
    },
      {
      id: "11",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
      height: 500,
    },
];
function Home() {

  const router = useRouter();
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

    <section
      ref={exploreRef}
      className="w-full relative flex flex-col items-center justify-start py-20"
      id="gallery"
    >
      {/* Heading Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-5xl font-bold tracking-tight 
                     text-forest"
          initial={{ scale: 0.9 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Gallery
        </motion.h2>

        <motion.p
          className="text-charcoal/80 mt-4 text-lg max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          A curated collection of vibrant art pieces — each one telling a story through
          colors, textures, and emotion.
        </motion.p>

        {/* Decorative line */}
        <motion.div
          className="mt-6 h-[3px] w-32 mx-auto bg-gradient-to-r from-forest via-wood to-royal rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        />
      </motion.div>

      {/* Masonry Grid */}
      <Masonry
        items={items}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="bottom"
        scaleOnHover={true}
        hoverScale={0.95}
        blurToFocus={true}
        colorShiftOnHover={false}
      />
    </section>

        <section className="w-full bg-blush py-20 px-8 lg:px-20 flex flex-col lg:flex-row items-center justify-center gap-16 text-charcoal overflow-hidden">
      {/* Left: Artist PixelTransition Image */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.9, ease: "easeOut", type:'spring', stiffness:'100' }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 flex justify-center"
      >
        <div className="relative group rounded-2xl overflow-hidden shadow-2xl border-2 border-wood">
          <PixelTransition
            firstContent={
              <Image
                src="/images/home-img.svg"
                alt="Artist"
                width={100}
                height={100}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "1rem",
                }}
              />
            }
            secondContent={
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "grid",
                  placeItems: "center",
                  backgroundColor: "var(--color-royal)",
                  borderRadius: "1rem",
                }}
              >
               <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>Hello!</p>
              </div>
            }
            gridSize={10}
            pixelColor="var(--color-forest)"
            once={false}
            animationStepDuration={0.3}
            className="custom-pixel-card"
          />
        </div>
      </motion.div>

      {/* Right: Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
      >
        <h2 className="text-5xl font-extrabold text-royal">Meet the Artist</h2>

        <p className="text-lg leading-relaxed text-charcoal/90">
          <span className="text-forest font-semibold">[Artist’s Name]</span> brings
          emotions, colors, and nature to life through her art. Her style tells
          stories beyond words — blending{" "}
          <span className="text-wood font-semibold">warmth</span> and imagination
          to craft timeless works that speak to the heart.
        </p>

        <p className="text-lg leading-relaxed text-charcoal/90">
          Each creation mirrors her journey, vision, and love for artistic
          expression — inspiring others to find beauty in simplicity and color.
        </p>

        <motion.button
          whileHover={{ scale: 1.08, backgroundColor: "var(--color-forest)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 180 }}
          className="bg-royal text-blush px-8 py-3 rounded-full font-semibold shadow-lg mx-auto lg:mx-0 mt-4"
          onClick={() => router.push("/about")}
        >
          Read More
        </motion.button>
      </motion.div>
    </section>
  
   </div>
  );
}

export default Home;
