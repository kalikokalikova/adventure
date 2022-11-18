import React from 'react'
// import Footer from '../components/Footer'
// import NavBar from '../components/NavBar'
import Testimonials from '../components/Testimonials'
import winterWalk from '../assets/eg-img/winter_walk.png'
import naturePhone from '../assets/eg-img/nature-phone.png'

function About() {
  return (
    <div className='h-[100%] bg-white text-black'>
        {/* <NavBar/> */}
        <div className='bg-[url("./assets/eg-img/seawall.jpg")] bg-cover bg-center bg-no-repeat h-[20vh]'>
            <h1 className='font-poppins font-bold text-center pt-5 text-4xl'>HERO</h1>
        </div>
      <div className='h-[30%] pb-[5%]'>
        <h1 className='font-poppins text-3xl font-bold text-center pt-[4rem]'>About Us</h1>
        <div className='flex flex-col md:flex-row justify-content items-center'>
            <img src={winterWalk} alt="" className='md:w-[50%] w-[90%]'/>
        <p className='font-poppins text-center pt-6 px-6 md:text-right  md:px-4 md:w-[50%] '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem obcaecati qui assumenda sit optio, maiores illum rerum repellat voluptas iure id corporis, totam libero a tempore quas incidunt. Vero illum iusto temporibus cupiditate magni doloremque autem numquam. Optio fugit, ullam ducimus labore quod voluptatibus repellendus ut eius maiores omnis odio?</p>
        </div>
      
      </div>
       <div className='h-[30%] pb-[10%]'>
            <h1 className='font-poppins text-3xl font-bold text-center pt-[4rem]'>Our Mission</h1>
            <div className='flex flex-col-reverse md:flex-row justify-content items-center'>
                <p className='font-poppins pt-6 text-center px-2 md:text-left md:px-4 md:w[50%] '> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas libero porro impedit laboriosam natus reiciendis qui provident explicabo repellat atque saepe quaerat corporis molestias, alias doloribus praesentium non officia aliquam!</p>
                <img src={naturePhone} alt="" className='md:w-[50%] w-[90%]'/>
            </div>
       </div>
    <Testimonials/>
    {/* <Footer/> */}
    </div>
  )
}

export default About