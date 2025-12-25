"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Contact2Icon, HandIcon } from "lucide-react";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col bg-gradient-to-br from-blush to-white">

      {/* SECTION 1 — HERO */}
      <section className="relative w-full flex flex-col items-center justify-center px-6 sm:px-12 lg:px-20 py-10 mt-10 sm:mt-10 sm:py-12 overflow-hidden">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-20 w-full max-w-7xl">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="flex-1 space-y-4 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-normal text-wood">
              ABOUT
              <br />
              <span className="font-bold text-royal">THE ARTIST</span>
            </h1>

            <p className="text-charcoal/80 text-lg max-w-lg mx-auto lg:mx-0">
              I create hand-drawn portraits that transform memories into meaningful
              artwork. Every piece is crafted with care, focusing on emotion,
              expression, and the unique story behind each photo.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 160, damping: 18 }}
            className="flex-1 flex justify-center"
          >
            <Image
              src="/images/about-me.svg"
              width={300}
              height={300}
              alt="About artist illustration"
              className="w-[70%] sm:w-[60%] lg:w-[80%] h-auto drop-shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — STORY */}
      <section className="w-full max-w-6xl mx-auto px-6 sm:px-10 py-10">
        <motion.h2
          className="text-4xl font-semibold text-forest text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          My Story
        </motion.h2>

        {/* Decorative line */}
        <motion.div
          className="h-1 w-32 mx-auto bg-gradient-to-r from-forest via-wood to-royal rounded-full mb-4"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        />

        <div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-8 lg:gap-20">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 text-center lg:text-left"
          >
            <p className="text-charcoal/90 leading-relaxed text-lg max-w-xl mx-auto lg:mx-0 
            first-letter:text-4xl
            first-letter:font-bold
            first-letter:text-royal
            first-letter:mr-1
            first-line:tracking-wide
            first-line:font-semibold">
              Art has always been my quiet escape — a way to express emotions
              through soft lines, gentle colors, and thoughtful details.
              <br />
              <br />
              Over time, this passion grew into a journey of creating peaceful,
              heartfelt artworks that celebrate small moments and lasting memories.
            </p>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center"
          >
            <Image
              src="/images/path.svg"
              alt="Story illustration"
              width={360}
              height={360}
              className="w-[70%] sm:w-[60%] lg:w-[80%] h-auto drop-shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — CONTACT */}
      <motion.section 
      initial={{ opacity:0 }}
      whileInView={{ opacity:1 }}
      viewport={{ once:true }}
      animate={{ duration:0.8 }}
      className="w-full px-6 py-12 flex flex-col items-center text-center">
        <h2 className="flex items-center justify-center gap-x-1 text-2xl md:text-3xl font-semibold text-royal mb-3">
          Say Hello 
          <motion.div
          initial={{ rotate:-40 }}
          whileInView={{ rotate:40 }}
          transition={{ duration:0.3 }}
          >
          <HandIcon/>
          </motion.div>
        </h2>

        <p className="text-charcoal/80 max-w-lg mb-6 text-base sm:text-lg">
          Have an idea or want a custom artwork made just for you? <br/>
          I’d love to hear from you.
        </p>

        <CustomButton
          rightIcon={
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          }
          name="Contact Me"
          className="bg-royal hover:bg-wood rounded-full"
          func={() => router.push("/artwork/contact")}
        />
      </motion.section>
    </div>
  );
}