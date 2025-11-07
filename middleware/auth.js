import { verify_token } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";

export async function verify_session() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("jwttoken")?.value;

    if (!token) {
      return { message: "No token provided", status: 400 };
    }

    const decoded = verify_token(token);
    if (!decoded) {
      return { message: "Session expired. Please log in!", status: 440 };
    }

    const { user_id, username } = decoded;
    if (!user_id || !username) {
      return { message: "Malformed token payload", status: 401 };
    }

    const user = await prisma.user.findUnique({
      where: { id: Number(user_id) },
      select: { id: true, username: true },
    });

    if (!user) {
      return { message: "User not found in database", status: 404 };
    }

    if (user.username !== username) {
      return { message: "Token data mismatch", status: 403 };
    }

    return { message: "Session in use", user_id: user.id, status: 200, user };

  } catch (error) {
    return { message: "Internal server error", status: 500, error: error.message };
  }
}
