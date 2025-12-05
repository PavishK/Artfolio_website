"use client";

import React, { useEffect, useState } from 'react';
import GalleryList from '@/components/GalleryList';
import Popup from '@/components/Popup';
import { PlusIcon, Trash2Icon } from 'lucide-react';
import useFetchGallery from '@/hooks/useFetchGallery';
import { authApi } from '@/services/api';
import toast from 'react-hot-toast';

function Gallery() {

  const { images:data, loading, error } = useFetchGallery();
  const [ images, setImages ] = useState([]);
  const [ deleteId, setDeleteId ] = useState(null);
  const [ showPopup, setShowPopup ] = useState(false);
  const [ makeLoading, setMakeLoading ] = useState(false);

  const showDeletePopup = (id) => {
    setDeleteId(id);
    setShowPopup(true);
  }

  const handleDelete = async() => {
    if(deleteId!=null) {
      try {
        setMakeLoading(true);
        const res = await authApi.delete(`/api/gallery/${deleteId}`);
        setImages(
          images.filter((v) => v.id!==deleteId)
        );
        toast.success(res.data.message);
      } catch (error) {
        toast.error("Unable to delete image!");
      } finally {
        setMakeLoading(false);
      }
    }
    setShowPopup(false);
    setDeleteId(null);
  }

  useEffect(()=>{
    setImages(data);
    console.log(data);
  },[loading])

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