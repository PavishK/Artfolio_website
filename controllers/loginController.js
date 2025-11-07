import { compare_password } from "@/lib/bcrypt";
import { generate_token } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";

export async function verify_admin( data ) {
    try {

        const { username, password } = data;

        const userExists = await prisma.user.findUnique({
            where:{ username }
        });

        if(userExists){
            const validatePassword = await compare_password( password, userExists.password );
            if(validatePassword){
                if( userExists.role === "admin" ){
                    const token = generate_token( { username:userExists.username, user_id:userExists.id });
                    return { message:"Login successful!", user_id:userExists.id, token:token, status:200};
                }
                else
                    return { message:"Admin access denied!", status:401 };
            }

            else
                return { message:"Invalid password!", status:401 };
        }

        return { message:"Username not found!", status:401};
        
    } catch (error) {
    return {
      message: "Internal Server Error",
      status: 500,
      error: error.message,
    };
    }
}