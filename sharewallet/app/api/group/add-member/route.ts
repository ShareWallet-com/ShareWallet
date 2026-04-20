import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import Jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const token = (await cookies()).get("token")?.value;
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    let decoded: any;
    try {
      decoded = Jwt.verify(token, process.env.JWT_SECRET!);
    } catch {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    const { groupId, userCode } = await req.json();

    if (!groupId || !userCode) {
      return NextResponse.json(
        { error: "groupId and userCode are required" },
        { status: 400 }
      );
    }

    //Admin check
    const adminCheck = await prisma.groupMembers.findFirst({
      where: {
        user_id: decoded.id,
        group_id: groupId,
        role: "ADMIN",
      },
    });

    if (!adminCheck) {
      return NextResponse.json(
        { error: "Only admin can add members" },
        { status: 403 }
      );
    }

    //Find user by code
    const user = await prisma.user.findUnique({
      where: {
        uniqueuserCode: userCode,
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid user code" },
        { status: 404 }
      );
    }

    // Check already member
    const alreadyMember = await prisma.groupMembers.findFirst({
      where: {
        user_id: user.id,
        group_id: groupId,
      },
    });

    if (alreadyMember) {
      return NextResponse.json(
        { error: "User already in group" },
        { status: 400 }
      );
    }

    // Add correct user
    const newMember = await prisma.groupMembers.create({
      data: {
        user_id: user.id,
        group_id: groupId,
        role: "MEMBER",
      },
    });

    return NextResponse.json({
      message: "Member added successfully",
      member: newMember,
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}