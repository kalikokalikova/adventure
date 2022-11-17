import React from 'react'
// import Footer from '../components/Footer'
// import NavBar from '../components/NavBar'
// import Testimonials from '../components/Testimonials'

function Home() {
  return (
    <div className='bg-[#f8b195] text-black h-full'>
        {/* <NavBar/> */}
        <div className='bg-black h-[30vh]'>
            <h1 className='text-white font-bold text-center pt-5 text-4xl'>HERO</h1>
        </div>
        <div className='flex flex-col md:flex-row bg-[#c06c5b7b] h-[60vh]'>
            <div className='md:w-[45%] w-[100%] bg-[#6c5b78] h-[50%] md:h-[93%] md:my-4 md:ml-4'>
            <h1 className='text-white font-bold text-center pt-5 text-4xl'>INPUT FORM</h1>
            </div>
            <div className='md:w-[65%] w-[100%] bg-[#355c7d] h-[50%] md:h-[93%] md:my-4 md:mr-4'>
            <h1 className='text-white font-bold text-center pt-5 text-4xl'>MAP</h1>
            </div>
        </div>
       {/* <Testimonials/> */}
        {/* <Footer/> */}
    </div>
  )
}

export default Home
