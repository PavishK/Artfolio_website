"use client";

import React from 'react'
import { motion } from 'framer-motion';

function CustomButton({ leftIcon=null, rightIcon=null,  name, func, className, disabled=false}) {
  return (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
              className={`text-blush ${className}
                        px-8 py-3 font-medium shadow-lg 
                        flex items-center justify-center gap-2 group mx-auto lg:mx-0`}
              onClick={func}
              disabled={disabled}
            >
            {leftIcon}
            {name}
            {rightIcon}
            </motion.button>
  )
}

export default CustomButton