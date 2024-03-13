import { GetServerSidePropsContext } from "next";
import { DefaultSession, NextAuthOptions, getServerSession } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import jwt from "jsonwebtoken"
import credentials from "next-auth/providers/credentials";
import axios from "axios";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      name: string;
      email: string;
      image: string;
      profile: any;
    } & DefaultSession["user"];
  }
  interface User {
    id: string;
      name: string;
      email: string;
      image: string;
  }
 
}
export const options:NextAuthOptions={
  session: {
    strategy: "jwt",
  },
  callbacks:{
    async jwt({token,user}){
     if(user){
       console.log(user)
       const response=await axios.get(`https://api.github.com/user/${user.id}`)
       token.id=user.id
       token.name = user.name;
       token.email = user.email;
       token.picture=user.image
       token.profile=response.data
     }
   // console.log(token)
     return token
    },
    async session({session,token}){
      if(session.user){
        session.user.id= token.id as string
        session.user.name= token.name as string
        session.user.email =token.email as string
        session.user.image=token.picture as string
        session.user.profile=token.profile
      }
      return session
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

