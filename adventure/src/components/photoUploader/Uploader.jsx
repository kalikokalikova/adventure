import React from 'react'
import { useRef } from 'react'

function Uploader({onFileSelect}) {

    const fileInput = useRef(null)

    const handleFileInput = (e) => {
        // handle validations
        onFileSelect(e.target.files[0])
      
        
      };

  return (
    <div>
      <input type="file"
      onChange={handleFileInput} />
      <button
      onClick={e => fileInput.current && fileInput.current.click()}>submit</button>
    </div>
  )
}

export default Uploader
