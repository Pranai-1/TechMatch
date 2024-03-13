"use client"
import { useSession } from "next-auth/react";
import Navbar from "../components/Navbar";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

import Link from "next/link";
import getRepos from "../components/getRepos";
import RepoCard from "../components/Repocard";

export default  function Profile(){
    const[repos,setRepos]=useState<any[]>([])
    const {data}=useSession()
    console.log(data)
   const username=data?.user.profile.login
   useEffect(()=>{
    getRepos(data?.user.profile.repos_url,setRepos)
   },[data])
  
   console.log(repos)
    return(
        <div className="h-full w-full p-4 bg-gray-200 flex flex-col gap-3">
          <Navbar/>
          <div className="flex justify-between mt-10">
           <img src={data?.user.image} className="h-[180px] w-[180px] rounded-full"></img>
           <img src={`https://ghchart.rshah.org/${username}`} alt="Github chart" className="h-[180px] w-max p-2 bg-gray-300"></img>
          </div>
          <p className="font-medium ml-8 py-1">Followers:{data?.user.profile.followers}</p>
          <p className="font-medium ml-8">Following:{data?.user.profile.following}</p>
          <div className=" ml-8 flex flex-col gap-3">
            <p className="text-2xl font-bold p-2">{username}</p>
            <div className="flex justify-center items-center gap-2 h-max w-max">
              <Link href={`https://github.com/${username}`}>
              <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" 
      className="mx-2 ">
        <path d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 
        5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 
        11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 
        3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 
        10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 
        3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 
        3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 
        11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 
        10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 
        9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z" 
      fill="currentColor" fillRule="evenodd" clipRule="evenodd">
        </path></svg>
              </Link>
              <Link href={`${data?.user.profile.blog}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 
                7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 
                5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
            </svg>
              </Link>
            </div>
            <p className="font-medium text-lg ">{data?.user.profile.bio}</p>
            <div>
                <p className="text-xl font-bold pt-2 text-orange-600">Repositories:- 
                <span className="ml-1 font-medium text-black"> {data?.user.profile.public_repos} public</span>
                </p>
                <div className="grid grid-cols-2 gap-4 mt-5">
                {repos.map((repo)=>(
                    <RepoCard repo={repo}/>
                 ))}
                 </div>
            </div>
          </div>
        </div>
    )
}