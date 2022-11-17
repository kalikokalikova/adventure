import React from 'react'
// import Footer from '../components/Footer'
// import NavBar from '../components/NavBar'
import Testimonials from '../components/Testimonials'

function About() {
  return (
    <div className='h-[100%]'>
        {/* <NavBar/> */}
      <div className='h-[30%] bg-[#6c5b7b] pb-[5%]'>
        <h1 className='text-3xl text-white font-bold text-center pt-[4rem]'>ABOUT US</h1>
      <p className='text-center pt-6 px-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quae tempora laborum vel consequatur perferendis?</p>
      </div>
    <div className='h-[30%] bg-[#f8b195] pb-[5%]'>
    <h1 className='text-3xl text-white font-bold text-center pt-[4rem]'>Our Mission</h1>
      <p className='text-center pt-6 px-4'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas libero porro impedit laboriosam natus reiciendis qui provident explicabo repellat atque saepe quaerat corporis molestias, alias doloribus praesentium non officia aliquam!</p>
    </div>
    {/* <Testimonials/> */}
    {/* <Footer/> */}
    </div>
  )
}

export default About