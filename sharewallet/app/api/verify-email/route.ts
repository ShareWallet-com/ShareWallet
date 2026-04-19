import prisma from "@/lib/prisma"
import crypto from "crypto"

async function getVerificationToken(userId: string): Promise<string> {
    const verificationToken = crypto.randomBytes(32).toString("hex");
    await prisma.user.update({
        where: { id: userId },
        data: {
            verifyToken: verificationToken,
            verifyTokenExpire: new Date(Date.now() + 30*60*1000)
        }
    });
    return verificationToken;
}

export async function POST(req: Request) {
    // Example usage: assuming userId is extracted from req
    // const { userId } = await req.json();
    // const token = await getVerificationToken(userId);
    // return Response.json({ token });
}