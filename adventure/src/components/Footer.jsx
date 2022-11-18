import React from 'react'
import {Link} from "react-router-dom"
import {FaTwitter, FaFacebook} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"


function Footer() {
  return (
    <div>
      <div className='bg-gradient-to-b from-[#f8d06a] to-transparent flex w-[100%] h-[10vh] items-center justify-end pr-4'>
           <p className='pl-2 text-lg'><Link>Follow Us</Link></p> 
           <p className='pl-2 text-lg'><Link><FaTwitter/></Link></p>
            <p className='pl-2 text-lg'><Link><AiFillInstagram/></Link></p>
            <p className='pl-2 text-lg'><Link><FaFacebook/></Link></p>
        </div>
    </div>
  )
}

export default Footer
