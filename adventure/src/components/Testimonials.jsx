import React from 'react'
import {MdPersonPin} from 'react-icons/md'
import testAvatar2 from '../assets/eg-img/blue-avatar.png'
import testAvatar1 from '../assets/eg-img/test-avatar1.png'
import testAvatar3 from '../assets/eg-img/test-avatar3.png'

function Testimonials() {
  return (
    <div className='bg-black h-[40%] pb-[10vh] text-black'>
        <h1 className='font-lexend text-3xl text-white font-bold text-center pb-4 pt-[4rem]'>Testimonials</h1>
      <div className='flex flex-col md:flex-row items-center justify-center h-[30%]  px-4'>
    
      <div className='w-[100%] flex flex-col bg-white p-3 m-4 rounded-lg md:w-[30%] items-center shadow-md'>
        <img src={testAvatar1} alt="testimonial-female" className='h-[9.5rem]' />
       
        <p className='font-heebo text-center py-2 px-4'>This app is AMAZING! I love exploring my neighborhood. Seriously, get this app. </p>
      </div>
      <div className='w-[100%] flex flex-col bg-white p-3 m-4 rounded-lg md:w-[30%] items-center shadow-md'>
      <img src={testAvatar2} alt="testimonial-female" className='h-[9.5rem]' />
        <p className='font-heebo text-center py-2 px-4'>This app is witchcraft in the best way. I've been walking every day since downloading. 10/10 </p>
      </div>
    
      <div className='w-[100%] flex flex-col bg-white p-3 m-4 rounded-lg md:w-[30%] items-center shadow-md'>
      <img src={testAvatar3} alt="testimonial-female" className='h-[9.5rem]' />
        <p className='font-heebo text-center py-2 px-4'>I recommended this app to recovering orthopedic patients to get back on their feet and they love it! </p>
      </div>
    
    
      
    </div>
    </div>
  )
}

export default Testimonials
