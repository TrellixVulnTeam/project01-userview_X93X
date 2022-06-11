import React, { useEffect, useState } from 'react'
import { incomeFromSalary } from '../../Features/itrSlice'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'




const IncomeFromSalary = ({ setIncome, data, type }) => {

  const [company_name, setEmployerName] = useState()
  const [address, setAddress] = useState()
  const [employee_type, setEmployeeType] = useState()
  const [allowance, setAllowance] = useState()
  const [prequisities_value, setPreQuisitiesValue] = useState()
  const [profit_lieu_salary, setProfitLieuSalary] = useState()
  const [gross_salary, setGrossSalary] = useState()
  const [other_exempt, setOtherExempt] = useState()
  const [standard_deduction, setStandardDeduction] = useState()
  const [entertainment_allowance, setEntertainmentAllowance] = useState()
  const [professional_tax, setProfessionTax] = useState()
  const [income_charge, setIncomeCharge] = useState()
  const [basic_salary, setBasicSalary] = useState()
  const [hra, setHra] = useState()
  const [rent_paid, setRentPaid] = useState()
  const [arrear, setArrear] = useState()
  const [arrear_amount, setArrearAmount] = useState()
  const [token, setToken] = useState()
  const [error, setError] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    console.log("income from salary component rendered")

    async function checkToken() {
      let token;
      try {
        token = await JSON.parse(localStorage.getItem('token'))
        if (token === "N/A" || token === undefined) {
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

  useEffect(() => {
    let pre_value = prequisities_value
    let profit_value = profit_lieu_salary
    let exempt = other_exempt
    let std_deduction = standard_deduction
    let entr_allowant = entertainment_allowance
    let prof_tax = professional_tax
    let incm_charge
    exempt = exempt == undefined ? 0 : exempt
    std_deduction = std_deduction == undefined ? 0 : std_deduction
    entr_allowant = entr_allowant == undefined ? 0 : entr_allowant
    prof_tax = prof_tax == undefined ? 0 : prof_tax
    pre_value = pre_value == undefined ? 0 : pre_value
    profit_value = profit_value == undefined ? 0 : profit_value
    let salary = parseInt(allowance) + parseInt(profit_value) + parseInt(pre_value)
    if (parseInt(salary) > 100000) {
      std_deduction = 50000
    } else {
      std_deduction = parseInt(salary)
    }
    console.log("std_deduction", std_deduction)
    incm_charge = parseInt(salary) - (parseInt(std_deduction) + parseInt(exempt) + parseInt(entr_allowant) + parseInt(prof_tax))
    setGrossSalary(salary)
    setStandardDeduction(std_deduction)
    setIncomeCharge(incm_charge)
  }, [allowance, prequisities_value, profit_lieu_salary, standard_deduction, entertainment_allowance, professional_tax])

  const checkError = () => {
    let errors = {}
    if(company_name == undefined || company_name.length < 3) {
      errors.companyNameError = "Company name should be at least 3 character long"
    }
    if(address == undefined) {
      errors.addressError = "Please Enter a valid address"
    }
    if(employee_type == undefined) {
      errors.employeeTypeError = "Please Select Employee Type"
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let salary = allowance
    let value_of_prequisities = prequisities_value
    let other_exempt_allowance = other_exempt
    let income_charge_salary = income_charge
    let itr = JSON.parse(localStorage.getItem('itrDetails'))
    let id = itr._id
    let data = {
      company_name, address, employee_type, salary, value_of_prequisities, profit_lieu_salary, gross_salary, other_exempt_allowance, standard_deduction,
      entertainment_allowance, professional_tax, income_charge_salary, basic_salary, hra, rent_paid, arrear, arrear_amount, id
    }
    axios({
      method: "POST",
      url: "http://localhost:3800/v1/user/itr/update/incomefromsalary",
      headers: {
        "Authorization": `Bearer ${token}`
      },
      data: data
    }).then(data => {
      console.log(data)

      console.log(data.data)
    }).catch(error => {
      console.log(error)
    })
  }
  return (
    
    <div className='row m-0 p-0'>
      {console.log("from income from salary", data)}
      <div className='row m-0 p-2 '>
        <span className="fs-3 text-uppercase itr-heading-text">INCOME FROM SALARY</span>
      </div>
      <div className='row m-0 p-0'>
        {/* <form onSubmit={handleSubmit}> */}
        <div className='col-md-12 col-sm-12'>

          <label for="last-name" className='form-label'>Firm/Company/Legal Name</label>
          <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => { setEmployerName(e.target.value); }}></input>
          <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.income_from_salary.company_name ? data.income_from_salary.company_name : "N/A"  ) : "N/A"}</h4>


          <label for="last-name" className='form-label'>Address</label>
          <textarea className={`form-control ${type == 'activate' ? "d-none" : ""}` } onChange={(e) => {setAddress(e.target.value)}}></textarea>
          <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}> 
          {data ? (data.income_from_salary.address ? data.income_from_salary.address : "N/A"  ) : "N/A"}
          </h4>


          <label for="last-name" className='form-label'>Type Of Employee</label>
          <select className={`form-control ${type == 'activate' ? "d-none" : ""}`} aria-label="--Select--" value={employee_type} onChange={(e) => setEmployeeType(e.target.value)}>
            <option>--Select--</option>
            <option value="central_government">Central Government</option>
            <option value="state_government">State Government</option>
            <option value="public_sector_undertaking">Public Sector Undertaking</option>
            <option value="pensioners">Pensioners</option>
            <option value="others">Others</option>
            <option value="not_applicable">Not Applicable(eg. Family Pension etc.)</option>
            <option value="government">Government</option>
            <option value="public_sector_unit">Public Sector Unit</option>
            <option value="private">Private</option>
          </select>
          <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_salary.employee_type ? data.income_from_salary.employee_type : "N/A"  ) : "N/A"}
          </h4>



          <label for="last-name" className='form-label'>Salary / Pension / Allowances</label>
          <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => { setAllowance(e.target.value); }}></input>
          <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}> 
          {data ? (data.income_from_salary.salary ? data.income_from_salary.salary : "N/A"  ) : "N/A"}
          </h4>


          <label for="last-name" className='form-label'>Value of Prequisites</label>
          <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => { setPreQuisitiesValue(e.target.value); }}></input>
          <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}> 
          {data ? (data.income_from_salary.value_of_prequisities ? data.income_from_salary.value_of_prequisities : "N/A"  ) : "N/A"}
          </h4>


          <label for="last-name" className='form-label'>Profit in lieu of Salary</label>
          <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => { setProfitLieuSalary(e.target.value); }}></input>
          <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}> 
          {data ? (data.income_from_salary.profit_lieu_salary ? data.income_from_salary.profit_lieu_salary : "N/A"  ) : "N/A"}
          </h4>


          <label for="last-name" className='form-label'>Gross Salary</label>
          <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' value={gross_salary} disabled></input>
          <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_salary.gross_salary ? data.income_from_salary.gross_salary : "N/A"  ) : "N/A"}
          </h4>


          <label for="last-name" className='form-label'>Other Exempt Allowance(If Any)</label>
          <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setOtherExempt(e.target.value)} disabled></input>
          <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}> 
          {data ? (data.income_from_salary.other_exempt_allowance ? data.income_from_salary.other_exempt_allowance : "N/A"  ) : "N/A"}
          </h4>


          <label for="last-name" className='form-label'>Standard Deductions</label>
          <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' value={standard_deduction} onChange={(e) => setStandardDeduction(e.target.value)}></input>
          <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_salary.standard_deduction ? data.income_from_salary.standard_deduction : "N/A"  ) : "N/A"}
          </h4>


          <label for="last-name" className='form-label'>Entertainment Allowances</label>
          <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setEntertainmentAllowance(e.target.value)}></input>
          <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_salary.entertainment_allowance ? data.income_from_salary.entertainment_allowance : "N/A"  ) : "N/A"}
          </h4>


          <label for="last-name" className='form-label'>Professional Tax (u/s16)</label>
          <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setProfessionTax(e.target.value)}></input>
          <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_salary.professional_tax ? data.income_from_salary.professional_tax : "N/A"  ) : "N/A"}
          </h4>


          <label for="last-name" className='form-label'>Income Charge under the head salaries</label>
          <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' value={income_charge} disabled></input>
          <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_salary.income_charge_salary ? data.income_from_salary.income_charge_salary : "N/A"  ) : "N/A"}
          </h4>


          <h3>For Calculation of Exempt HRA</h3>
          <label for="last-name" className='form-label'>Basic Salary</label>
          <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setBasicSalary(e.target.value)}></input>
          <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_salary.basic_salary ? data.income_from_salary.basic_salary : "N/A"  ) : "N/A"}
          </h4>


          <label for="last-name" className='form-label'>HRA</label>
          <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setHra(e.target.value)}></input>
          <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_salary.hra ? data.income_from_salary.hra : "N/A"  ) : "N/A"}
          </h4>


          <label for="last-name" className='form-label'>Rent Paid</label>
          <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setRentPaid(e.target.value)}></input>
          <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_salary.rent_paid ? data.income_from_salary.rent_paid : "N/A"  ) : "N/A"}
          </h4>


          <h3 className='text-danger'>Arrear Information</h3>
          <span>Had you received any blocked amount of Salary or any other fund in this Financial year</span>
          <select className={`form-control ${type == 'activate' ? "d-none" : ""}`} value={arrear} onChange={(e) => setArrear(e.target.value)}>
            <option>--select--</option>
            <option value="yes">YES</option>
            <option value="no">NO</option>
          </select>
          <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
            {data ? (data.income_from_salary.arrear ? data.income_from_salary.arrear.toString() : "N/A"  ) : "N/A"}
            </h4>


          <label for="last-name" className='form-label'>Amount</label>
          <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setArrearAmount(e.target.value)}></input>
          <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
            {data ? (data.income_from_salary.arrear_amount ? data.income_from_salary.arrear_amount : "N/A"  ) : "N/A"}
            </h4>
        </div>
        {/* <button className='btn btn-primary m-2' onClick={handleSubmit}>Add</button> */}
        <button className={`btn btn-primary ${type == 'activate' ? "d-none" : ""}`} onClick={handleSubmit}>Add</button>
        {/* <input type="submit" className='btn btn-primary m-2' />
            </form> */}
      </div>
    </div>
  )
}

export default IncomeFromSalary