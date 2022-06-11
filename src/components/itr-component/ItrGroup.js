import React, { useEffect, useState } from 'react'
import ItrNavigation from '../Navigation/itrNavigation'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export default function ItrGroup() {


  const [group, setGroup] = useState()
  const [token , setToken] = useState()
  const [loginId, setLoginId] = useState()
  const [tableData, setTableData] = useState([])
  const navigate = useNavigate()
useEffect(() => { 
    async function checkToken() {
      let token;
      try {
        token = await JSON.parse(localStorage.getItem('token'))
        if(token === null || token === undefined) {
          navigate('/')
        }
         setToken(token)
      } catch(e) {
        console.log(e)
      }
      console.log(token)
      axios({
        method:"GET",
        url:"http://localhost:3800/v1/user/allgroup",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }).then(data => {
        console.log(data.data)
        setTableData(data.data)

      }).catch(error => {
        console.log(error)
      })
    }
    checkToken()

}, [])

  const handleSubmit = () => {
    let name = group
    axios({
      url:'http://localhost:3800/v1/user/addgroup',
      method:'POST',
      data: {name},
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }).then(data => {
        if(data.status === 200) {
          console.log('Ok')
          toast("Group Created Successfully")
        } else if(data.status === 204) {
          toast("Group Name already exists")
          console.log('group name already exists')
        }
    }).catch(error => {
      console.log(error)
      console.log("Error While Creating Group")
    })
  }

  return (
    <>
    
        <ItrNavigation />
        <div className='container'>
        <ToastContainer />
            <div className='row m-0 p-0 border'>
                <span className="fs-3 text-uppercase itr-heading-text">Group Mater</span>
            </div>
            <div className='row m-0 p-0'>
          <fieldset className='border p-4'>
            <legend className='float-none fw-bold '>Group Master</legend>
            <div className='row m-0 p-0'>
            <div className='col-md-6 col-sm-12'>
                <label for="last-name" className='form-label'>Group Name</label>
                <input type="text" className="form-control" id='last-name' onChange={(e) => setGroup(e.target.value)}></input>
              </div>
            </div>
            <div className='row m-0 p-3'>
          <button className='submit-button' onClick={handleSubmit}>Add Group</button>
        </div>
          </fieldset>
        </div>
        <div className='row m-0 p-0 border'>
          <span className="fs-3 text-uppercase itr-heading-text">View All Group List</span>
        </div>
        <div className='row m-0 p-0'>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th scope='col'>S.No.</th>
                <th scope='col'>Group</th>
                <th scope='col'>Edit</th>
                <th scope='col'>Delete</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => (
                <tr key={index}>
                  <th scope='col'>{index}</th>
                  <th scope='col'>{data.name}</th>
                  <th scope='col' className='cursor-pointer color-green' >Edit</th>
                  {/* </Link> */}
                  <th scope='col' className='cursor-pointer color-green'>Delete</th>
              </tr>
              ))}
                {/* onClick={() => navigate(`/itr/group/view/${data._id  } `, {state:{data: data}})} */}
            
            </tbody>
          </table>
        </div>
        </div>
    </>
  )
}
