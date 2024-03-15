
import { getServerSession } from 'next-auth'
import Footer from './components/Footer'
import HomeBody from './components/HomeBody'
import Navbar from './components/Navbar'
import Spec1 from './components/specifications1'
import Spec2 from './components/specifications2'
import { options } from './api/auth/[...nextauth]/options'

export default async function Home() {
  const session=await getServerSession(options)
 // console.log(session)
  return (
   <div className='h-full w-full p-4 bg-gray-200 relative'>
    <Navbar/>
    <p className='text-3xl font-bold text-orange-600 mt-2 justify-center flex flex-wrap'>Welcome Here</p>
   <HomeBody/>
   <Spec1/>
   <Spec2/>
  <Footer/>
   </div>
  )
}
