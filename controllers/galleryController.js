import { prisma } from "@/lib/prisma";
import { uploadImage } from "./uploadController";

export const fetchImages = async() => {
    try {
        const res = await prisma.artwork.findMany({
            orderBy:{
                createdAt:'desc'
            },
            select:{
                id:true,
                imageUrl:true,
                createdAt:true,
            }
        });

        return { message:"Gallery fetched!", status:200, data:res };
    } catch (error) {
        return { message:"Internal server error!", status:500, error };
    }
}

export const saveImage = async(imageData) => {
    try {
        const { imageUrl, userId } = imageData;
        
        const url = await uploadImage('uploads', imageUrl);

        const data = await prisma.artwork.create({
            data: {
                imageUrl:url,
                userId
            }
        });
        return { message:"Image saved successfully!", status:201, data };
    } catch (error) {
        return { message:"Internal server error!", status:500, error };
    }
}


export async function delete_image(id) {
    try {
        await prisma.artwork.delete({ where:{ id }});
        return { message:"Image deleted successfully!", status:200 };
    } catch (error) {
        return { message:"Internal server error!", status:500, error};
    }
}