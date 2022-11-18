import React from 'react'
// import Footer from '../components/Footer'
// import NavBar from '../components/NavBar'
import Testimonials from '../components/Testimonials'
import ResultsForm from '../components/ResultsForm'


function Home() {
  return (
    <div className='bg-white text-black h-full '>
{/* <NavBar/> */}
       <div className='h-[8vh] md:flex  bg-[#69a1ac]'> </div>
{/* MAP and INPUT container  */}
    <div className='flex flex-col items-start justify-center md:flex-row bg-white h-[100%]'>
{/* Input container */}
           <div className='hidden bg-[#b7dce0] bg-opacity-60 md:flex  md:h-[82vh] md:w-[45%] lg:w-[25%]'>
             <ResultsForm search="Seattle, WA" miles={2}/>
           </div>
{/* MAP container  */}
            <div className=' w-[100%] h-[83vh] bg-white border-solid border-2 md:h-[82vh] lg:w-[75%] '>
              
            </div>
            
        </div>
{/* Footer  */}
        
        <div className=' h-[10vh] bg-gradient-to-b from-[#f8d06a] to-transparent w-full'>
            </div>
        {/* <Footer/> */}
    </div>
  )
}

export default Home
