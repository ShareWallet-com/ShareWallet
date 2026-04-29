import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { senderId, uniqueuserCode } = await req.json();

    const receiver = await prisma.user.findFirst({
      where: {
        uniqueuserCode,
      },
    });

    if (!receiver) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // if (receiver.id === senderId) {
    //   return NextResponse.json(
    //     { error: "You cannot send request to yourself" },
    //     { status: 400 }
    //   );
    // }

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

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");

  if (!query) return NextResponse.json([]);

  try {
    const users = await prisma.user.findMany({
      where: {
        OR: [
          {
            uniqueuserCode: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            userDetails: {
              is:{fullName: {
                contains: query,
                mode: "insensitive",
              },
            },
            },
          },
        ],
      },
      select: {
        id: true,
        uniqueuserCode: true,
        userDetails: {
          select: {
            fullName: true,
          },
        },
      },
      take: 5
    });

    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: "Search failed" }, { status: 500 });
  }
}