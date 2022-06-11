import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import TdsNavigation from '../Navigation/TdsNavigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ApplyTdsOrder() {

  const financilaYearArray = ['2017-18', '2018-19', '2019-20', '2020-21', '2021-22', '2022-23', '2023-24', '2024-25']

  const navigate = useNavigate()
  const [token, setToken] = useState()
  const [purchasedProducts, setPurchasedProduct] = useState([])
  const [all_product, setAllProduct] = useState([])
  const [coupon_id, setCouponId] = useState()
  // const [coupon_no, setCouponNo] = useState()
  const [tan_no, setTanNo] = useState()
  const [business_name, setBusinessName] = useState()
  const [mobile, setMobile] = useState()
  const [email, setEmail] = useState()
  const [address, setAddress] = useState()
  const [return_type, setReturnType] = useState() 
  const [return_for, setReturnFor] = useState()
  const [financial_year, setFinancialYear] = useState()
  const [quarter, setQuarter] = useState()
  const [tds_product, setTdsProduct] = useState()
  const [product_id, setProductId] = useState()
  const { state } = useLocation()
  const data = state.data
  
  useEffect(() => {
    console.log(state)
    setTanNo(data.tan_no)
    setBusinessName(data.business_name)
    setMobile(data.mobile)
    async function checkToken() {
      let token;
      try {
        token = await JSON.parse(localStorage.getItem('token'))
        let product_list = await JSON.parse(localStorage.getItem('product_list') || "[]")
        setPurchasedProduct(product_list)
        if (token === null || token === undefined) {
          navigate('/')
        }
        console.log("token set")
        setToken(token)
      } catch (e) {
        console.log(e)
      }
      axios({
        method:"GET",
        url:"http://localhost:3800/v1/user/allproduct",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }).then(data => {
        let products = data.data.data
        console.log(products)
        let temp_products = products.filter(product => {
          if(product.category == 'tds-product')
            return product
        })
         console.log("all products are", temp_products)
        setAllProduct(temp_products)
        
      }).catch(error => {
        console.log(error)
      })
    }
    checkToken()

  }, [])
  
  useEffect(() => {
    let temp_product = all_product.filter(product => {
      if(product._id == product_id) {
        return product
      } 
    })
    setTdsProduct(temp_product[0])
    
  }, [product_id])

  const handleSubmit = () => {
    // purchasedProducts.length = 0
    if(purchasedProducts.length == 0) {
      toast.error('Please Purchase a Coupon First', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return
    }
    let id = data._id
    console.log(tds_product)
    console.log(financial_year)
    let tds_product_name = tds_product.name
    let tds_product_id = product_id
    let data_to_send = {
      id, coupon_id, return_type, return_for, financial_year,tds_product_id, tds_product_name
    }
    console.log('data to send is', data_to_send)
    axios({
      method:"POST",
      url:"http://localhost:3800/v1/user/tds/update/client/1",
      headers: {
        "Authorization": `Bearer ${token}`
      },
      data: data_to_send
    }).then(data => {
      if(data.status == 200) {
        toast.success('Application for TDS Success', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }).catch(error => {
      toast.error('There is some error while applying for TDS', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    })
  }

  

  return (
    <>
      <TdsNavigation />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className='container'>

        <div className='row m-0 p-0 border'>
          <span className="fs-3 text-uppercase itr-heading-text">T.D.S. Client</span>
        </div>

        <div className='row m-0 p-0'>
          <fieldset className='border p-4'>
            <legend className='float-none fw-bold '>T.D.S. Client</legend>

            <div className='row m-0 p-0'>
              <div className='col-md-3 col-sm-12'>
                <label for="first-name" className='form-label'>TAN No.</label>
                <input type="text" className="form-control" id='first-name' value={tan_no} onChange={(e) => setTanNo(e.target.value)} disabled></input>
              </div>
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Business Name</label>
                <input type="text" className="form-control" id='last-name' value={data.department_name}  onChange={(e) => setBusinessName(e.target.value)} disabled></input>
              </div>
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Mobile No</label>
                <input type="text" className="form-control" id='last-name' value={data.mobile} onChange={(e) => setMobile(e.target.value)} disabled></input>
              </div>
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Email ID</label>
                <input type="text" className="form-control" id='last-name' value={data.email} onChange={(e) => setEmail(e.target.value)} disabled></input>
              </div>
            </div>
            <div className='row m-0 p-0'>
              <div className='col-md-12 col-sm-12'>
                <label for="first-name" className='form-label'>Address</label>
                <textarea className='form-control' value={data.address} onChange={(e) => setAddress(e.target.value)} disabled></textarea>
              </div>
            </div>
            <div className='row m-0 p-0'>
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Return Type</label>
                <select className='form-select' aria-label="--Select--" value={return_type} onChange={(e) => setReturnType(e.target.value)}>
                  <option>--Select--</option>
                  <option value="orginal_return">Original Return</option>
                  <option value="revised_return">Revised Return</option>
                </select>
              </div>
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Return For</label>
                <select className='form-select' aria-label="--Select--" value={return_for} onChange={(e) => setReturnFor(e.target.value)}>
                  <option>--Select--</option>
                  <option value="salaried">Salaried</option>
                  <option value="non-salaried">Non-Salaried/other</option>
                </select>
              </div>
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Financial Year</label>
                <select className='form-select' aria-label="--Select--" value={financial_year} onChange={(e) => setFinancialYear(e.target.value)}>
                  <option>---select---</option>
                  <option value="2017-18">2017-18</option>
                  <option value="2017-18">2018-19</option>
                  <option value="2017-18">2019-20</option>
                  <option value="2017-18">2020-21</option>
                  <option value="2017-18">2021-22</option>
                  <option value="2017-18">2022-23</option>
                  <option value="2017-18">2023-24</option>
                  <option value="2017-18">2024-25</option>
                  <option value="2017-18">2025-26</option>
                  <option value="2017-18">2026-27</option>

                  {/* {financilaYearArray.map(data => (
                    <option value={data}>{data}</option>
                  ))} */}
                </select>
              </div>
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Quarter</label>
                <select className='form-select' aria-label="--Select--" value={quarter} onChange={(e) => setQuarter(e.target.value)}>
                  <option>--Select--</option>
                  <option value="april-june">April - June</option>
                  <option value="july-spetember">July - September</option>
                  <option value="october-december">October - December</option>
                  <option value="january-march">January - March</option>
                </select>
              </div>
            </div>
            <div className='row m-0 p-0'>
              <div className='col-md-6 col-sm-12'>
                <label for="last-name" className='form-label'>Select TDS Product</label>
                <select className='form-select' aria-label="--Select--" value={product_id} onChange={(e) => setProductId(e.target.value)}>
                  <option>--Select--</option>
                  {all_product.map(product => (
                    <option value={product._id}>{product.name}</option>
                  ))}
                </select>
              </div>
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Coupon No</label>
                <select className='form-select' aria-label="--Select--" value={coupon_id} onChange={(e) => setCouponId(e.target.value)}>
                  <option>---Select---</option>
                  {purchasedProducts != undefined ? purchasedProducts.map((product, index) => (
                    <option key={index} value={product._id}>{product.product_name}</option>
                  )) : null}
                </select>
              </div>
              <div className='col-md-3 col-sm-12 p-2'>
                                <lable className="form-label text-danger fw-bold" >You can not Apply For TDS Without Coupon</lable><br></br>
                                <button className='btn btn-primary' onClick={() => navigate('/coupon/purchase')}>Purchase Coupon</button>
              </div>
            </div>
          </fieldset>
        </div>
        <div className='row m-0 p-3'>
          <button className='submit-button' onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </>
  )
}
