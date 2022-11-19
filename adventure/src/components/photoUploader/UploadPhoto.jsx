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
    <div className='ml-4 pb-5'>
       <form className='flex flex-col m-4 w-[60%] justify-center'>
            <input 
            type="text"
            value={name} 
            placeholder="Photo Name"
            onChange={(e) => setName(e.target.value)}
            className="rounded-full block w-full sm:text-lg pb-4 shadow-lg"
             />

            <input 
            type="text"
            value={description} 
            placeholder="Photo Description"
            onChange={(e) => setDescription(e.target.value)}
            className="rounded-full block w-full sm:text-lg mb-4 shadow-lg"
            />
            <input 
            type="file"
            value={selectedFile} 
            onChange={(e) => setSelectedFile(e.target.value)}
            />
      {/* <Uploader */}
        {/* /> */}

        <button onClick={submitForm}>Submit</button>
      </form>
    </div>
  )
}

export default UploadPhoto;