"use client";
import { convertToBase64 } from "@/services/convertToBase64";
import { motion, AnimatePresence } from "framer-motion";
import { LogOut, XIcon, Loader2, ImagePlusIcon, Trash2Icon } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

export default function AddImagePopup({ open, onClose, loading, func }) {

    const fileRef = useRef();
    const [ file, setFile ] = useState(null);

    const onClickUpload = () => {
        fileRef.current.click();
    }

    const convertURL = async(e) => {

        const maxSize = 2 * 1024 * 1024;
        const path = e.target.files[0];
        
        if(!path) return;
        
        if(path.size > maxSize) {
            toast.error("Image size exceeds 2MB");
            return;
        }

        const base64 = await convertToBase64(path);
        setFile(base64);
    }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="h-screen w-screen fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[1000]"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="bg-blush rounded-2xl shadow-xl w-[90%] max-w-sm p-6 relative"
          >

          <input type="file" accept="image/*" ref={fileRef} disabled={loading} className="hidden" onChange={convertURL}/>

          <div onClick={onClickUpload} className="relative cursor-pointer w-full h-40 border-2 border-dashed border-forest my-6 rounded-xl flex flex-col items-center justify-center">

          { !file 
          ? <div className="flex items-center justify-center flex-col">
                <ImagePlusIcon size={35} className="text-forest"/>
                <p className="text-forest text-center">Click here to upload <br/>Max. Image Size: 2MB</p>
            </div>
          
          : <div>
                <Image src={file} alt="Uploaded Image" width={150} height={150} className="w-40 h-40 object-contain"/>
                <Trash2Icon size={30} onClick={()=>setFile(null)} className="absolute top-2 right-2 bg-red-600 p-1 rounded-lg"/>
            </div>

          }

          </div>

            {/* Close button */}
            <button
              onClick={onClose}
              disabled={loading}
              className="absolute top-3 right-3 text-charcoal hover:text-royal"
            >
              <XIcon className="w-5 h-5" />
            </button>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={onClose}
                disabled={loading}
                className="flex-1 bg-forest text-blush py-2 rounded-xl font-medium hover:bg-forest/80 transition"
              >
                Cancel
              </button>

              <button
                onClick={()=> {
                    func(file);
                    setFile(null);
                }}
                disabled={loading || !file}
                className={`flex-1 py-2.5 flex items-center justify-center rounded-xl font-semibold transition 
                ${
                  file
                    ? "bg-wood text-blush hover:bg-wood/80"
                    : "bg-wood/40 text-blush/50 cursor-not-allowed"
                }`}>

              { !loading 
              ? "Upload"
              : <Loader2 size={24} className="self-center animate-spin"/>
              }
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
      
    </AnimatePresence>
  );
}
