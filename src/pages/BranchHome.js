import React, { useEffect, useState } from 'react'
import FundiCon from '../assets/icons/fundicon.png'
import Transaction from '../assets/icons/trsanction.png'
import Statement from '../assets/icons/statment.png'
import Incentive from '../assets/icons/incentive.png'
import Business from '../assets/icons/business.png'
import PassBook from '../assets/icons/passbook.png'
import PurchaseCoupon from '../assets/icons/purchasecpn.png'
import Itr from '../assets/icons/itr.png'
import Online from '../assets/icons/online.png'
import ActivateClient from '../assets/icons/activate.png'
import CouponStatus from '../assets/icons/coun.png'
import Report from '../assets/icons/ps.png'
import ApplyGst from '../assets/icons/app_1.png'
import RegistrationStatus from '../assets/icons/vallst.png'
import ReturnStatus from '../assets/icons/wat.png'
import OrderOtherProduct from '../assets/icons/orderth.png'
import OrderStatus from '../assets/icons/orderst.png'
import PurchaseCouponGst from '../assets/icons/purchasecpn-1.png'
import RegisterClient from '../assets/icons/reg-new.png'
import ApplyTdsOrder from '../assets/icons/app_2.png'
import ViewAllOrder from '../assets/icons/viewall-1-new.png'
import ViewAllStatus from '../assets/icons/viewall.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function BranchHome() {
  const style={'height':'75px', 'width':'75px'}
  const navigate = useNavigate()
  const [token, setToken] = useState()
  useEffect(() => {
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
      axios({
        method: "POST",
        url: "http://localhost:3800/v1/user/order/getall/id",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }).then(data => {
        console.log(data.data)
        localStorage.setItem('product_list', JSON.stringify(data.data))
      }).catch(error => {
        console.log(error)
      })
    }
    checkToken()
  }, [])

  return (
    <>
      <div className='container'>
        <div className='transaction-container background-color-green mt-3 box-style'>
          <h4 className='fw-bolder text-center text-white p-3'>Transaction</h4>
          <div className='d-flex felx-row justify-content-evenly mt-3 '>
            <div className='text-white cursor-pointer' onClick={() => navigate('/recharge/account')}>
              <img src={FundiCon} alt="..." style={style}/>
              <br></br>
              <span className='d-block text-center p-2 fw-bold'>Recharge A/C</span>
            </div>
            <div className='text-white cursor-pointer'>
            <img src={Transaction} alt="..." style={style}/>
              <br></br>
              <span className='d-block text-center p-2 fw-bold' >Recharge Status</span>
            </div>
            <div className='text-white cursor-pointer'>
            <img src={Statement} alt="..." style={style}/>
              <br></br>
              <span className='d-block text-center p-2 fw-bold'>Statement</span>
            </div>
            <div className='text-white cursor-pointer'>
            <img src={Incentive} alt="..." style={style}/>
              <br></br>
              <span className='d-block text-center p-2 fw-bold'>Incentive Report</span>
            </div>
            <div className='text-white cursor-pointer'>
            <img src={Business} alt="..." style={style}/>
              <br></br>
              <span className='d-block text-center p-2 fw-bold'>Branch Business</span>
            </div>
            <div className='text-white cursor-pointer'>
            <img src={PassBook} alt="..." style={style}/>
              <br></br>
              <span className='d-block text-center p-2 fw-bold'>Bank Details</span>
            </div>
          </div>
        </div>
        <div className='transaction-container mt-3 border box-style'>
          <h4 className='fw-bolder text-center  p-3'>ITR Management</h4>
          <div className='d-flex felx-row justify-content-evenly mt-3 '>
            <div className=' cursor-pointer' onClick={() => navigate('/coupon/purchase')}>
              <img src={PurchaseCoupon} alt="..." style={style}/>
              <br></br>
              <span className='d-block text-center p-2 fw-bold' >Purchase Coupon</span>
            </div>
            <div className=' cursor-pointer' onClick={() => navigate('/apply/itr')}>
            <img src={Itr} alt="..." style={style}/>
              <br></br>
              <span className='d-block text-center p-2 fw-bold'>Apply for I.T.R</span>
            </div>
            {/* <div className=' cursor-pointer'>
            <img src={Online} alt="..." style={style}/>
              <br></br>
              <span className='d-block text-center p-2 fw-bold'>Online Activity</span>
            </div> */}
            <div className=' cursor-pointer' onClick={() => navigate('/itr/activate/client')}>
            <img src={ActivateClient} alt="..." style={style}/>
              <br></br>
              <span className='d-block text-center p-2 fw-bold'>Activate Clients</span>
            </div>
            <div className=' cursor-pointer'>
            <img src={CouponStatus} alt="..." style={style}/>
              <br></br>
              <span className='d-block text-center p-2 fw-bold'>Coupon Status</span>
            </div>
            <div className=' cursor-pointer'>
            <img src={Report} alt="..." style={style}/>
              <br></br>
              <span className='d-block text-center p-2 fw-bold'>Report Status</span>
            </div>
          </div>
        </div>
        <div className='transaction-container mt-3 border background-color-green box-style'>
          <h4 className='fw-bolder text-center  p-3 text-white'>GST Management</h4>
          <div className='d-flex felx-row justify-content-around mt-3 '>
            <div className=' cursor-pointer' onClick={() => navigate('/coupon/purchase')}>
              <img src={PurchaseCouponGst} alt="..." style={style}/>
              <br></br>
              <span className='d-block text-center p-2 fw-bold text-white' >Purchase Coupon</span>
            </div>
            <div className=' cursor-pointer' onClick={() => navigate('/gst/apply')}>
            <img src={ApplyGst} alt="..." style={style}/>
              <br></br>
              <span className='d-block text-center p-2 fw-bold text-white'>Apply For GST <br></br>Registration</span>
            </div>
            <div className=' cursor-pointer'>
            <img src={RegistrationStatus} alt="..." style={style}/>
              <br></br>
              <span className='d-block text-center p-2 fw-bold text-white' onClick={() => navigate('/gst/track')}>Registration Status</span>
            </div>
            <div className=' cursor-pointer'>
            <img src={RegistrationStatus} alt="..." style={style}/>
              <br></br>
              <span className='d-block text-center p-2 fw-bold text-white' onClick={() => navigate('/gst/return/add')}>Apply For GST Return</span>
            </div>
            <div className=' cursor-pointer'>
            <img src={ReturnStatus} alt="..." style={style}/>
              <br></br>
              <span className='d-block text-center p-2 fw-bold text-white' onClick={() => navigate('/gst/return/view')}>Return Status</span>
            </div>
          </div>
        </div>
        <div className='transaction-container mt-3 border box-style'>
          <h4 className='fw-bolder text-center  p-3'>Other Product</h4>
          <div className='d-flex felx-row justify-content-evenly mt-3 '>
            <div className=' cursor-pointer' onClick={() => navigate('/coupon/purchase')}>
              <img src={OrderOtherProduct} alt="..." style={style}/>
              <br></br>
              <span className='d-block text-center p-2 fw-bold'>Order Other Product</span>
            </div>
            <div className=' cursor-pointer' onClick={() => navigate('/other/order/list')}>
            <img src={OrderStatus} alt="..." style={style}/>
              <br></br>
              <span className='d-block text-center p-2 fw-bold'>Order Status</span>
            </div>

          </div>
        </div>
        <div className='transaction-container mt-3 border mb-3 box-style'>
          <h4 className='fw-bolder text-center  p-3'>T.D.S. Management</h4>
          <div className='d-flex felx-row justify-content-evenly mt-3 '>
            <div className=' cursor-pointer' onClick={() => navigate('/coupon/purchase')} >
              <img src={PurchaseCoupon} alt="..." style={style} />
              <br></br>
              <span className='d-block text-center p-2 fw-bold'>Purchase Coupon</span>
            </div>
            <div className=' cursor-pointer' onClick={() => navigate('/tds/register/client')}>
            <img src={RegisterClient} alt="..." style={style}/>
              <br></br>
              <span className='d-block text-center p-2 fw-bold'>Register Client</span>
            </div>
            <div className=' cursor-pointer' onClick={() => navigate('/tds/client/list')}>
            <img src={ApplyTdsOrder} alt="..." style={style}/>
              <br></br>
              <span className='d-block text-center p-2 fw-bold'>Apply T.D.S. Order</span>
            </div>
            <div className=' cursor-pointer' onClick={() => navigate('/tds/client/list')}> 
            <img src={ViewAllOrder} alt="..." style={style}/>
              <br></br>
              <span className='d-block text-center p-2 fw-bold' >View All Order</span>
            </div>
            <div className='cursor-pointer align-item-center' onClick={() => navigate('/tds/client/list')}>
            <img src={ViewAllStatus} alt="..." style={style}/>
              <br></br>
              <span className='d-block text-center p-2 fw-bold'>View All Status</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
