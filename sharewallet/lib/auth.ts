import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./prisma";
import argon2 from "argon2";
import NextAuth from "next-auth";

declare module "next-auth"{
    interface Session{
        user:{
            id:string;
            email:string;
            name?:string | null;
            image?:string| null;
        };
    }
}

declare module "next-auth/jwt"{
    interface JWT{
        id:string;
        email:string;
    }
}

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
                    user.password,
                    credentials.password  
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
    ],
    session:{
        strategy:"jwt",
    },

    callbacks:{
        async jwt({token,user }){
            if(user){
                if (user.id) token.id = user.id;
                if (user.email) token.email = user.email;
            }
            return token;
        },

        async session({session,token}){
            if (session.user) {
                session.user.id = token.id;
                session.user.email = token.email;
            }
            console.log("SESSION CREATED:", session);
            return session;
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
};