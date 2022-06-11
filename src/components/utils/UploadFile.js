import axios from 'axios'
import React, { useState } from 'react'

export default function UploadFile() {

    const [file, setFile] = useState()
    const [base64, setBase64] = useState()
    const handleSubmit = () => {
        let fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onload = () => {
            console.log(fileReader)
            console.log('file is', fileReader.result)
            setBase64(fileReader.result)
        }
        console.log(base64)
        axios({
            method:"POST",
            url:"http://localhost:3800/v1/user/fileupload",
            data: {
                file: base64
            }
        }).then(data => {
            console.log(data)
        }).catch(error => {
            console.log(error)
        })
    }

  return (
    <>
        <div className='container'>
            <input type="file" onChange={(e) => setFile(e.target.files[0])}/><br></br><br></br>
            <button className='btn btn-primary' onClick={handleSubmit}>Upload File</button>
        </div>
    </>
  )
}
