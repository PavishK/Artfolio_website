"use client";

import React from "react";
import { AnimatePresence } from 'framer-motion';
import GalleryList from "@/components/GalleryList";
import useFetchGallery from "@/hooks/useFetchGallery";
import Spinner from "@/components/Spinner";

export default function Gallery() {

  const { images, loading, error } = useFetchGallery();

  return (
    <>
      <GalleryList images={images} title={"Art Gallery"}/>
      <AnimatePresence>
        { loading && <Spinner/> }
      </AnimatePresence>
    </>
  );
}