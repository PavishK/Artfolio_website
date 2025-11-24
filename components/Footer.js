"use client";

import React from "react";
import Icon from "@/app/favicon.ico";
import Image from "next/image";
import Link from "next/link";
import { footerLinks, socials } from "@/data/links";
import { useRouter } from "next/navigation";
import {
  ChevronsUp,
} from "lucide-react";

function Footer() {
  const nav = useRouter();

  const moveToDashboard = () => {
    nav.replace(`/artwork-admin/dashboard/artist`);
  };

  const scrollToTop = () => {
    const scrollContainers = [
      document.documentElement,
      document.body
    ];

    scrollContainers.forEach((el) =>
      el?.scrollTo({ top: 0, behavior: "smooth" })
    );
  };


  return (
    <>
      <footer className="w-full bg-charcoal text-blush border-t border-wood px-6 py-12 sm:py-16 relative">
        
        {/* Artistic curved border */}
        <div className="absolute top-0 left-0 w-full h-[40px] bg-charcoal rounded-b-[50%]"></div>

        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between gap-12 relative z-10">
          
          {/* Brand + Social Icons + Back to Top */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left max-w-xs">
            <div className="flex items-center gap-3 mb-3">
              <Image
                src={Icon}
                alt="logo"
                width={48}
                height={48}
                className="rounded-full shadow-lg"
              />
              <h1 className="text-4xl font-semibold tracking-wide text-blush">
                ArtByParthi
              </h1>
            </div>

            <p className="text-blush/80 text-sm leading-relaxed">
              A space where imagination meets paper — hand-drawn art crafted with love and detail.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-5">
              {socials.map((s, i) => (
                <Link
                  key={i}
                  href={s.link}
                  className="p-2 rounded-full bg-blush/10 hover:bg-forest hover:text-blush
                             transition-all duration-300 shadow-md hover:scale-110"
                >
                  {s.icon}
                </Link>
              ))}
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="mt-6 px-5 py-2 rounded-full bg-wood text-charcoal font-medium
                         shadow-lg hover:bg-forest hover:text-blush transition-all 
                         duration-300 hover:scale-105 flex items-center gap-2"
            >
              <ChevronsUp size={24} />
              Back to Top
            </button>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap gap-16 lg:gap-24">
            {footerLinks.map((section, i) => (
              <div key={i} className="flex flex-col gap-y-3 min-w-[120px]">
                <h2 className="text-xl font-semibold text-wood">{section.name}</h2>
                <ul className="space-y-2 text-sm">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <Link
                        href={link.link}
                        className="transition-all duration-300 hover:text-forest hover:pl-1 inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="bg-wood text-center py-3">
        <p className="text-sm text-blush/90 tracking-wide">
          © {new Date().getFullYear()}{" "}
          <span
            className="font-semibold cursor-pointer select-none hover:text-charcoal transition"
            onDoubleClick={moveToDashboard}
          >
            ArtByParthi
          </span>
          . All rights reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
