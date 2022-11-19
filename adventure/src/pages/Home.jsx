import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import InputForm from '../components/InputForm'
//import Map from '../components/Map/Map'


function Home() {
  return (
    <div className='bg-white text-black h-auto overflow-x-hidden'>
      <NavBar/>
       {/* <div className='h-[8vh] md:flex  bg-[#69a1ac]'> </div> */}
{/* MAP and INPUT container  */}
    <div className='flex flex-col items-start justify-center md:flex-row bg-white h-[100%]'>
{/* Input container */}
           <div className='hidden bg-[#b7dce0] bg-opacity-60 md:flex  md:h-[82vh] md:w-[45%] lg:w-[25%]'>
            <InputForm/>
             
           </div>
{/* MAP container  */}
            <div className=' w-[100%] h-[40%] bg-white border-solid border-2 md:h-[50%] lg:w-[75%] '>
              {/*<Map />*/}
            </div>
            
        </div>
{/* Footer  */}
        <Footer/>
       
    </div>
  )
}

export default Home
