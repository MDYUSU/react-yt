import React from 'react'
import LeftContent from './LeftContent'
import Rightcontent from './Rightcontent'

const Pag1Content = (props) => {
  return (
    <div className='pb-14 pt-4 flex gap-10  h-[90vh]  px-18'>
      <LeftContent/>
      <Rightcontent users={props.users}/>
    </div>
  )
}

export default Pag1Content
