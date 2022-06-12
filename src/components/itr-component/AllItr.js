import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ItrNavigation from '../Navigation/itrNavigation'


export default function AllItr() {
  const navigate = useNavigate()
  const [token, setToken] = useState()
  const [itr_list, setItrList] = useState()
  useEffect(() => { 
      async function checkToken() {
        try {
          let token = localStorage.getItem('token')
          if(token === null || token === undefined) {
            navigate('/')
          }
        } catch(e) {

        }
      }
      checkToken()
      axios({
        method:"GET",
        url:"http://3.108.219.92:3800/v1/user/itr/getall/id",
        headers: {
          "Authorization": `Bearer ${token}`
        },
      }).then(data => {
        console.log(data.data)
      }).then(error => {
        console.log(error)
      })
  }, [])
    const tableData = [
        {
          "id":1,
          "year":2022-23,
          "clientCode": "TA29521/057843",
          "clientName":"Jatin Mandoriya",
          "itrType":"Original",
          "dob":"06-06-1998",
          "pan":"ETZPM9004G",
        },{
          "id":1,
          "year":2022-23,
          "clientCode": "TA29521/057843",
          "clientName":"Jatin Mandoriya",
          "itrType":"Original",
          "dob":"06-06-1998",
          "pan":"ETZPM9004G",
        },{
          "id":1,
          "year":2022-23,
          "clientCode": "TA29521/057843",
          "clientName":"Jatin Mandoriya",
          "itrType":"Original",
          "dob":"06-06-1998",
          "pan":"ETZPM9004G",
        },{
          "id":1,
          "year":2022-23,
          "clientCode": "TA29521/057843",
          "clientName":"Jatin Mandoriya",
          "itrType":"Original",
          "dob":"06-06-1998",
          "pan":"ETZPM9004G",
        },{
          "id":1,
          "year":2022-23,
          "clientCode": "TA29521/057843",
          "clientName":"Jatin Mandoriya",
          "itrType":"Original",
          "dob":"06-06-1998",
          "pan":"ETZPM9004G",
        },{
          "id":1,
          "year":2022-23,
          "clientCode": "TA29521/057843",
          "clientName":"Jatin Mandoriya",
          "itrType":"Original",
          "dob":"06-06-1998",
          "pan":"ETZPM9004G",
        },
      ]
    

    return (
        <>
            <ItrNavigation />
            <div className='container'>
            <div className='row m-0 p-0 border'>
              <span className="fs-3 text-uppercase itr-heading-text">View All ITR Files</span>
            </div>
            <div className='row m-0 p-0'>
              <fieldset className='border p-4 box-style'>
                <legend className='float-none fw-bold '>View All Registered Customers</legend>
                <div className='row m-0 p-0'>
                <div className='col-md-3 col-sm-12'>
                    <label for="last-name" className='form-label'>Venture</label>
                    <input type="text" className="form-control" id='last-name' value="Etaxway Services Limited" disabled></input>
                  </div>
                  <div className='col-md-3 col-sm-12'>
                    <label for="pan" className='form-label'>Branch Code/User Id</label>
                    <input type="text" className="form-control" id='pan' value="TA29521" disabled></input>
                  </div>
                </div>
    
                <div className='row m-0 p-0'>
                  <div className='col-md-3 col-sm-12'>
                    <label for="first-name" className='form-label'>Client Name</label>
                    <input type="text" className="form-control" id='first-name'></input>
                  </div>
                  <div className='col-md-3 col-sm-12'>
                    <label for="last-name" className='form-label'>PAN No</label>
                    <input type="text" className="form-control" id='last-name' ></input>
                  </div>
                  <div className='col-md-3 col-sm-12'>
                    <label for="last-name" className='form-label'>Client Code</label>
                    <input type="text" className="form-control" id='last-name'></input>
                  </div>
                  <div className='col-md-3 col-sm-12'>
                    <label for="last-name" className='form-label'>Mobile</label>
                    <input type="text" className="form-control" id='last-name'></input>
                  </div>
                </div>
                <div className='row m-0 p-0 '>
                  <div className='col-md-3 col-sm-12'>
                    <label for="first-name" className='form-label'>Coupon No</label>
                    <input type="text" className="form-control" id='first-name'></input>
                  </div>
                  <div className='col-md-3 col-sm-12'>
                    <label for="last-name" className='form-label'>ITR</label>
                    {/* <input type="text" className="form-control" id='last-name' ></input> */}
                    <select className='form-select' aria-label="--Select--">
                        <option>--Select--</option>
                        <option value="1">ITR-1</option>
                        <option value="1">ITR-2</option>
                        <option value="1">ITR-3</option>
                        <option value="1">ITR-4</option>
                        <option value="1">Other</option>
                    </select>
                  </div>
                  <div className='col-md-3 col-sm-12'>
                  <label for="last-name" className='form-label'>Asst. Year</label>
                    {/* <input type="text" className="form-control" id='last-name' ></input> */}
                    <select className='form-select' aria-label="--Select--">
                        <option>--Select--</option>
                        <option value="1">2022-23</option>
                        <option value="1">2021-22</option>
                        <option value="1">2020-21</option>
                        <option value="1">2019-18</option>
                        <option value="1">2018-17</option>
                    </select>
                  </div>
                  <div className='col-md-3 col-sm-12'>
                  <label for="last-name" className='form-label'>ITR Type</label>
                    <select className='form-select' aria-label="--Select--">
                        <option>--Select--</option>
                        <option value="1">Original Return</option>
                        <option value="1">Revised Return</option>
                    </select>
                  </div>
                </div>
                <div className='row m-0 p-0'>
                <div className='col-md-3 col-sm-12'>
                  <label for="last-name" className='form-label'>Product</label>
                    <select className='form-select' aria-label="--Select--">
                        <option>--Select--</option>
                    </select>
                  </div>
                  <div className='col-md-3 col-sm-12'>
                  <label for="last-name" className='form-label'>Status</label>
                    <select className='form-select' aria-label="--All--">
                        <option>--Select--</option>
                        <option value="1">Pending</option>
                        <option value="1">Active</option>
                        <option value="1">Processing</option>
                        <option value="1">Pending for Details</option>
                    </select>
                  </div>
                  <div className='col-md-3 col-sm-12'>
                    <label for="last-name" className='form-label'>Date</label>
                    <input type="text" className="form-control" id='last-name'></input>
                  </div>
                  <div className='col-md-3 col-sm-12'>
                  <label for="last-name" className='form-label'>File Submit Type</label>
                    <select className='form-select' aria-label="--All--">
                        <option>--Select--</option>
                        <option value="1">Pending</option>
                    </select>
                  </div>
                </div>
                <div className='row m-0 p-0'>
                <div className='col-md-3 col-sm-12'>
                  <label for="last-name" className='form-label'>File Filling</label>
                    <select className='form-select' aria-label="--All--">
                        <option>--Select--</option>
                        <option value="1">Pending</option>
                    </select>
                  </div>
                  <div className='col-md-3 col-sm-12'>
                  <label for="last-name" className='form-label'>Status</label>
                    <select className='form-select' aria-label="--All--">
                        <option>--Select--</option>
                        <option value="1">Pending</option>
                    </select>
                  </div>
                  <div className='col-md-3 col-sm-12'>
                  <label for="last-name" className='form-label'>Status</label>
                    <select className='form-select' aria-label="--All--">
                        <option>--Select--</option>
                        <option value="1">Pending</option>
                    </select>
                  </div>
                </div>
                <div className='row m-0 p-3'>
              <button className='submit-button'>Search</button>
            </div>
              </fieldset>
            </div>
            <div className='row m-0 p-0 border'>
              <span className="fs-3 text-uppercase itr-heading-text">View ALl Registered Customer List</span>
            </div>
            <div className='row m-0 p-0'>
              <table className='table table-bordered box-style'>
                <thead>
                  <tr>
                    <th scope='col'>S.No.</th>
                    <th scope='col'>Asst year</th>
                    <th scope='col'>Client Code</th>
                    <th scope='col'>Client Name</th>
                    <th scope='col'>ITR Type</th>
                    <th scope='col'>DOB</th>
                    <th scope='col'>PAN No.</th>
                    <th scope='col'>Edit</th>
                    <th scope='col'>Activate</th>
                    <th scope='col'>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map(data => (
                    <tr>
                      <th scope='col'>{data.id}</th>
                      <th scope='col'>{data.year}</th>
                      <th scope='col'>{data.clientCode}</th>
                      <th scope='col'>{data.clientName}</th>
                      <th scope='col'>{data.itrType}</th>
                      <th scope='col'>{data.dob}</th>
                      <th scope='col'>{data.pan}</th>
                      <th scope='col' className='cursor-pointer color-green'>Edit</th>
                      <th scope='col' className='cursor-pointer color-green'>Activate</th>
                      <th scope='col' className='cursor-pointer color-green'>Delete</th>
                  </tr>
                  ))}
                    
                
                </tbody>
              </table>
            </div>
            </div>
        </>
      )
}
