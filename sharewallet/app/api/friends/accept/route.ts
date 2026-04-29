import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req:Request){
  try{
   const { searchParams } = new URL(req.url);
   const userId = searchParams.get("userId");
     if (!userId) {
      return NextResponse.json(
        { error: "Missing userId" },
        { status: 400 }
      );
    }
     const friendRequests = await prisma.friendRequest.findMany({
      where: {
        receiverId: userId,
        status: "PENDING",
      },
      include: {
        sender: {
          select: {
            id: true,
            uniqueuserCode: true,
            userDetails: {
              select: {
                fullName: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(friendRequests);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch requests" },
      { status: 500 }
    );
  }
}

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
    await prisma.user.update({
      where: { id: request.receiverId },
      data: {
        friends: {
          connect: { id: request.senderId }
        }
      }
    });

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

