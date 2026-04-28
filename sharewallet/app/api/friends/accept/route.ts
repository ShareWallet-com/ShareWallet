import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  try {
    const { requestId } = await req.json();

    const request = await prisma.friendRequest.update({
      where: { id: requestId },
      data: { status: "ACCEPTED" },
      include: {
        sender: true,
        receiver: true
      }
    });

    // Add sender to receiver friend list
    await prisma.user.update({
      where: { id: request.receiverId },
      data: {
        friends: {
          connect: { id: request.senderId }
        }
      }
    });

    // Add receiver to sender friend list
    await prisma.user.update({
      where: { id: request.senderId },
      data: {
        friends: {
          connect: { id: request.receiverId }
        }
      }
    });

    return NextResponse.json({
      message: "Friend request accepted"
    });

  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}