import { NextResponse } from "next/server";
import { verify_session } from "@/middleware/auth";
import { cookies } from "next/headers";

export async function POST(req) {
    (await cookies()).delete('jwttoken');
    return NextResponse.json({ message:"Logged out successfully"}, {status:200});
}


export async function GET(req) {
    const {message, status, error, user_id } = await verify_session(req);
    return NextResponse.json({ message, user_id }, {status});
}