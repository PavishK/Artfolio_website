import { update_password } from "@/controllers/profileController";
import { verify_session } from "@/middleware/auth";
import { NextResponse } from "next/server";


export async function PUT(req) {
    const { user_id, status:code, message:info } = await verify_session();

    if( code !== 200 || !user_id )
        return NextResponse.json({ message:info }, { status:code });

    const { currentPassword, newPassword } = await req.json();

    if( !currentPassword || !newPassword )
        return NextResponse.json({message:"Missing data!"}, { status:400 });

    const { message, status, error} = await update_password(currentPassword, newPassword, Number(user_id));
    return NextResponse.json( {message}, { status });
}