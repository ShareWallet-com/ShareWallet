// app/api/me/route.ts

import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { error: "Unauthorized - No token found" },
        { status: 401 }
      );
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as {
      id: string;
      email: string;
    };

    return NextResponse.json({
      id: decoded.id,
      email: decoded.email,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Invalid or expired token" },
      { status: 401 }
    );
  }
}