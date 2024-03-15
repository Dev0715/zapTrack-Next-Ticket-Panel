import NextAuth from "next-auth"
import type { NextAuthOptions } from "next-auth"

import GitHubProvider from "next-auth/providers/github"
import GitlabProvider from "next-auth/providers/gitlab"
import CredentialsProvider from "next-auth/providers/credentials"

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
                username: { type: 'text' },
                password: { type: 'password' }
            },
            async authorize(credentials) {
                const res = await fetch("http://localhost:5001/api/user/signin", {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                })
                const response = await res.json();

                if (res.ok && response.status) {
                    const user = response.user;
                    return {
                        id: user._id,
                        name: user.username,
                        email: user.email,
                        image: user.photo
                    }
                }

                return null
            }
        })
    ],
    pages: {
        signIn: '/login',
        signOut: "/",
        // error: '/auth/error',
        // verifyRequest: '/auth/verify-request',
        // newUser: '/auth/new-user'
    }
} satisfies NextAuthOptions

const handler = NextAuth(config)

export { handler as GET, handler as POST, config }