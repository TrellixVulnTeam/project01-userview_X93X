import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import GstNavigation from '../Navigation/gstNavigation'
import ItrNavigation from '../Navigation/itrNavigation'


export default function GstViewAll() {

 
      const navigate = useNavigate()
      const [gst_list, setGstList] = useState([])
      const [token, setToken] = useState()
      const {state} = useLocation()
      useEffect(() => {
          async function checkToken() {
             let status = state.status
              let token;
              try {
                  token = await JSON.parse(localStorage.getItem('token'))
                  if (token === null || token === undefined) {
                      navigate('/')
                  }
                  console.log("token set")
                  
              } catch (e) {
                  console.log(e)
              }
              axios({
                  method:"POST",
                  url:"http://3.108.219.92:3800/v1/user/gst/registration/bystatus",
                  headers: {
                      "Authorization": `Bearer ${token}`
                  },
                  data: {
                    status: status
                  }
              }).then(data => {
                  // console.log(data)
                  // console.log(data.data)
                  setGstList(data.data)
              }).catch(error => {
                  console.log(error)
              })
              setToken(token)
          }
          checkToken()
  
      }, [])

    return (
        <>
            <GstNavigation />
            <div className='container'>
            <div className='row m-0 p-0 border'>
              <span className="fs-3 text-uppercase itr-heading-text">View All GST Registration</span>
            </div>
            {/* <div className='row m-0 p-0'>
              <fieldset className='border p-4'>
                <legend className='float-none fw-bold '>View All GST Returns</legend>
    
                <div className='row m-0 p-0'>
                  <div className='col-md-3 col-sm-12'>
                    <label for="first-name" className='form-label'>GST Client Name/GST No</label>
                    <input type="text" className="form-control" id='first-name'></input>
                  </div>
                  <div className='col-md-3 col-sm-12'>
                    <label for="last-name" className='form-label'>Product</label>
                    <select className='form-select' aria-label="--Select--">
                        <option>--Select--</option>
                        <option value="1">Product 1</option>
                        <option value="1">Product 2</option>
                        <option value="1">Product 3</option>
                    </select>

                  </div>
                  <div className='col-md-3 col-sm-12'>
                    <label for="last-name" className='form-label'>Branch ID/Code</label>
                    <input type="text" className="form-control" id='last-name' value='TA29521' disabled></input>
                  </div>
                  <div className='col-md-3 col-sm-12'>
                    <label for="last-name" className='form-label'>Status</label>
                    <select className='form-select' aria-label="--Select--">
                        <option>--Select--</option>
                        <option value="1">Review</option>
                        <option value="1">Processing</option>
                        <option value="1">Pending</option>
                    </select>
                  </div>
                </div>
                <div className='row m-0 p-0'>
                  <div className='col-md-3 col-sm-12'>
                    <label for="first-name" className='form-label'>Apply Date From</label>
                    <input type="text" className="form-control" id='first-name'></input>
                  </div>
                  <div className='col-md-3 col-sm-12'>
                    <label for="first-name" className='form-label'>Apply Date To</label>
                    <input type="text" className="form-control" id='first-name'></input>
                  </div>
                  <div className='col-md-3 col-sm-12'>
                    <label for="last-name" className='form-label'>Month</label>
                    <select className='form-select' aria-label="--Select--">
                        <option>--Select--</option>
                        <option value="1">Jan</option>
                        <option value="1">Feb</option>
                        <option value="1">̨Mar</option>
                        <option value="1">Apr</option>
                        <option value="1">May</option>
                    </select>
                  </div>
                  <div className='col-md-3 col-sm-12'>
                  <label for="last-name" className='form-label'>Coupon No</label>
                    <input type="text" className="form-control" id='last-name' ></input>
                  </div>
                </div>
                <div className='row m-0 p-0'>
                  <div className='col-md-3 col-sm-12'>
                    <label for="first-name" className='form-label'>Form At</label>
                    <select className='form-select' aria-label="--Select--">
                        <option>--Select--</option>
                        <option value="1">Product 1</option>
                        <option value="1">Product 2</option>
                        <option value="1">Product 3</option>
                    </select>
                  </div>
                  <div className='col-md-3 col-sm-12'>
                    <label for="last-name" className='form-label'>Form Fill at Null</label>
                    <select className='form-select' aria-label="--Select--">
                        <option>--Select--</option>
                        <option value="1">Product 1</option>
                        <option value="1">Product 2</option>
                        <option value="1">Product 3</option>
                    </select>

                  </div>
                  <div className='col-md-3 col-sm-12'>
                    <label for="last-name" className='form-label'>Reason</label>
                    <select className='form-select' aria-label="--Select--">
                        <option>--Select--</option>
                        <option value="1">Product 1</option>
                        <option value="1">Product 2</option>
                        <option value="1">Product 3</option>
                    </select>
                  </div>
                  <div className='col-md-3 col-sm-12'>
                    <label for="last-name" className='form-label'>Last Followup By</label>
                    <input type="text" className="form-control" id='first-name'></input>
                  </div>
                </div>
     
                <div className='row m-0 p-3'>
              <button className='submit-button'>Search</button>
            </div>
              </fieldset>
            </div> */}
            
            {/* <div className='row m-0 p-0 border'>
              <span className="fs-3 text-uppercase itr-heading-text">GST Return List</span>
            </div> */}
            <div className='row m-0 p-0'>
            <table className='table table-bordered text-center'>
                <thead>
                  <tr>
                    <td className='fw-bolder'>Login ID</td>
                    <td className='fw-bolder'>GST No</td>
                    <td className='fw-bolder'>Client ID</td>
                    <td className='fw-bolder'>GST Username</td>
                    <td className='fw-bolder'>GST Password</td>
                    <td className='fw-bolder'>Business Name</td>
                    <td className='fw-bolder'>Business Nature</td>
                    <td className='fw-bolder'>View</td>
                  </tr>
                </thead>
                <tbody>
                  {gst_list.map(gst => (
                    <tr>
                      <td>{gst.gst_file_info.loginId  != undefined ? gst.gst_file_info.loginId : null}</td>
                      <td>{gst.gst_file_info.gst_ack_no != undefined ? gst.gst_file_info.gst_ack_no: null}</td>
                      <td>{gst.business_info.gst_client_id != undefined ? gst.business_info.gst_client_id : null}</td>
                      <td>{gst.gst_file_info.gst_portal_username != undefined ? gst.gst_file_info.gst_portal_username : null}</td>
                      <td>{gst.gst_file_info.gst_portal_password != undefined ? gst.gst_file_info.gst_portal_password : null}</td>
                      <td>{gst.business_info.business_name != undefined ? gst.business_info.business_name : null}</td>
                      <td>{gst.business_info.business_nature != undefined ? gst.business_info.business_nature: null}</td>
                      <td className='fw-bolder color-blue cursor-pointer' onClick={() => navigate(`/gst/view/${gst._id  } `, {state:{ gst}})}>Edit</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </div>
        </>
      )
}
