"use client";

import React, { useState } from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Trash2Icon } from 'lucide-react';
import Popup from './Popup';

function GalleryList({ images, title, adminMode = false, onClickDelete }) {

  const openNewTab = (url) => {
    if(adminMode) return;
    window.open(url,{ target:"_blank"});
  }

  const verifyDate = ( date ) => {
    const createdAt = new Date(date).toDateString();
    const dateNow = new Date().toDateString();
    return createdAt == dateNow;
  }
  
  return (

   <div className="min-h-screen bg-gradient-to-br from-blush to-white p-6 md:p-10">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl first-letter:text-wood font-bold text-royal text-center mb-12 tracking-wide mt-16"
      >
        {title}
      </motion.h1>

      {/* Masonry Grid */}

      { images.length > 0 
      ? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((val, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="relative group overflow-hidden rounded-xl shadow-xl border-2 border-royal bg-white"
          >
            <Image
              src={val.imageUrl}
              width={100}
              height={100}
              alt="gallery img"
              unoptimized
              loading="eager"
              onClick={()=>openNewTab(val.imageUrl)}
              className="w-full h-96 object-cover object-center transition-all duration-500 group-hover:scale-105"
            />

            {/* New Indicate */}
            { verifyDate(val.createdAt) && 
            <motion.div
              className="absolute top-2 left-2 bg-forest px-2 py-1 rounded-xl font-bold z-10 animate-pulse text-sm transition-opacity">
              New
            </motion.div> }

            { adminMode 
            && <Trash2Icon onClick={()=>onClickDelete(val.id)} size={24} className='absolute bg-red-500 top-2 right-2 size-8 p-1 rounded-lg text-white hover:scale-105 transition-transform cursor-pointer'/>}

            {/* Hover Caption */}
           { !adminMode && <div
              className="absolute top-2 right-2 bg-charcoal px-2 py-1 text-xl rounded-xl font-bold transition-all"
            >
            #{i + 1}
            </div> }

          </motion.div>
        ))}
      </div>
      :<EmptyGallery/>
      }

    </div>
  )
}

export default GalleryList


function EmptyGallery() {
  return (
    <div className="flex flex-col items-center justify-center p-10 relative">

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex justify-center relative z-10"
      >
        <Image
          src="/images/empty-art.svg"
          alt="Empty Gallery"
          width={340}
          height={340}
          className="drop-shadow-xl"
        />
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-charcoal mt-6 text-center z-10"
      >
        No Artwork Available
      </motion.h1>

      {/* Message with thoughtful quote */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="text-center max-w-md mt-4 z-10"
      >
        <span className="block italic text-royal font-bold text-xl md:text-2xl leading-relaxed">
          “Great things often start with a blank canvas.”
        </span>
      </motion.p>

    </div>
  );
}
