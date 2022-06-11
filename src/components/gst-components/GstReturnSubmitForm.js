import React, { useEffect, useState } from 'react'
import GstNavigation from '../Navigation/gstNavigation'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function GstReturnSubmitForm() {
    // https://taxation-files.s3.ap-south-1.amazonaws.com/1ht505ck44
    const gstDate = new Date()
    const navigate = useNavigate()
    const [coupon_no, setCouponNo] = useState()
    const [coupon_id, setCouponId] = useState()
    const [total_sales_amount, setTotalSalesAmount] = useState()
    const [total_purchase_amount, setTotalPurchaseAmount] = useState()
    const [date, setDate] = useState()
    const [file, setFile] = useState()
    const [file1_base64, setFile1Base64] = useState()
    const [purchasedProducts, setPurchasedProduct] = useState([])
    const [coupon, setCoupon] = useState()
    const [coupon_name, setCouponName] = useState('')
    const [token, setToken] = useState()
    const [gst, setGst] = useState({})
    const {state} = useLocation()
    useEffect(() => {
        async function checkToken() {
            let token;
            try {
                token = await JSON.parse(localStorage.getItem('token'))
                let product_list = await JSON.parse(localStorage.getItem('product_list') || "[]")
                console.log(product_list)
               
                let gst_object = await JSON.parse(localStorage.getItem('gst'))
                console.log(gst_object)
                
                // console.log(product_list)
                if (token === null || token === undefined) {
                    navigate('/')
                }
                console.log("token set")
                
                axios({
                    method:"GET",
                    url:"3.108.219.92:3800/v1/user/products/unused",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }).then(data => {
                    console.log(data)
                    console.log(data.data)
                    let temp_data = data.data
                    let unused_product = temp_data.filter(data => {
                        if(data.is_used == false) {
                            return data
                        }
                    }) 
                    console.log(unused_product)
                    setPurchasedProduct(unused_product[0])
                    // setPurchasedProduct(data.data)
                }).catch(error => {
                    console.log(error)
                })
                setToken(token)
                setGst(gst_object)
                // setPurchasedProduct(product_list)
            } catch (e) {
                console.log(e)
            }
        }
        checkToken()

    }, [])
    useEffect(() => {
        let products = purchasedProducts.length == 0  ? [] : purchasedProducts
        let coupon_temp = products.filter(product => {
            if (product._id == coupon_id)
                return product
        })
        let temp_1 = coupon_temp[0] ? coupon_temp[0] : null
        let temp_2 = coupon_temp[0] ? coupon_temp[0].product_name : null
        console.log(temp_1, temp_2)
        setCouponName(temp_2)
        setCoupon(temp_1)
        console.log('coupon details are', coupon)
    }, [coupon_id])

    const handleSubmit = () => {
        // console.log(file)
        if(purchasedProducts.length == 0) {
            toast.error('Please purchase a product first', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        let temp_coupon = coupon ? coupon : {}
        let coupon_name = temp_coupon.product_name
        let coupon_id = temp_coupon.product_id
        let order_id = temp_coupon._id
        let file_name = file.name
        try {
            let fileReader = new FileReader()
            console.log("1")
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                console.log("2")
                setFile1Base64(fileReader.result)
            }
        } catch (e) {
            console.log(e)
        }

        let data = {
            coupon_name, coupon_id, order_id, id: gst._id, file1_base64, total_purchase_amount, total_sales_amount, file1_base64, file_name
        }
        console.log(data)
        axios({
            method: "POST",
            url: "3.108.219.92:3800/v1/user/gst/return/submitform",
            headers: {
                "Authorization": `Bearer ${token}`
            },
            data: data
        }).then(data => {
            if (data.status == 200) {
                toast.success('GST Return Submitted Successfully', {
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
            toast.error('There is some error while submitting form', {
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
            {console.log("gst_product is", state.data)}
            <GstNavigation />
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
                    <span className="fs-3 text-uppercase itr-heading-text">GST Return Submit Form</span>
                </div>
                <div className='row m-0 p-0'>
                    <fieldset className='border p-4 box-style'>
                        <legend className='float-none fw-bold '>GST Return Submit Form</legend>
                        <div className='row m-0 p-0'>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Coupon No</label>
                                <select className='form-select' aria-label="--Select--" value={coupon_id} onChange={(e) => setCouponId(e.target.value)}>
                                    {purchasedProducts.length > 0 ? purchasedProducts.map((product, index) => (
                                        <option key={index} value={product._id}>{product.product_name}</option>
                                    )) : null}
                                </select>
                            </div>
                            {/* <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Coupon No</label>
                                <input type="text" className="form-control" id='last-name'></input>
                            </div> */}
                            <div className='col-md-6 col-sm-12 p-2'>
                                <lable className="form-label text-danger fw-bold" >You can not Apply For GST Registraion Without Coupon</lable><br></br>
                                <button className='btn btn-primary' onClick={() => navigate('/coupon/purchase')}>Purchase Coupon</button>
                            </div>
                        </div>
                        <div className='row m-0 p-0'>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Business Name</label>
                                <input type="text" className="form-control" id='last-name' value={gst ? gst.business_name : ''} disabled></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Type</label>
                                <input type="text" className="form-control" id='last-name' value={gst ? gst.gst_type : ''} disabled></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>GST Number</label>
                                <input type="text" className="form-control" id='last-name' value={gst ? gst.gst_no : ''} disabled></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>State</label>
                                <input type="text" className="form-control" id='last-name' value={gst ? gst.state : ''} disabled></input>
                            </div>
                        </div>
                        {/* <div className='row m-0 p-0'>
                            <div className='col-md-6 col-sm-12'>
                                <label for="last-name" className='form-label'>Mobile</label>
                                <input type="text" className="form-control" id='last-name'></input>
                            </div>
                        </div> */}
                        <div className='row m-0 p-0'>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Mobile</label>
                                <input type="text" className="form-control" id='last-name' value={gst ? gst.mobile : ''} disabled></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Email</label>
                                <input type="text" className="form-control" id='last-name' value={gst ? gst.email : ''} disabled></input>

                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Address</label>
                                <textarea className='form-control' value={gst ? gst.address : ''} disabled></textarea>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>GST portal Username</label>
                                <input type="text" className="form-control" id='last-name' value={gst ? gst.gst_portal_username : ''} disabled></input>
                            </div>
                        </div>
                        <div className='row m-0 p-0'>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Sample File</label><br></br>
                                <a href={state.data.file_url} download="sample-file-gst" className='btn btn-primary'>Download</a>
                                {/* <button className='btn btn-primary'>Download</button> */}
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>GST Product Type</label>
                                <input type="text" className="form-control" id='last-name' value={gst ? gst.gst_subtype : ''} disabled></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Date</label>
                                <input type="text" className="form-control" id='last-name' value={gstDate}></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Upload File As per sample file</label>
                                <input type="file" className="form-control" id='last-name' onChange={(e) => setFile(e.target.files[0])}></input>
                            </div>
                        </div>
                        <div className='row m-0 p-0'>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Total Sales Amount</label>
                                <input type="text" className="form-control" id='last-name' onChange={(e) => setTotalSalesAmount(e.target.value)}></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Total Purchase Amount</label>
                                <input type="text" className="form-control" id='last-name' onChange={(e) => setTotalPurchaseAmount(e.target.value)}></input>
                            </div>
                        </div>
                        <div className='row m-0 p-3'>
                            <button className='submit-button' onClick={handleSubmit}>Submit</button>
                        </div>
                    </fieldset>
                </div>
            </div>
        </>
    )
}
