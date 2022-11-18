import React from 'react'

function InputForm() {
    return (
        <form className="bg-gray rounded px-3 pt-10 pb-10">
            <input
                id="location"
                name="location"
                type="text"
                required="isRequired"
                className="block border rounded-lg w-full py-3 px-5"
                placeholder="Seattle, Washington"
            />

            <br />

            <div className="flex space-x-4">

                <div className="flex space-x-2">
                    <input
                        id="miles"
                        name="miles"
                        type="number"
                        required="isRequired"
                        className="border rounded-lg py-3 w-12 text-center"
                        placeholder="2"
                    />

                    <p className="rounded-lg py-3">miles</p>
                </div>

                <select className="border rounded-3xl px-5 py-3">
                    <option selected value="elevation">Elevation</option>
                    <option value="flat">Flat</option>
                    <option value="moderate">Moderate</option>
                    <option value="hilly">Hilly</option>
                </select>


            </div>

            <br />
            <br />

            <button className="block border w-full shadow-md rounded-lg py-3 px-3 " type="submit">
                Find a Route
            </button>

        </form>


    )
}

export default InputForm
