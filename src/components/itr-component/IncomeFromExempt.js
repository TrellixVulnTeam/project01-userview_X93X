import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function IncomeFromExempt({data, type}) {

  const [token, setToken] = useState()
  const [exempted_income_head, setExemptedIncomeHead] = useState()
  const [exempted_income_description, setExemptedIncomeDescription] = useState()
  const [amount, setAmount] = useState()
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
    exempted_income_head, exempted_income_description, amount, id
  }
  console.log(data)
  axios({
    method:"POST",
    url:"3.108.219.92:3800/v1/user/itr/update/exemptedincome",
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
          <span className="fs-3 text-uppercase itr-heading-text">INCOME FROM EXEMPTED SOURCES</span>
        </div>
        <div className='row m-0 p-0'>
            <div className='col-md-12 col-sm-12'>
            <label for="last-name" className='form-label'>Exempted Income Head</label>
            <select className={`form-select ${type == 'activate' ? "d-none" : ""}`} aria-label="--Select--" value={exempted_income_head} onChange={(e) => setExemptedIncomeHead(e.target.value)}>
                        <option>--Select--</option>
                        <option value="agriculture-income">Agriculture Income  Rs5000</option>
                        <option value="amount-from-govt-incase-disaster">Any amount from the Central/State Gove/local authority by the way of compensation an account of any disaster</option>
                    </select>
                    <h4 className={`form-control  fw-bolder ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.income_from_exempted_sources.exempted_income_head ? data.income_from_exempted_sources.exempted_income_head : "N/A"  ) : "N/A"}</h4>


            <label for="last-name" className='form-label'>Exempted Income Description</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setExemptedIncomeDescription(e.target.value)}></input>
            <h4 className={`form-control fw-bolder ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.income_from_exempted_sources.exempted_income_description ? data.income_from_exempted_sources.exempted_income_description : "N/A"  ) : "N/A"}</h4>

            <label for="last-name" className='form-label'>Amount</label>
            <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setAmount(e.target.value)}></input>
            <h4 className={`form-control fw-bolder ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.income_from_exempted_sources.amount ? data.income_from_exempted_sources.amount : "N/A"  ) : "N/A"}</h4>
            </div>
            <button className={`btn btn-primary ${type == 'activate' ? "d-none" : ""}`} onClick={handleSubmit}>Add</button>
        </div>
    </div>
  )
}
