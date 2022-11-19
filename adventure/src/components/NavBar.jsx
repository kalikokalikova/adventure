import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

function NavBar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  }
  return (
    <div className='h-[10%]'>
        <div className=' flex justify-between w-[100%] bg-[#69a1ac] text-white z-30'>
                <Link to="/"><h1 className='w-[20%] font-lobster text-4xl p-4'>Strolls</h1></Link>
            <ul className='hidden md:flex justify-around items-center md:w-[60%] lg:w-[40%] font-poppins '>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="">Log In</Link></li>
                <li>
                    <button 
                    className='bg-[#ffd25a] hover:bg-[#ffd35adc] hover:ease-in-out hover:duration-300 active:shadow-inner-md
                     text-black w-[100%] px-4 py-1 rounded-lg shadow-lg'>
                        <Link to="">Sign Up</Link>
                        </button>
                    </li>
            </ul>
            <div onClick={handleNav} className='block md:hidden p-6'>
                {!nav ? <AiOutlineMenu size={30}/> : <AiOutlineClose size={30}/> }
            </div>
            <div className={!nav ?  'fixed left-[-100%]'  : 'z-10 fixed left-0 top-0 w-[60%] h-full bg-[white] text-black ease-in-out duration-500'}>
            <Link to="/"><h1 className='w-[20%] font-lobster text-black text-4xl p-4'>Strolls</h1></Link>
            <ul className='flex flex-col justify-start items-center w-[100%] font-poppins px-4'>
                <li className='p-4 border-b-2 border-gray-200 w-[100%] hover:text-[#69a1ac] hover:scale-105 hover:duration-300 hover:ease-in-out'><Link to="/home">Home</Link></li>
                <li className='p-4 border-b-2 border-gray-200 w-[100%] hover:text-[#69a1ac] hover:scale-105 hover:duration-300 hover:ease-in-out'><Link to="/about">About Us</Link></li>
                <li className='p-4 border-b-2 border-gray-200 w-[100%] hover:text-[#69a1ac] hover:scale-105 hover:duration-300 hover:ease-in-out'><Link to="">Log In</Link></li>
                <li className='p-4 w-[100%]'>
                    <button className='bg-[#ffd25a] hover:bg-[#ffd35adc] hover:ease-in-out hover:duration-300 active:shadow-inner-md text-black w-[60%] px-[2rem] py-1 rounded-lg shadow-lg'>
                        <Link to="">Sign Up</Link>
                        </button>
                    </li>
            </ul>

            </div>
     </div>
    </div>
  )
}

export default NavBar
