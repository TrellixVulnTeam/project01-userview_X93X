import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GstNavigation from '../Navigation/gstNavigation'

export default function ViewReturn() {

  const [token, setToken] = useState()
  const [gst_list, setGstList] = useState()
  const navigate = useNavigate()
  useEffect(() => {
    async function verifyToken() {
      let accessToken = ''
      try {
        accessToken = localStorage.getItem('token')
        accessToken = JSON.parse(accessToken)
        if (accessToken === null || accessToken === undefined) {
          navigate('/')
        } else {
          setToken(accessToken)
        }
      } catch (e) { console.log("Error in token", e) }
      console.log(token)
      axios({
        method: "GET",
        url: "3.108.219.92:3800/v1/user/gst/return/getall/branch",
        data: {},
        headers: {
          "Authorization": `Bearer ${accessToken}`
        }
      }).then(data => {
        console.log(data.data)
        // console.log(data.data)
        setGstList(data.data)
      }).catch(error => {
        console.log(error)
      })
    }
    verifyToken()

  }, [])
  


  return (
    <>
        <GstNavigation />
        <div className='container'>
            <div className='row m-0 p-0 border'>
                    <span className="fs-3 text-uppercase itr-heading-text">GST Return List</span>
            </div>
            <div className='row m-0 p-3'>
              {/* <div className='col-md-4 col-sm-12'>
                <label for="first-name" className='form-label'>Enter Category</label>
                <input type="text" className="form-control" id='first-name' ></input>
              </div> */}
              {/* <div className='col-md-4 col-sm-12'>
                < button className='submit-button' style={{'margin-top':'25px'}}>Search</button>
              </div> */}
            </div>
            <div className='row m-0 p-0 border'>
              <span className="fs-3 text-uppercase itr-heading-text">All Gst</span>
            </div>
            <div className='row m-0 p-0'>
              <table className='table table-bordered text-center'>
                <thead>
                  <tr>
                    <td className='fw-bolder'>Client ID</td>
                    <td className='fw-bolder'>Login ID</td>
                    <td className='fw-bolder'>Business Name</td>
                    <td className='fw-bolder'>GST No</td>
                    <td className='fw-bolder'>GST Portal Username</td>
                    <td className='fw-bolder'>GST Portal Password</td>
                    <td className='fw-bolder'>GST Type</td>
                    <td className='fw-bolder'>Year</td>
                    <td className='fw-bolder'>Month</td>
                    <td className='fw-bolder'>View</td>
                  </tr>
                </thead>
                <tbody>
                  {gst_list ? gst_list.map(gst => (
                    <tr>
                      <td>{gst.gst_return_client_id ? gst.gst_return_client_id : null}</td>
                      <td>{gst.loginId ? gst.loginId: null}</td>
                      <td>{gst.business_name ? gst.business_name : null}</td>
                      <td>{gst.gst_no ? gst.gst_no : null}</td>
                      <td>{gst.gst_portal_username ? gst.gst_portal_username: null}</td>
                      <td>{gst.gst_portal_password ? gst.gst_portal_password: null}</td>
                      <td>{gst.gst_type ? gst.gst_type: null}</td>
                      <td>{gst.year ? gst.year : null}</td>
                      <td>{gst.month ? gst.month : null}</td>
                      <td className='fw-bolder color-blue cursor-pointer' onClick={() => navigate(`/gstreturn/view/${gst._id  } `, {state:{ gst}})}>View</td>
                    </tr>
                  )) : null}
                </tbody>
              </table>
            </div>
        </div>
    </>
  )
}
