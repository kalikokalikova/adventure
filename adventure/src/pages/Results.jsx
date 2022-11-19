import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
//import Map from '../components/Map/Map'
import ResultsForm from '../components/ResultsForm'

function Results() {
  return (
    <div>
       <div className='bg-white text-black h-full '>
      <NavBar/>
{/* MAP and RESULTS container  */}
    <div className='flex flex-col items-start justify-center md:flex-row bg-white h-[100%]'>
{/* RESULTS container */}
           <div className='hidden bg-[#b7dce0] bg-opacity-60 md:flex  md:h-[82vh] md:w-[45%] lg:w-[25%]'>
             <ResultsForm/>
           </div>
{/* MAP container  */}
            <div className=' w-[100%] h-[83vh] bg-white border-solid border-2 md:h-[82vh] lg:w-[75%] '>
              {/*<Map />*/}
            </div>
            
        </div>
{/* Footer  */}
        <Footer/>
       
    </div>
    </div>
  )
}

export default Results
