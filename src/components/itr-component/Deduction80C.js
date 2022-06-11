import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Deduction80C({data, type}) {

  const [token, setToken] = useState()
  const [life_insurance, setLifeInsurance] = useState()
  const [provident_fund, setProvidentFund] = useState()
  const [mutual_fund, setMutualFund] = useState()
  const [fixed_deposit, setFixedDeposit] = useState()
  const [sukanya_samridhi_yojna, setSukanyaSamridhiYojna] = useState()
  const [annuity_paid, setAnnuityPaid] = useState()
  const [tution_fees, setTutionFees]  = useState()
  const [principle_payment_housing_loan, setPrinciplePaymentHousingLoan] = useState()
  const [deductable_1, setDeductable1] = useState()
  const [deductable_2, setDeductable2] = useState()
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
    life_insurance, provident_fund, mutual_fund, fixed_deposit, sukanya_samridhi_yojna, annuity_paid, tution_fees, principle_payment_housing_loan, deductable_1, deductable_2, id
  }
  console.log(data)
  axios({
    method:"POST",
    url:"3.108.219.92:3800/v1/user/itr/update/deduction80c",
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
          <span className="fs-3 text-uppercase itr-heading-text">80C Deductions [LIC/PF/Tution Fees]</span>
        </div>
        <div className='row m-0 p-0'>
            <div className='col-md-12 col-sm-12'>
            <label for="last-name" className='form-label'>Life Insurance Permium paid[LIC] [Current Fin Year]</label>
            <input type="number"  className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setLifeInsurance(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.deduction_80c.life_insurance ? data.deduction_80c.life_insurance : "N/A"  ) : "N/A"}</h4>


            <label for="last-name" className='form-label'>Provident Fund / PPF / GPF [Current Fin Year]</label>
            <input type="number"  className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setProvidentFund(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.deduction_80c.provident_fund ? data.deduction_80c.provident_fund : "N/A"  ) : "N/A"}</h4>

            <label for="last-name" className='form-label'>Mutual Fund / UTI [Current Fin Year]</label>
            <input type="number"  className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setMutualFund(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.deduction_80c.mutual_fund ? data.deduction_80c.mutual_fund : "N/A"  ) : "N/A"}</h4>


            <label for="last-name" className='form-label'>5 Years fixed deposit [Current Fin Year]</label>
            <input type="number"  className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setFixedDeposit(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.deduction_80c.fixed_deposit ? data.deduction_80c.fixed_deposit : "N/A"  ) : "N/A"}</h4>


            <label for="last-name" className='form-label'>Sukanya Samridhi Yojna [Current Fin Year]</label>
            <input type="number"  className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setSukanyaSamridhiYojna(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.deduction_80c.sukanya_samridhi_yojna ? data.deduction_80c.sukanya_samridhi_yojna : "N/A"  ) : "N/A"}</h4>


            <label for="last-name" className='form-label'>Payment for annuity plan [Current Fin Year]</label>
            <input type="number"  className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setAnnuityPaid(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.deduction_80c.annuity_paid ? data.deduction_80c.annuity_paid : "N/A"  ) : "N/A"}</h4>


            <label for="last-name" className='form-label'>Tution fees paid for 2 - children [Current Fin Year]</label>
            <input type="number"  className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setTutionFees(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.deduction_80c.tution_fees ? data.deduction_80c.tution_fees : "N/A"  ) : "N/A"}</h4>


            <label for="last-name" className='form-label'>Principal Payment of housing loan [Current Fin Year]</label>
            <input type="number"  className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setPrinciplePaymentHousingLoan(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.deduction_80c.principle_payment_housing_loan ? data.deduction_80c.principle_payment_housing_loan : "N/A"  ) : "N/A"}</h4>


            <label for="last-name" className='form-label'>Any Other Deductable [Current Fin Year]</label>
            <input type="number"  className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setDeductable1(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.deduction_80c.deductable_1 ? data.deduction_80c.deductable_1 : "N/A"  ) : "N/A"}</h4>


            <label for="last-name" className='form-label'>Any Other Deductable [Current Fin Year]</label>
            <input type="number"  className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setDeductable2(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.deduction_80c.deductable_2 ? data.deduction_80c.deductable_2 : "N/A"  ) : "N/A"}</h4>


            <span className='text-danger text-justify fw-bold'>If You are giving any deduction other than Form-16, then you have to provide proof, otherwise you might receive Income Tax Notice</span>
            </div>
            {/* <button className='btn btn-primary m-2' onClick={handleSubmit}>Add</button> */}
            <button className={`btn btn-primary ${type == 'activate' ? "d-none" : ""}`} onClick={handleSubmit}>Add</button>
        </div>
    </div>
  )
}
