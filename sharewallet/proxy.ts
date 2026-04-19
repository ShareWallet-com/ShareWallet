import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest) {
    const token = req.cookies.get("token")?.value;

    if (!token) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/api/group/:path*", "/api/user/:path*"],
};