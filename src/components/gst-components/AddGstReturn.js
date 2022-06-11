import React, { useEffect, useState } from 'react'
import GstNavigation from '../Navigation/gstNavigation'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function AddGstReturn() {
    useEffect(() => {
        async function checkToken() {
            let token;
            try {
                token = await JSON.parse(localStorage.getItem('token'))
                // let product_list = await JSON.parse(localStorage.getItem('product_list') || "[]")
                // console.log(product_list)
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
    const navigate = useNavigate()
    const [token, setToken] = useState()
    const [business_name, setBusinessName] = useState()
    const [gst_no, setGstNo] = useState()
    const [state, setState] = useState()
    const [mobile, setMobile] = useState()
    const [email, setEmail] = useState()
    const [address, setAddress] = useState()
    const [gst_portal_username, setGstPortalUsername] = useState()
    const [gst_portal_password, setGstPortalPassword] = useState()
    const [errors, setErrors] = useState({})

    const checkErrors = () => {
        return new Promise((resolve, reject) => {
            let errors = {}
            if(business_name == undefined) {
                errors.businessNameError = "Please enter a valid business name"
            }
            if(gst_no == undefined) {
                errors.gstNoError = "Please enter a valid gst number"
            }
            if(state == undefined) {
                errors.stateError = "Please enter a valid state name"
            }
            if(mobile == undefined || mobile.length != 10) {
                errors.mobileErrror = "Please enter a valid 10 digit mobile number"
            }
            if(email == undefined) {
                errors.emailError = "Please enter a valid email address"
            }
            if(address == undefined) {
                errors.addressError = "Please enter an address"
            }
            if(gst_portal_username == undefined) {
                errors.gstPortalUsernameError = "Please enter a valid username"
            }
            if(gst_portal_password == undefined) {
                errors.gstPortalPassworError = "Please enter a valid password"
            }
            if(Object.keys(errors).length === 0) {
                resolve(errors)
            } else {
                reject(errors)
            }
        })
     
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
            checkErrors().then(data => {
                setErrors(data)
                submitForm()
            }).catch(error => {
                setErrors(error)
            })

        }
   
    
    const submitForm = () => {
        let data = {business_name, gst_no, state, mobile, email, address, gst_portal_username, gst_portal_password}
        axios({
            method:"POST",
            url:"http://localhost:3800/v1/user/gst/return/add",
            headers: {
                "Authorization":`Bearer ${token}`
            },
            data: data
        }).then(async data => {
            console.log(data)
            await localStorage.setItem('gst', JSON.stringify(data.data))
            if(data.status == 200) {
                navigate('/gst/return/type')
            }
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <>
            <GstNavigation />
            <div className='container'>
                <div className='row m-0 p-0 border'>
                    <span className="fs-3 text-uppercase itr-heading-text">GST Return Client Details</span>
                </div>
                <form onSubmit={handleSubmit} >
                <div className='row m-0 p-0'>
                    <fieldset className='border p-4 box-style'>
                        <legend className='float-none fw-bold '>GST Return Client Details</legend>
                        <div className='row m-0 p-0'>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Business Name</label>
                                <input type="text" className="form-control" id='last-name' onChange={(e) => setBusinessName(e.target.value)}></input>
                                {errors.businessNameError ? <span style={{'color':'red'}}>{errors.businessNameError}</span> : <span></span>}
                            </div>
                            {/* <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Type</label>
                                <input type="text" className="form-control" id='last-name'></input>
                            </div> */}
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>GST Number</label>
                                <input type="text" className="form-control" id='last-name' onChange={(e) => setGstNo(e.target.value)}></input>
                                {errors.gstNoError ? <span style={{'color':'red'}}>{errors.gstNoError}</span> : <span></span>}
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>State</label>
                                <input type="text" className="form-control" id='last-name' onChange={(e) => setState(e.target.value)}></input>
                                {errors.stateError ? <span style={{'color':'red'}}>{errors.stateError}</span> : <span></span>}
                            </div>
                        </div>
                        <div className='row m-0 p-0'>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Mobile</label>
                                <input type="number" className="form-control" id='last-name' onChange={(e) => setMobile(e.target.value)}></input>
                                {errors.mobileErrror ? <span style={{'color':'red'}}>{errors.mobileErrror}</span> : <span></span>}
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Email</label>
                                <input type="text" className="form-control" id='last-name' onChange={(e) => setEmail(e.target.value)}></input>
                                {errors.emailError ? <span style={{'color':'red'}}>{errors.emailError}</span> : <span></span>}
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Address</label>
                                <input type="text" className="form-control" id='last-name' onChange={(e) => setAddress(e.target.value)}></input>
                                {errors.addressError ? <span style={{'color':'red'}}>{errors.addressError}</span> : <span></span>}
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>GST Portal Username</label>
                                <input type="text" className="form-control" id='last-name' onChange={(e) => setGstPortalUsername(e.target.value)}></input>
                                {errors.gstPortalUsernameError ? <span style={{'color':'red'}}>{errors.gstPortalUsernameError}</span> : <span></span>}
                            </div>
                        </div>
                        <div className='row m-0 p-0'>
                        <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>GST Portal Password</label>
                                <input type="text" className="form-control" id='last-name' onChange={(e) => setGstPortalPassword(e.target.value)}></input>
                                {errors.gstPortalPassworError ? <span style={{'color':'red'}}>{errors.gstPortalPassworError}</span> : <span></span>}
                            </div>
                        </div>
                    </fieldset>
                </div>

                
                <div className='row m-0 p-3'>
                    <button className='submit-button' type='submit' >Click Here To Apply For GST</button>
                </div>
                </form>
            </div>
        </>
    )
}
