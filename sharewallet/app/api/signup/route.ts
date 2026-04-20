import prisma from "@/lib/prisma";
import argon2 from "argon2";
import { NextResponse } from "next/server";
import  {randomBytes}  from "crypto";

export async function POST(req: Request){
    try {
        const{email,password,uniqueuserCode} = await req.json();
        const existingUser = await prisma.user.findFirst({
            where: { email }
        })
        if(existingUser){
            return NextResponse.json({error:"User already exists"},{status:404})
        }

        const hashedPassword = await argon2.hash(password);
        const unqueCode = `${randomBytes(3).toString("hex").toUpperCase()}`
        await prisma.user.create({
            data:{
                email,
                password:hashedPassword,
                uniqueuserCode:unqueCode
            }
        });

        // const verificationToken = newUser.getVerificiationToken
        // await newUser.

        return NextResponse.json({message:"User created successfully"})
    } catch {
        return NextResponse.json({error:"Something wnet Wrong"},{status:500})
    }
}