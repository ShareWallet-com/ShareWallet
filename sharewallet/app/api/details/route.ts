import { handlers } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req: Request){
    try {
        const session = await getServerSession(handlers)
        console.log(session)
        if(!session?.user?.id){
            return NextResponse.json({error:"Unauthorized"},{status:401})
        }
        const{fullName,phoneNo,username} = await req.json();
        if(!fullName || !phoneNo || !username){
            return NextResponse.json(
                {error:"Missing required fields"},
                {status: 400 }
            )
        }
        const exsting = await prisma.userDetails.findUnique({
            where:{user_id:session.user.id}
        })
        if(exsting){
            return NextResponse.json({error:"User details already filled"},{status:400})
        }
        await prisma.userDetails.create({
            data:{
                fullName:fullName.trim().toUpperCase(),
                phoneNo,
                username,
                user_id:session.user.id
            }
        });
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to save details" },
            { status: 500 }
        )
    }
}