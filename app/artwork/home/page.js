"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { socials } from "@/data/links";
import Masonry from "@/components/Masonry";
import { useRouter } from "next/navigation";
import PixelTransition from "@/components/PixelTransition";
import { description } from "@/data/home";
import { api } from "@/services/api";
import { ArrowRight, BrushIcon, PaletteIcon } from "lucide-react";
import CustomButton from "@/components/CustomButton";
import useFetchGallery from "@/hooks/useFetchGallery";
import Spinner from "@/components/Spinner";

function Home() {

  const { images, loading, error } = useFetchGallery();
  const router = useRouter();
  const exploreRef = useRef();
  const [ artist, setArtist ] = useState({ imageUrl:null, desc:null});
  const [ makeLoading, setMakeLoading ] = useState(false);

  const onClickExplore = () => {
    exploreRef.current.scrollIntoView({ behavior:'smooth'});
  }

  const fetchAdminProfile = async() => {
    try {
      setMakeLoading(true);
      const res = await api.get('/api/profile');
      setArtist(res.data.data);
    } catch (error) {
      setArtist({
        imageUrl: "/images/whoami.svg",
        desc: description,
      });
    } finally {
      setMakeLoading(false);
    }
  }

  useEffect(()=>{
    fetchAdminProfile();
 },[]);

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

            <CustomButton 
            leftIcon={<PaletteIcon className="transition-transform group-hover:rotate-90" />}
            name={"EXPLORE"}
            className={"bg-royal hover:bg-wood rounded-full"}
            func={onClickExplore} />

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
      className="w-full relative flex flex-col items-center justify-start py-6"
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
      <Masonry items={images} onClickHide={onClickExplore}/>
    </section>

      <section className="w-full py-20 px-8 lg:px-20 flex flex-col lg:flex-row items-center justify-center gap-16 text-charcoal overflow-hidden">

      {/* Left: Artist PixelTransition Image */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 flex justify-center"
      >
        <div className="relative group rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform">
          <PixelTransition
            firstContent={
              <Image
                src={artist.imageUrl ?? "/images/whoami.svg"}
                unoptimized
                alt="Artist"
                width={100}
                height={100}
                className="w-full object-center object-cover h-full grid items-center rounded-xl bg-gradient-to-br from-blush to-white"
              />
            }
            secondContent={
              <div
                className="w-full h-full grid place-content-center rounded-xl bg-gradient-to-tr from-blush to-white"
              >
                <BrushIcon className="animate-bounce"/>
                <p className="font-bold text-6xl first-letter:text-forest">
                  Hello!
                </p>
              </div>
            }
            gridSize={10}
            pixelColor="var(--color-blush)"
            once={false}
            animationStepDuration={0.3}
            className="custom-pixel-card"
          />
        </div>
      </motion.div>

      {/* Right: Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
      >
        <h2 className="text-5xl font-bold text-royal">Meet the Artist</h2>
        <p className="
          text-lg
          leading-relaxed
          text-charcoal/90
          first-letter:text-4xl
          first-letter:font-bold
          first-letter:text-wood
          first-letter:mr-1
          first-line:tracking-wide
          first-line:font-semibold
          [text-wrap:balance]
        ">
          {artist.desc  ?? description}
        </p>

      <CustomButton 
      rightIcon={<ArrowRight className="transition-transform group-hover:translate-x-2" />}
      name={"Read More"}
      className={"bg-royal hover:bg-wood rounded-full"}
      func={() => router.push("/artwork/about")} />

      </motion.div>

    </section>
    
    <AnimatePresence>
    { makeLoading && loading && <Spinner/> }
    </AnimatePresence>

   </div>
  );
}

export default Home;
