import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Tds26QC({data, type}) {

  const [token, setToken] = useState()
  const [pan_of_deductor, setPanOfDeductor] = useState()
  const [deductor_name, setDeductorName] = useState()
  const [amount_tax_deduction, setAmountTaxDeduction] = useState()
  const [year, setYear] = useState()
  const [tax_deducted, setTaxDeducted] = useState()
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
    pan_of_deductor, deductor_name, amount_tax_deduction, year, tax_deducted, id
  }
  console.log(data)
  axios({
    method:"POST",
    url:"http://localhost:3800/v1/user/itr/update/tds26qt",
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
          <span className="fs-3 text-uppercase itr-heading-text">TDS 26QC</span>
        </div>
        <div className='row m-0 p-0'>
            <div className='col-md-12 col-sm-12'>
            <label for="last-name" className='form-label'>PAN of Deductor</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setPanOfDeductor(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
            {data ? (data.income_from_salary.pan_of_deductor ? data.income_from_salary.pan_of_deductor : "N/A"  ) : "N/A"}
            </h4>

            <label for="last-name" className='form-label'>Name of Deductor</label>
            <input type="date" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setDeductorName(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
            {data ? (data.income_from_salary.deductor_name ? data.income_from_salary.deductor_name : "N/A"  ) : "N/A"}
            </h4>

            <label for="last-name" className='form-label'>Amount Which is subject to tax deduction</label>
            <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setAmountTaxDeduction(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
            {data ? (data.income_from_salary.amount_tax_deduction ? data.income_from_salary.amount_tax_deduction : "N/A"  ) : "N/A"}
            </h4>

            <label for="last-name" className='form-label'>Year of Tax Deduction</label>
            <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setYear(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
            {data ? (data.income_from_salary.year ? data.income_from_salary.year : "N/A"  ) : "N/A"}
            </h4>

            <label for="last-name" className='form-label'>Tax Deducted</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setTaxDeducted(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
            {data ? (data.income_from_salary.tax_deducted ? data.income_from_salary.tax_deducted : "N/A"  ) : "N/A"}
            </h4>
            
            </div>
            {/* <button className='btn btn-primary m-2' onClick={handleSubmit}>Add</button> */}
            <button className={`btn btn-primary ${type == 'activate' ? "d-none" : ""}`} onClick={handleSubmit}>Add</button>
        </div>
    </div>
  )
}
