"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { LogOutIcon } from "lucide-react"; // ✅ Icons
import { authApi } from "@/services/api";
import Icon from "@/app/favicon.ico";
import AnimatedMenuIcon from "./AnimatedMenuIcon";
import toast from "react-hot-toast";
import Popup from "./Popup";
import { adminSites } from '@/data/menus'
import { title } from "@/data/names";

function AdminNavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [ showPopup, setShowPopup ] = useState(false);
  const [ makeLoading, setMakeLoading] = useState(false);
  const menuRef = useRef();

  const menuHandler = () => setToggleMenu((prev) => !prev);

  // Logout handler
  const handleLogout = async () => {
    try {
      toast.loading("Logging out...", { id: "LogOut" });
      setMakeLoading(true);
      const res = await authApi.post(
        "/api/auth/session",
        {});

      toast.success(res.data.message, { id: "LogOut" });
      setShowPopup(false);
      router.replace("/artwork-admin/login");
    } catch (error) {
      console.log(error);
      toast.error("Unable to logout!", { id: "LogOut" });
    } finally {
        setMakeLoading(false);
    }
  };

  useEffect(() => {
    const onCloseMenu = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setToggleMenu(false);
      }
    };
    const onScroll = () => setToggleMenu(false);

    window.addEventListener("mousedown", onCloseMenu);
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("mousedown", onCloseMenu);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>

    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-[999]
                 bg-royal text-blush shadow-lg rounded-2xl
                 px-4 py-3 flex items-center justify-between
                 w-[90%] max-w-2xl mx-auto backdrop-blur-md border border-blush/40"
    >
      {/* Logo */}
      <div className="flex items-center gap-2 text-blush font-semibold text-lg" onClick={()=>router.replace('/')}>
        <Image
          src={Icon}
          alt="logo"
          width={30}
          height={30}
          className="rounded-full"
        />
        <span className="tracking-wide">{title}</span>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden sm:flex items-center gap-x-1 sm:gap-x-4 font-medium">
        {adminSites.map((v, i) => {
          const isActive = pathname === v.link;
          return (
            <motion.li
              key={i}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Link
                href={v.link}
                className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl transition-all duration-300
                  ${
                    isActive
                      ? "bg-forest text-blush shadow-md"
                      : "hover:bg-blush hover:text-charcoal"
                  }`}
                title={v.name}
              >
                {v.icon}
                <span className="inline">{v.name}</span>
              </Link>
            </motion.li>
          );
        })}

        {/* Logout Button */}
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <button
            onClick={() => setShowPopup(true)}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl 
                       hover:bg-blush hover:text-charcoal transition-all duration-300"
          >
            <LogOutIcon size={22} />
            <span>Logout</span>
          </button>
        </motion.li>
      </ul>

      {/* Mobile Menu */}
      <div ref={menuRef} className="block sm:hidden relative">
        <AnimatedMenuIcon
          className="block sm:hidden"
          toggleMenu={toggleMenu}
          handler={menuHandler}
        />
        <AnimatePresence>
          {toggleMenu && (
            <Menu
              pathname={pathname}
              navData={adminSites}
              handleLogout={() => setShowPopup(true)}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.nav>

    <Popup 
    open={ showPopup } 
    onClose={ () =>setShowPopup(false) } 
    func={handleLogout} 
    loading={makeLoading}
    icon={<LogOutIcon className="w-8 h-8 text-blush" />}
    title={"Log Out?"}
    desc={"Are you sure you want to log out of your account?"}
    btnName={"Log Out"}
    />

    </>
  );
}

export default AdminNavBar;

function Menu({ pathname, navData, handleLogout }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="absolute top-14 right-2 w-40 h-fit block sm:hidden p-2 
                 bg-royal rounded-xl shadow-lg border border-blush/40"
    >
      <ul className="w-full flex flex-col items-center justify-center gap-y-3 font-medium">
        {navData.map((v, i) => {
          const isActive = pathname === v.link;
          return (
            <motion.li
              key={i}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-full"
            >
              <Link
                href={v.link}
                className={`w-full flex items-center justify-start gap-2 p-2 rounded-xl transition-all duration-300
                  ${
                    isActive
                      ? "bg-forest text-blush shadow-md"
                      : "hover:bg-blush hover:text-charcoal"
                  }`}
                title={v.name}
              >
                {v.icon}
                <span className="inline">{v.name}</span>
              </Link>
            </motion.li>
          );
        })}

        {/* Mobile Logout */}
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="w-full"
        >
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-start gap-2 p-2 rounded-xl 
                       hover:bg-blush hover:text-charcoal transition-all duration-300"
          >
            <LogOutIcon size={22} />
            <span>Logout</span>
          </button>
        </motion.li>
      </ul>
    </motion.div>
  );
}
