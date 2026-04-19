import { handlers } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req: Request){
    try {
        const session = await getServerSession(handlers)
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
    } catch (error) {
        
    }
}