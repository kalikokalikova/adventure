import React from 'react'
import {Link} from 'react-router-dom'


function LandingPage() {
  return (
    <div>
   
        <div className='flex h-[100vh] justify-center items-center bg-black text-white transition ease-out duration-500 '>
            <div className='flex flex-col  items-center'>
              <h1 className='font-bold text-3xl pb-6'>Ready for an adventure?</h1>
              <Link to="/home"><button className='border-2 rounded-md py-2 px-4 font-bold hover:bg-white hover:ease-in-out hover:duration-300 hover:border-black hover:text-black'>Let's go!</button></Link>
              </div>
        </div>
  
    </div>
  )
}


export default LandingPage
