import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
     const navigate=useNavigate()
  return (
    <div className='py-2 px-5 bg-cyan-700'>
      <button 
      onClick={()=>{
        navigate('/');
      }}
      className='font-medium bg-amber-500 py-3 px-2 rounded mt-3 ml-2'>Back to home page</button>

      <button 
      onClick={()=>{
        navigate(-1);
      }}
      className='font-medium bg-amber-500 py-3 px-7 rounded mt-3 ml-2'>Back</button>
      <button 
      onClick={()=>{
        navigate(+1);
      }}
      className='font-medium bg-amber-500 py-3 px-7 rounded mt-3 ml-2'>Next</button>
    </div>
  )
}

export default Navbar2
