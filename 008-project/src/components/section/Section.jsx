import React from 'react'
import Navbar from './Navbar'
import MainPart from './MainPart'

const Section = (props) => {
  return (
    <div className="min-h-screen text-center bg-yellow-100">
      <Navbar users={props.users}/>
      <MainPart users={props.users}/>
      
    </div>
  )
}

export default Section
