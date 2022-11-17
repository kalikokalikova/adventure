import React from 'react'
// import Footer from '../components/Footer'
// import NavBar from '../components/NavBar'
import Testimonials from '../components/Testimonials'
import Map from '../components/Map/Map'


function Home() {
  return (
    <div className='bg-black text-black h-full'>
        {/* <NavBar/> */}
        <div className='bg-[url("./assets/eg-img/city-walk.jpg")] bg-cover bg-center bg-no-repeat h-[35vh]'>
            <h1 className='font-bold text-center pt-5 text-4xl'>HERO</h1>
        </div>
        <div className='flex flex-col items-center justify-center m-4 md:flex-row bg-black h-[60vh]'>
            <div className='md:w-[45%] w-[100%] bg-white border-solid border-2  h-[60%] md:h-[93%] md:my-4 md:ml-4'>
            <h1 className=' font-bold text-center pt-5 text-4xl'>INPUT FORM</h1>
            </div>
            <div className='md:w-[65%] w-[100%] bg-white h-[100%] border-solid border-2  md:h-[93%] md:my-4 md:mr-4'>
              <h1 className=' font-bold text-center pt-5 text-4xl'>
                MAP 
                <Map />
              </h1>
            </div>
        </div>
       <Testimonials/>
        {/* <Footer/> */}
    </div>
  )
}

export default Home
