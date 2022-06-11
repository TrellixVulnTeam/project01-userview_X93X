import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'



export default function Deduction80G({data, type}) {

  const [token, setToken] = useState()
  const [deduction_80g_type, setDeduction80gType] = useState()
  const [name_of_donee, setNameOfDonee] = useState()
  const [address, setAddress] = useState()
  const [pan_of_donee, setPanOfDonee] = useState()
  const [city, setCity] = useState()
  const [state, setState] = useState()
  const [pincode, setPincode] = useState()
  const [cash_donation, setCashDonation] = useState()
  const [other_donation, setOtherDonation] = useState()
  const [amount_of_other_donation, setAmountOfOtherDonation] = useState()
  const navigate = useNavigate()
  useEffect(() => {
    console.log("income from salary component rendered")

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

const handleSubmit = (e) => {
  e.preventDefault()
  console.log("inside handle submit")
  // /itr/update/incomefromproperty
  let itr = JSON.parse(localStorage.getItem('itrDetails'))
  // let ack_no = itr.itr_info.ack_no
  let id = itr._id
  let data = {
    deduction_80g_type, name_of_donee, address, pan_of_donee, city, state, pincode, cash_donation, other_donation, amount_of_other_donation, id
  }
  console.log(data)
  axios({
    method:"POST",
    url:"http://localhost:3800/v1/user/itr/update/deduction80g",
    headers: {
      "Authorization": `Bearer ${token}`
    },
    data: data
  }).then(data => {
    console.log(data)
    console.log(data.data)
    // Navigate('/apply/itr/next')
  }).catch(error => {
    console.log(error)
  })
}


  return (
    <div className='row m-0 p-0'>
        <div className='row m-0 p-0 border'>
          <span className="fs-3 text-uppercase itr-heading-text">80G Deductions [Donation]</span>
        </div>
        <div className='row m-0 p-0'>
            <div className='col-md-12 col-sm-12'>
            <label for="last-name" className='form-label'>Deduction 80G Type</label>
                    <select className={`form-control ${type == 'activate' ? "d-none" : ""}`} aria-label="--Select--" value={deduction_80g_type} onChange={(e) => setDeduction80gType(e.target.value)}>
                        <option>--Select--</option>
                        <option value="100%-deduction-without-qualifying-limit">100% deduction without qualifying limit</option>
                        <option value="50%-deduction-without-qualifying-limit">50% deduction without qualifying limit</option>
                        <option value="100%-deduction-subject-to-qualifying-limit">100% deduction subject to  qualifying limit</option>
                        <option value="50%-deduction-subject-to-qualifying-limit">50% deduction subject to  qualifying limit</option>
                    </select>
                    <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.deduction_80g.deduction_80g_type ? data.deduction_80g.deduction_80g_type : "N/A"  ) : "N/A"}</h4>

            <label for="last-name" className='form-label'>Name of Donee</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setNameOfDonee(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.deduction_80g.name_of_donee ? data.deduction_80g.name_of_donee : "N/A"  ) : "N/A"}</h4>

            <label for="last-name" className='form-label'>Address</label>
            <textarea className={`form-control ${type == 'activate' ? "d-none" : ""}`} onChange={(e) => setAddress(e.target.value)}></textarea>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.deduction_80g.address ? data.deduction_80g.address : "N/A"  ) : "N/A"}</h4>

            <label for="last-name" className='form-label'>PAN of Donee</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setPanOfDonee(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.deduction_80g.pan_of_donee ? data.deduction_80g.pan_of_donee : "N/A"  ) : "N/A"}</h4>

            <label for="last-name" className='form-label'>City or Town or Distict</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setCity(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.deduction_80g.city ? data.deduction_80g.city : "N/A"  ) : "N/A"}</h4>


            <label for="last-name" className='form-label'>State</label>
            <select className={`form-control ${type == 'activate' ? "d-none" : ""}`} aria-label="--Select--" value={state} onChange={(e) => setState(e.target.value)}>
                        <option>--Select--</option>
                        <option value="MP">MP</option>
                        <option value="CG">CG</option>
            </select>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.deduction_80g.state ? data.deduction_80g.state : "N/A"  ) : "N/A"}</h4>


            <label for="last-name" className='form-label'>Pincode</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setPincode(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.deduction_80g.pincode ? data.deduction_80g.pincode : "N/A"  ) : "N/A"}</h4>


            <label for="last-name" className='form-label'>Cash Donation</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setCashDonation(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.deduction_80g.cash_donation ? data.deduction_80g.cash_donation : "N/A"  ) : "N/A"}</h4>


            <label for="last-name" className='form-label'>Other mode Donation</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setOtherDonation(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.deduction_80g.other_donation ? data.deduction_80g.other_donation : "N/A"  ) : "N/A"}</h4>


            <label for="last-name" className='form-label'>Amount of Donation</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setAmountOfOtherDonation(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.deduction_80g.amount_of_other_donation ? data.deduction_80g.amount_of_other_donation : "N/A"  ) : "N/A"}</h4>


            </div>
            <button className={`btn btn-primary ${type == 'activate' ? "d-none" : ""}`} onClick={handleSubmit}>Add</button>
        </div>
    </div>
  )
}
