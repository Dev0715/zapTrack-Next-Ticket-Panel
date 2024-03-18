import NextAuth from "next-auth"
import type { NextAuthOptions } from "next-auth"

import GitHubProvider from "next-auth/providers/github"
import GitlabProvider from "next-auth/providers/gitlab"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import connectDB from "@/services/connectDB"
import UserModel from "@/models/UserModel"

const config = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        GitlabProvider({
            clientId: process.env.GITLAB_ID as string,
            clientSecret: process.env.GITLAB_SECRET as string
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { type: 'email' },
                password: { type: 'password' }
            },
            async authorize(credentials) {
                // const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
                await connectDB();
                let email = credentials?.email;
                let password = credentials?.password || "";

                let user = await UserModel.findOne({ email: email });
                if (!user) {
                    return null;
                }

                if (!bcrypt.compareSync(password, user.password)) {
                    return null;
                }

                let token = jwt.sign({
                    userId: user._id,
                    email: user.email
                }, process.env.LOGIN_HASH_TOKEN as string, {
                    expiresIn: "3h"
                });

                return {
                    id: user._id,
                    name: user.username,
                    email: user.email,
                    image: user.photo,
                    token: token
                }
            }
        })
    ],
    // adapter: MongoDBAdapter(connectDB()),
    pages: {
        signIn: '/login',
        signOut: "/",
        error: '/auth/error',
        // verifyRequest: '/auth/verify-request',
        newUser: '/register'
    },
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async jwt({ token, user }: { token: any, user: any }) {
            const isSignIn = user ? true : false
            if (isSignIn) {
                token.username = user.username
                token.password = user.password
            }
            return token
        }
    }
} satisfies NextAuthOptions

const handler = NextAuth(config)

export { handler as GET, handler as POST, config }