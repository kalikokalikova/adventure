import React from "react"
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Elevation from "../assets/eg-img/elevation-img.svg"
import Graph from "../assets/eg-img/elevation-grapgh.svg"
import {useState} from "react"
import Pin from "../assets/eg-img/map-pin.svg"

function ResultsForm(props) {

const [miles, setMiles] = useState(1);
let elevation = 1;
  
  return (
  

 
   
           <form action="#" method="POST">
              <div className="overflow-hidden">
                <div className="px-4 py-5 sm:p-6">
                  <div className="font-poppins grid grid-cols-6 gap-6">

                    <div className="flex items-center col-span-6 bg-white py-1 rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    <span className="px-3 text-md">
                          <img src={Pin} alt="map-pin"/>
                        </span>
                      <input
                        type="text"
                        name="place"
                        id="place"
                        placeholder={props.search}
                        defaultValue={props.search}
                        autoComplete="given-place"
                        className="rounded-full block w-full sm:text-lg"
                      />
                    </div>

                    <div className="flex items-center justify-between col-span-6 sm:col-span-6">
                    <div className="flex items-center">
                      <input
                        type="number"
                        name="miles"
                        id="miles"
                        defaultValue={1}
                        value={miles}
                        autoComplete="number-miles"
                        className="text-center block w-1/3 mr-2 rounded-md border-gray-300 shadow-sm sm:text-md"
                      />
                        <label htmlFor="miles" className="mt-1 block text-md font-medium">
                        miles
                      </label>
                    </div>

                    <div className="">
                      <select
                        id="elevation"
                        name="elevation"
                        placeholder="Elevation"
                        autoComplete="elevation-value"
                        className="mt-1 block text-center pl-3 py-2 rounded-full border border-[#69A1AC] bg-white shadow-sm focus:border-[#69A1AC] focus:outline-none focus:ring-[#69A1AC] sm:text-sm"
                      >
                        <option>Elevation</option>
                        <option>Flat</option>
                        <option>Moderate</option>
                        <option>Hilly</option>
                      </select>
                    </div>
                    </div>

                    <div className="flex justify-between items-center col-span-6 sm:col-span-6">
                      <label htmlFor="distance" className="block text-2xl font-medium text-gray-700">
                        {props.miles} miles
                      </label>

                      <div className="py-3">
                        <button
                            type="submit"
                            className="rounded-md border border-transparent bg-[#ffd25a] py-2 px-4 text-lg shadow-lg hover:bg-[#ffd25a] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Re-Route
                        </button>

                    </div>
                    </div>

                    <div className="bg-white rounded-md px-4 col-span-6 rounded-lg md:h-[20vh]">
                        <div className="flex justify-between mt-3 w-full sm:text-md md:flex md:w-[98%] lg:w-[98%]'">
                        <div className="flex">
                        <div className="mr-2">
                            <img src={Elevation} alt="elevation-img"/>
                        </div>
                        <div>
                            <h2>Elevation</h2>
                        </div>
                        </div>
                        
                        <div className="text-right">
                          <h2 className="inline-flex justify-end rounded-md text-sm font-medium">
                            {elevation} ft
                          </h2>
                        </div>
                        </div>
                        <div className="mt-6">
                          <img src={Graph} alt="graph-example"/>
                        </div>
                    </div>

                  </div>
                </div>

              </div>
            </form>
   
  )
}

export default ResultsForm;
