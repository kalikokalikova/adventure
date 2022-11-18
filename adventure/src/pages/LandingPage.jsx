import React from 'react'
import {Link} from 'react-router-dom'
import landingImg from '../assets/eg-img/landing.png'
import hikingImg from '../assets/eg-img/hiking.png'

function LandingPage() {
  return (
    <div>
        <div className='flex h-[100vh] flex-col justify-center items-center bg-white text-black transition ease-out duration-1500 '>
            <img src={landingImg} alt="" className='md:w-[80%] lg:w-[25%] lg:translate-x-[145%] lg:translate-y-[-5%]'/>
            <div className=' flex flex-col justify-center items-center lg:translate-y-[0%] w-[100%]'>
              <h1 className='font-bold text-center text-3xl pb-[3rem] font-poppins md:text-5xl'
                 >Welcome to <br className='lg:hidden' />
                 <span 
                    className='font-lobster text-5xl md:text-7xl'>Strolls</span></h1>
                <Link to="/home">
                <button 
                className='font-poppins shadow-lg border-none bg-[#89c5cc] rounded-md pt-2 px-[4rem]
                md:text-2xl
                 hover:bg-[#69a1ac] hover:ease-in-out hover:duration-300 active:shadow-inner-md'>
                  Let's go!</button>
                  </Link>
              </div>
              <img src={hikingImg} alt="" className='hidden lg:flex lg:flex-col lg:w-[25%] translate-y-[-10%] translate-x-[-130%]'/>
        </div>
  
    </div>
  )
}


export default LandingPage
