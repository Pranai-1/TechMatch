'use client'

import { signOut, useSession } from "next-auth/react"
import Link from "next/link"
export default function Navbar(){
  const {data}=useSession()
  console.log(data)
    return(
        <div className="h-max w-full bg-gray-100 p-2 flex justify-between rounded-lg">
           <p className="text-orange-600 p-2 text-2xl font-bold">Coders Connect</p>
           {data?.user ?(
              <>
               <button className="text-white font-medium p-2 bg-gray-600 rounded-xl self-center" 
        onClick={()=>signOut()}
           >Logout</button>
              </>
           ):(
           <>
            <Link className="text-white font-medium p-2 bg-gray-600 rounded-xl self-center" 
          href="/login"
           >Login</Link>
           </>)}
          
        </div>
    )
}