"use client";
import React from "react";
import { motion } from "framer-motion";

function Spinner() {
  return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-blush overflow-hidden"
        >
          {/* Background gentle pulse */}
          <motion.div
            animate={{ scale: [0.9, 1.05, 0.9], opacity: [0.4, 0.7, 0.4] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute w-64 h-64 rounded-full bg-royal/20 blur-3xl"
          ></motion.div>

          {/* Paint drops (representing art motion) */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              custom={i}
              initial={{ rotate: i * 60 }}
              animate={{ rotate: [i * 60, i * 60 + 360] }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              className="absolute"
            >
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.8 + i * 0.2,
                  ease: "easeInOut",
                }}
                className={`w-5 h-5 rounded-full shadow-md ${
                  i % 3 === 0
                    ? "bg-forest"
                    : i % 3 === 1
                    ? "bg-royal"
                    : "bg-wood"
                }`}
                style={{
                  transform: `translateY(-50px)`,
                }}
              ></motion.div>
            </motion.div>
          ))}

          {/* Center glowing pulse */}
          <motion.div
            animate={{
              scale: [0.9, 1.2, 0.9],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-10 h-10 bg-forest rounded-full shadow-2xl"
          ></motion.div>

          {/* Subtle rotating ring outline */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            className="absolute w-28 h-28 border-2 border-royal/40 rounded-full"
          ></motion.div>
        </motion.div>
  );
}

export default Spinner;
