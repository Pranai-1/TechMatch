import { GetServerSidePropsContext } from "next";
import { NextAuthOptions, getServerSession } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
export const options:NextAuthOptions={
    providers: [
        GitHubProvider({
          clientId: process.env.GITHUB_ID as string,
          clientSecret: process.env.GITHUB_SECRET as string
        })
      ],
      secret:process.env.JWT_SECRET
}

// export const getServerAuthSession = (ctx: {
//     req: GetServerSidePropsContext["req"];
//     res: GetServerSidePropsContext["res"];
//   }) => {
//     return getServerSession(ctx.req, ctx.res, options);
//   };