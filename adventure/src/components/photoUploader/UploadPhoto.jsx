import React from 'react'
import { useState } from 'react';
import Uploader from './Uploader';

function UploadPhoto() {
    const [name, setName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [description, setDescription] = useState("");

    const submitForm = () => {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description)
      formData.append("file", selectedFile);
    }
    // !not sure where to uplaod these files to....
    //   axios
    //     .post(UPLOAD_URL, formData)
    //     .then((res) => {
    //       alert("File Upload success");
    //     })
    //     .catch((err) => alert("File Upload Error"));
    // };
  return (
    <div className='ml-4 pb-5 w-[100%] h-[80%] flex justify-center mt-[5rem]'>
       <form className='flex flex-col m-4 w-[80%] justify-center bg-[#69a1ac] rounded-lg px-3 pt-10 pb-10 '>
            <h1 className='font-poppins mb-8 text-center text-xl font-bold'> Add your Discovery to the Map!</h1>
            <input 
            type="text"
            value={name} 
            placeholder="Photo Name"
            required
            onChange={(e) => setName(e.target.value)}
            className="rounded-lg w-[50%] block mx-auto sm:text-lg pb-4 mb-4 text-center shadow-lg"
             />

            <input 
            type="text"
            value={description} 
            placeholder="Photo Description"
            required
            onChange={(e) => setDescription(e.target.value)}
            className="rounded-lg block w-[70%] mx-auto h-[40%] sm:text-lg mb-4 shadow-lg text-center"
            />
            <input 
            type="file"
            value={selectedFile} 
            onChange={(e) => setSelectedFile(e.target.value)}
            className="ml-[25%]"
            />
      {/* <Uploader */}
        {/* /> */}

        <button 
        className=" border w-[30%] px-6 mx-auto mt-4 bg-[#ffd25a] shadow-lg rounded-lg py-2 hover:bg-[#ffd35adc] hover:ease-in-out hover:duration-300 active:shadow-inner-md"
        onClick={submitForm}>Submit</button>
      </form>
    </div>
  )
}

export default UploadPhoto;