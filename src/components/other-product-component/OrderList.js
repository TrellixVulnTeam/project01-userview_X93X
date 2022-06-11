import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import OtherProductNavigation from '../Navigation/otherProductNavigation'

export default function OrderList() {
    const navigate = useNavigate()
    const [token, setToken] = useState()
    const [order_list, setOrderList] = useState([])
    useEffect(() => { 
        async function checkToken() {
          let token;
          try {
            token = await JSON.parse(localStorage.getItem('token'))
            if(token === null || token === undefined) {
              navigate('/')
            }
             
          } catch(e) {
            console.log(e)
          }
          console.log(token)
          axios({
            method:"POST",
            url:"3.108.219.92:3800/v1/user/order/getall/id",
            headers: {
              "Authorization": `Bearer ${token}`
            }
          }).then(data => {
            console.log(data.data)
            setOrderList(data.data)
          }).catch(error => {
            console.log(error)
          })
          setToken(token)
        }
        checkToken()
    
    }, [])

    const filterData = () => {
      console.log("inside filter data")
    }

  return (
    <>
        <OtherProductNavigation />

        <div className='container'>
        <div className='row m-0 p-0'>
              <div className='col-md-3 col-sm-12'>
                <label for="first-name" className='form-label'>Status</label>
                <select className='form-select' aria-label="--Select--">
                        <option>--Select--</option>
                        <option value="panding">Panding Enquiry</option>
                        <option value="placed">Placed Order</option>
                        <option value="process">Order In Process</option>
                        <option value="complete">Complete Order</option>
                        <option value="delivered">Delivered Order</option>
                    </select>
              </div>
          </div>
          <div className='row m-0 p-3'>
          <button className='submit-button' onClick={filterData}>Submit</button>
        </div>  
        <div className='row m-0 p-0'>
          <table className='table table-bordered text-white'>
            <thead>
              <tr className='bg-dark text-white'>
                <td className='fw-bolder'>S.No.</td>
                <td className='fw-bolder'>Date</td>
                <td className='fw-bolder'>Login ID</td>
                <td className='fw-bolder'>Order No</td>  
                <td className='fw-bolder'>Client Name</td>
                <td className='fw-bolder'>Product Name</td>
                <td className='fw-bolder'>Payable Amount</td>
                <td className='fw-bolder'>Firm Name</td>
                <td className='fw-bolder'>Firm Address</td>
              </tr>
            </thead>
            <tbody>
              {
                order_list ? order_list.map((data, index) => (
                  <tr>
                    <td className='text-dark'>{index + 1}</td>
                    <td className='text-dark'>{data.createdAt ? data.createdAt : null}</td>
                    <td className='text-dark'>{data.loginId ? data.loginId : null}</td>
                    <td className='text-dark'>{data.orderNo ? data.orderNo : null}</td>
                    <td className='text-dark'>{data.first_name ? data.first_name : null}</td>
                    <td className='text-dark'>{data.product_name ? data.product_name : null}</td>
                    <td className='text-dark'>{data.payable_amount ? data.payable_amount : null}</td>
                    <td className='text-dark'>{data.firm_name ? data.firm_name : null }</td>
                    <td className='text-dark'>{data.firm_address ? data.firm_address : null }</td>
                  </tr>
                )) : 1
              }
            </tbody>
          </table>
        </div>
        </div>
    </>
  )
}
