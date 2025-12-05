import { NextResponse } from "next/server";
import { verify_session } from "@/middleware/auth";
import { delete_image } from "@/controllers/galleryController";

export async function DELETE(req, { params }) {
    
    const { id } = await params;

    const { user_id:userId, status:code, message:info } = await verify_session();

    if( code !== 200 || !userId )
        return NextResponse.json({ message:info }, { status:code });

    const { message, status, error } = await delete_image( Number(id));
    return NextResponse.json({message},{status});

}