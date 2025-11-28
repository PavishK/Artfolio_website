"use client";

import React from "react";
import GalleryList from "@/components/GalleryList";

  const images = [
  {
    "src": "/images/404.svg",
    "createdAt": "2025-01-10 10:15:00.000"
  },
  {
    "src": "/images/home-img.svg",
    "createdAt": "2025-01-12 14:20:00.000"
  },
  {
    "src": "/images/404.svg",
    "createdAt": "2025-01-14 09:45:00.000"
  },
  {
    "src": "/images/404.svg",
    "createdAt": "2025-01-18 16:30:00.000"
  },
  {
    "src": "/images/404.svg",
    "createdAt": "2025-01-20 11:10:00.000"
  },
  {
    "src": "/images/404.svg",
    "createdAt": "2025-11-25 18:00:00.000"
  },
  {
    "src": "/images/image-holder.svg",
    "createdAt": "2025-01-25 08:55:00.000"
  },
  {
    "src": "/images/404.svg",
    "createdAt": "2025-01-28 12:40:00.000"
  },
  {
    "src": "/images/404.svg",
    "createdAt": "2025-02-01 15:05:00.000"
  },
  {
    "src": "/images/whoami.svg",
    "createdAt": "2025-11-25 18:00:00.000"
  }
]

export default function Gallery() {

  return (
   <GalleryList images={images} title={"Art Gallery"}/>
  );
}