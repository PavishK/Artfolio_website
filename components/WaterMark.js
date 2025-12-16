"use client";

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';

function WaterMark() {
  return (
    <Link href={"https://pavishk.dev/"} target='_blank'>
    <motion.div
    initial={{ width:0, height:0, opacity:0 }}
    whileInView={{ width:20, height:20, opacity:1 }}
    transition={{ duration:1, type:"tween" }}
    className="absolute bottom-2 left-1/2 right-1/2 -translate-x-1/2"
    >
    <div className="w-full h-full relative flex items-center justify-center">
        <div className="absolute w-full h-3 border-t-2 border-b-2"/>
        <div className="absolute w-3 h-full border-l-2 border-r-2"/>
    </div>
    </motion.div>
    </Link>
  )
}

export default WaterMark