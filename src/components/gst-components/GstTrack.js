
import GstNavigation from '../Navigation/gstNavigation'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
export default function GstTrack() {

  const navigate = useNavigate()
      const [gst_list, setGstList] = useState([])
      const [token, setToken] = useState()
      const [company_name, setCompanyName] = useState()
      const [status, setStatus] = useState()
      const [entity_type, setEntityType] = useState()
      const [formErros, setFormErros] = useState({})
  

  useEffect(() => {
    async function checkToken() {
       
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
            method:"GET",
            url:"3.108.219.92:3800/v1/user/gst/getall",
            headers: {
                "Authorization": `Bearer ${token}`
            },
            data: {
            }
        }).then(data => {
            // console.log(data)
            console.log(data.data)
            setGstList(data.data)
        }).catch(error => {
            console.log(error)
        })
        setToken(token)
    }
    checkToken()

}, [])

  const validate = (formData) => {
    let errors = {}
    // let emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    if( !formData.company_name) {
      errors.company_name_error = "Company Name Can't be Empaty"
    }
    if(!formData.status) {
      errors.statusError = "Please Select At Least One Field"
    }
    return errors
  }

  const handleSearch = (e) => {
     let data = {company_name, status, entity_type}
     setFormErros(validate(data))
     e.preventDefault()
     if(Object.keys(formErros).length === 0 ) {
       console.log("submit")
     }
      
  }

  return (
    <>
        <GstNavigation />
        <div className='container'>
        <div className='row m-0 p-0 border'>
          <span className="fs-3 text-uppercase itr-heading-text">View All GST Client</span>
        </div>
        <div className='row m-0 p-0'>
          <fieldset className='border p-4 box-style'>
            <legend className='float-none fw-bold '>Search G.S.T. Client</legend>
            <div className='row m-0 p-0'>
            <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Company Name</label>
                <input type="text" className="form-control" id='last-name' onChange={(e) => setCompanyName(e.target.value)}></input>
                {formErros.company_name_error ? <span className='text-danger'>Can't be Emplty</span> : null}
              </div>
              <div className='col-md-3 col-sm-12'>
                  <label for="last-name" className='form-label' value={status} onChange={(e) => setStatus(e.target.value)}>Status</label>
                    <select className='form-select' aria-label="--Select--">
                        <option>--Select--</option>
                        <option value="under-review">Review</option>
                        <option value="under-processing">Process</option>
                        <option value="panding-for-arn">Panding for ARN</option>
                        <option value="rejection-from-gst-department">Rejection From GST Department</option>
                        <option value="gst-form-delivered">GST Form Delivered</option>
                        <option value="gst-form-rejected">GST Form Rejected</option>
                    </select>
                    {formErros.statusError && <span className='text-danger'>{formErros.statusError}</span>}
                  </div>
                  <div className='col-md-3 col-sm-12'>
                  <label for="last-name" className='form-label' value={entity_type} onChange={(e) => setEntityType(e.target.value)}>Entity Type</label>
                    <select className='form-select' aria-label="--Select--">
                        <option>--Select--</option>
                        <option value="individual">Individual</option>
                        <option value="huf">HUF</option>
                        <option value="company">Company</option>
                        <option value="firm">Firm</option>
                        <option value="aop">AOP</option>
                        <option value="trush">Trush</option>
                        <option value="other">Other</option>
                    </select>
                  </div>
                  <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Registraion From</label>
                <input type="date" className="form-control" id='last-name'></input>
              </div>
                  {/* <div className='col-md-3 col-sm-12'>
                  <label for="last-name" className='form-label'>GST Type</label>
                    <select className='form-select' aria-label="--Select--">
                        <option>--Select--</option>
                        <option value="1">Componsition</option>
                        <option value="1">Non Componsition</option>
                    </select>
                  </div> */}
            </div>

            <div className='row m-0 p-0'>
              {/* <div className='col-md-3 col-sm-12'>
                <label for="first-name" className='form-label'>Coupon</label>
                <input type="text" className="form-control" id='first-name'></input>
              </div> */}
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Branch Code</label>
                <input type="text" className="form-control" id='last-name' value="MA1010" disabled></input>
              </div>
              
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Registraion Date</label>
                <input type="date" className="form-control" id='last-name'></input>
              </div>
            </div>

            {/* <div className='row m-0 p-0'>
              <div className='col-md-3 col-sm-12'>
                <label for="first-name" className='form-label'>GST NO.</label>
                <input type="text" className="form-control" id='first-name'></input>
              </div>
            </div> */}

            <div className='row m-0 p-3'>
          <button className='submit-button' onClick={handleSearch}>Search</button>
        </div>
          </fieldset>
        </div>
        <div className='row m-0 p-0 border'>
          <span className="fs-3 text-uppercase itr-heading-text">G.S.T. Client List</span>
        </div>
        {/* <div className='row m-0 p-0'>
          <table className='table table-bordered'>
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
        </div> */}
        </div>
    </>
  )
}
