import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import  Jwt  from "jsonwebtoken";
export async function POST(req:Request){
    try {
        const token = (await cookies()).get("token")?.value;
        if(!token){
            return NextResponse.json({error:"Unauthorized"},{status:400})
        }
        let decoded: any;
            try {
                decoded = Jwt.verify(token, process.env.JWT_SECRET!);
            } catch {
                return NextResponse.json({ error: "Invalid token" }, { status: 401 });
        }
        const userId = decoded.id;
        const{groupName,description,monthlyContribution,minimum_member,withdrawal_conditions} = await req.json();
        if(!groupName||!description||!monthlyContribution||!minimum_member||!withdrawal_conditions){
            return NextResponse.json(
                {error:"Missing required Field"},
                {status:401}
            )
        }
        await prisma.group.create({
            data:{
                groupName,
                description,
                monthlyContribution:Number(monthlyContribution),
                minimum_member:Number(minimum_member),
                // contribution_deadline,
                withdrawal_conditions,
                members:{
                    create:{
                        user_id:userId,
                        role:"ADMIN"
                    }
                }
            }
        });
        return NextResponse.json({ 
            message:"Group Created Sucessfully",
            success: true,
            groupName 
        });
    } catch (error) {
        console.log(error)
        return NextResponse.json({error:"Internal Server Error"},{status:500})
    }
}