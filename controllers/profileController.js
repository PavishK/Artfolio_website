import { prisma } from "@/lib/prisma";
import { imagekit } from "@/lib/imagekit";

export async function profile_data() {
    try {

        const data = await prisma.user.findFirst({
            where:{ role:'admin' }
        });

        const { imageUrl, desc } = data; 

        return { message:"Profile data fetched!", status:200, data:{ imageUrl, desc }};
        
    } catch (error) {
        return { message:"Internal server error!", status:500, error:error.message};
    }
}

export async function set_profile( data, id ) {
    try {
    const { imageUrl, desc, newImage } = data;
    var fileUrl = imageUrl;
    
    if(newImage) {
        const res = await imagekit.upload({
            file:imageUrl,
            fileName:`abp_${Date.now()}`,
            folder:'/uploads'
        });
    
        fileUrl = res.url;
    }


    await prisma.user.update({
        where:{ id },
        data: { imageUrl:fileUrl, desc },
    });

    return { message:"Profile updated successfully!", status:200 };
    } catch (error) {
        return { message:"Internal server error!", status:500, error:error.message };
    }
    
}