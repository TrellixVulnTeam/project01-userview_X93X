import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdvanceSelfTax({data, type}) {

  const navigate = useNavigate()
  const [token, setToken] = useState()
  const [bsr_code, setBsrCode] = useState()
  const [date_of_deposite, setDateOfDeposite] = useState()
  const [challan_number, setChallanNumber] = useState()
  const [challan_amount, setChallanAmount] = useState()
  const [interest_paid, setInterestPaid] = useState()
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
    bsr_code, date_of_deposite, challan_number, challan_amount, interest_paid, id
  }
  console.log(data)
  axios({
    method:"POST",
    url:"3.108.219.92:3800/v1/user/itr/update/advancetax",
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
          <span className="fs-3 text-uppercase itr-heading-text">Advance / Self Assessment Tax</span>
        </div>
        <div className='row m-0 p-0'>
            <div className='col-md-12 col-sm-12'>
            <label for="last-name" className='form-label'>BSR Code</label>
            <input type="text"  className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setBsrCode(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.advance_tax.bsr_code ? data.advance_tax.bsr_code : "N/A"  ) : "N/A"}
          </h4>

            <label for="last-name" className='form-label'>Date of Deposit</label>
            <input type="date"  className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setDateOfDeposite(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.advance_tax.date_of_deposite ? data.advance_tax.date_of_deposite : "N/A"  ) : "N/A"}
          </h4>

            <label for="last-name" className='form-label'>Challan Number</label>
            <input type="text"  className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setChallanNumber(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.advance_tax.challan_number ? data.advance_tax.challan_number : "N/A"  ) : "N/A"}
          </h4>

            <label for="last-name" className='form-label'>Challan Amount</label>
            <input type="text"  className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setChallanAmount(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.advance_tax.challan_amount ? data.advance_tax.challan_amount : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Interest Paid</label>
            <input type="number"  className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setInterestPaid(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.advance_tax.interest_paid ? data.advance_tax.interest_paid : "N/A"  ) : "N/A"}
          </h4>
            
            </div>
            {/* <button className='btn btn-primary m-2' onClick={handleSubmit}>Add</button> */}
            <button className={`btn btn-primary ${type == 'activate' ? "d-none" : ""}`} onClick={handleSubmit}>Add</button>
        </div>
    </div>
  )
}
