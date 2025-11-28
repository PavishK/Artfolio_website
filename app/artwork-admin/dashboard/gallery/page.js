"use client";

import React, { useEffect, useState } from 'react';
import GalleryList from '@/components/GalleryList';
import Popup from '@/components/Popup';
import { PlusIcon, Trash2Icon } from 'lucide-react';


const data = [
  {
    "src": "/images/404.svg",
    "createdAt": "2025-01-10 10:15:00.000"
  },
  {
    "src": "/images/home-img.svg",
    "createdAt": "2025-01-12 14:20:00.000"
  },
  {
    "src": "/images/404.svg",
    "createdAt": "2025-01-14 09:45:00.000"
  },
  {
    "src": "/images/404.svg",
    "createdAt": "2025-01-18 16:30:00.000"
  },
  {
    "src": "/images/404.svg",
    "createdAt": "2025-01-20 11:10:00.000"
  },
  {
    "src": "/images/404.svg",
    "createdAt": "2025-11-25 18:00:00.000"
  },
  {
    "src": "/images/image-holder.svg",
    "createdAt": "2025-01-25 08:55:00.000"
  },
  {
    "src": "/images/404.svg",
    "createdAt": "2025-01-28 12:40:00.000"
  },
  {
    "src": "/images/404.svg",
    "createdAt": "2025-02-01 15:05:00.000"
  },
  {
    "src": "/images/whoami.svg",
    "createdAt": "2025-11-25 18:00:00.000"
  }
]

function Gallery() {

  const [ images, setImages ] = useState([]);
  const [ deleteId, setDeleteId ] = useState(null);
  const [ showPopup, setShowPopup ] = useState(false);
  const [ makeLoading, setMakeLoading ] = useState(false);

  const showDeletePopup = (id) => {
    setDeleteId(id);
    setShowPopup(true);
  }

  const handleDelete = () => {

    if(deleteId!=null)
      setImages(
        images.filter((v,i) => i!==deleteId)
      );
    
    setShowPopup(false);
    setDeleteId(null);
  }

  useEffect(()=>{
    setImages(data);
  },[])

  return (
    <div className='relative h-full w-full'>
      <GalleryList images={images} title={"Manage Gallery"} adminMode={true} onClickDelete={(id)=>showDeletePopup(id)}/>
      <Popup
        open={showPopup}
        onClose={() => setShowPopup(false)}
        func={handleDelete}
        loading={makeLoading}
        icon={<Trash2Icon className="w-8 h-8 text-blush" />}
        title={"Delete Image?"}
        desc={"Are you sure you want to delete this image?"}
        btnName={"Delete"}
      />
      <div className='group fixed cursor-pointer right-6 bottom-6 bg-forest size-13 grid place-content-center rounded-2xl transition-all hover:scale-110 hover:bg-wood shadow-2xl'>
      <PlusIcon size={45} className='transition-all group-hover:rotate-180 group-hover:p-1'/>
      </div>
    </div>
  )
}

export default Gallery