import React from 'react'
import {Link} from 'react-router-dom'


function LandingPage() {
  return (
    <div>
        <div className='flex h-[100vh] justify-center items-center bg-white text-black transition ease-out duration-500 '>
            <div className='flex flex-col  items-center'>
              <h1 className='font-bold text-3xl pb-6 font-lexend'>Hey! Ready for a <span className='font-lobster text-5xl'>Stroll</span>?</h1>
              <Link to="/home"><button className='font-lexend border-2 rounded-md py-2 px-4 font-bold hover:bg-black hover:ease-in-out hover:duration-300 hover:border-black hover:text-white'>Let's go!</button></Link>
              </div>
        </div>
  
    </div>
  )
}


export default LandingPage
