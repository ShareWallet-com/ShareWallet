import prisma from "@/lib/prisma";
import  argon2  from "argon2";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: Request){
    try {
        const{email,password} = await req.json();
        if(!email || !password){
           return NextResponse.json({error:"Missing Credentials"},{status:404})
        }
        const user = await prisma.user.findFirst({
            where:{email}
        })
        if(!user){
            return NextResponse.json({error:"User Not found"},{status:404})
        }
        const isVaild = await argon2.verify(user.password,password)

        if(!isVaild){
            return NextResponse.json({error:"Invalid Credentials"},{status:404})
        }
        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET!,
            { expiresIn: "7d" }
        );
        console.log(token)
         const response = NextResponse.json({ message: "Login success" });
         response.cookies.set("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            path: "/",
        });

        return response;
    } catch (error) {
        console.log(error)
        return NextResponse.json({error:"Something wnet Wrong"},{status:500})
    }
}