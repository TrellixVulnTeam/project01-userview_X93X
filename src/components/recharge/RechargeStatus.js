import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AccountNavigation from '../Navigation/accountNavigation'



export default function RechargeStatus() {

  const navigate = useNavigate()
  const [token, setToken] = useState()
  const [recharge_list, setRechargeList] = useState([])
  const [start_date, setStartDate] = useState(new Date())
  const [end_date, setEndDate] = useState(new Date())
  useEffect(() => { 
      async function checkToken() {
        let token;
        try {
          token = await JSON.parse(localStorage.getItem('token'))
          if(token === null || token === undefined) {
            navigate('/')
          }
          setToken(token)
          console.log(token)
        } catch(e) {
          console.log(e)
        }
        axios({
          method:"GET",
          url:"http://3.108.219.92:3800/v1/user/allrecharge",
          headers: {
            "Authorization": `Bearer ${token}`
          }
      }).then(data => {
        // console.log(data.data.data)
          if(data.status == 200) {
            setRechargeList(data.data.data)
          }
      }).catch(error => {
          console.log(error)
      })
      }

     
      checkToken()

  }, [])
  const handleSubmit = () => {
    let data = {start_date, end_date}
    console.log(data)
    axios({
      method:"GET",
      url:"http://3.108.219.92:3800/v1/user/allrecharge",
      headers: {
        "Authorization": `Bearer ${token}`
      },
      data: data
  }).then(data => {
    console.log(data.data.data)
      // if(data.status == 200) {
      //   setRechargeList(data.data.data)
      // }
  }).catch(error => {
      console.log(error)
  })
  }
    

    return (
        <>
            <AccountNavigation />
            <div className='container'>
            <div className='row m-0 p-0 border'>
              <span className="fs-3 text-uppercase itr-heading-text">Recharge Status</span>
            </div>
            <div className='row m-0 p-0'>
              <fieldset className='border p-4'>
                <legend className='float-none fw-bold '>View All Recharge</legend>
                <div className='row m-0 p-0'>
                <div className='col-md-3 col-sm-12'>
                    <label for="last-name" className='form-label'>From</label>
                    <input type="date" className="form-control" id='last-name' value="Etaxway Services Limited" onChange={(e) => setStartDate(e.target.value)}></input>
                  </div>
                  <div className='col-md-3 col-sm-12'>
                    <label for="pan" className='form-label'>To</label>
                    <input type="date" className="form-control" id='pan' onChange={(e) => setEndDate(e.target.value)}></input>
                  </div>
                </div>
    
                <div className='row m-0 p-3'>
              <button className='submit-button' onClick={handleSubmit}>Search</button>
            </div>
              </fieldset>
            </div>
            <div className='row m-0 p-0 border'>
              <span className="fs-3 text-uppercase itr-heading-text">View ALl Registered Customer List</span>
            </div>
            <div className='row m-0 p-0'>
              <table className='table table-bordered'>
                <thead>
                  <tr>
                    <th scope='col'>S.No.</th>
                    <th scope='col'>User Id</th>
                    <th scope='col'>Date</th>
                    <th scope='col'>Amount</th>
                    <th scope='col'>Bank Details</th>
                    <th scope='col'>DD/Cheque No</th>
                    <th scope='col'>Status</th>
                    <th scope='col'>Admin Remark</th>
                  </tr>
                </thead>
                <tbody>
                  {recharge_list.length > 0 ? recharge_list.map((recharge, index) => (
                    <tr>
                      <th scope="col">{index}</th>
                      <th scope="col">{recharge.loginId}</th>
                      <th scope="col">{recharge.createdAt}</th>
                      <th scope="col">{recharge.amount}</th>
                      <th scope="col">{recharge.bank_account}</th>
                      <th scope="col">{recharge.cheque_no}</th>
                      <th scope="col">{recharge.is_completed ? "Completed" : "Not-Completed"}</th>
                      <th scope="col">{recharge.admin_remark ? recharge.admin_remark : "NONE"}</th>
                    </tr>
                  )) : null}
                 </tbody>
              </table>
            </div>
            </div>
        </>
      )
}
