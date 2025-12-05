"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PixelTransition from "@/components/PixelTransition";
import Image from "next/image";
import toast from "react-hot-toast";
import { api, authApi } from "@/services/api";
import Spinner from "@/components/Spinner";
import UploadImage from "@/components/UploadImage";
import CustomButton from "@/components/CustomButton";
import { BrushIcon, Edit2Icon, SaveIcon } from 'lucide-react';
import ChangePasswordPopup from "@/components/ChangePasswordPopup";

export default function Artist() {

  const [ desc, setDesc ] = useState("");
  const [ image, setImage ]= useState("");
  const [ isNewImage, setIsNewImage ] = useState(false);
  const [ showPopup, setShowPopup ] = useState(false);
  const [makeLoading, setMakeLoading] = useState(false);

  // Fetch profile data
  const fetchProfileData = async () => {
    try {
      setMakeLoading(true);
      const res = await api.get("/api/profile");
      const { imageUrl, desc } = res.data.data;
      setDesc(desc);
      setImage( imageUrl ?? "");
    } catch (error) {
      toast.error("Error fetching profile data!");
    } finally {
      setMakeLoading(false);
    }
  };

  // Update profile
  const updateProfile = async (data) => {
    try {
      setMakeLoading(true);
      toast.loading("Updating profile...", { id: "ProfileId" });

      const res = await authApi.put("/api/profile", data, {
        withCredentials: true,
      });

      toast.success(res.data.message, { id: "ProfileId" });
    } catch (error) {
      toast.error("Unable to update profile!", { id: "ProfileId" });
    } finally {
      setMakeLoading(false);
    }
  };



  // Save handler
  const handleSave = () => {

    if(!desc) {
      toast.error("Please provide description!");
      return;
    }

    if(!image) {
      toast.error("Please upload an image!");
      return;
    }

    updateProfile({
      imageUrl:image,
      desc:desc,
      newImage:isNewImage
    });

  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-blush to-white min-h-screen flex items-center justify-center px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-5xl bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-10 border border-blush/50"
      >
        {/* ===== Left Form Section ===== */}
        <div className="flex-1 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-royal mb-6 text-center md:text-left">
           Manage Profile 
          </h1>

          {/* desc */}
          <div className="mb-5 relative">
            <label className="block text-wood font-semibold mb-2">
              Description
            </label>
            <textarea
              name="desc"
              value={desc}
              onChange={ (e) => setDesc(e.target.value)}
              placeholder="Write something about yourself..."
              rows="4"
              maxLength={350}
              className="w-full p-3 rounded-xl border border-royal/40 bg-white focus:ring-2 focus:ring-royal focus:outline-none text-charcoal font-medium placeholder:text-charcoal/50 resize-none"
            ></textarea>
            <div className="text-right text-sm text-charcoal/70 mt-1">
              {desc.length} / 350
            </div>
          </div>

          {/* Image URL */}
          <UploadImage choosedImage={(e) => setImage(e)} newImage={(val)=>setIsNewImage(val)}/>

          {/* Buttons */}
          <div className="flex gap-5 w-full items-center justify-end">
            <CustomButton
            leftIcon={<SaveIcon size={22} className="transition-transform group-hover:translate-x-0.5"/>}
              name={"Save"}
              className={"w-40 py-3 rounded-full bg-royal hover:bg-wood font-semibold"}
              func={handleSave}
              disable={makeLoading}
            />
          </div>
        </div>

        {/* ===== Right Preview Section ===== */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 160 }}
          className="flex-1 flex flex-col items-center justify-center w-full h-full"
        >
          {!image ? (
            <div className="flex items-center justify-center flex-col gap-y-4">
              <Image
                src={"/images/image-holder.svg"}
                alt="Placeholder"
                width={200}
                height={200}
                className="h-full w-full"
                loading="eager"
                unoptimized
              />
              <span className="tracking-wide text-wood">
                No image choosed!
              </span>
            </div>
          ) : (
            <div className="flex items-center justify-center flex-col gap-y-4">
              <PixelTransition
                firstContent={
                  <Image
                    src={image}
                    unoptimized
                    alt="Artist"
                    width={100}
                    height={100}
                    className="w-full object-center object-cover h-full grid items-center rounded-xl bg-gradient-to-br from-blush to-white"
                  />
                }
                secondContent={
              <div
                className="w-full h-full grid place-content-center rounded-xl bg-gradient-to-tr from-blush to-white"
              >
                <BrushIcon className="animate-bounce"/>
                <p className="font-bold text-6xl first-letter:text-forest">
                  Hello!
                </p>
              </div>
                }
              gridSize={10}
              pixelColor="var(--color-blush)"
              once={false}
              animationStepDuration={0.3}
              className="custom-pixel-card"
              />
              <span className="tracking-wide text-wood">
                Tap or Hover or Click the above image.
              </span>
              
              <CustomButton
              leftIcon={<Edit2Icon size={22} className="transition-transform group-hover:-translate-x-1"/>}
              name={"Change Password"}
              className={"py-3 w-fit rounded-full bg-wood hover:bg-forest font-semibold"}
              func={() => setShowPopup(true)}
              disable={makeLoading}
              />

            </div>
          )}
        </motion.div>
      </motion.div>
      
      <ChangePasswordPopup open={showPopup} onClose={() => setShowPopup(false)}/>
      <AnimatePresence>
          { makeLoading && <Spinner /> }
      </AnimatePresence>
    </div>
  );
}
