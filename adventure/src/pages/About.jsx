import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Testimonials from '../components/Testimonials'
import winterWalk from '../assets/eg-img/winter_walk.png'
import naturePhone from '../assets/eg-img/nature-phone.png'
import {AiFillLinkedin} from 'react-icons/ai'
import groupPhoto from '../assets/eg-img/group-photo.png'

function About() {
  return (
    <div className='h-[100%] bg-white text-black scroll-smooth'>
        <NavBar/>
        <div className='h-[30%] pb-[2%]'>
            <h1 className='font-poppins text-3xl font-bold text-center pt-[4rem]'>Our Mission</h1>
            <div className='flex flex-col-reverse md:flex-row justify-content items-center'>
                <p className='font-poppins pt-6 text-center px-2 md:text-left md:ml-4 md:px-4 md:w[50%] lg:text-xl lg:mx-[10rem] '> Strolls: A Walking Adventure is here to make walking fun and interactive. Our app pairs walking with the thrill of discovery and a deeper connection to our neighborhoods, leading to a happier, healthier community. </p>
                <img src={naturePhone} alt="" className='md:w-[50%] w-[90%] md:mr-4'/>
            </div>
       </div>
       <Testimonials/>
      <div className='h-[30%] pb-[5%]'>
        <h1 className='font-poppins text-3xl font-bold text-center pb-5  pt-[4rem]'>About Us</h1>
        <div className='flex flex-col md:flex-row justify-content items-center'>
            <img src={groupPhoto} alt="" className='md:w-[40%] w-[80%] md:ml-4'/>
        <p className='font-poppins text-center pt-6 px-6 md:text-right md:mr-4 md:px-4 lg:text-xl md:w-[50%] '> The Strolls team is a mix of developers, designers, mentors, and product managers! We all met during the Girl Develop It Hackathon and collaborated to create this app from the ground up! 
        We come from a diverse background of skillsets, and pride ourselves in organization, communication, mentorship, and supporting our teammates. 
        <br /> Strolls is built with a Ruby on Rails back end and React.js front end. All our styling is done with TailwindCSS, and our designs with Figma. To keep us organized, we used a kanban board on Trello.  </p>
        </div>

{/* developer roll call  */}
      <div className='flex flex-wrap justify-around mt-10'>
          <div className='flex-col w-[100%] md:w-[30%] text-center pb-5'>
                <h1 className='font-poppins font-bold text-2xl pb-4 text-center'>Design</h1>
                <div className='flex-colpb-2'> 
                 
                  <p className='font-poppins'> Lead Designer: 
                    <span className='font-lobster text-xl'> Joyce Han</span>
                  </p> 
                </div>

                <div> 
                <p className='font-poppins'>Designer: 
                    <span className='font-lobster text-xl'>Jennifer Gartner</span>
                  </p> 
                </div>
          </div>
          
          <div className='w-[100%] md:w-[30%] text-center pb-5'>
          <h1 className='font-poppins font-bold text-2xl text-center'>Product</h1>
                <div className='flex-col pb-2'> 
                 
                  <p className='font-poppins'> Manager: 
                    <span className='font-lobster text-xl'> Rachel Fearon</span>
                  </p> 
               
                  
            </div>
       </div>
       <div className='w-[100%] md:w-[30%] text-center pb-5'>
          <h1 className='font-poppins font-bold text-2xl text-center'>Back End</h1>
                <div className='flex-col pb-2'> 
                 
                  <p className='font-poppins'> Lead Engineer: 
                    <span className='font-lobster text-xl'> Calico Seders</span>
                  </p> 
                  <p className='font-poppins'> Engineer: 
                    <span className='font-lobster text-xl'>Marja Centina</span>
                  </p> 
                  
            </div>
       </div>
    </div>
    <div> 
        <div className='mt-10'>
       
        <div className='flex justify-center '>
        
                <div className='flex-col pb-2 md:w-[40%] text-start md:text-center'> 
                <h1 className='font-poppins font-bold text-2xl pb-4 text-center'>Front End</h1>
                  <p className='font-poppins ml-5'> Lead Engineer: 
                    <span className='font-lobster text-xl'> Elizabeth Goullaud</span>
                  </p> 
                  <p className='font-poppins  ml-5'> Engineer: 
                    <span className='font-lobster text-xl'> Alison Lee</span>
                      {/* https://www.linkedin.com/in/alison2686/ */}
                  </p>
                  <p className='font-poppins ml-5'> Engineer: 
                    <span className='font-lobster text-xl'>Sandra Lopez</span>
                  </p> 
                  <p className='font-poppins ml-5'>Engineer: 
                    <span className='font-lobster text-xl'>Natia Lollie</span>
                  </p> 
                   <p className='font-poppins ml-5'> Engineer: 
                    <span className='font-lobster text-xl'>Laura Connor</span>
                  </p> 
                  <p className='font-poppins ml-5'> Engineer: 
                    <span className='font-lobster text-xl'>Justine Meyer</span>
                  </p> 
                </div>

            <div className='flex-col w-[40%]'> 
            <h1 className='font-poppins font-bold text-2xl pb-4 text-center '>Mentorship</h1>
            <p className='font-poppins text-center'> Mentor: 
                    <span className='font-lobster text-xl'> Anne Katzeff</span>
                  </p> 
                 
            
            </div>
        </div>
          </div>
            
         
          
          
      </div>
       
       </div>
    <Footer/>
    </div>
  )
}

export default About