import { prisma } from "@/lib/prisma";
import { imagekit } from "@/lib/imagekit";

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

export const saveImage = async(data) => {
    try {
        const { imageUrl, userId } = data;
        
        const res = await imagekit.upload({
            file:imageUrl,
            fileName:`abp_${Date.now()}`,
            folder:'/uploads'
        });

        const data = await prisma.artwork.create({
            data: {
                imageUrl:res.url,
                userId
            }
        });
        console.log(data);
        return { message:"Image saved successfully!", status:201 };
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