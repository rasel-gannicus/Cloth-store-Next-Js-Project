import NextAuth, { NextAuthOptions } from "next-auth"
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.NEXT_APP_GITHUB_ID as string,
      clientSecret: process.env.NEXT_APP_GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.NEXT_APP_GOOGLE_ID as string,
      clientSecret: process.env.NEXT_APP_GOOGLE_SECRET as string,
    }),
  ],

  secret: process.env.NEXT_APP_SECRET,
};
