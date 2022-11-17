import React from 'react'
import {MdPersonPin} from 'react-icons/md'

function Testimonials() {
  return (
    <div className='bg-[#c06c84] h-[40%] pb-[10vh]'>
        <h1 className='text-3xl text-white font-bold text-center pt-[4rem]'>Testimonials</h1>
      <div className='flex flex-col md:flex-row items-center justify-center h-[30%]  px-4'>
    
      <div className='w-[100%] flex flex-col bg-white p-3 m-4 rounded-lg md:w-[30%] items-center'>
        <MdPersonPin className='text-7xl'/>
        <p className='text-center py-2 px-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea pariatur dicta nisi ab perferendis?</p>
      </div>
      <div className='w-[100%] flex flex-col bg-white p-3 m-4 rounded-lg md:w-[30%] items-center'>
        <MdPersonPin className='text-7xl'/>
        <p className='text-center py-2 px-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea pariatur dicta nisi ab perferendis? </p>
      </div>
    
      <div className='w-[100%] flex flex-col bg-white p-3 m-4 rounded-lg md:w-[30%] items-center'>
        <MdPersonPin className='text-7xl'/>
        <p className='text-center py-2 px-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea pariatur dicta nisi ab perferendis? </p>
      </div>
    
    
      
    </div>
    </div>
  )
}

export default Testimonials
