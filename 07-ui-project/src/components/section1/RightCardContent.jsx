import React from 'react'

const RightCardContent = (props) => {
  return (
     <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
            <h2 className='bg-white text-xl font-semibold rounded-full h-9 w-9 flex justify-center items-center'>{props.id+1}</h2>
            <div>
                <p className='text-xl leading-relaxed text-white mb-14'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, expedita rerum officia cum repudiandae vel?</p>
                <div className='flex justify-between'>
                    <button className=' text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                    <button className=' text-white font-medium px-4 py-3 rounded-full'><i class="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContent
