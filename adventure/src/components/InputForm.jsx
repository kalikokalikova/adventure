import React from 'react'
import {useState} from "react"
import Pin from "../assets/eg-img/map-pin.svg"

function InputForm() {
const [miles, setMiles] = useState(1);
let elevation = 1;
    return (
        <form className="rounded px-3 pt-10 pb-10">
            <div className="overflow-hidden">
                <div className="">
                <div className="font-poppins">
                <div className="flex items-center col-span-6 bg-white py-1 rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    <span className="px-3 text-md">
                          <img src={Pin} alt="map-pin"/>
                        </span>
                      <input
                        type="text"
                        name="place"
                        id="place"
                        defaultValue="Seattle, Washington"
                        autoComplete="given-place"
                        className="rounded-full block w-full sm:text-lg"
                      />
                    </div>

            <br />

            <div className="flex items-center mx-4 justify-between col-span-6 sm:col-span-6">
                    <div className="flex items-center">
                      <input
                        type="number"
                        name="miles"
                        id="miles"
                        defaultValue={1}
                        value={miles}
                        autoComplete="number-miles"
                        className="text-center block w-1/5 mr-2 rounded-full border-gray-300 shadow-sm sm:text-md"
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

            <br />
            <br />

            <button className="block border w-full bg-[#ffd25a] shadow-md rounded-lg py-3 px-3 " type="submit">
                Find a Route
            </button>
            </div>
                </div>

              </div>
        </form>


    )
}

export default InputForm
