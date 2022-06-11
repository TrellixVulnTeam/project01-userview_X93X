import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ItrNavigation from '../Navigation/itrNavigation'
import ItrAttachements from './ItrAttachements'
import ItrFormComponent from './ItrFormComponent'
import ItrSummary from './ItrSummary'


export default function ActivateForm() {
  const navigate = useNavigate()
  const [group, setGroup] = useState([])
  const [token, setToken] = useState()
  const [itrUserDetails, setItrUserDetails] = useState({})
  const [assesment_year, setAssesmentYear] = useState()
  const [salary_income, setSalaryIncome] = useState()
  const [house_property_income, setHousePropertyIncode] = useState()
  const [other_source_income, setOtherSourceIncome] = useState()
  const [income_from_profession, setIncomeFromProfession] = useState()
  const [capital_gain, setCapitalGain] = useState()
  const [expected_income, setExpectedIncome] = useState()
  const [gross_total_income, setGrossTotalIncome] = useState()
  const [deduction_80c, setDeduction80c] = useState()
  const [deduction_80g, setDeduction80g] = useState()
  const [other_deduction, setOtherDeduction] = useState()
  const [deduction_80cga, setDeduction80cga] = useState()
  const [deduction_80d, setDeduction80d] = useState()
  const [gross_total_deduction, setGrossTotalDeduction] = useState()
  const [net_taxable_income, setNetTaxableIncome] = useState()
  const [tds_on_salary, setTdsOnSalary] = useState()
  const [non_salary_tds, setNonSalaryTds] = useState()
  const [tcs_entry, setTcsEntry] = useState()
  const [advance_tax, setAdvanceTax] = useState()
  const [tds_16c, setTds16c] = useState()
  const [total_tax_paid, setTotalTaxPaid] = useState()
  const [itr_type, setItrType] = useState()


  useEffect(() => { 
    async function checkToken() {
      let token;
      let itrUserDetailsTemp;
      try {
        token = await JSON.parse(localStorage.getItem('token'))
        itrUserDetailsTemp = await JSON.parse(localStorage.getItem('itrDetails')) || {}
        // console.log(itrUserDetailsTemp)
        setItrUserDetails(itrUserDetailsTemp)
        if(token === null || token === undefined) {
          navigate('/')
        }
         console.log("token set")
         setToken(token)
      } catch(e) {
        console.log(e)
      }
  
    }
    checkToken()

}, [])

    // const handleSubmit = () => {
    //   let  { groupName, panNo, firstName, middleName, lastName, dob, fatherName, aadhar_no, aadhar_enrollment_no, address_name, address_number, street, area,
    //   city, state, district, pincode, landline, primary_mobile_no, secondary_mobile_no, primary_email, secondary_email, contact_type, bank_ifsc_code,
    //   bank_name, account_no, account_type, gender} = prevDetails
    //   let formData = new FormData()
    //   formData.append("groupName", groupName)
    //   formData.append("panNo", panNo)
    //   formData.append("firstName", firstName)
    //   formData.append("middleName", middleName)
    //   formData.append("lastName", lastName)
    //   formData.append("dob", dob)
    //   formData.append("fatherName", fatherName)
    //   formData.append("adharNo", aadhar_no)
    //   formData.append("adharEnrollment", aadhar_enrollment_no)
    //   formData.append("gender", gender)
    //   formData.append("address_number", address_number)
    //   formData.append("address_name", address_name)
    //   formData.append("area", area)
    //   formData.append("street", street)
    //   formData.append("city", city)
    //   formData.append("state", state)
    //   formData.append('district', district)
    //   formData.append('pincode',pincode)
    //   formData.append('landline', landline)
    //   formData.append('primary_email', primary_email)
    //   formData.append('secondary_email', secondary_email)
    //   formData.append('primary_mobile_no', primary_mobile_no)
    //   formData.append('secondary_mobile_no', secondary_mobile_no)
    //   formData.append('bank_ifsc_code', bank_ifsc_code)
    //   formData.append('bank_name', bank_name)
    //   formData.append('account_type', account_type)
    //   formData.append('account_no', account_no)
    //   formData.append('itr_type', itr_type)
    //   formData.append('salary_income', salary_income)
    //   formData.append('house_property_income', house_property_income)
    //   formData.append('other_source_income', other_source_income)
    //   formData.append('income_from_profession', income_from_profession)
    //   formData.append('capital_gain', capital_gain)
    //   formData.append('expected_income', expected_income)
    //   formData.append('gross_total_income', gross_total_income)
    //   formData.append('deduction_80c', deduction_80c)
    //   formData.append('deduction_80g', deduction_80g)
    //   formData.append('other_deduction', other_deduction)
    //   formData.append('deduction_80cga', deduction_80cga)
    //   formData.append('deduction_80d', deduction_80d)
    //   formData.append('gross_total_deduction', gross_total_deduction)
    //   formData.append('net_taxable_income', net_taxable_income)
    //   formData.append('tds_on_salary', tds_on_salary)
    //   formData.append('non_salary_tds', non_salary_tds)
    //   formData.append('tcs_entry', tcs_entry)
    //   formData.append('advance_tax', advance_tax)
    //   formData.append('tds_16c', tds_16c)
    //   formData.append('total_tax_paid', total_tax_paid)
    //   axios({
    //       method:"POST",
    //       url:"3.108.219.92:3800/v1/user/itr",
    //       data: {
    //           firstName:"firstName",
    //           lastName:"lastName"
    //       },
    //       headers: {
    //         "Authorization": `Bearer ${token}`
    //       }
    //   }).then(data => {
    //       console.log(data)
    //   }).catch(error => {
    //       console.log(error)
    //   })
  
    // }
    

  return (
    <>
      <ItrNavigation />
      <div className='container'>
        <div className='row m-0 p-0 border'>
          <span className="fs-3 text-uppercase itr-heading-text">ITR</span>
        </div>
        <form>
        <div className='row m-0 p-0'>
          <fieldset className='border p-4'>
            <legend className='float-none fw-bold '>Client Personal Information</legend>
            <div className='row m-0 p-0'>
            <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>File Type</label>
                <input type="text" className="form-control" id='pan'  value={itrUserDetails ? itrUserDetails.itr_info.itr_type : null} disabled></input>
              </div>
              
              <div className='col-md-4 col-sm-12'>
                <label for="pan" className='form-label'>PAN No *</label>
                <input type="text" className="form-control" id='pan' value={itrUserDetails ? itrUserDetails.personal_info.pan : null} disabled></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>ITR Type</label>
                <input type="text" className="form-control" id='pan' value={itrUserDetails ? itrUserDetails.itr_info.file_type : null} disabled></input>
              </div>
            </div>

            <div className='row m-0 p-0'>
              <div className='col-md-4 col-sm-12'>
                <label for="first-name" className='form-label'>Name</label>
                <input type="text" className="form-control" id='first-name' value={itrUserDetails ? itrUserDetails.personal_info.first_name : null} disabled></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Assesment Year</label>
                <input type="text" className="form-control" id='first-name' value={itrUserDetails ? itrUserDetails.itr_info.assmt_year : null} disabled></input>
                {/* <select className='form-select' aria-label="--Select--"  onChange={(e) => setAssesmentYear(e.target.value)}>
                        <option value="2019-20">2019-20</option>
                        <option value="2020-21">2020-21</option>
                        <option value="2021-22">2021-22</option>
                        <option value="2022-23">2022-23</option>
                        <option value="2023-24">2023-24</option>
                        <option value="2024-25">2024-25</option>
                    </select> */}
              </div>
              
            </div>
            <div className='row m-0 p-0 d-flex flex-row'>
            <div className='col-md-6 col-sm-12'>
            <ItrSummary />
            </div>
            <div className='col-md-6 col-sm-12'>
            <ItrFormComponent/>
            </div>
            
            
            </div>
        
        
       
          </fieldset>
          <div className='row m-0 p-0'>
              <ItrAttachements />
          </div>
        </div>
        </form>
        <div className='row m-0 p-3'>
          <button className='submit-button' >Submit</button>
        </div>
      </div>
    </>
  )
}
