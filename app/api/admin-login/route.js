import { NextResponse } from "next/server";
import { verify_admin } from "@/controllers/loginController";

export async function POST(req) {
    try {
        const { username, password } = await req.json();
        console.log(username+" "+password)
        return NextResponse.json({message:"Testing"}, {status:200});
    } catch (error) {
        return NextResponse.json( {message:error}, {status:500});
    }
}