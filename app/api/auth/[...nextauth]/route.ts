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
            authorize(credentials) {
                if (
                    credentials?.username === 'admin' &&
                    credentials.password === 'admin'
                ) {
                    return { id: '1', name: 'admin' };
                }

                return null
            }
        })
    ],
    pages: {
        signIn: '/login',
        signOut: "/",
        error: '/auth/error',
        verifyRequest: '/auth/verify-request',
        newUser: '/auth/new-user'
    }
} satisfies NextAuthOptions

const handler = NextAuth(config)

export { handler as GET, handler as POST, config }