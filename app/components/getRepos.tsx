"use client"
import axios from "axios";


export default async function getRepos(url:string,setRepos:any){
           console.log("Hello")
        const response=await axios.get(url)
        const repoArray=response.data
      
   repoArray.sort((a:any,b:any)=>b.size-a.size)
   if(repoArray.length<5)
   setRepos(repoArray)
else{
        const x=repoArray.slice(0,5)
        setRepos(x)
}
return null
}