import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


export default function ViewGstReturn() {

  const navigate = useNavigate()
  const { state } = useLocation()
  const gst_return = state.gst
  const [token, setToken] = useState()
  const [bdm_email, setBdmEmail] = useState()
  const [bdm_id, setBdmId] = useState()

  useEffect( () => {
    async function verifyToken() {
      let accessToken = ''
      try {
        accessToken =  localStorage.getItem('token')
        accessToken = JSON.parse(accessToken)
        if(accessToken === null || accessToken === undefined) {
          navigate('/')
        } else {
          setToken(accessToken)
        }
      } catch(e) { console.log("Error in token", e) }
    }
    verifyToken()
    
  }, [])


  const handleSubmit = () => {
    let id = gst_return._id
    let bdm_id = '90123457603209'
    let data = {id, bdm_email, bdm_id}
    console.log(data)
    axios({
      method:"POST",
      url:"http://3.108.219.92:3800/v1/user/gst/return/assingtobdm",
      headers: {
        "Authorization": `Bearer ${token}`
      }, 
      data: data
    }).then(data => {
      console.log(data)
    }).catch(error => {
      console.log(error)
    })
  }
  

  const handleDenyRecharge = () => {

  }
  //recharge/update
  //loginId, amount, reward_points, id

  return (
    <>
        
          <div className='container'>
            <div className='row m-0 p-0 border'>
              <span className="fs-3 text-uppercase itr-heading-text">GST Return File Information</span>
            </div>
            <div className='row m-0 p-0'>

            </div>

            <div className='row m-0 p-0'>
              <fieldset className='border'>
                <legend className='float-none fw-bold '>GST Return File Information</legend>

                <div className='row m-0 p-0'>
                  <div className='col-md-6 col-sm-12'>
                    <table className='table text-center'>
                      <tr>
                        <th className='table-border table-box'>GST Return ACK No</th>
                        <td className='table-border table-box'>{gst_return.gst_return_ack_no ? gst_return.gst_return_ask_no : null}</td>
                      </tr>
                      <tr>
                        <th className='table-border table-box'>GST Return Client ID</th>
                        <td className='table-border table-box'>{gst_return.gst_return_client_id ? gst_return.gst_return_client_id : null}</td>
                      </tr>
                      <tr>
                        <th className='table-border table-box'>Login ID</th>
                        <td className='table-border table-box'>{gst_return.loginId ? gst_return.loginId : null}</td>
                      </tr>
                      <tr>
                        <th className='table-border table-box'>Mobile</th>
                        <td className='table-border table-box'>{gst_return.mobile ? gst_return.mobile : null}</td>
                      </tr>
                      <tr>
                        <th className='table-border table-box'>Email</th>
                        <td className='table-border table-box'>{gst_return.email ? gst_return.email : null}</td>
                      </tr>
                      <tr>
                        <th className='table-border table-box'>State</th>
                        <td className='table-border table-box'>{gst_return.state ? gst_return.state : null}</td>
                      </tr>
                      <tr>
                        <th className='table-border table-box'>Address</th>
                        <td className='table-border table-box'>{gst_return.address ? gst_return.address : null}</td>
                      </tr>
                      <tr>
                        <th className='table-border table-box'>Month</th>
                        <td className='table-border table-box'>{gst_return.month ? gst_return.month : null}</td>
                      </tr>
                      <tr>
                        <th className='table-border table-box'>Year</th>
                        <td className='table-border table-box'>{gst_return.year ? gst_return.year : null}</td>
                      </tr>
                      <tr>
                        <th className='table-border table-box'>GST No</th>
                        <td className='table-border table-box'>{gst_return.gst_no ? gst_return.gst_no : null}</td>
                      </tr>
                     
                      <tr>
                        <th className='table-border table-box'>GST Portal Username</th>
                        <td className='table-border table-box'>{gst_return.gst_portal_username ? gst_return.gst_portal_username : null}</td>
                      </tr>
                      <tr>
                        <th className='table-border table-box'>GST Portal Password</th>
                        <td className='table-border table-box'>{gst_return.gst_portal_passowrd ? gst_return.gst_portal_password : null}</td>
                      </tr>
                      <tr>
                        <th className='table-border table-box'>GST Type</th>
                        <td className='table-border table-box'>{gst_return.gst_type ? gst_return.gst_type : null}</td>
                      </tr>
                      <tr>
                        <th className='table-border table-box'>GST Subtype</th>
                        <td className='table-border table-box'>{gst_return.gst_subtype ? gst_return.gst_subtype : null}</td>
                      </tr>
                      <tr>
                        <th className='table-border table-box'>GST File URL</th>
                        <td className='table-border table-box'>
                          <a href={gst_return.gst_user_file_url ? gst_return.gst_user_file_url : null} target="_blank">See Receipt</a>
                        </td>
                      </tr>
                      <tr>
                        <th className='table-border table-box'>Total Purchase Amount</th>
                        <td className='table-border table-box'>{gst_return.total_purchase_amount ? gst_return.total_purchase_amount : null}</td>
                      </tr>
                      <tr>
                        <th className='table-border table-box'>Total Sales Amount</th>
                        <td className='table-border table-box'>{gst_return.total_sales_amount ? gst_return.total_sales_amount : null}</td>
                      </tr>
                      <tr>
                        <th className='table-border table-box'>Coupon No</th>
                        <td className='table-border table-box'>{gst_return.coupon_no ? gst_return.coupon_no : null}</td>
                      </tr>
                    </table>
                  </div>
                </div>







              </fieldset>
            </div>
          </div>
        
      

    </>
  )
}
