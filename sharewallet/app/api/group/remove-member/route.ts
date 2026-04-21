import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import Jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";

export async function DELETE(req: Request){
    try {
        const token = (await cookies()).get("token")?.value;
        if(!token){
            return NextResponse.json(
                {error: "Unauthorized"},
                {status:401}
            )
        }
        let decoded: any;
        try {
            decoded = Jwt.verify(token, process.env.JWT_SECRET!);
        } catch{
            return NextResponse.json(
                {error:"Invalid token"},
                {status:401}
            )
        }

        const { groupId,userCode } = await req.json();
        console.log("userCode:", userCode);
        console.log("groupId:", groupId);
        if (!groupId || !userCode) {
            return NextResponse.json(
                { error: "groupId and userCode are required" },
                { status: 400 }
            );
        }
        const user = await prisma.user.findFirst({
            where: {
                uniqueuserCode: userCode
            }
        });

        if (!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }
        const memberExists = await prisma.groupMembers.findFirst({
            where: {
                user_id: user.id,
                group_id: groupId
            }
        });

        if (!memberExists) {
            return NextResponse.json(
                { error: "Member not found in group" },
                { status: 404 }
            );
        }

        const adminCheck = await prisma.groupMembers.findFirst({
            where:{
                user_id:decoded.id,
                group_id: groupId,
                role:"ADMIN"
            }
        })

        if(!adminCheck){
            return NextResponse.json(
                {error:"Only admin can remove members"},
                {status:403}
            )
        }
        
        const removeMember = await prisma.groupMembers.deleteMany({
            where:{
                user_id: userCode,
                group_id:groupId,
                role: "MEMBER",
            }
        })
        if(removeMember.count === 0){
            return NextResponse.json(
                { error: "Member not removed (not found or already removed)" },
                { status: 404 }
            );
        }
        return NextResponse.json({
            message: "Member removed successfully",
            member: removeMember,
        });

    } catch (error) {
        return NextResponse.json(
            { error: "Failed to remove member" },
            { status: 500 }
        );
    }
}