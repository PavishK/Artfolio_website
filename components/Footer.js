"use client";

import React from "react";
import Icon from "@/app/favicon.ico";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { footerLinks } from "@/data/links";
import { useRouter } from "next/navigation";
import { ChevronsUp } from "lucide-react";
import CustomButton from "./CustomButton";
import WaterMark from "./WaterMark";
import { title } from "@/data/names";

function Footer() {
  const nav = useRouter();

  const moveToDashboard = () => {
    nav.replace(`/artwork-admin/dashboard/artist`);
  };

  const scrollToTop = () => {
    [document.documentElement, document.body].forEach((el) =>
      el?.scrollTo({ top: 0, behavior: "smooth" })
    );
  };

  return (
    <>
      <footer className="w-full bg-charcoal text-blush border-t border-wood px-6 py-14 sm:py-20 relative overflow-hidden">

        <Image src={"/images/design-footer.svg"} alt="Design" width={60} height={60} className="absolute top-2 right-0 -scale-x-100 -z-0"/>
        <Image src={"/images/design-footer.svg"} alt="Design" width={60} height={60} className="absolute bottom-2 left-0 scale-x-100 sm:block hidden"/>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-14 relative z-10">

          {/* Brand Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-sm">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={Icon}
                alt="logo"
                width={52}
                height={52}
                className="rounded-full shadow-xl"
              />
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-wide text-blush">
                {title}
              </h1>
            </div>

            <p className="text-blush/80 text-sm leading-relaxed mb-5">
              A space where imagination meets paper — hand-drawn art crafted
              with love, emotion, and thoughtful detail.
            </p>

            <CustomButton
              leftIcon={
                <ChevronsUp className="transition-transform duration-300 group-hover:-translate-y-1" />
              }
              name="Back to Top"
              className="bg-wood hover:bg-forest rounded-full px-6"
              func={scrollToTop}
            />
          </div>

          {/* Links Section */}
          <div className="w-full h-full flex flex-row items-center justify-between lg:justify-end gap-10">
            {footerLinks.map((section, i) => (
              <div key={i} className="flex flex-col gap-y-4 sm:min-w-[140px]">
                <h2 className="text-lg font-semibold text-wood tracking-wide">
                  {section.name}
                </h2>

                <ul className="space-y-2 text-sm">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <Link
                        href={link.link}
                        className="relative inline-block transition-all duration-300 hover:text-forest"
                      >
                        <span className="relative z-10">{link.name}</span>
                        <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-forest transition-all duration-300 group-hover:w-full" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <WaterMark/>
      </footer>
      {/* Bottom Bar */}
      <div 
      className="bg-wood text-center py-3">
        <motion.p
        initial={{ opacity:0, y:16 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:0.6 }}
        className="text-sm text-blush/90 tracking-wide">
          © {new Date().getFullYear()}{" "}
          <span
            className="font-semibold cursor-pointer select-none hover:text-charcoal transition"
            onDoubleClick={moveToDashboard}
          >
            {title}
          </span>
          . All rights reserved.
        </motion.p>
      </div>
    </>
  );
}

export default Footer;
