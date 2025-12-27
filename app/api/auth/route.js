import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { register_user } from "@/controllers/registerController";
import { verify_admin } from "@/controllers/loginController";

const cookieConfig = { name: "jwttoken", httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 3600,
      sameSite:'lax'
    }

export async function POST(req) {
    try {
        const { username, password } = await req.json();
        if( !username || !password ){
            return NextResponse.json({ message:"Missing data!"},{status:400 });
        }
        const { message, status, error, user_id, token } = await verify_admin({ username, password });
        console.log(error);
        
        //Using Cookies
        (await cookies()).set("jwttoken", token, cookieConfig);

        return NextResponse.json({ message, user_id, token }, { status });
    } catch (error) {
        return NextResponse.json( {message:error}, {status:500});
    }
}

export async function GET(req) {
    const {message, status, error, user_id } = await verify_session(req);
    return NextResponse.json({ message, user_id }, {status});
}