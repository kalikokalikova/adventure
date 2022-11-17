import React from 'react'
import {MdPersonPin} from 'react-icons/md'
import testAvatar2 from '../assets/eg-img/blue-avatar.png'
import testAvatar1 from '../assets/eg-img/test-avatar1.png'
import testAvatar3 from '../assets/eg-img/test-avatar3.png'

function Testimonials() {
  return (
    <div className='bg-white h-[40%] pb-[10vh] text-black'>
        <h1 className='text-3xl font-bold text-center pt-[4rem]'>Testimonials</h1>
      <div className='flex flex-col md:flex-row items-center justify-center h-[30%]  px-4'>
    
      <div className='w-[100%] flex flex-col bg-white p-3 m-4 rounded-lg md:w-[30%] items-center'>
        <img src={testAvatar1} alt="testimonial-female" className='h-[9.5rem]' />
       
        <p className='text-center py-2 px-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea pariatur dicta nisi ab perferendis?</p>
      </div>
      <div className='w-[100%] flex flex-col bg-white p-3 m-4 rounded-lg md:w-[30%] items-center'>
      <img src={testAvatar2} alt="testimonial-female" className='h-[9.5rem]' />
        <p className='text-center py-2 px-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea pariatur dicta nisi ab perferendis? </p>
      </div>
    
      <div className='w-[100%] flex flex-col bg-white p-3 m-4 rounded-lg md:w-[30%] items-center'>
      <img src={testAvatar3} alt="testimonial-female" className='h-[9.5rem]' />
        <p className='text-center py-2 px-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea pariatur dicta nisi ab perferendis? </p>
      </div>
    
    
      
    </div>
    </div>
  )
}

export default Testimonials
