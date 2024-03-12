
import Footer from './components/Footer'
import HomeBody from './components/HomeBody'
import Navbar from './components/Navbar'
import Spec1 from './components/specifications1'
import Spec2 from './components/specifications2'

export default function Home() {
  return (
   <div className='h-full w-full p-2 bg-gray-200'>
    <Navbar/>
    <p className='text-3xl font-bold text-orange-600 mt-2 justify-center flex flex-wrap'>Welcome Here</p>
   <HomeBody/>
   <Spec1/>
   <Spec2/>
  <Footer/>
   </div>
  )
}
