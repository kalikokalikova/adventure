import React from 'react'
import {Link} from "react-router-dom"
import {FaTwitter, FaFacebook} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"
import {BsMap} from 'react-icons/bs'
// import {SlPicture} from 'react-icons/sl'
import {MdOutlineAddAPhoto} from 'react-icons/md'


function Footer() {
  return (
    <div >
{/* Medium and large screen footer view  */}
      <div className='bg-gradient-to-b from-[#b7dce0] md:from-[#f8d06a] to-transparent flex w-[100%] h-[10vh] items-center justify-end md:pr-4'>
           <div className=' hidden md:flex w-[100%] h-[10vh] items-center justify-end pr-4'>  
             <p className='pl-2 text-lg'><Link>Follow Us</Link></p> 
           <p className='pl-2 text-lg'><Link><FaTwitter/></Link></p>
            <p className='pl-2 text-lg'><Link><AiFillInstagram/></Link></p>
            <p className='pl-2 text-lg'><Link><FaFacebook/></Link></p>
        </div>

{/* mobile screen footer view  */}
        <div className='flex justify-evenly w-[100%] md:hidden items-center'>
          <div className='flex-col w-[50%] hover:cursor-pointer hover:scale-110 hover:duration-500 hover:ease-in-out'>
            <p className='text-2xl text-center translate-x-[45%] pb-1 '><BsMap/></p>
            <p className='text-center font-poppins'>View Map</p>
          </div>
          <div className=' flex-col w-[50%] hover:cursor-pointer hover:scale-110 hover:duration-500 hover:ease-in-out'>
            <p className='text-2xl translate-x-[45%] pb-1 '><MdOutlineAddAPhoto/></p>
            <p className='font-poppins text-center'>Add a Photo</p>
          </div>
          
        </div>
      </div>
        
    </div>
  )
}

export default Footer
