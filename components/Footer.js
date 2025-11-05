"use client";
import React from "react";
import { motion } from "framer-motion";
import Icon from "@/app/favicon.ico";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/data/links";
import { useRouter } from "next/navigation";

const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Footer() {

  const nav = useRouter();

  return (
    <>
      {/* ====== Main Footer ====== */}
      <motion.footer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="w-full bg-charcoal text-blush border-t border-wood px-6 py-10 sm:py-14 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-y-8">
          
          {/* ====== Brand Section ====== */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-start sm:items-end text-end"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-2"
            >
              <Image
                src={Icon}
                alt="logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <h1 className="text-3xl sm:text-5xl font-semibold tracking-wide text-blush">
                ArtByParthi
              </h1>
            </motion.div>
          </motion.div>

          {/* ====== Footer Links ====== */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-12 sm:gap-16"
          >
            {footerLinks.map((v, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex flex-col gap-y-3"
              >
                <h2 className="text-lg font-semibold text-wood">{v.name}</h2>
                <ul className="space-y-2 text-sm">
                  {v.links.map((link, j) => (
                    <li
                      key={j}
                      className="transition-all duration-300 hover:text-forest hover:translate-x-1"
                    >
                      <Link href={link.link}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.footer>

      {/* ====== Bottom Bar ====== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-wood text-center py-3"
      >
        <p className="text-sm text-blush/90 tracking-wide">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold cursor-pointer select-none" onDoubleClick={()=>nav.push('/artwork-admin/login')}>ArtByParthi</span>. All rights reserved.
        </p>
      </motion.div>
    </>
  );
}

export default Footer;
