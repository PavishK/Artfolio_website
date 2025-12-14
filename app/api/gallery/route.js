import { NextResponse } from "next/server";
import { fetchImages, saveImage } from "@/controllers/galleryController";
import { verify_session } from "@/middleware/auth";

export async function GET(req) {
    const { message, status, error, data } = await fetchImages();
    return NextResponse.json( { message, data }, { status });
}

export async function POST(req) {

    const { imageUrl } = await req.json();

    const { user_id:userId, status:code, message:info } = await verify_session();

    if( code !== 200 || !userId )
        return NextResponse.json({ message:info }, { status:code });

    if(!imageUrl)
        return NextResponse.json({ message:"Missing image!" }, { status:400 });

    const { message, status, error, data } = await saveImage({ imageUrl, userId });
    return NextResponse.json({ message, data }, { status });
}