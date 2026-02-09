import React from 'react'
import {Bookmark} from 'lucide-react'
import NavBar1 from './NavBar1'
import CardContent from './CardContent'
import Footer from './Footer'

const MainPart = () => {
  return (
    <div>
       <h1 className='text-6xl text-white drop-shadow-lg font-bold py-10'>Card Design</h1>
       <div className='w-72 h-96 bg-white p-4'>
       <NavBar1/>
       <CardContent/>
       <Footer/>
       
   

       </div>
    </div>
  )
}

export default MainPart
