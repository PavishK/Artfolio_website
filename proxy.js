import { NextResponse } from "next/server";
import { verify_session } from './middleware/auth';

export async function proxy(req) {
    const { status, message } = await verify_session();
    const url = req.nextUrl.clone();
    url.pathname ="artwork-admin/login";

    if( status === 200 )
        return NextResponse.next();

    if( status === 400 ) {
        return NextResponse.redirect(url);
    }

    url.searchParams.set("session", message);
    return NextResponse.redirect(url);
}

export const config = {
    matcher: [
        "/artwork-admin/dashboard/:path*"
    ]
}