import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ItrNavigation from '../Navigation/itrNavigation'


export default function ActivateClient() {
  const navigate = useNavigate()
  const [token, setToken] = useState()
  const [itr_list, setItrList] = useState([])
  useEffect(() => { 
      async function checkToken() {
        let token
        try {
          token = JSON.parse(localStorage.getItem('token'))
          if(token === null || token === undefined) {
            navigate('/')
          }
         // setToken(token)
        } catch(e) {

        }
      
      axios({
        method:"GET",
        url:"3.108.219.92:3800/v1/user/itr/getall/id",
        headers: {
          "Authorization": `Bearer ${token}`
        },
      }).then(data => {
        console.log(data.data)
        setItrList(data.data)
      }).catch(error => {
        console.log(error)
      })
      setToken(token)
      }
      checkToken()
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
          <span className="fs-3 text-uppercase itr-heading-text">Activate Client</span>
        </div>
        <div className='row m-0 p-0'>
          <fieldset className='border p-4 box-style'>
            <legend className='float-none fw-bold '>Activate Client</legend>
            <div className='row m-0 p-0'>
            <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Client Name</label>
                <input type="text" className="form-control" id='last-name'></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="pan" className='form-label'>Client Code</label>
                <input type="text" className="form-control" id='pan'></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="first-name" className='form-label'>PAN No.</label>
                <input type="text" className="form-control" id='first-name'></input>
              </div>
            </div>

            <div className='row m-0 p-0'>
              <div className='col-md-4 col-sm-12'>
                <label for="first-name" className='form-label'>ITR Type</label>
                <input type="text" className="form-control" id='first-name'></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Branch Code / Login Id</label>
                <input type="text" className="form-control" id='last-name' value='TA29521' disabled></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Asst. Year</label>
                <input type="text" className="form-control" id='last-name'></input>
              </div>
            </div>
            <div className='row m-0 p-3'>
          <button className='submit-button'>Search</button>
        </div>
          </fieldset>
        </div>
        <div className='row m-0 p-0 border'>
          <span className="fs-3 text-uppercase itr-heading-text">Activate Client List</span>
        </div>
        <div className='row m-0 p-0 '>
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
                {/* <th scope='col'>Edit</th> */}
                <th scope='col'>Activate</th>
                <th scope='col'>Delete</th>
              </tr>
            </thead>
            <tbody>
              {itr_list.map((data, index) => (
                <tr>
                  <th scope='col'>{index + 1}</th>
                  <th scope='col'>{data.itr_info.assmt_year ? data.itr_info.assmt_year: null}</th>
                  <th scope='col'>{data.personal_info.client_code ? data.personal_info.client_code : null}</th>
                  <th scope='col'>{data.personal_info.first_name ? data.personal_info.first_name : null}</th>
                  <th scope='col'>{data.itr_info.itr_type ? data.itr_info.itr_type : null}</th>
                  <th scope='col'>{data.personal_info.dob ? data.personal_info.dob : null}</th>
                  <th scope='col'>{data.personal_info.pan ? data.personal_info.pan : null}</th>
                  {/* <th scope='col' className='cursor-pointer color-green'>Edit</th> */}
                  <th scope='col' className='cursor-pointer color-green' onClick={() => navigate(`/itr/activate/itr/${data._id  } `, {state:{data: data, type: "activate"}})}>Activate</th>
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
