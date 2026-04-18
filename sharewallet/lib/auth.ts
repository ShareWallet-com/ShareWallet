import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./prisma";
import argon2 from "argon2";

export const handlers: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "jsmith@gmail.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials){
                if(!credentials?.email || !credentials?.password){
                    throw new Error("Missing Credentials")
                }
                const user = await prisma.user.findFirst({
                    where: { email: credentials.email }
                });
                if(!user){
                    throw new Error("User not Found");
                }
                const isVaild = await argon2.verify(
                    credentials.password,
                    user.password
                )

                if(!isVaild){
                    throw new Error("Invalid password")
                }

                return{
                    id:user.id,
                    email:user.email
                }
            }
        })
    ]
};