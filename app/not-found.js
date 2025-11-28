"use client";

import React from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "next/navigation";

export default function Error404() {
  const route = useRouter();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-blush">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        className="max-w-md w-full"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Image
            src="/images/404.svg"
            alt="Not Found"
            width={400}
            height={400}
            loading="eager"
            className="mx-auto mb-6"
          />
        </motion.div>

        {/* Button Animation */}
        <div className="grid place-content-center" >
          <CustomButton
            leftIcon={<ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1"/>}
            name={"Go Back"}
            className={"bg-wood hover:bg-forest rounded-full"}
            func={()=>route.replace("/artwork/home")}
          />
        </div>
      </motion.div>
    </div>
  );
}