import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function IncomeFromHouseProperty({ data, type }) {

  const [property_type, setPropertyType] = useState()
  const [address, setAddress] = useState()
  const [gross_rent, setGrossRent] = useState(0)
  const [tax_to_local, setTaxToLocal] = useState(0)
  const [annual_value, setAnnualValue] = useState(0)
  const [annual_30, setAnnual30] = useState(0)
  const [interest_loan, setLoanInterest] = useState(0)
  const [income_charge, setIncomeCharge] = useState(0)
  const [isDisabled, setIsDisabled] = useState(false)
  const [token, setToken] = useState()
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

  useEffect(() => {
    console.log("inside use effect")
    let annualValue = annual_value == undefined ? 0 : annual_value
    let taxToLocal = tax_to_local == undefined ? 0 : tax_to_local
    let grossRent = gross_rent == undefined ? 0 : gross_rent
    let annual30 = annual_30 == undefined ? 0 : annual_30
    let incomeChargable = income_charge == undefined ? 0 : income_charge
    let loanInterest = interest_loan == undefined ? 0 : interest_loan

    annualValue = parseInt(grossRent) - parseInt(taxToLocal)
    annual30 = (annualValue) * (30 / 100)
    incomeChargable = parseInt(annualValue) - (parseFloat(annual30) + parseInt(loanInterest))
    setAnnualValue(annualValue)
    setAnnual30(annual30)
    setIncomeCharge(incomeChargable)
  }, [gross_rent, tax_to_local, annual_value, annual_30, interest_loan, income_charge])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("inside handle submit")
    // /itr/update/incomefromproperty
    let itr = JSON.parse(localStorage.getItem('itrDetails'))
    // let ack_no = itr.itr_info.ack_no
    let id = itr._id
    let prop_type;
    if (property_type == 1) {
      prop_type = "self-occupied"
    } else if (property_type == 2) {
      prop_type = "let-out"
    } else {
      prop_type = "deemed-let-out"
    }
    let data = {
      property_type: prop_type, address, gross_rent, tax_to_local, annual_value, annual_30, interest_loan, income_charge, id
    }
    axios({
      method: "POST",
      url: "http://localhost:3800/v1/user/itr/update/incomefromproperty",
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
        <span className="fs-3 text-uppercase itr-heading-text">INCOME FROM HOUSE PROPERTY</span>
      </div>
      <div className='row m-0 p-0'>
        <div className='col-md-12 col-sm-12'>
          <label for="last-name" className='form-label'>Type Of House Property</label>
          <select className={`form-select ${type == 'activate' ? "d-none" : ""}`} aria-label="--Select--" value={property_type} onChange={(e) => { setPropertyType(e.target.value); if (e.target.value == 1) { setIsDisabled(true) } else { setIsDisabled(false) } }}>
            <option>--Select--</option>
            <option value="1">Self Occupied</option>
            <option value="2">Let Out</option>
            <option value="3">Demmed Let Out</option>
          </select>
          <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
            {data ? (data.income_from_property.property_type ? data.income_from_property.property_type : "N/A") : "N/A"}
          </h4>


          <label for="last-name" className='form-label'>Address</label>
          <textarea className={`form-control ${type == 'activate' ? "d-none" : ""}`} onChange={(e) => setAddress(e.target.value)}></textarea>
          <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
            {data ? (data.income_from_property.address ? data.income_from_property.address : "N/A") : "N/A"}
          </h4>


          <label for="last-name" className='form-label'>Gross Rent Received/Receivable/Letable Value</label>
          <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' disabled={isDisabled} onChange={(e) => setGrossRent(e.target.value)}></input>
          <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
            {data ? (data.income_from_property.gross_rent ? data.income_from_property.gross_rent : "N/A") : "N/A"}
          </h4>


          <label for="last-name" className='form-label'>Tax paid to local authorities</label>
          <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' disabled={isDisabled} onChange={(e) => setTaxToLocal(e.target.value)}></input>
          <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
            {data ? (data.income_from_property.tax_paid_to_local ? data.income_from_property.tax_paid_to_local : "N/A") : "N/A"}
          </h4>


          <label for="last-name" className='form-label'>Annual Value</label>
          <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setAnnualValue(e.target.value)} disabled value={annual_value}></input>
          <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
            {data ? (data.income_from_property.annual_value ? data.income_from_property.annual_value : "N/A") : "N/A"}
          </h4>

          <label for="last-name" className='form-label'>30% of Annual Value</label>
          <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' value={annual_30} disabled ></input>
          <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
            {data ? (data.income_from_property.annual_value_30 ? data.income_from_property.annual_value_30 : "N/A") : "N/A"}
          </h4>

          <label for="last-name" className='form-label'>Interest Payable on Home Loan</label>
          <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setLoanInterest(e.target.value)}></input>
          <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
            {data ? (data.income_from_property.interest_home_loan ? data.income_from_property.interest_home_loan : "N/A") : "N/A"}
          </h4>

          <label for="last-name" className='form-label'>Income Chargeable under the head "House Property"</label>
          <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setIncomeCharge(e.target.value)} value={income_charge}></input>
          <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
            {data ? (data.income_from_property.income_charge_house_property ? data.income_from_property.income_charge_house_property : "N/A") : "N/A"}
          </h4>

        </div>
        <button className={`btn btn-primary ${type == 'activate' ? "d-none" : ""}`} onClick={handleSubmit}>Add</button>
      </div>
    </div>
  )
}
