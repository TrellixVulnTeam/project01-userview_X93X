import axios from 'axios'
import React, { useEffect, useId, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TdsNavigation from '../Navigation/TdsNavigation'
import * as yup from 'yup'

export default function ItrForm() {
  let user = localStorage.getItem('user')
  user = JSON.parse(user)
  // if (user && user.loginId) {
  //   setLoginId(user.loginId)
  // }
  const id = user.loginId
  const navigate = useNavigate()
  const [token, setToken] = useState()
  const [loginId, setLoginId] = useState()
  const [tableData, setTableData] = useState()
  const [client_name, setClientName] = useState()
  const [tan_no, setTanNo] = useState()
  const [mobile_no, setMobileNo] = useState()
  const [error, setError] = useState({})
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
      axios({
        method: "POST",
        url: "http://3.108.219.92:3800/v1/user/tds/getall/id",
        headers: {
          "Authorization": `Bearer ${token}`
        },
      }).then(data => {
        console.log(data.data)
        setTableData(data.data)
        // console.log(tableData)
      }).catch(error => {
        console.log(error)
      })
    }
    checkToken()
  }, [])


const validation = () => {
  let errors = {}
  if(!client_name) {
    errors.clientName = "Client Name Can't be Emplty"
  } else if(client_name.length < 3) {
    errors.clientName = "Client Name should be at least 3 character long"
  }

  if(!tan_no) {
    errors.tanNo = "Tan No can't be empty"
  } 
    return errors
  }


const handleDelete = (id) => {
  console.log(id)
  axios({
    method:"POST",
    url:"http://3.108.219.92:3800/v1/user/tds/delete/id",
    headers: {
      "Authorization":  `Bearer ${token}`
    },
    data: {
      id: id
    }
  }).then(data => {
    if(data.status == 200) {
      window.location.reload(false)
    }
  }).catch(error => {
    console.log(error)
  })
}

  const filterData = async () => {
    console.log("inside filter data")
    setError(validation())
    if(Object.keys(error).length != 0) {
      console.log(error)
      setError({})
      return;
    }
    let filter_data = await tableData.filter(data => {
      console.log(data)
      if(data.department_name == client_name || data.tan_no == tan_no || data.mobile == mobile_no) {
        return data
      }
    })
    console.log('filter data is', filter_data)
    if(filter_data.length > 0)
      setTableData(filter_data)
  }

  return (
    <>
      <TdsNavigation />
      <div className='container'>
        <div className='row m-0 p-0 border'>
          <span className="fs-3 text-uppercase itr-heading-text">Search TDS Client</span>
        </div>
        
        <div className='row m-0 p-0'>
          <fieldset className='border p-4'>
            <legend className='float-none fw-bold '>Search Registered Client</legend>

            <div className='row m-0 p-0'>
              <div className='col-md-3 col-sm-12'>
                <label for="first-name" className='form-label'>Client Name</label>
                <input type="text" className="form-control" id='first-name' onChange={(e) => setClientName(e.target.value)} ></input>
                {<span className='text-danger'>{error.clientName}</span>}
              </div>
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>TAN No</label>
                <input type="text" className="form-control" id='last-name' onChange={(e) => setTanNo(e.target.value)}></input>
                {<span className='text-danger'>{error.tanNo}</span>}
              </div>
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Mobile No</label>
                <input type="text" className="form-control" id='last-name' onChange={(e) => setMobileNo(e.target.value)}></input>
              </div>
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Branch</label>
                <input type="text" className="form-control" id='last-name' disabled value={id}></input>
              </div>
            </div>

            <div className='row m-0 p-3'>
          <button className='submit-button' onClick={filterData}>Submit</button>
        </div>  

          </fieldset>
        </div>
       
      </div>
      <div className='container'>
        <div className='row m-0 p-0 border'>
        <span className="fs-3 text-uppercase itr-heading-text">All TdsClientList</span>
        </div>
        <div className='row m-0 p-0'>
          <table className='table table-bordered text-white'>
            <thead>
              <tr className='bg-dark text-white'>
                <td className='fw-bolder'>S.No.</td>
                <td className='fw-bolder'>Login ID</td>
                <td className='fw-bolder'>TAN No.</td>  
                <td className='fw-bolder'>Client Code</td>
                <td className='fw-bolder'>Department Name</td>
                <td className='fw-bolder'>Mobile No</td>
                <td className='fw-bolder'>Email Id</td>
                <td className='fw-bolder'>Trace User Name</td>
                <td className='fw-bolder'>Trace Password</td>
                <td className='fw-bolder'>Edit</td>
                <td className='fw-bolder'>Delete</td>
                <td className='fw-bolder'>Apply Order</td>
              </tr>
            </thead>
            <tbody>
              {
                tableData ? tableData.map((data, index) => (
                  <tr>
                    <td className='text-dark'>{index + 1}</td>
                    <td className='text-dark'>{data.loginId}</td>
                    <td className='text-dark'>{data.tan_no}</td>
                    <td className='text-dark'>{data.tds_client_code}</td>
                    <td className='text-dark'>{data.department_name}</td>
                    <td className='text-dark'>{data.mobile}</td>
                    <td className='text-dark'>{data.email}</td>
                    <td className='text-dark'>{data.trace_user_name}</td>
                    <td className='text-dark'>{data.trace_password}</td>
                    <td className='text-primary cursor-pointer fw-bolder' onClick={() => {console.log("hello edit")}}>Edit</td>
                    <td className='text-danger cursor-pointer fw-bolder' onClick={() => {handleDelete(data._id)}}> 
                      Delete
                    </td>
                    <td className='color-green cursor-pointer fw-bolder' onClick={(e) => navigate(`/tds/apply/order/${data._id  } `, {state:{data: data}})}>Apply Order</td>
                  </tr>
                )) : 1
              }
            </tbody>
          </table>
        </div>
    </div>
    </>
  )
}
