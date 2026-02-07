import React from 'react'
import Navbar from './Navbar'
import Pag1Content from './Pag1Content'


const Section1 = (props) => {
  return (
    <div className='h-screen w-full'>
      <Navbar/>
      <Pag1Content users={props.users}/>
    </div>
  )
}

export default Section1
