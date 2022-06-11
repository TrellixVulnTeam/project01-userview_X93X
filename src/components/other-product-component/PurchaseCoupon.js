import React, { useEffect, useState } from 'react'
import GstNavigation from '../Navigation/gstNavigation'
import { NavLink, useNavigate } from 'react-router-dom'
import OtherProductNavigation from '../Navigation/otherProductNavigation'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PurchaseCoupon() {
  const date = new Date()
  const navigate = useNavigate()
  const [token, setToken] = useState()
  const [products, setProducts] = useState([])
  const [category, setProductCategory] = useState()
  const [product_by_category, setProductByCategory] = useState([])
  const [product, setProduct] = useState({})
  const [product_id, setProductId] = useState()
  const [loginId, setLoginId] = useState()
  const [quantity, setQuantity] = useState()
  const [dispatch_need, setDisptachNeed] = useState()
  const [reward_points, setRewardPoints] = useState()
  const [first_name, setFirstName] = useState()
  const [middle_name, setMiddleName] = useState()
  const [last_name, setLastName] = useState()
  const [firm_name, setFirmName] = useState()
  const [firm_address, setFirmAddress] = useState()
  const [product_details, setProductDetails] = useState()
  const [remark, setRemark] = useState()
  const [file1, setFile1] = useState()
  const [file2, setFile2] = useState()
  const [file3, setFile3] = useState()
  const [file4, setFile4] = useState()
  const [user, setUser] = useState()
  const [file1_base64, setFile1Base64] = useState()
  const [file2_base64, setFile2Base64] = useState()
  const [file3_base64, setFile3Base64] = useState()
  const [file4_base64, setFile4Base64] = useState()
  const [is_able_to_apply, setIsAbleToApply] = useState(false)
  useEffect(() => {
    async function checkToken() {
      let token;
      try {
        token = await JSON.parse(localStorage.getItem('token'))
        let user = localStorage.getItem('user')
        user = JSON.parse(user)
        if (user && user.loginId) {
          setLoginId(user.loginId)
          setUser(user)
        }
        if (token === null || token === undefined) {
          navigate('/')
        }
        console.log("token set")
        setToken(token)
      } catch (e) {
        console.log(e)
      }
      axios({
        method: "GET",
        url: "3.108.219.92:3800/v1/user/allproduct",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }).then(data => {
        setProducts(data.data.data)
      }).catch(error => {
        console.log(error)
      })
    }
    checkToken()
  }, [])

  useEffect(() => {
    if (products.length > 0) {
      let product_array = products.filter((product) => {
        console.log(product)
        if (product.category == category) return product
      })
      console.log(product_array)
      setProductByCategory(product_array)
    }

  }, [category])

  useEffect(() => {
    console.log(product_id)
    let product = products.filter(product => product._id == product_id)
    setProduct(product[0])
  }, [product_id])

  const handleSubmit = async () => {
    let product_id = product.product_id
    let product_name = product.name
    let product_category = category
    let estimate_amount = product.price
    let reward_points = product.reward_points ? product.reward_points : 0
    let payable_amount = (parseInt(product.price) - parseInt(product.reward_points)) * parseInt(quantity)
    let final_amount = 100
    // user.balance = 100000000
    if (payable_amount > user.balance) {
      setIsAbleToApply(true)
      toast.error('Please Recharge Your Account!!!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    let data = {
      product_id, product_name, product_category, estimate_amount, reward_points, payable_amount, final_amount, first_name, middle_name, last_name,
      dispatch_need, firm_address, firm_name
    }

    // console.log(file1, file2, file3, file4)
    let base64_1;
    let base64_2;
    let base64_3;
    let base64_4;
    try {
      let fileReader = new FileReader()
      console.log("1")
      fileReader.readAsDataURL(file1)
      fileReader.onload = () => {
        base64_1 = fileReader.result
        setFile1Base64(base64_1)
      }
    } catch (e) {
      console.log(e)
    }

    try {
      let fileReader2 = new FileReader()
      console.log("2")
      fileReader2.readAsDataURL(file2)
      fileReader2.onload = () => {
        base64_2 = fileReader2.result
        setFile2Base64(base64_2)
      }
    } catch (e) {
      console.log(e)
    }

    try {
      let fileReader3 = new FileReader()
      fileReader3.readAsDataURL(file3)
      fileReader3.onload = () => {
        base64_3 = fileReader3.result
        setFile3Base64(base64_3)
      }
    } catch (e) {
      console.log(e)
    }


    try {
      let fileReader4 = new FileReader()
      fileReader4.readAsDataURL(file4)
      fileReader4.onload = () => {
        base64_4 = fileReader4.result
        setFile4Base64(base64_4)
      }
    } catch (e) {
      console.log(e)
    }


    data.file1_base64 = file1_base64
    data.file2_base64 = file2_base64
    data.file3_base64 = file3_base64
    data.file4_base64 = file4_base64
    axios({
      method: "POST",
      url: "3.108.219.92:3800/v1/user/order",
      data: data,
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }).then(data => {
      console.log(data.data)
      console.log(data.data.data)
      toast.success('Product Purchase Success', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <>

      <OtherProductNavigation />
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
          <span className="fs-3 text-uppercase itr-heading-text">Order Enquiry</span>
        </div>
        <div className='row m-0 p-0'>
          <fieldset className='border p-4 box-style'>
            <legend className='float-none fw-bold '>Business Details</legend>
            <div className='row m-0 p-0'>
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Date</label>
                <input type="text" className="form-control" id='last-name' value={date} disabled></input>
              </div>
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Login Id</label>
                <input type="text" className="form-control" id='last-name' value={loginId} disabled></input>
              </div>
            </div>
            <div className='row m-0 p-0'>
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Category</label>
                <select className='form-select' aria-label="--Select--" value={category} onChange={(e) => setProductCategory(e.target.value)}>
                  <option>--Select--</option>
                  <option value="gst-product">GST Department</option>
                  <option value="itr-product">ITR Department</option>
                  <option value="category 1">Other Product</option>
                </select>
              </div>
              <div className='col-md-6 col-sm-12'>
                <label for="last-name" className='form-label'>Select Product</label>
                <select className='form-select' aria-label="--Select--" value={product_id} onChange={(e) => setProductId(e.target.value)}>
                <option>--Select--</option>
                  {
                    product_by_category.length > 0 ? product_by_category.map(product => (
                      <option value={product._id}>{product.name}</option>
                    )) : null
                  }
                </select>
              </div>
            </div>

            <div className='row m-0 p-0'>
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Estimate Amount</label>
                <input type="text" className="form-control" id='last-name' disabled value={(product == undefined || product == null) ? 0 : product.price}></input>
              </div>
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Quantity</label>
                <input type="text" className="form-control" id='last-name' onChange={(e) => setQuantity(e.target.value)}></input>
              </div>
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Dispatch Need</label><br></br>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value={dispatch_need} onChange={(e) => setDisptachNeed(e.target.checked)} />
                  <label class="form-check-label" for="inlineRadio1">YES</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value={dispatch_need} onChange={(e) => setDisptachNeed(e.target.checked)} />
                  <label class="form-check-label" for="inlineRadio1">No</label>
                </div>
              </div>
            </div>
            <div className='row m-0 p-0'>
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Reward Points</label>
                <input type="text" className="form-control" id='last-name' value={product && product.reward_points ? product.reward_points : 0} disabled></input>
              </div>
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Payable Amount [Inclusive Tax]</label>
                <input type="text" className="form-control" id='last-name' disabled value={product ? ((parseInt(product.price) - parseInt(product.reward_points)) * quantity) : 0}></input>
              </div>
              {/* <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Final Amount [After Completion Work]</label>
                <input type="text" className="form-control" id='last-name' disabled value={10}></input>
              </div> */}
              <div className='row m-0 p-0'>
                <div className='col-md-12 col-sm-12'>
                  <span className='text-danger fw-bolder'>Your A/C balance should be greater than or equal to payable amount</span>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className='row m-0 p-0'>
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>First Name</label>
                <input type="text" className="form-control" id='last-name' onChange={(e) => setFirstName(e.target.value)}></input>
              </div>
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Middle Name</label>
                <input type="text" className="form-control" id='last-name' onChange={(e) => setMiddleName(e.target.value)}></input>
              </div>
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Last Name</label>
                <input type="text" className="form-control" id='last-name' onChange={(e) => setLastName(e.target.value)}></input>
              </div>
            </div>
            <div className='row m-0 p-0'>
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Firm Name</label>
                <input type="text" className="form-control" id='last-name' onChange={(e) => setFirmName(e.target.value)}></input>
              </div>
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Firm Address</label>
                <input type="text" className="form-control" id='last-name' onChange={(e) => setFirmAddress(e.target.value)}></input>
              </div>
            </div>
            <div className='row m-0 p-0'>
              <div className='col-md-6 col-sm-12'>
                <label for="last-name" className='form-label'>Full Details Of Product</label>
                <textarea className='form-control' onChange={(e) => setProductDetails(e.target.value)}></textarea>
              </div>
              <div className='col-md-6 col-sm-12'>
                <label for="last-name" className='form-label'>Remark</label>
                <textarea className='form-control' onChange={(e) => setRemark(e.target.value)}></textarea>
              </div>
            </div>
            <div className='row m-0 p-0'>
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Attachment 1</label>
                <input type="file" className="form-control" id='last-name' onChange={(e) => setFile1(e.target.files[0])}></input>
              </div>
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Attachment 2</label>
                <input type="file" className="form-control" id='last-name' onChange={(e) => setFile2(e.target.files[0])}></input>
              </div>
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Attachment 3</label>
                <input type="file" className="form-control" id='last-name' onChange={(e) => setFile3(e.target.files[0])}></input>
              </div>
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Attachment 4</label>
                <input type="file" className="form-control" id='last-name' onChange={(e) => setFile4(e.target.files[0])}></input>
              </div>
            </div>
            <div className='row m-0 p-0'></div>
            <div className=' d-flex flex-row'>
              <button className='btn btn-warning m-2' disabled={is_able_to_apply} onClick={handleSubmit}>Submit</button>
              <button className='btn btn-info m-2'>Reset</button>
              <button className='btn btn-primary m-2'>Add To Wishlist</button>
            </div>
          </fieldset>
        </div>
      </div>
    </>
  )
}
