"use client"
import { useSession } from "next-auth/react";
import Navbar from "../components/Navbar";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import axios from "axios";

export default function Profile(){
//     const {data}=useSession()
//    // console.log(data)
//     useEffect(()=>{
//         const userId = '127480764'; // The user's ID


//         async function helper(){
// const response=await axios.get(`https://api.github.com/user/${userId}`)
//   const username = response.data; // Get the username
//   console.log( username);
//         }
//        helper()
//     },[])
    return(
        <div className="h-creen w-screen p-4 bg-gray-200">
          <Navbar/>
          <div className="flex justify-between">

          </div>
        </div>
    )
}