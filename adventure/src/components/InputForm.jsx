import React from 'react'
import {useState} from "react"
import Pin from "../assets/eg-img/map-pin.svg"
import Up from "../assets/eg-img/Arrow-up.png"
import Down from "../assets/eg-img/Arrow-down.png"
import { Link } from 'react-router-dom'
import PhotoCarousel from './PhotoCarousel'
import UploadPhoto from '../components/photoUploader/UploadPhoto'

function InputForm() {
    const [miles, setMiles] = useState(1);
    let elevation = 1;

    const increase = () => {
        setMiles(miles + 1)
    }
    const decrease = () => {
        if(miles > 0) setMiles(miles - 1)
    }

    return (
      <div className='flex-col justify-center items-center'>
        <form className="rounded px-3 pt-10 pb-2 ">
            <div className="overflow-hidden">
                <div className="">
                <div className="font-poppins">
                <div className="flex items-center col-span-6 bg-white py-1 rounded-lg border-gray-300 shadow-sm focus:border-gray-400 focus:ring-gray-400">
                    <span className="px-3 text-md">
                          <img src={Pin} alt="map-pin"/>
                        </span>
                      <input
                        type="text"
                        name="place"
                        id="place"
                        placeholder="where to?"
                        autoComplete="given-place"
                        className="rounded-full block w-full sm:text-lg"
                      />
                    </div>

            <br />

            <div className="flex items-center mx-4 justify-between col-span-6 sm:col-span-6">
                    <div className="flex items-center">
                        <div>
                            <img src={Up} alt="arrow-up" onClick={increase}/>
                            <img src={Down} alt="arrow-down" onClick={decrease}/>
                        </div>
                      <input
                        type="text"
                        name="miles"
                        id="miles"
                        defaultValue={1}
                        value={miles}
                        autoComplete="number-miles"
                        className="text-center block w-1/5 ml-1 mr-2 rounded-lg border-gray-300 shadow-sm sm:text-md"
                      />
                        <label htmlFor="miles" className="mt-1 block text-md font-medium">
                        miles
                      </label>
                    </div>

                    <div>
                      <select
                        id="elevation"
                        name="elevation"
                        placeholder="Elevation"
                        autoComplete="elevation-value"
                        className="hidden mt-1 block text-center pl-3 py-2 rounded-full border border-[#69A1AC] bg-white shadow-sm focus:border-[#69A1AC] focus:outline-none focus:ring-[#69A1AC] sm:text-sm"
                      >
                        <option>Elevation</option>
                        <option>Flat</option>
                        <option>Moderate</option>
                        <option>Hilly</option>
                      </select>
                    </div>
                    </div>

            <br />
            <br />
            <div className='flex justify-center w-full'>  
              <Link to="/home"> <button className=" border w-[100%] px-6  bg-[#ffd25a] shadow-lg rounded-lg py-3 hover:bg-[#ffd35adc] hover:ease-in-out hover:duration-300 active:shadow-inner-md" type="submit">
                Discover
            </button></Link></div>
          
            </div>
                </div>

              </div>
        </form>
        <div className='hidden h-[50%] translate-y-[-15%]'><UploadPhoto/></div>
        <div className='mt-[5rem]'><PhotoCarousel/></div>
        
        </div>
    )
}

export default InputForm
