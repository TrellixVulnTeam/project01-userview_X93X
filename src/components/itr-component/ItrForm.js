import axios from 'axios'
import React, { useEffect, useId, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import ItrNavigation from '../Navigation/itrNavigation'
import 'react-toastify/dist/ReactToastify.css';

export default function ItrForm() {
  const navigate = useNavigate()
  const [token, setToken] = useState()
  const [group_list, setGroup] = useState([])
  const [group, setGroupName] = useState()
  const [pan, setPanNo] = useState()
  const [first_name, setFirstName] = useState()
  const [middle_name, setMiddleName] = useState()
  const [last_name, setLastName] = useState()
  const [dob, setDob] = useState()
  const [father_name, setFatherName] = useState()
  const [adhar_no, setAdharNumber] = useState()
  const [adhar_enrollment_no, setAdharEnrollmentNo] = useState()
  const [gender, setGender] = useState()
  const [address_name, setAddressName] = useState()
  const [address_number, setAddressNumber] = useState()
  const [street, setStreet] = useState()
  const [area, setArea] = useState()
  const [town, setCity] = useState()
  const [state, setState] = useState()
  const [district, setDistrict] = useState()
  const [pincode, setPincode] = useState()
  const [country, setCountry] = useState()
  const [landline, setLandline] = useState()
  const [primary_mobile, setPrimaryMobileNo] = useState()
  const [secondary_mobile, setSecondaryMobileNo] = useState()
  const [primary_email, setPrimaryEmail] = useState()
  const [contact_type, setContactType] = useState()
  const [secondary_email, setSecondaryEmail] = useState()
  const [ifsc_code, setBankIfscCode] = useState()
  const [bank_name, setBankName] = useState()
  const [account_type, setAccountType] = useState()
  const [account_no, setAccountNumber] = useState() 
  
  const [errors, setErrros] = useState({})
  const style = {
    'color': 'red'
  }

  useEffect(() => { 
    async function checkToken() {
      let token;
      try {
        token = await JSON.parse(localStorage.getItem('token'))
        if(token === null || token === undefined) {
          navigate('/')
        }
        console.log("token set")
         setToken(token)
      } catch(e) {
        console.log(e)
      }
      axios({
        method:"GET",
        url:"http://3.108.219.92:3800/v1/user/allgroup",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }).then(data => {
        console.log("Group Set")
        setGroup(data.data)

      }).catch(error => {
        console.log(error)
      })
    }
    checkToken()

}, [])

  const errorCheck = () => {
    let errors = {}
    if(group == undefined) {
      errors.groupError = "Please Select A Group Name"
    }
    if(pan == undefined || pan.length != 10) {
      errors.panError = "Please Enter a Valid Pan No"
    }
    if(first_name == undefined || first_name.length < 3) {
      errors.firstNameError = "First Name should be at least 3 character long"
    }
    if(last_name == undefined || last_name.length < 3) {
      errors.lastNameError = "Last name should be at least 3 character long"
    }
    if(dob == undefined) {
      errors.dobError = "Please enter a valid dob"
    }
    if(father_name == undefined || father_name.length < 3) {
      errors.fatherNameError = "Fathers name should be at least 3 character long"
    }
    if(adhar_no == undefined || adhar_no.length != 12) {
      errors.adharError = "Please Enter a valid Adhar Number"
    }
    if(address_number == undefined) {
      errors.addressNumberError = "Please Enter a valid address"
    }
    if(street == undefined) {
      errors.streetError = "Please Enter a valid street name"
    }
    if(area == undefined) {
      errors.areaError = "Please Enter a valid area name"
    }
    if(town == undefined) {
      errors.townError = "Please Enter a valid town name "
    }
    if(state == undefined) {
      errors.stateError = "Please Enter a valid state"
    }
    if(district == undefined) {
      errors.districtError = "Please Enter a valid district name"
    }
    if(pincode == undefined || pincode.length != 6) {
      errors.pincodeError = "Please Enter a valid pincode"
    }
    if(primary_mobile == undefined || primary_mobile.length != 10) {
      errors.primaryMobileError = "Please Enter a valid Mobile Number"
    }
    if(primary_email == undefined) {
      errors.emailError = "Please Enter a valid email"
    }
    if(ifsc_code == undefined) {
      errors.ifscCodeError = "Please Enter a valid IFSC code"
    }
    if(bank_name == undefined) {
      errors.bankNameError = "Please Enter a Valid bank name"
    }
    if(account_no == undefined) {
      errors.accountNumberError = "Please Enter a valid account number"
    }
    if(account_type == undefined) {
      errors.accountTypeError = "Please enter a valid account type"
    }
    if(gender == undefined) {
      errors.genderError = "Please enter a gender"
    }
    if(contact_type == undefined) {
      errors.contactTypeError = "Please Enter a valid contact type (SELF/OFFICE)"
    }

    return errors;
  }

  const handleNext = async (e) => {
    e.preventDefault()
    setErrros(errorCheck())
    console.log(errors)
    if(Object.keys(errors).length !== 0) {
      return;
    }
    
    let user = {
      group, pan, first_name, middle_name, last_name, dob, father_name, adhar_no, adhar_enrollment_no, address_name, address_number, street, area,
      town, state, district, pincode, landline, primary_mobile, secondary_mobile, primary_email, secondary_email, contact_type, ifsc_code,
      bank_name, account_no, account_type, gender
    }
    try {
      user = JSON.stringify(user)
      localStorage.setItem('itrUserDetails', user)
    } catch (e) { console.log(e) }
    axios({
      method:"POST",
      url:"http://3.108.219.92:3800/v1/user/itr/personalinfo",
      headers : {
        "Authorization": `Bearer ${token}`
      },
      data: {
        group, pan, first_name, middle_name, last_name, dob, father_name, adhar_no, adhar_enrollment_no, address_name, address_number, street, area,
      town, state, district, pincode, landline, primary_mobile, secondary_mobile, primary_email, secondary_email, contact_type, ifsc_code,
      bank_name, account_no, account_type, gender
      }
    }).then(data => {
      console.log(data)
        if(data.status == 200) {
          console.log(data.data)
          localStorage.setItem('itrDetails', JSON.stringify(data.data))
          navigate('/itr/options')
        } else {
          toast("There is some error please try again letter")
        }
    }).catch(error => {
      console.log(error)
      // toast("Internal Server Error,  please try again letter")
    })
  }

  return (
    <>
      <ItrNavigation />
      <div className='container'>
        <div className='row m-0 p-0 border'>
          <span className="fs-3 text-uppercase itr-heading-text">Register Client As Individual</span>
        </div>
        <form onSubmit={handleNext}>
        <div className='row m-0 p-0 ' >
          <fieldset className='border p-4 box-style'>
            <legend className='float-none fw-bold '>Personal Information</legend>
            <div className='row m-0 p-0'>
            <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Group Name</label>
                <select className='form-select' aria-label="--Select--" value={group} onChange={(e) => setGroupName(e.target.value)}  >
                  <option>---Select---</option>
                        {group_list.map(data => 
                          <option value={data.name}>{data.name}</option>
                        )}
                    </select>
                    {errors.groupError ? <span style={{'color':'red'}}>{errors.groupError}</span> : <span></span>}
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="pan" className='form-label'>PAN No *</label>
                <input type="text" className="form-control text-uppercase" id='pan' onChange={(e) => setPanNo(e.target.value)}  ></input>
                {errors.panError ? <span style={style}>{errors.panError}</span> : <span></span>}
              </div>
            </div>

            <div className='row m-0 p-0'>
              <div className='col-md-4 col-sm-12'>
                <label for="first-name" className='form-label'>First Name</label>
                <input type="text" className="form-control text-uppercase" id='first-name' onChange={(e) => setFirstName(e.target.value)}  ></input>
                {errors.firstNameError ? <span style={{'color':'red'}}>{errors.firstNameError}</span> : <span></span>}
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Middle Name</label>
                <input type="text" className="form-control text-uppercase" id='last-name' onChange={(e) => setMiddleName(e.target.value)} ></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Last Name</label>
                <input type="text" className="form-control text-uppercase" id='last-name' onChange={(e) => setLastName(e.target.value)}  ></input>
                {errors.lastNameError ? <span style={{'color':'red'}}>{errors.lastNameError}</span> : <span></span>}
              </div>
            </div>

            <div className='row m-0 p-0'>
              <div className='col-md-4 col-sm-12'>
                <label for="first-name" className='form-label'>Date of Birth</label>
                <input type="date" className="form-control text-uppercase" id='first-name' onChange={(e) => setDob(e.target.value)}  ></input>
                {errors.dobError ? <span style={{'color':'red'}}>{errors.dobError}</span> : <span></span>}
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Father's Name</label>
                <input type="text" className="form-control text-uppercase" id='last-name' onChange={(e) => setFatherName(e.target.value)}  ></input>
                {errors.fatherNameError ? <span style={{'color':'red'}}>{errors.fatherNameError}</span> : <span></span>}
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Adhar No</label>
                <input type="number" className="form-control text-uppercase" id='last-name' onChange={(e) => setAdharNumber(e.target.value)}></input>
                {errors.adharError ? <span style={{'color':'red'}}>{errors.adharError}</span> : <span></span>}
              </div>
            </div>

            <div className='row m-0 p-0'>
              <div className='col-md-4 col-sm-12'>
                <label for="first-name" className='form-label'>Adhar Enrollment Id</label>
                <input type="text" className="form-control text-uppercase" id='first-name' onChange={(e) => setAdharEnrollmentNo(e.target.value)}></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Gender</label>
                <select className='form-select text-uppercase' aria-label="--Select--" value={gender} onChange={(e) => setGender(e.target.value)}  >
                        <option>--Select--</option>
                        <option value="male">Male</option>
                        <option value="female">FeMale</option>
                    </select>
                    {errors.genderError ? <span style={{'color':'red'}}>{errors.genderError}</span> : <span></span>}
              </div>
            </div>

          </fieldset>
        </div>

        <div className='row m-0 p-0'>
          <fieldset className='border p-4 box-style'>
            <legend className='float-none fw-bold '>Address Details</legend>
            <div className='row m-0 p-0'>
            <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Name of Premises/Building/Village</label>
                <input type="text" className="form-control text-uppercase" id='last-name' onChange={(e) => setAddressName(e.target.value)}></input>
                
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="pan" className='form-label'>Flat/Door/Building</label>
                <input type="text" className="form-control text-uppercase" id='pan' onChange={(e) => setAddressNumber(e.target.value)}  ></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="pan" className='form-label'>Road/Street</label>
                <input type="text" className="form-control text-uppercase" id='pan' onChange={(e) => setStreet(e.target.value)}  ></input>
                {errors.streetError ? <span style={{'color':'red'}}>{errors.streetError}</span> : <span></span>}
                
              </div>
            </div>

            <div className='row m-0 p-0'>
              <div className='col-md-4 col-sm-12'>
                <label for="first-name" className='form-label'>Area/Locality</label>
                <input type="text" className="form-control text-uppercase" id='first-name' onChange={(e) => setArea(e.target.value)}  ></input>
                {errors.areaError ? <span style={{'color':'red'}}>{errors.areaError}</span> : <span></span>}
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Town/City</label>
                <input type="text" className="form-control text-uppercase" id='last-name' onChange={(e) => setCity(e.target.value)}  ></input>
                {errors.townError ? <span style={{'color':'red'}}>{errors.townError}</span> : <span></span>}
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>State</label>
                <input type="text" className="form-control text-uppercase" id='last-name' onChange={(e) => setState(e.target.value)}  ></input>
                {errors.stateError ? <span style={{'color':'red'}}>{errors.stateError}</span> : <span></span>}
              </div>
            </div>

            <div className='row m-0 p-0'>
              <div className='col-md-4 col-sm-12'>
                <label for="first-name" className='form-label'>District</label>
                <input type="text" className="form-control text-uppercase" id='first-name' onChange={(e) => setDistrict(e.target.value)}  ></input>
                {errors.districtError ? <span style={{'color':'red'}}>{errors.districtError}</span> : <span></span>}
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Pin Code</label>
                <input type="number" className="form-control text-uppercase" id='last-name' onChange={(e) => setPincode(e.target.value)}  ></input>
                {errors.pincodeError ? <span style={{'color':'red'}}>{errors.pincodeError}</span> : <span></span>}
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Country</label>
                <input type="text" className="form-control text-uppercase" id='last-name' value="INDIA" disabled></input>
              </div>
            </div>

          </fieldset>
        </div>

        <div className='row m-0 p-0'>
          <fieldset className='border p-4 box-style'>
            <legend className='float-none fw-bold '>Contact Details</legend>
            <div className='row m-0 p-0'>
            <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Landline</label>
                <input type="text" className="form-control text-uppercase" id='last-name' onChange={(e) => setLandline(e.target.value)} ></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="pan" className='form-label'>Primary Mobile No</label>
                <input type="number" className="form-control text-uppercase" id='pan' onChange={(e) => setPrimaryMobileNo(e.target.value)}  ></input>
                {errors.primaryMobileError ? <span style={{'color':'red'}}>{errors.primaryMobileError}</span> : <span></span>}
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="pan" className='form-label'>Secondary Mobile No</label>
                <input type="number" className="form-control text-uppercase" id='pan' onChange={(e) => setSecondaryEmail(e.target.value)}></input>
              </div>
            </div>

            <div className='row m-0 p-0'>
              <div className='col-md-4 col-sm-12'>
                <label for="first-name" className='form-label'>Primary Email-Id</label>
                <input type="email" className="form-control text-uppercase" id='first-name' onChange={(e) => setPrimaryEmail(e.target.value)}  ></input>
                {errors.emailError ? <span style={{'color':'red'}}>{errors.emailError}</span> : <span></span>}
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Secondary Email-Id</label>
                <input type="email" className="form-control text-uppercase" id='last-name' onChange={(e) => setSecondaryEmail(e.target.value)}></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Contact Type</label>
                <input type="text" className="form-control text-uppercase" id='last-name' onChange={(e) => setContactType(e.target.value)}  ></input>
                {errors.contactTypeError ? <span style={{'color':'red'}}>{errors.contactTypeError}</span> : <span></span>}
              </div>
            </div>
          </fieldset>
        </div>
        <div className='row m-0 p-0'>
          <fieldset className='border p-4 box-style'>
            <legend className='float-none fw-bold '>Bank Details</legend>
            <div className='row m-0 p-0'>
            <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Bank IFSC Code</label>
                <input type="text" className="form-control text-uppercase" id='last-name' onChange={(e) => setBankIfscCode(e.target.value)}  ></input>
                
                {errors.ifscCodeError ? <span style={{'color':'red'}}>{errors.ifscCodeError}</span> : <span></span>}
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="pan" className='form-label'>Bank Name</label>
                <input type="text" className="form-control text-uppercase" id='pan' onChange={(e) => setBankName(e.target.value)}  ></input>
                
                {errors.bankNameError ? <span style={{'color':'red'}}>{errors.bankNameError}</span> : <span></span>}
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="pan" className='form-label'>Account Type</label>
                <select className='form-select' aria-label="--Select--" value={account_type} onChange={(e) => setAccountType(e.target.value)}  >
                        <option>--Select--</option>
                        <option value="saving">Saving Account</option>
                        <option value="current">Current Account</option>
                    </select>
                    
                    {errors.accountTypeError ? <span style={{'color':'red'}}>{errors.accountTypeError}</span> : <span></span>}
              </div>
            </div>

            <div className='row m-0 p-0'>
              <div className='col-md-4 col-sm-12'>
                <label for="first-name" className='form-label'>Account No</label>
                <input type="number" className="form-control text-uppercase" id='first-name' onChange={(e) => setAccountNumber(e.target.value)}  ></input>
                
                {errors.accountNumberError ? <span style={{'color':'red'}}>{errors.accountNumberError}</span> : <span></span>}
              </div>
            </div>
          </fieldset>
        </div>
        <div className='row m-0 p-3'>
          
          <input type="submit" className='submit-button'></input>
        </div>
        </form>
      </div>
    </>
  )
}
