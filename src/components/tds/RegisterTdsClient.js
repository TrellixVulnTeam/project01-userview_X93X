import axios from 'axios'
import React, { useEffect, useId, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ItrNavigation from '../Navigation/itrNavigation'
import TdsNavigation from '../Navigation/TdsNavigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ItrForm() {
  const navigate = useNavigate()
  const [token, setToken] = useState()
  const [tan_no, setTanNo] = useState()
  const [department_name, setDepartmentName] = useState()
  const [mobile, setMobile] = useState()
  const [email, setEmail] = useState()
  const [address, setAddress] = useState()
  const [trace_user_name, setTraceUsername] = useState()
  const [trace_password, setTracePassword] = useState()


  useEffect(() => {
    async function checkToken() {
      let token;
      try {
        token = await JSON.parse(localStorage.getItem('token'))
        if (token === null || token === undefined) {
          navigate('/')
        }
        console.log("token set")
        setToken(token)
      } catch (e) {
        console.log(e)
      }

    }
    checkToken()

  }, [])

  const handleSubmit = () => {
    let data = {
      tan_no, department_name, mobile, email, address, trace_user_name, trace_password
    }
    axios({
      method: "POST",
      url: "3.108.219.92:3800/v1/user/tds/register/client",
      headers: {
        "Authorization": `Bearer ${token}`
      },
      data: data
    }).then(data => {
      console.log(data)
      if (data.status == 200) {
        console.log(data.data.Code)
        console.log(data.data.Code == "400")
        if (data.data.Code == "400") {
          toast.error('TAN No already Registered! Please Try Different TAN No', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.success('Client Registered Successfully', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      }
    }).catch(error => {
      console.log(error)
    })
  }


  return (
    <>
      <TdsNavigation />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className='container'>

        <div className='row m-0 p-0 border'>
          <span className="fs-3 text-uppercase itr-heading-text">T.D.S. Client</span>
        </div>

        <div className='row m-0 p-0'>
          <fieldset className='border p-4'>
            <legend className='float-none fw-bold '>T.D.S. Client</legend>

            <div className='row m-0 p-0'>
              <div className='col-md-3 col-sm-12'>
                <label for="first-name" className='form-label'>TAN No.</label>
                <input type="text" className="form-control" id='first-name' onChange={(e) => setTanNo(e.target.value)} ></input>
              </div>
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Department Name</label>
                <input type="text" className="form-control" id='last-name' onChange={(e) => setDepartmentName(e.target.value)} ></input>
              </div>
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Mobile No</label>
                <input type="text" className="form-control" id='last-name' onChange={(e) => setMobile(e.target.value)}></input>
              </div>
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Email ID</label>
                <input type="text" className="form-control" id='last-name' onChange={(e) => setEmail(e.target.value)}></input>
              </div>
            </div>
            <div className='row m-0 p-0'>
              <div className='col-md-12 col-sm-12'>
                <label for="last-name" className='form-label'>Address</label>
                <textarea className='form-control' onChange={(e) => setAddress(e.target.value)}></textarea>
              </div>
            </div>
            <div className='row m-0 p-0'>
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Trace User Name</label>
                <input type="text" className="form-control" id='last-name' onChange={(e) => setTraceUsername(e.target.value)}></input>
              </div>
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Trace Password</label>
                <input type="text" className="form-control" id='last-name' onChange={(e) => setTracePassword(e.target.value)}></input>
              </div>
            </div>


          </fieldset>
        </div>
        <div className='row m-0 p-3'>
          <button className='submit-button' onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </>
  )
}
