"use client";

import React, { useState, useEffect } from 'react'
import { api } from '@/services/api';

function useFetchGallery() {
    const [ images, setImages ] = useState([]);
    const [ error, setError ] = useState();
    const [ loading, setLoading ] = useState(false);

    const handleFetchImages = async() => {
        try {
            setLoading(true);
            const res = await api.get("/api/gallery");
            console.log(res);
            setImages(res.data.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        handleFetchImages();
    },[]);

    return { images, error, loading};
}

export default useFetchGallery;