import { prisma } from "@/lib/prisma";
import { imagekit } from "@/lib/imagekit";
import { compare_password, hash_password } from "@/lib/bcrypt";
import { uploadImage } from "./uploadController";

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
        const url = await uploadImage('uploads', imageUrl);
    
        fileUrl = url;
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

export async function update_password(currentPassword, newPassword, id) {
    try {
        
        const existUser = await prisma.user.findUnique({ where:{ id }});

        const matched = await compare_password(currentPassword, existUser.password);

        if(!matched)
            return { message:"Invalid current password!", status:401 };

        const hashed = await hash_password(newPassword);
        
        await prisma.user.update({
            where:{ id },
            data: { password:hashed },
        });

        return { message:"Password updated successfully!", status:200 };
    } catch (error) {
        return { messgae:"Internal server error!", status:500, error:error};
    }
}