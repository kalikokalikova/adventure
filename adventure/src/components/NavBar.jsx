import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <div className='flex justify-between w-[100%] bg-[#69a1ac] text-white'>
                <Link to="/"><h1 className='w-[20%] font-lobster text-4xl p-4'>Strolls</h1></Link>
            <ul className='hidden md:flex justify-around items-center w-[60%] font-poppins '>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="">Contact</Link></li>
                <li><Link to="">Log In</Link></li>
                <li>
                    <button className='bg-[#ffd25a] text-black p-2 rounded-lg shadow-lg'>
                        <Link to="">Sign Up</Link>
                        </button>
                    </li>
              
            </ul>
     </div>
    </div>
  )
}

export default NavBar
