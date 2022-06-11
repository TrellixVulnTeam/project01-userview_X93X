import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function TaxCollectedAtSource({data, type}) {

  const [token, setToken] = useState()
  const [tax_collection_account_number, setTaxCollectionAccountNumber] = useState()
  const [collector_name, setCollectorName] = useState()
  const [tcs_amount_claimed, setTcsAmountClaimed] = useState()
  const [amount_paid, setAmountPaid] = useState()
  const [tax_collected, setTaxCollected] = useState()
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
    tax_collection_account_number, collector_name, tax_collected, tcs_amount_claimed, amount_paid, id
  }
  console.log(data)
  axios({
    method:"POST",
    url:"3.108.219.92:3800/v1/user/itr/update/taxcollectionsource",
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
          <span className="fs-3 text-uppercase itr-heading-text">T.C.S. [Tax Collected At Source]</span>
        </div>
        <div className='row m-0 p-0'>
            <div className='col-md-12 col-sm-12'>
            <label for="last-name" className='form-label'>Tax Collection Account Number of the Collector</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setTaxCollectionAccountNumber(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
            {data ? (data.tax_collected_at_source.tax_collection_account_number ? data.tax_collection_account_number.arrear  : "N/A"  ) : "N/A"}
            </h4>

            <label for="last-name" className='form-label'>Name of Collector</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setCollectorName(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
            {data ? (data.tax_collected_at_source.collector_name ? data.tax_collected_at_source.collector_name  : "N/A"  ) : "N/A"}
            </h4>

            <label for="last-name" className='form-label'>Tax Collected</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setTaxCollected(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
            {data ? (data.tax_collected_at_source.tax_collected ? data.tax_collected_at_source.tax_collected  : "N/A"  ) : "N/A"}
            </h4>

            <label for="last-name" className='form-label'>TCS Amount claimed this year</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setTcsAmountClaimed(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
            {data ? (data.tax_collected_at_source.tcs_amount_claimed ? data.tax_collected_at_source.tcs_amount_claimed  : "N/A"  ) : "N/A"}
            </h4>

            <label for="last-name" className='form-label'>Amount Paid/Debited</label>
            <input type="test" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setAmountPaid(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
            {data ? (data.tax_collected_at_source.amount_paid ? data.tax_collected_at_source.amount_paid  : "N/A"  ) : "N/A"}
            </h4>
            
            </div>
            <button className='btn btn-primary m-2' onClick={handleSubmit}>Add</button>
        </div>
    </div>
  )
}
