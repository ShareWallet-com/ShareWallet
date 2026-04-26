import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";



export async function POST(req: Request){
    try {
        const token = (await cookies()).get("token")?.value;
        if(!token){
            return NextResponse.json({error:"Unauthorized"},{status:400})
        }
        
        let decoded: any;
        try {
            decoded = jwt.verify(token, process.env.JWT_SECRET!);
        } catch {
            return NextResponse.json({ error: "Invalid token" }, { status: 401 });
        }
        const userId = decoded.id;

        const{fullName,phoneNo,username} = await req.json();
        if(!fullName || !phoneNo || !username){
            return NextResponse.json(
                {error:"Missing required fields"},
                {status: 400 }
            )
        }
        const exsting = await prisma.userDetails.findUnique({
            where:{user_id:userId}
        })
        if(exsting){
            return NextResponse.json({error:"User details already filled"},{status:400})
        }
        await prisma.userDetails.create({
            data:{
                fullName:fullName.trim().toUpperCase(),
                phoneNo,
                username,
                user_id:userId
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

export async function GET (req:Request){
    try {
        const token = (await cookies()).get("token")?.value;
        if(!token){
            return NextResponse.json({error:"Unauthorized"},{status:400})
        }
        let decoded: any;
        try {
            decoded = jwt.verify(token, process.env.JWT_SECRET!);
        } catch {
            return NextResponse.json({ error: "Invalid token" }, { status: 401 });
        }
        const userId = decoded.id;
        const user = await prisma.user.findUnique({
            where:{id:userId},
            include:{userDetails:true}
        })
        if(!user){
            return NextResponse.json({error:"User not found"},{status:404})
        }
        return NextResponse.json({userDetails:user.userDetails})

    } catch (error) {
        return NextResponse.json({error:"Failed to fetch details"},{status:500})
    }
}

export async function PUT(req:Request){
    try {
        const token = (await cookies()).get("token")?.value;
        if(!token){
            return NextResponse.json({error:"Unauthorized"},{status:400})
        }
        let decoded: any;
        try {
            decoded = jwt.verify(token, process.env.JWT_SECRET!);
        } catch {
            return NextResponse.json({ error: "Invalid token" }, { status: 401 });
        }
        const userId = decoded.id;
        const { fullName, phoneNo, username } = await req.json();
        const user = await prisma.userDetails.update({
            where:{user_id:userId},
            data:{
                fullName:fullName.trim().toUpperCase(),
                phoneNo,
                username,
                user_id:userId
            }
        })
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({error:"Failed to update details"},{status:500})
    }
}