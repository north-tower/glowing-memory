
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: '807691893449-66rf93iv10oenaher5mtsebc7gjtm8pr.apps.googleusercontent.com',
      clientSecret: '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',
    }),
    // ...add more providers here
  ],

  secret: process.env.NEXT_PUBLIC_SECRET

}

export default NextAuth(authOptions)