'use client'

import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"
import { useState } from "react"
export default function Navbar(){
    const[clicked,setClicked]=useState<boolean>(false)
  const {data}=useSession()
 // console.log(data)
    return(
        <div className="h-max w-full bg-gray-100 p-2 flex justify-between rounded-lg">
           <p className="text-orange-600 p-2 text-2xl font-bold">Coders Connect</p>
           {data?.user ?(
              <div className="flex justify-center gap-5 p-2 font-medium">
                <button className="flex justify-center items-center w-max hover:text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 
                    1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>

                    Likes</button>
                <button className="flex justify-center items-center w-max hover:text-orange-600"> 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                  className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 
                    1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 
                    21c-2.331 0-4.512-.645-6.374-1.766Z" />
                </svg>

                    Find Match</button>

                <img src={`${data.user.image}`} alt={"profile image"} width={40} height={20} className=" rounded-full cursor-pointer"
                onClick={()=>setClicked((prev)=>!prev)}></img>
                {clicked &&(
                 <div className="absolute top-[75px] right-2 flex flex-col bg-white h-max w-max rounded-lg p-3 gap-2">
                    <Link className="p-2 hover:text-blue-600 cursor-pointer" href="/profile">profile</Link>
                    <button className="text-white font-medium p-2 bg-gray-600 rounded-xl self-center" 
                     onClick={()=>signOut()}
                      >Logout</button>
                 </div>
                )}
           
              </div>
           ):(
           <>
            <button className="text-white font-medium p-2 bg-gray-600 rounded-xl self-center" 
         onClick={()=>signIn()}
           >Login</button>
           </>)}
          
        </div>
    )
}