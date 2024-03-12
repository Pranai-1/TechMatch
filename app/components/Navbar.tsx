'use client'

import Link from "next/link"
export default function Navbar(){

    return(
        <div className="h-max w-full bg-gray-100 p-2 flex justify-between rounded-lg">
           <p className="text-orange-600 p-2 text-2xl font-bold">Coders Connect</p>
           <Link className="text-white font-medium p-2 bg-gray-600 rounded-xl self-center" 
          href="/login"
           >Login</Link>
        </div>
    )
}