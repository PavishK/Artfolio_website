"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Icon from "@/app/favicon.ico";
import { motion, AnimatePresence } from "framer-motion";
import { UserIcon, LockIcon, LogInIcon } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import Spinner from "@/components/Spinner";

export default function Login() {

  const params = useSearchParams();
  const router = useRouter();
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [ makeLoading, setMakeLoading ] = useState(false);

  const handleInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };


  // ✅ Login verification
  const verifyLoginData = async () => {
    try {
      setMakeLoading(true);
      toast.loading("Logging In...", { id: "LoginId" });

      const res = await axios.post("/api/auth", loginData, {
        withCredentials: true,
      });

      toast.success(res.data.message, { id: "LoginId" });
      router.replace(`/artwork-admin/dashboard/featured_artworks`);
    } catch (error) {
      // ✅ Fixed: handle missing response gracefully
      const errMsg =
        error?.response?.data?.message || "Login failed. Try again.";
      toast.error(errMsg, { id: "LoginId" });
    } finally {
      setMakeLoading(false);
    }
  };

  const onClickLogin = () => {
    if (!loginData.username || !loginData.password) {
      toast.error("Please fill out the fields!");
      return;
    }
    verifyLoginData();
  };

  useEffect(()=>{
    if(params.get('session')) {
      toast.error(params.get('session'));
    }
  },[]);
  return (
    <>

    <div className="h-screen w-screen bg-gradient-to-br from-blush to-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-white/80 backdrop-blur-lg rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center shadow-2xl border border-royal/20 space-y-6"
      >
        {/* Logo + Title */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center justify-center gap-y-2"
        >
          <Image
            src={Icon}
            width={60}
            height={60}
            alt="Logo"
            onClick={() => router.push("/artwork/home")}
          />
          <h1 className="uppercase font-bold text-2xl text-royal tracking-wide drop-shadow-sm">
            Admin Login
          </h1>
        </motion.div>

        {/* Input Fields */}
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center justify-center gap-y-5 w-full"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Username */}
          <div className="group relative w-full">
            <div className="flex items-center rounded-2xl px-4 py-3 gap-x-3 transition-all duration-300 focus-within:border-forest">
              <UserIcon
                className="text-royal group-focus-within:text-forest transition-colors"
                size={22}
              />
              <input
                type="text"
                name="username"
                value={loginData.username}
                onChange={handleInputChange}
                placeholder="Username"
                autoComplete="username"
                required
                disabled={makeLoading}
                className="w-full bg-transparent text-charcoal font-medium placeholder-wood focus:outline-none text-lg"
              />
            </div>
            <span className="absolute left-5 bottom-[-8px] w-0 h-[2px] bg-forest transition-all duration-300 group-focus-within:w-[calc(100%-40px)]"></span>
          </div>

          {/* Password */}
          <div className="group relative w-full">
            <div className="flex items-center rounded-2xl px-4 py-3 gap-x-3 transition-all duration-300 focus-within:border-forest">
              <LockIcon
                className="text-royal group-focus-within:text-forest transition-colors"
                size={22}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={loginData.password}
                autoComplete="current-password"
                required
                onChange={handleInputChange}
                disabled={makeLoading}
                className="w-full bg-transparent text-charcoal font-medium placeholder-wood focus:outline-none text-lg"
              />
            </div>
            <span className="absolute left-5 bottom-[-8px] w-0 h-[2px] bg-forest transition-all duration-300 group-focus-within:w-[calc(100%-40px)]"></span>
          </div>
        </motion.form>

        {/* Login Button */}
        <AnimatePresence>
          {!makeLoading ? (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 1, y: -20 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 0.3, type: "spring" }}
              onClick={onClickLogin}
              disabled={makeLoading}
              className="w-44 bg-forest hover:bg-forest/90 h-12 rounded-2xl font-semibold text-white flex items-center justify-center gap-2 shadow-lg mt-2 tracking-wide"
            >
              <LogInIcon size={22} />
              LOGIN
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
              className="w-8 border-4 border-forest animate-spin h-8 border-r-transparent rounded-full font-semibold text-white flex items-center justify-center gap-2 shadow-lg mt-2 tracking-wide"
            ></motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
    <AnimatePresence>
      { makeLoading && <Spinner/>}
    </AnimatePresence>
    </>
  );
}
