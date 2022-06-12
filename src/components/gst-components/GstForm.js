import React, { useEffect, useId, useState } from 'react'
import GstNavigation from '../Navigation/gstNavigation'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function GstForm() {
    const id = useId()


    const style = {
        'color': 'red'
      }
    
    const navigate = useNavigate()
    const [token, setToken] = useState()
    const [purchasedProducts, setPurchasedProduct] = useState([])
    const [coupon, setCoupon] = useState()
    const [coupon_name, setCouponName] = useState('')
    const [coupon_id, setCouponId] = useState()
    const [gst_type, setGstType] = useState()
    // const [gst_no] = useState()
    const [month, setMonth] = useState()
    const [year, setYear] = useState()
    const [entity_detail, setEntityDetail] = useState()
    const [firm_name, setFirmName] = useState()
    const [business_nature, setBusinessNature] = useState()
    const [business_pan_no, setBusinessPanNo] = useState()
    const [business_mobile, setBusinessMobile] = useState()
    const [business_state, setBusinessState] = useState()
    const [business_district, setBusinessDistrict] = useState()
    const [business_address, setBusinessAddress] = useState()
    const [business_ward, setBusinessWard] = useState()
    const [business_pincode, setBusinessPinCode] = useState()
    const [business_annual_turnover, setBusinessTurnover] = useState()
    const [business_object, setBusinessObject] = useState()
    const [business_total_sales_amount, setBusinessTotalSalesAmount] = useState()
    const [business_total_purchase_amount, setBusinessTotalPurchaseAmount] = useState()
    const [director_pan_no, setDirectorPan] = useState()
    const [director_name, setDirectorName] = useState()
    const [director_father_name, setDirectorFatherName] = useState()
    const [director_dob, setDirectorDob] = useState()
    const [director_aadhar_no, setDirectorAdharNo] = useState()
    const [director_mobile, setDirectorMobile] = useState()
    const [director_email, setDirectorEmail] = useState()
    const [director_pincode, setDirectorPincode] = useState()
    const [director_address, setDirectorAddress] = useState()
    const [authorized_name, setAuthorizedName] = useState()
    const [authorized_father_name, setAuthorizedFatherName] = useState()
    const [authorized_dob, setAuthorizedDob] = useState()
    const [authorized_pan_no, setAuthorizedPanNo] = useState()
    const [authorized_aadhar_no, setAuthorizedAadhar] = useState()
    const [authorized_mobile, setAuthorizedMobile] = useState()
    const [authorized_email, setAuthorizedEmail] = useState()
    const [authorized_pincode, setAuthorizedPincode] = useState()
    const [authorized_address, setAuthorizedAddress] = useState()
    const [account_type, setAccountType] = useState()
    const [account_holder_name, setAccountHolderName] = useState()
    const [account_number, setAccountNumber] = useState()
    const [ifsc_code, setIfscCode] = useState()
    const [bank_name, setBankName] = useState()
    const [bank_address, setBankAddress] = useState()
    const [file1, setFile1] = useState()
    const [file2, setFile2] = useState()
    const [file3, setFile3] = useState()
    const [file4, setFile4] = useState()
    const [file5, setFile5] = useState()
    const [file6, setFile6] = useState()
    const [file7, setFile7] = useState()
    const [file8, setFile8] = useState()
    const [file9, setFile9] = useState()
    const [file1_base64, setFile1Base64] = useState()
    const [file2_base64, setFile2Base64] = useState()
    const [file3_base64, setFile3Base64] = useState()
    const [file4_base64, setFile4Base64] = useState()
    const [file5_base64, setFile5Base64] = useState()
    const [file6_base64, setFile6Base64] = useState()
    const [file7_base64, setFile7Base64] = useState()
    const [file8_base64, setFile8Base64] = useState()
    const [file9_base64, setFile9Base64] = useState()
    const [same_as_above, setSameAsAbove] = useState(false)
    const [errors, setErrors] = useState({})


    useEffect(() => {
        async function checkToken() {
            let token;
            try {
                token = await JSON.parse(localStorage.getItem('token'))
                let product_list = await JSON.parse(localStorage.getItem('product_list') || "[]")
                setPurchasedProduct(product_list)
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


    useEffect(() => {
        let products = purchasedProducts == undefined ? [] : purchasedProducts
        let coupon_temp = products.filter(product => {
            if (product._id == coupon_id)
                return product
        })
        // console.log(coupon_temp[0].product_name)
        let temp_1 = coupon_temp[0] ? coupon_temp[0] : null
        let temp_2 = coupon_temp[0] ? coupon_temp[0].product_name : null
        console.log(temp_1, temp_2)
        setCouponName(temp_2)
        setCoupon(temp_1)
        //console.log(coupon)
        // console.log(coupon_temp[0])
    }, [coupon_id])

    const checkErrors = () => {
        let errors = {}
        console.log("inside errors")
        if(coupon_id == undefined) {
            errors.couponNameError = "Please select a coupon"
        }
        if(gst_type == undefined) {
            errors.gstTypeError = "Please select a gst type"
        }
        if(entity_detail == undefined) {
            errors.entityDetailsError = "Please select an entity"
        }
        if(business_nature == undefined) {
            errors.businessNatureError = "Please select business nature"
        }
        if(firm_name == undefined) {
            errors.firmNameError = "Please select firm name"
        }
        if(business_pan_no == undefined) {
            errors.businessPanNoError = "Please enter business pan no"
        }
        if(business_mobile == undefined || business_mobile.length != 10) {
            errors.businessMobileError = "Please enter valid mobile number"
        }
        if(business_state == undefined) {
            errors.businessStateError = "Please enter state"
        }
        if(business_district == undefined) {
            errors.businessDistrictError = "Please enter district"
        }
        if(business_address == undefined) {
            errors.businessAddressError = "Please enter address"
        }
        if(business_ward == undefined) {
            errors.businessWardError = "Please enter ward"
        }
        if(business_pincode == undefined) {
            errors.businessPincodeError = "Please enter pincode"
        }
        if(business_annual_turnover == undefined) {
            errors.businessAnnualTurnoverError = "please enter annual turnover"
        }
        if(business_object == undefined) {
            errors.businessObjectError = "Please enter business object"
        }
        if(director_name == undefined ) {
            errors.directorNameError = "Please enter a valid name"
        }
        if(director_father_name == undefined ) {
            errors.directorFatherNameError = "Please enter a valid father name"
        }
        if(director_dob == undefined ) {
            errors.directorDobError = "Please enter a valid dob"
        }
        if(director_pan_no == undefined ) {
            errors.directorPanError = "Please enter a valid pan no"
        }
        if(director_aadhar_no == undefined ) {
            errors.directorAdharNoError = "Please enter a valid aadhar number"
        }
        if(director_mobile == undefined || director_mobile.length != 10) {
            errors.directorMobileError = "Please enter a valid 10 digit mobile number"
        }
        if(director_email == undefined) {
            errors.directorEmailError = "Please enter a valid email"
        }
        if(director_pincode == undefined) {
            errors.directorPincodeError = "Please enter a valid pincode"
        }
        if(director_address == undefined) {
            errors.directorAddressError = "Please enter address"
        }
        if(account_holder_name == undefined) {
            errors.accountHolderNameError = "Please enter a valid name"
        }
        if(account_number == undefined) {
            errors.accountNumberError = "please enter a account number" 
        }
        if(account_type == undefined) {
            errors.accountTypeError = "Please select account type"
        }
        if(ifsc_code == undefined) {
            errors.ifscCodeError = "Please enter ifsc code"
        }
        if(bank_name == undefined) {
            errors.bankNameError = "Please Entere valid bank name"
        }
        if(bank_address == undefined) {
            errors.bankAddressError = "Please enter a valid bank address"
        }
        console.log(errors)
        return errors
    }

    const handleSubmit = (e) => {
        e.preventDefault()
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
        if (same_as_above) {
            console.log("inside same as above")
            setAuthorizedAadhar(director_aadhar_no)
            setAuthorizedAddress(director_address)
            setAuthorizedDob(director_dob)
            setAuthorizedEmail(director_email)
            setAuthorizedFatherName(director_father_name)
            setAuthorizedMobile(director_mobile)
            setAuthorizedName(director_name)
            setAuthorizedPanNo(director_pan_no)
            setAuthorizedPincode(director_pincode)
        }
        setErrors(checkErrors())
        if(Object.keys(errors).length !== 0) {
            return;
          }
        // business_total_purchase_amount, business_total_sales_amount
        // month, year,
        let data = {
            coupon, coupon_name, gst_type, entity_detail, firm_name, business_nature, business_mobile, business_pan_no, business_state, business_district, business_address,
            business_ward, business_pincode, business_annual_turnover, business_object,
            director_pan_no, director_name, director_aadhar_no, director_address, director_dob, director_email, director_father_name, director_mobile, director_pincode,
            authorized_aadhar_no, authorized_address, authorized_dob, authorized_email, authorized_father_name, authorized_mobile, authorized_name, authorized_pan_no, authorized_pincode,
            account_holder_name, account_number, account_type, ifsc_code, bank_address, bank_name
        }
        console.log('same is', same_as_above)
        try {
            let fileReader1 = new FileReader()
            console.log("1")
            fileReader1.readAsDataURL(file1)
            fileReader1.onload = () => {
                //   base64_1 =  fileReader.result
                //   setFile1Base64(base64_1)
                setFile1Base64(fileReader1.result)
            }
        } catch (e) {
            console.log(e)
        }
        try {
            let fileReader2 = new FileReader()
            console.log("2")
            fileReader2.readAsDataURL(file2)
            fileReader2.onload = () => {
                //   base64_1 =  fileReader.result
                //   setFile1Base64(base64_1)
                setFile2Base64(fileReader2.result)
            }
        } catch (e) {
            console.log(e)
        }
        try {
            let fileReader3 = new FileReader()
            console.log("3")
            fileReader3.readAsDataURL(file3)
            fileReader3.onload = () => {
                //   base64_1 =  fileReader.result
                //   setFile1Base64(base64_1)
                setFile3Base64(fileReader3.result)
            }
        } catch (e) {
            console.log(e)
        }
        try {
            let fileReader4 = new FileReader()
            console.log("4")
            fileReader4.readAsDataURL(file4)
            fileReader4.onload = () => {
                //   base64_1 =  fileReader.result
                //   setFile1Base64(base64_1)
                setFile4Base64(fileReader4.result)
            }
        } catch (e) {
            console.log(e)
        }
        try {
            let fileReader5 = new FileReader()
            console.log("4")
            fileReader5.readAsDataURL(file4)
            fileReader5.onload = () => {
                //   base64_1 =  fileReader.result
                //   setFile1Base64(base64_1)
                setFile4Base64(fileReader5.result)
            }
        } catch (e) {
            console.log(e)
        }
        try {
            let fileReader6 = new FileReader()
            console.log("5")
            fileReader6.readAsDataURL(file5)
            fileReader6.onload = () => {
                //   base64_1 =  fileReader.result
                //   setFile1Base64(base64_1)
                setFile5Base64(fileReader6.result)
            }
        } catch (e) {
            console.log(e)
        }
        try {
            let fileReader7 = new FileReader()
            console.log("6")
            fileReader7.readAsDataURL(file6)
            fileReader7.onload = () => {
                //   base64_1 =  fileReader.result
                //   setFile1Base64(base64_1)
                setFile6Base64(fileReader7.result)
            }
        } catch (e) {
            console.log(e)
        }
        try {
            let fileReader8 = new FileReader()
            console.log("7")
            fileReader8.readAsDataURL(file7)
            fileReader8.onload = () => {
                //   base64_1 =  fileReader.result
                //   setFile1Base64(base64_1)
                setFile7Base64(fileReader8.result)
            }
        } catch (e) {
            console.log(e)
        }
        try {
            let fileReader9 = new FileReader()
            console.log("8")
            fileReader9.readAsDataURL(file8)
            fileReader9.onload = () => {
                //   base64_1 =  fileReader.result
                //   setFile1Base64(base64_1)
                setFile8Base64(fileReader9.result)
            }
        } catch (e) {
            console.log(e)
        }
        try {
            let fileReader = new FileReader()
            console.log("9")
            fileReader.readAsDataURL(file9)
            fileReader.onload = () => {
                //   base64_1 =  fileReader.result
                //   setFile1Base64(base64_1)
                setFile9Base64(fileReader.result)
            }
        } catch (e) {
            console.log(e)
        }

        data.file1_base64 = file1_base64
        data.file2_base64 = file2_base64
        data.file3_base64 = file3_base64
        data.file4_base64 = file4_base64
        data.file5_base64 = file5_base64
        data.file6_base64 = file6_base64
        data.file7_base64 = file7_base64
        data.file8_base64 = file8_base64
        data.file9_base64 = file9_base64
        console.log("data is ", data)
        axios({
            method: "POST",
            url: "http://3.108.219.92:3800/v1/user/gst/register",
            data: data,
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(data => {
            // console.log(data)
            if(data.status == 200) {
                toast.success('Applying for GST Registration Successfull', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            } else {
                toast.error('There is some error while applying for GST Registration', {
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
            console.log(error)
        })
    }

    return (
        <>
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
                    <span className="fs-3 text-uppercase itr-heading-text">Apply For GST Registration</span>
                </div>

                <div className='row m-0 p-0'>
                    <fieldset className='border p-4 box-style'>
                        <legend className='float-none fw-bold '>Business Details</legend>
                        <div className='row m-0 p-0'>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Coupon No</label>
                                <select className='form-select' aria-label="--Select--" value={coupon_id} onChange={(e) => setCouponId(e.target.value)}>
                                    <option>---Select---</option>
                                    {purchasedProducts != undefined ? purchasedProducts.map((product, index) => (
                                        <option key={index} value={product._id}>{product.product_name}</option>
                                    )) : null}
                                </select>
                                {errors.couponNameError ? <span style={{'color':'red'}}>{errors.couponNameError}</span> : <span></span>}
                            </div>
                            <div className='col-md-6 col-sm-12 p-2'>
                                <lable className="form-label text-danger fw-bold" >You can not Apply For GST Registration Without Coupon</lable><br></br>
                                <button className='btn btn-primary' onClick={() => navigate('/coupon/purchase')}>Purchase Coupon</button>
                            </div>
                        </div>
                        <div className='row m-0 p-0'>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>GST Type</label>
                                <select className='form-select' aria-label="--Select--" value={gst_type} onChange={(e) => setGstType(e.target.value)}>
                                    <option>--Select--</option>
                                    <option value="composition">Composition</option>
                                    <option value="no-composition">No Composition</option>
                                </select>
                                {errors.gstTypeError ? <span style={{'color':'red'}}>{errors.gstTypeError}</span> : <span></span>}
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Entity Details</label>
                                <select className='form-select' aria-label="--Select--" value={entity_detail} onChange={(e) => setEntityDetail(e.target.value)}>
                                    <option>--Select--</option>
                                    <option value="individual">Individual</option>
                                    <option value="huf">HUF</option>
                                    <option value="company">Company</option>
                                    <option value="firm">Firm</option>
                                    <option value="aop">AOP</option>
                                    <option value="trust">Trust</option>
                                </select>
                                {errors.entityDetailsError ? <span style={{'color':'red'}}>{errors.entityDetailsError}</span> : <span></span>}
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Nature of Business</label>
                                <select className='form-select' aria-label="--Select--" value={business_nature} onChange={(e) => setBusinessNature(e.target.value)}>
                                    <option>--Select--</option>
                                    <option value="trading">Trading</option>
                                    <option value="services">Services</option>
                                </select>
                                {errors.businessNatureError ? <span style={{'color':'red'}}>{errors.businessNatureError}</span> : <span></span>}
                            </div>
                        </div>
                        <div className='row m-0 p-0'>
                            <div className='col-md-6 col-sm-12'>
                                <label for="last-name" className='form-label'>Firm/Company/Legal Name</label>
                                <input type="text" className="form-control" id='last-name' onChange={(e) => setFirmName(e.target.value)}></input>
                                {errors.firmNameError ? <span style={{'color':'red'}}>{errors.firmNameError}</span> : <span></span>}
                            </div>
                        </div>
                        <div className='row m-0 p-0'>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Business Pan Number</label>
                                <input type="text" className="form-control" id='last-name' onChange={(e) => setBusinessPanNo(e.target.value)}></input>
                                {errors.businessPanNoError ? <span style={{'color':'red'}}>{errors.businessPanNoError}</span> : <span></span>}
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Mobile Number</label>
                                <input type="nurbee" className="form-control" id='last-name' onChange={(e) => setBusinessMobile(e.target.value)}></input>
                                {errors.businessMobileError ? <span style={{'color':'red'}}>{errors.businessMobileError}</span> : <span></span>}
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>State</label>
                                <input type="text" className="form-control" id='last-name' onChange={(e) => setBusinessState(e.target.value)}></input>
                                {errors.businessStateError ? <span style={{'color':'red'}}>{errors.businessStateError}</span> : <span></span>}
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>District</label>
                                <input type="text" className="form-control" id='last-name' onChange={(e) => setBusinessDistrict(e.target.value)}></input>
                                {errors.businessDistrictError ? <span style={{'color':'red'}}>{errors.businessDistrictError}</span> : <span></span>}
                            </div>
                        </div>
                        <div className='row m-0 p-0'>
                            <div className='col-md-12 col-sm-12'>
                                <label for="last-name" className='form-label'>Address</label>
                                <textarea className='form-control' onChange={(e) => setBusinessAddress(e.target.value)}></textarea>
                                {errors.businessAddressError ? <span style={{'color':'red'}}>{errors.businessAddressError}</span> : <span></span>}
                            </div>
                        </div>
                        <div className='row m-0 p-0'>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Ward/Circle</label>
                                <input type="text" className="form-control" id='last-name' onChange={(e) => setBusinessWard(e.target.value)}></input>
                                {errors.businessWardError ? <span style={{'color':'red'}}>{errors.businessWardError}</span> : <span></span>}
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Pin Code</label>
                                <input type="text" className="form-control" id='last-name' onChange={(e) => setBusinessPinCode(e.target.value)}></input>
                                {errors.businessPincodeError ? <span style={{'color':'red'}}>{errors.businessPincodeError}</span> : <span></span>}
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Annual Turnover</label>
                                <input type="number" className="form-control" id='last-name' onChange={(e) => setBusinessTurnover(e.target.value)}></input>
                                {errors.businessAnnualTurnoverError ? <span style={{'color':'red'}}>{errors.businessAnnualTurnoverError}</span> : <span></span>}
                            </div>
                        </div>
                        <div className='row m-0 p-0'>
                            <div className='col-md-12 col-sm-12'>
                                <label for="last-name" className='form-label'>Business Object:(Description of Business)</label>
                                <textarea className='form-control' onChange={(e) => setBusinessObject(e.target.value)}></textarea>
                                {errors.businessObjectError ? <span style={{'color':'red'}}>{errors.businessObjectError}</span> : <span></span>}
                            </div>
                        </div>
                    </fieldset>
                </div>

                <div className='row m-0 p-0'>
                    <fieldset className='border p-4 box-style'>
                        <legend className='float-none fw-bold'>Proprietor/Partner/Director/Member's Basic Details</legend>
                        <div className='row m-0 p-0'>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Name as Per PAN Card</label>
                                <input type="text" className="form-control" id='last-name' onChange={(e) => setDirectorName(e.target.value)}></input>
                                {errors.directorNameError ? <span style={{'color':'red'}}>{errors.directorNameError}</span> : <span></span>}
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="pan" className='form-label'>Father's Name</label>
                                <input type="text" className="form-control" id='pan' onChange={(e) => setDirectorFatherName(e.target.value)}></input>
                                {errors.directorFatherNameError ? <span style={{'color':'red'}}>{errors.directorFatherNameError}</span> : <span></span>}
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="pan" className='form-label'>DOB</label>
                                <input type="date" className="form-control" id='pan' onChange={(e) => setDirectorDob(e.target.value)}></input>
                                {errors.directorDobError ? <span style={{'color':'red'}}>{errors.directorDobError}</span> : <span></span>}
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="pan" className='form-label'>PAN Number</label>
                                <input type="text" className="form-control" id='pan' onChange={(e) => setDirectorPan(e.target.value)}></input>
                                {errors.directorPanError ? <span style={{'color':'red'}}>{errors.directorPanError}</span> : <span></span>}
                            </div>
                        </div>

                        <div className='row m-0 p-0'>
                            <div className='col-md-3 col-sm-12'>
                                <label for="first-name" className='form-label'>Aadhar Number</label>
                                <input type="number" className="form-control" id='first-name' onChange={(e) => setDirectorAdharNo(e.target.value)}></input>
                                {errors.directorAdharNoError ? <span style={{'color':'red'}}>{errors.directorAdharNoError}</span> : <span></span>}
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Mobile Number</label>
                                <input type="text" className="form-control" id='last-name' onChange={(e) => setDirectorMobile(e.target.value)}></input>
                                {errors.directorMobileError ? <span style={{'color':'red'}}>{errors.directorMobileError}</span> : <span></span>}
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Email Id</label>
                                <input type="email" className="form-control" id='last-name' onChange={(e) => setDirectorEmail(e.target.value)}></input>
                                {errors.directorEmailError ? <span style={{'color':'red'}}>{errors.directorEmailError}</span> : <span></span>}
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Pin Code</label>
                                <input type="number" className="form-control" id='last-name' onChange={(e) => setDirectorPincode(e.target.value)}></input>
                                {errors.directorPincodeError ? <span style={{'color':'red'}}>{errors.directorPincodeError}</span> : <span></span>}
                            </div>
                        </div>

                        <div className='row m-0 p-0'>
                            <div className='col-md-12 col-sm-12'>
                                <label for="first-name" className='form-label'>Address</label>
                                <textarea className='form-control' onChange={(e) => setDirectorAddress(e.target.value)}>

                                </textarea>
                                {errors.directorAddressError ? <span style={{'color':'red'}}>{errors.directorAddressError}</span> : <span></span>}
                            </div>
                        </div>

                    </fieldset>
                </div>

                <div className='row m-0 p-0'>
                    <fieldset className='border p-4 box-style'>
                        <legend className='float-none fw-bold'>Authorized signature Basic Details</legend>
                        <div className='row m-0 p-0'>
                            <div className='col-md-12 col-sm-12'>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="checked" id="flexCheckDefault" checked={same_as_above} onChange={(e) => { setSameAsAbove(!same_as_above) }} />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Same As Above
                                    </label>
                                </div>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Name as Per PAN Card</label>
                                <input type="text" className="form-control" id='last-name' value={same_as_above ? director_name : authorized_name} disabled={same_as_above ? true : false} onChange={(e) => setAuthorizedName(e.target.value)}></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="pan" className='form-label'>Father's Name</label>
                                <input type="text" className="form-control" id='pan' value={same_as_above ? director_father_name : authorized_father_name} disabled={same_as_above ? true : false} onChange={(e) => setAuthorizedFatherName(e.target.value)}></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="pan" className='form-label'>DOB</label>
                                <input type="date" className="form-control" id='pan' value={same_as_above ? director_dob : authorized_dob} disabled={same_as_above ? true : false} onChange={(e) => setAuthorizedDob(e.target.value)}></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="pan" className='form-label'>PAN Number</label>
                                <input type="text" className="form-control" id='pan' value={same_as_above ? director_pan_no : authorized_pan_no} disabled={same_as_above ? true : false} onChange={(e) => setAuthorizedPanNo(e.target.value)}></input>
                            </div>
                        </div>

                        <div className='row m-0 p-0'>
                            <div className='col-md-3 col-sm-12'>
                                <label for="first-name" className='form-label'>Aadhar Number</label>
                                <input type="text" className="form-control" id='first-name' value={same_as_above ? director_aadhar_no : authorized_aadhar_no} disabled={same_as_above ? true : false} onChange={(e) => setAuthorizedAadhar(e.target.value)}></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Mobile Number</label>
                                <input type="text" className="form-control" id='last-name' value={same_as_above ? director_mobile : authorized_mobile} disabled={same_as_above ? true : false} onChange={(e) => setAuthorizedMobile(e.target.value)}></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Email Id</label>
                                <input type="text" className="form-control" id='last-name' value={same_as_above ? director_email : authorized_email} disabled={same_as_above ? true : false} onChange={(e) => setAuthorizedEmail(e.target.value)}></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Pin Code</label>
                                <input type="text" className="form-control" id='last-name' value={same_as_above ? director_pincode : authorized_pincode} disabled={same_as_above ? true : false} onChange={(e) => setAuthorizedPincode(e.target.value)}></input>
                            </div>
                        </div>

                        <div className='row m-0 p-0'>
                            <div className='col-md-12 col-sm-12'>
                                <label for="first-name" className='form-label'>Address</label>
                                <textarea className='form-control' value={same_as_above ? director_address : authorized_address} disabled={same_as_above ? true : false} onChange={(e) => setAuthorizedAddress(e.target.value)}>

                                </textarea>
                            </div>
                        </div>

                    </fieldset>
                </div>

                <div className='row m-0 p-0'>
                    <fieldset className='border p-4 box-style'>
                        <legend className='float-none fw-bold '>Bank Details</legend>
                        <div className='row m-0 p-0'>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Account Holder Name</label>
                                <input type="text" className="form-control" id='last-name' onChange={(e) => setAccountHolderName(e.target.value)}></input>
                                {errors.accountHolderNameError ? <span style={{'color':'red'}}>{errors.accountHolderNameError}</span> : <span></span>}
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="pan" className='form-label'>Account Number</label>
                                <input type="text" className="form-control" id='pan' onChange={(e) => setAccountNumber(e.target.value)}></input>
                                {errors.accountNumberError ? <span style={{'color':'red'}}>{errors.accountNumberError}</span> : <span></span>}
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Account Type</label>
                                <select className='form-select' aria-label="--Select--" value={account_type} onChange={(e) => setAccountType(e.target.value)}>
                                    <option>--Select--</option>
                                    <option value="saving">Saving</option>
                                    <option value="current">Current</option>
                                </select>
                                {errors.accountTypeError ? <span style={{'color':'red'}}>{errors.accountTypeError}</span> : <span></span>}
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="pan" className='form-label'>IFSC Code</label>
                                <input type="text" className="form-control" id='pan' onChange={(e) => setIfscCode(e.target.value)}></input>
                                {errors.ifscCodeError ? <span style={{'color':'red'}}>{errors.ifscCodeError}</span> : <span></span>}
                            </div>
                        </div>

                        <div className='row m-0 p-0'>
                            <div className='col-md-3 col-sm-12'>
                                <label for="first-name" className='form-label'>Bank Name</label>
                                <input type="text" className="form-control" id='first-name' onChange={(e) => setBankName(e.target.value)}></input>
                                {errors.bankNameError ? <span style={{'color':'red'}}>{errors.bankNameError}</span> : <span></span>}
                            </div>
                            <div className='col-md-9 col-sm-12'>
                                <label for="first-name" className='form-label'>Bank Address</label>
                                <textarea className='form-control' onChange={(e) => setBankAddress(e.target.value)}></textarea>
                                {errors.bankAddressError ? <span style={{'color':'red'}}>{errors.bankAddressError}</span> : <span></span>}
                            </div>
                        </div>
                    </fieldset>
                </div>
                <div className='row m-0 p-0'>
                    <fieldset className='border p-4 box-style'>
                        <legend className='float-none fw-bold'>Attachments</legend>
                        <div className='row m-0 p-0'>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Photo:(.jpeg or .jpg)</label>
                                <input type="file" className="form-control" id='last-name' onChange={(e) => setFile1(e.target.files[0])}></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="pan" className='form-label'>Aadhar Card:(.pdf)</label>
                                <input type="file" className="form-control" id='pan' onChange={(e) => setFile2(e.target.files[0])}></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="pan" className='form-label'>Cancle Cheque / Bank Statement(.pdf)</label>
                                <input type="file" className="form-control" id='pan' onChange={(e) => setFile3(e.target.files[0])}></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="pan" className='form-label'>Light Bill:(.pdf)</label>
                                <input type="file" className="form-control" id='pan' onChange={(e) => setFile4(e.target.files[0])}></input>
                            </div>
                        </div>

                        <div className='row m-0 p-0'>
                            <div className='col-md-3 col-sm-12'>
                                <label for="first-name" className='form-label'>Rent Aggrement:(.pdf)</label>
                                <input type="file" className="form-control" id='first-name' onChange={(e) => setFile5(e.target.files[0])}></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Deed / Rent Aggrement / Co-Letter:(.pdf)</label>
                                <input type="file" className="form-control" id='last-name' onChange={(e) => setFile6(e.target.files[0])}></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Authorization Letter:(.pdf)</label>
                                <input type="file" className="form-control" id='last-name' onChange={(e) => setFile7(e.target.files[0])}></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Other Document:(.pdf)</label>
                                <input type="file" className="form-control" id='last-name' onChange={(e) => setFile8(e.target.files[0])}></input>
                            </div>
                        </div>

                        <div className='row m-0 p-0'>
                            <div className='col-md-3 col-sm-12'>
                                <label for="first-name" className='form-label'>Pancard:(.pdf)</label>
                                <input type="file" className="form-control" id='last-name' onChange={(e) => setFile9(e.target.files[0])}></input>
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
