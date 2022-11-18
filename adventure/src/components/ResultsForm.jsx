import React from 'react'
import Elevation from "../assets/eg-img/elevation-img.svg"
import {useState} from "react";

function ResultsForm(props) {

    const [miles, setMiles] = useState(0);
    let elevation = 1;

  return (

            <form action="#" method="POST">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">

                    <div className="col-span-4">
                      <input
                        type="text"
                        name="place"
                        id="place"
                        placeholder={props.search}
                        defaultValue={props.search}
                        autoComplete="given-place"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="flex col-span-6 sm:col-span-3">

                      <input
                        type="number"
                        name="miles"
                        id="miles"
                        value={setMiles}
                        autoComplete="number-miles"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                        <label htmlFor="miles" className="mt-1 block text-sm font-medium text-gray-700">
                        miles
                      </label>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <select
                        id="elevation"
                        name="elevation"
                        placeholder="Elevation"
                        autoComplete="elevation-value"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option>Elevation</option>
                        <option>10</option>
                        <option>20</option>
                        <option>30</option>
                      </select>
                    </div>

                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="distance" className="block text-sm font-medium text-gray-700">
                        {props.miles} miles
                      </label>
                    </div>
                    <div className="col-span-5 sm:col-span-4">
                      <div className="px-4 py-3 sm:px-6">
                        <button
                            type="submit"
                            className="rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Re-Route
                        </button>
                        </div>
                    </div>

                    <div className="col-span-6">
                        <div className="flex mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm md:flex  md:h-[15vh] md:w-[98%] lg:w-[98%]'">
                        <div>
                            <img src={Elevation} alt="elevation-img"/>
                        </div>
                        <div className="">
                            <h2>Elevation</h2>
                        </div>
                        
                        <div className="text-right sm:px-6">
                          <h2 className="inline-flex justify-end rounded-md text-sm font-medium">
                            {elevation} ft
                          </h2>
                        </div>

                        </div>
                    </div>

                    <div className="col-span-6">
                      <input
                        type="text"
                        name="distance"
                        id="distance"
                        rows={3}
                        placeholder="☺ Distance"
                        autoComplete="given-distance"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                  </div>
                </div>

              </div>
            </form>

  )
}

export default ResultsForm;
