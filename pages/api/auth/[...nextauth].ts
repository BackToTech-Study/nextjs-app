import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
export default NextAuth({
  providers: [
    GitHubProvider({
      //@ts-ignore
      clientId: process.env.GIT_CLIENT,
      //@ts-ignore
      clientSecret: process.env.GIT_SECRET,
    }),
    GoogleProvider({
      //@ts-ignore
      clientId: process.env.GOOGLE_ID,
      //@ts-ignore
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
});
