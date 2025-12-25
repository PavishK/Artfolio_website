import { NextResponse } from "next/server";
import { sendConfirmMail } from "@/controllers/contactController";
import { uploadImage } from "@/controllers/uploadController";

export async function POST(req) {

    const { name, email, desc, reason, image } = await req.json();
    var attached = "";

    if( !name, !email, !desc, !reason )
        return NextResponse.json({ message:"Missing data!"}, { status:400 });
    if( reason === "need art" && !image )
        return NextResponse.json({ message:"Missing image!"}, { status:400 });

    if( image.trim() != "" )
        attached = await uploadImage("clients", image);

    const { message, status, error } = await sendConfirmMail( { name, email, desc, reason, image:attached } );
    return NextResponse.json({ message }, { status });
    
}