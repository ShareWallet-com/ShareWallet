import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import Jwt, { JwtPayload } from "jsonwebtoken";
interface CustomJwtPayload extends JwtPayload {
    id: string;
}
export async function GET(req:Request){
    try {
        const token = ( await cookies()).get("token")?.value;
        if(!token){
            return NextResponse.json(
                {error:"unauthorized"},
                {status:400}
            )
        }
        let decoded:CustomJwtPayload;
        try{
            decoded = Jwt.verify(token, process.env.JWT_SECRET!) as CustomJwtPayload;
        }catch{
            return NextResponse.json(
                {error:"Invalid token"},
                {status:401}
            )
        }
        const userId = decoded.id;
        const groups = await prisma.group.findMany({
            where:{
                members:{
                    some:{
                        user_id:userId
                    }
                }

            }
        })
        return NextResponse.json({groups})
    } catch (error) {
        return NextResponse.json(
            {error:"internal server error"},
            {status:500}
        )
    }
}