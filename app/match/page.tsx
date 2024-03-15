"use client"

import { useSession } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import axios from "axios"

export default  function Match(){
    const[matchedUser,setMatchedUser]=useState<any>({})
   const session=useSession()
const username=session.data?.user.profile.login.toLowerCase()
const id=session.data?.user.id
   function openGmail(){
  //console.log(session?.data?.user.email)
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(session?.data?.user?.email || "")}`, '_blank');

   }

   useEffect(()=>{
    findMatch()
   },[])
   async function findMatch(){
    console.log(session.data?.user.id)
    let body={
        id
    }
    try{
        const response=await axios.post("/api/findMatch",body)
        setMatchedUser(response.data.matchedUser)
    }
    catch(error){
        console.log(error)
        setMatchedUser({})
    }

   }
 
console.log(matchedUser)
    return(
        <div className="bg-gray-200 p-4 h-screen w-screen">
            <Navbar/>
            <div className="flex justify-center gap-20 items-start m-10">
            <img src={session.data?.user.image} className="rounded-full "></img>
            <div className="flex flex-col p-2 gap-3">
        <p className="font-bold text-xl ">{session.data?.user.name}</p>
        <p>{session.data?.user.profile.bio}</p>
        <div className="flex justify-start items-center gap-3 p-2">
        <Link href={`https://github.com/${session.data?.user.profile.login}`}>
        <svg
              width="20"
              height="20"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-2 "
              
            >
              <path
                d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 
          5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 
          11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 
          3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 
          10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 
          3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 
          3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 
          11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 
          10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 
          9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                fill="currentColor" fillRule="evenodd" clipRule="evenodd"
              />
            </svg>
            </Link>
            <button onClick={()=>{openGmail()}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
            className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0
                0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07
                 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>

            </button>
            </div>
         
        </div>
        </div>
        <div className="flex p-2 justify-center gap-10 mt-5">
              <img src={`https://github-readme-stats.vercel.app/api/top-langs?username=${username}&show_icons=true&include_all_commits
              =true&count_private=true&hide_border=true&background=fff&layout=compact`}></img>
               <img src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&hide_border
               =true&stroke=0000&background=#fff&ring=e05397&fire=e05397&currStreakLabel=e05397`}></img>
            </div>
        <div className="flex justify-center gap-20 mt-5 p-3">
            <button className="bg-indigo-200 rounded-full p-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
        className="w-12 h-12  text-red-600 font-bold">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 
            2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
        </button>
        <button className="bg-green-300 rounded-full p-2" onClick={()=>{findMatch()}}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
        className="w-12 h-12   font-bold">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>
        </button>
        </div>
        </div>
    )
}
