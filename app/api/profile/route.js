import { profile_data, set_profile } from "@/controllers/profileController";
import { NextResponse } from "next/server";
import { verify_session } from "@/middleware/auth";

export async function GET(req) {
    const { message, status, data,  error} = await profile_data();
    return NextResponse.json({ message, data }, { status });
}

export async function PUT(req) {

    const { imageUrl, desc, newImage } = await req.json();
    const { user_id, status:code, message:info } = await verify_session();

    if( code !== 200 || !user_id )
        return NextResponse.json({ message:info }, { status:code });

    if(!imageUrl || !desc )
        return NextResponse.json({ message:"Missing data!" }, { status:400 });

    const { message, status, error } = await set_profile({ imageUrl, desc, newImage }, user_id);
    return NextResponse.json( { message }, { status });
       
}