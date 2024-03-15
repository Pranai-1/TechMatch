import { GetServerSidePropsContext } from "next";
import { DefaultSession, NextAuthOptions, getServerSession } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import jwt from "jsonwebtoken"
import credentials from "next-auth/providers/credentials";
import axios from "axios";
import { PrismaClient } from "@prisma/client";
import getRepos from "@/app/components/getRepos";



const prisma=new PrismaClient()
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

       const response=await axios.get(`https://api.github.com/user/${user.id}`)
       token.id=user.id
       token.name = user.name;
       token.email = user.email;
       token.picture=user.image
       token.profile=response.data
     }

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
    },
    async signIn({user,account,profile}){
  
      let repos: any[]=[], languages:string[]=[]
      function setRepos(arr: any){
         repos=[...arr]
      }
      
      let obj={
        login:"default",
        bio:"no bio"
      }
      try{
         // eslint-disable-next-line
         const res=await axios.get(`https://api.github.com/user/${user.id}`)
        const response=await axios.get(res.data?.repos_url)
        const repoArray=response.data
    obj.login=res.data.login
    obj.bio=res.data.bio
        repoArray.sort((a:any,b:any)=>b.size-a.size)
        if(repoArray.length<5)
        setRepos(repoArray)
      else{
              const x=repoArray.slice(0,5)
              setRepos(x)
      }
      }catch(error){
        console.log(error)
      }

      repos.map(async (repo)=>{
        const {data}=await axios.get(repo.languages_url)
        const keys=Object.keys(data)
        for(const ele of keys){
           if(!languages.includes(ele))
           languages.push(ele)
        }
      
      })

      const x=await prisma.user.findFirst({
        where:{
          userId:Number(user?.id)
        }
      })
  
      if(!x){
  
        const data=await prisma.user.create({
          data:{
            userId:Number(user.id),
            email:user.email,//updating email,i created few id with default email
            name:user.name,
            image:user.image,
            // eslint-disable-next-line
            username:obj.login,
            likes:0,
            languages:languages,
            bio: obj.bio
  
          }
        })

      }else{
        const data = await prisma.user.update({
          where: {
            id:x.id 
          },
          data: {
            name: user.name, 
            image: user.image, 
            // eslint-disable-next-line
            username: obj.login, 
            likes: x.likes, 
            languages:languages,// Update the languages
            bio: obj.bio
          }
        });
 
      }

    
      return true
    },
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

