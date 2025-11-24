"use client";

import { convertToBase64 } from "@/services/convertToBase64";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function UploadImage({ choosedImage }) {

    const [ error, setError ] = useState(false);

    const onSelectImage = async(e) => {

        const maxSize = 2 * 1024 * 1024;
        const file = e.target.files[0];

        if(!file) {
            setError(true);
            toast.error("Please select an image!");
            return;
        }
        
        if( file.size > maxSize ) {
            toast.error("Image size exceeds 2MB");
            setError(true);
            return;
        }

        setError(false);
        const base64 = await convertToBase64(file);
        choosedImage(base64);
    }

  return (
    <div className="max-w-sm mb-4">
      <form>
        <label className="block text-wood font-semibold mb-2">
          Profile Image
        </label>

        <input
          type="file"
          accept="image/*"
          name="image"
          onChange={onSelectImage}
          className={`
            ${ error && 'bg-red-400 file:bg-red-500'}
            rounded-lg
            file:cursor-pointer
            block w-full text-sm text-charcoal
            file:me-4 file:py-2 file:px-4
            file:rounded-lg file:border-0
            file:text-sm file:font-semibold
            file:bg-forest file:text-white
            hover:file:bg-wood
            file:disabled:opacity-50 file:disabled:pointer-events-none
          `}
        />
      </form>
    </div>
  );
}
