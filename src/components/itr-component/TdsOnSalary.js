import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function TdsOnSalary({data, type}) {

  const [token, setToken] = useState()
  const [income_charge_salary, setIncomeChargeSalary] = useState()
  const [employer_name, setEmployerName] = useState()
  const [tan_of_employer, setTanOfEmployer] = useState()
  const [tax_deduction_salary, setTaxDeductionSalary] = useState()
  const [employer_category, setEmployerCategory] = useState()
  const [address, setAddress] = useState()
  const [city,setCity] = useState()
  const [state, setState] = useState()
  const [pincode, setPincode] = useState()
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
  income_charge_salary, employer_name, tan_of_employer, tax_deduction_salary, employer_category, address, city, state, pincode, id
}
console.log(data)
axios({
  method:"POST",
  url:"3.108.219.92:3800/v1/user/itr/update/tdsonsalary",
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
          <span className="fs-3 text-uppercase itr-heading-text">T.D.S. on Salary</span>
        </div>
        <div className='row m-0 p-0'>
            <div className='col-md-12 col-sm-12'>
            <label for="last-name" className='form-label'>Income Chargable under the head 'Salaries'</label>
            <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setIncomeChargeSalary(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.tds_on_salary.income_charge_salary ? data.tds_on_salary.income_charge_salary : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Name of the Employer</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setEmployerName(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.tds_on_salary.employer_name ? data.tds_on_salary.employer_name : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>TAN of Employer</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setTanOfEmployer(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.tds_on_salary.tan_of_employer ? data.tds_on_salary.tan_of_employer : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Employer Type / Category</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setEmployerCategory(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.tds_on_salary.employer_category ? data.tds_on_salary.employer_category : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Tax Deductijon on Salary</label>
            <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setTaxDeductionSalary(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.tds_on_salary.tax_deduction_salary ? data.tds_on_salary.tax_deduction_salary : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Address</label>
            <input type="test" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setAddress(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.tds_on_salary.address ? data.tds_on_salary.address : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Town / City</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setCity(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.tds_on_salary.city ? data.tds_on_salary.city : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>State</label>
            <select className={`form-control ${type == 'activate' ? "d-none" : ""}`} aria-label="--Select--" value={state} onChange={(e) => setState(e.target.value)}>
                        <option>--Select--</option>
                        <option value="mp">MP</option>
                        <option value="cg">CG</option>
                    </select>
                    <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.tds_on_salary.state ? data.tds_on_salary.state : "N/A"  ) : "N/A"}
          </h4>

            <label for="last-name" className='form-label'>Pincode</label>
            <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setPincode(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.tds_on_salary.pincode ? data.tds_on_salary.pincode : "N/A"  ) : "N/A"}
          </h4>

            </div>
            {/* <button className='btn btn-primary m-2' onClick={handleSubmit}>Add</button> */}
            <button className={`btn btn-primary ${type == 'activate' ? "d-none" : ""}`} onClick={handleSubmit}>Add</button>
        </div>
    </div>
  )
}
