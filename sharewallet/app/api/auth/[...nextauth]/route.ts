import NextAuth from "next-auth";
import { handlers } from "@/lib/auth";

const handler = NextAuth(handlers);

export { handler as GET, handler as POST };