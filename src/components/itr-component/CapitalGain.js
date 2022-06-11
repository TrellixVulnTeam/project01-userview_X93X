import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function CapitalGain({data, type}) {



  const [token, setToken] = useState()
  const [property_type, setPropertyType] = useState()
  const [date_of_sale, setSaleDate] = useState()
  const [sale_price, setSalePrice] = useState()
  const [date_of_purchase, setPurchaseDate] = useState()
  const [purchase_price, setPurchasePrice] = useState()
  const [selling_expenses, setSellingExpenses] = useState()
  const [cost_of_improvement, setImprovementCost] = useState()
  const [date_of_improvement, setImprovementDate] = useState()
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
    property_type, date_of_sale, sale_price, date_of_purchase, purchase_price, selling_expenses,
    cost_of_improvement, date_of_improvement, id
  }
  console.log(data)
  axios({
    method:"POST",
    url:"3.108.219.92:3800/v1/user/itr/update/capitalgain",
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
          <span className="fs-3 text-uppercase itr-heading-text">CAPITAL GAIN</span>
        </div>
        <div className='row m-0 p-0'>
            <div className='col-md-12 col-sm-12'>
            <label for="last-name" className='form-label'>Type Of Property</label>
            <select className={`form-select ${type == 'activate' ? "d-none" : ""}`} aria-label="--Select--" value={property_type} onChange={(e) => setPropertyType(e.target.value)}>
                        <option>--Select--</option>
                        <option value="land">Land</option>
                        <option value="building">Building</option>
                        <option value="land-or-building">Land or Building(Both)</option>
                        <option value="other-assests">Other Assets</option>
            </select>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.income_from_capital_gain.property_type ? data.income_from_capital_gain.property_type : "N/A"  ) : "N/A"}</h4>


            <label for="last-name" className='form-label'>Date of Sale</label>
            <input type="date" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setSaleDate(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.income_from_capital_gain.date_of_sale ? data.income_from_capital_gain.date_of_sale : "N/A"  ) : "N/A"}</h4>


            <label for="last-name" className='form-label'>Sale Price</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setSalePrice(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.income_from_capital_gain.sale_price ? data.income_from_capital_gain.sale_price : "N/A"  ) : "N/A"}</h4>


            <label for="last-name" className='form-label'>Date of Purchase</label>
            <input type="date" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => {setPurchaseDate(e.target.value)}}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.income_from_capital_gain.date_of_purchase ? data.income_from_capital_gain.date_of_purchase : "N/A"  ) : "N/A"}</h4>


            <label for="last-name" className='form-label'>Purchase Price</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => {setPurchasePrice(e.target.value)}}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.income_from_capital_gain.purchase_price ? data.income_from_capital_gain.purchase_price : "N/A"  ) : "N/A"}</h4>


            <label for="last-name" className='form-label'>Selling Expenses like Brokerage</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => {setSellingExpenses(e.target.value)}}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.income_from_capital_gain.selling_expenses ? data.income_from_capital_gain.selling_expenses : "N/A"  ) : "N/A"}</h4>


            {/* <label for="last-name" className='form-label'>Date of Purchase</label>
            <input type="date" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name'></input> */}
            <label for="last-name" className='form-label' >Cost of Improvement (If any)</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => {setImprovementCost(e.target.value)}}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.income_from_capital_gain.cost_of_improvement ? data.income_from_capital_gain.cost_of_improvement : "N/A"  ) : "N/A"}</h4>


            <label for="last-name" className='form-label'>Date of Improvement</label>
            <input type="date" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => {setImprovementDate(e.target.value)}}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.income_from_capital_gain.date_of_improvement ? data.income_from_capital_gain.date_of_improvement : "N/A"  ) : "N/A"}</h4>

            </div>
            <button className={`btn btn-primary ${type == 'activate' ? "d-none" : ""}`} onClick={handleSubmit}>Add</button>
        </div>
    </div>
  )
}
