import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'



export default function NonSalaryTDS({data, type}) {

  const [token, setToken] = useState()
  const [deductor_tan, setDeductorTan] = useState()
  const [deductor_name, setDeductorName] = useState()
  const [total_tax_deduction, setTotalTaxDeduction] = useState()
  const [total_amount_paid, setTotalAmountPaid] = useState()
  const [head_of_income, setHeadOfIncome] = useState()
  const [deduction_year, setDeductionYear] = useState()
  
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
    deductor_tan , deductor_name, total_tax_deduction, total_amount_paid, head_of_income, deduction_year, id
  }
  console.log(data)
  axios({
    method:"POST",
    url:"http://localhost:3800/v1/user/itr/update/nonsalarytds",
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
          <span className="fs-3 text-uppercase itr-heading-text">Non-Salary TDS</span>
        </div>
        <div className='row m-0 p-0'>
            <div className='col-md-12 col-sm-12'>
            <label for="last-name" className='form-label'>TAN of Deductor</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setDeductorTan(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.non_salary_tds.deductor_tan ? data.non_salary_tds.deductor_tan : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Name of Deductor</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setDeductorName(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.non_salary_tds.deductor_name ? data.non_salary_tds.deductor_name : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Total Tax Deducted</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setTotalTaxDeduction(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.non_salary_tds.total_tax_deduction ? data.non_salary_tds.total_tax_deduction : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Total Amount Paid</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setTotalAmountPaid(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.non_salary_tds.total_amount_paid ? data.non_salary_tds.total_amount_paid : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Head Of Income</label>
            <select className={`form-control ${type == 'activate' ? "d-none" : ""}`} aria-label="--Select--" value={head_of_income} onChange={(e) => setHeadOfIncome(e.target.value)}>
                        <option>--Select--</option>
                        <option value="income-from-business-and-profession">Income from business and profession</option>
                        <option value="income-from-house-property">Income from House Property</option>
                        <option value="income-from-other-sources">Income from Other Source</option>
                        <option value="exempt-income">Exempt Income</option>
            </select>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.non_salary_tds.head_of_income ? data.non_salary_tds.head_of_income : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Deduction Year</label>
            <input type="test" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setDeductionYear(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.non_salary_tds.deduction_year ? data.non_salary_tds.deduction_year : "N/A"  ) : "N/A"}
          </h4>
            
            </div>
            {/* <button className='btn btn-primary m-2' onClick={handleSubmit}>Add</button> */}
            <button className={`btn btn-primary ${type == 'activate' ? "d-none" : ""}`} onClick={handleSubmit}>Add</button>
        </div>
    </div>
  )
}
