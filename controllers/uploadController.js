import { imagekit } from "@/lib/imagekit";

export const uploadImage = async( folder, base64 ) => {
    
    const res = await imagekit.upload({
            file:base64,
            fileName:`abp_${Date.now()}`,
            folder:`/${folder}`
        });
    
        return res.url;
}