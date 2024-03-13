import { GetServerSidePropsContext } from "next";
import { DefaultSession, NextAuthOptions, getServerSession } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import jwt from "jsonwebtoken"
import credentials from "next-auth/providers/credentials";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      name: string;
      email: string;
      image: string;
      accessToken: string;
      location: string;
    } & DefaultSession["user"];
  }
  interface User {
    id: string;
      name: string;
      email: string;
      image: string;
      accessToken: string;
      location: string;
  }
 
}
export const options:NextAuthOptions={
  session: {
    strategy: "jwt",
  },
  callbacks:{
   async jwt({token,user}){
  //   if(user){
  //     console.log(user)
  //     console.log("user")
  //   }

  // console.log(token)
    return token
   }
  },
    providers: [
        GitHubProvider({
          clientId: process.env.GITHUB_ID as string,
          clientSecret: process.env.GITHUB_SECRET as string
        })
     
      
      ],
      secret:process.env.JWT_SECRET,
}

// export const getServerAuthSession = (ctx: {
//     req: GetServerSidePropsContext["req"];
//     res: GetServerSidePropsContext["res"];
//   }) => {
//     return getServerSession(ctx.req, ctx.res, options);
//   };

// callbacks: {
//   async jwt({token, user}) {
  
//     if (user) {
//       // const response = await fetch(user.profileUrl);
//       // const userData = await response.json();
//       // token.user = {
//       //   ...user,
//       //   email: userData.email,
//       //   image: userData.avatar_url,
//       //   name: userData.name,
//       //   bio: userData.bio,
       
//       // };
//       console.log(user?.profile+"user")
//     }

//     return token;
//   },
// },