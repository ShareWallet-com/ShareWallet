import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { senderId, uniqueuserCode } = await req.json();

    const receiver = await prisma.user.findUnique({
      where: {
        uniqueuserCode: uniqueuserCode
      }
    });

    if (!receiver) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    if (receiver.id === senderId) {
      return NextResponse.json(
        { error: "You cannot send request to yourself" },
        { status: 400 }
      );
    }

    const existing = await prisma.friendRequest.findUnique({
      where: {
        senderId_receiverId: {
          senderId,
          receiverId: receiver.id
        }
      }
    });

    if (existing) {
      return NextResponse.json(
        { error: "Request already sent" },
        { status: 400 }
      );
    }

    const request = await prisma.friendRequest.create({
      data: {
        senderId,
        receiverId: receiver.id
      }
    });

    return NextResponse.json(request);

  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET(req:Request){
  try{
    const { searchParams } = new URL(req.url);
    const uniqueuserCode = searchParams.get("uniqueuserCode");
    if (!uniqueuserCode) {
      return NextResponse.json(
        { error: "Missing unique user code" },
        { status: 400 }
      );
    }
    const user = await prisma.user.findUnique({
      where:{
         uniqueuserCode: uniqueuserCode
      },
      include: {
        userDetails: true
      }
    })

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(user);
  } catch(error){
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}