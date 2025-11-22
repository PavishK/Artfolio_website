"use client";
import React from "react";
import Icon from "@/app/favicon.ico";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/data/links";
import { useRouter } from "next/navigation";

function Footer() {
  const nav = useRouter();

  const moveToDashboard = () => {
    nav.replace(`/artwork-admin/dashboard/artist`);
  };

  return (
    <>
      {/* ====== Main Footer ====== */}
      <footer className="w-full bg-charcoal text-blush border-t border-wood px-6 py-10 sm:py-14 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-y-8">
          
          {/* ====== Brand Section ====== */}
          <div className="flex flex-col items-center justify-center w-full lg:w-fit sm:items-end text-end">
            <div className="flex items-center gap-2 mb-2">
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
            </div>
          </div>

          {/* ====== Footer Links ====== */}
          <div className="flex flex-wrap gap-12 sm:gap-16 justify-between lg:w-fit w-full">
            {footerLinks.map((v, i) => (
              <div key={i} className="flex flex-col gap-y-3">
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
              </div>
            ))}
          </div>
        </div>
      </footer>

      {/* ====== Bottom Bar ====== */}
      <div className="bg-wood text-center py-3">
        <p className="text-sm text-blush/90 tracking-wide">
          © {new Date().getFullYear()}{" "}
          <span
            className="font-semibold cursor-pointer select-none"
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