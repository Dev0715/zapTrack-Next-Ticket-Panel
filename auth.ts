import NextAuth from "next-auth"

import GitHubProvider from "next-auth/providers/github"
import GitlabProvider from "next-auth/providers/gitlab"

import type { NextAuthOptions } from "next-auth"

export const config = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        GitlabProvider({
            clientId: process.env.GITLAB_ID as string,
            clientSecret: process.env.GITLAB_SECRET as string
        })
    ]
} satisfies NextAuthOptions

export const handler = NextAuth(config)
