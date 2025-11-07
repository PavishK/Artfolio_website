import { prisma } from "@/lib/prisma";
import { hash_password } from "@/lib/bcrypt";

export async function register_user(data) {
  try {
    const { username, password } = data;

    const existingUser = await prisma.user.findUnique({
      where: { username },
    });

    if (existingUser) {
      return {
        message: "Username already taken!",
        status: 409,
      };
    }

    const hashed_password = await hash_password(password);

    await prisma.user.create({
      data: {
        username,
        password: hashed_password,
      },
    });

    return {
      message: "User registered successfully!",
      status: 201,
    };
  } catch (error) {
    return {
      message: "Internal Server Error",
      status: 500,
      error: error.message,
    };
  }
}
