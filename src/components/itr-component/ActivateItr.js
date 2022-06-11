import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ItrNavigation from '../Navigation/itrNavigation'
import ItrFormComponent from './ItrFormComponent'
import ItrSummary from './ItrSummary'


const ActivatItr = () => {

    const [token, setToken] = useState()
    const { state } = useLocation()
    const navigate = useNavigate()
    const itrData = state.data
    const type = state.type
    useEffect(() => {
        console.log("itr form next rendered")
        async function checkToken() {
            let token;
            try {
                token = await JSON.parse(localStorage.getItem('token'))
                if (token === null || token === undefined) {
                    navigate('/')
                }
                console.log("token set")
                // setToken(token)
            } catch (e) {
                console.log(e)
            }
        }
        checkToken()

    }, [])



    return (
        <>
            {console.log(itrData)}
            <ItrNavigation />
            <div className='container'>
                <div className='row m-0 p-0 border'>
                    <span className="fs-3 text-uppercase itr-heading-text">ITR</span>
                </div>
                <div className='row m-0 p-3'>
                    <div className='col-md-3 col-sm-12 col-xl-3'>
                        <span className='itr-info'>1. Fill Personal Information</span>
                    </div>
                    <div className='col-md-3 col-sm-12 col-xl-3'>
                        <span className='itr-info'>1. Fill Income/Deduction Information</span>
                    </div>
                    <div className='col-md-3 col-sm-12 col-xl-3'>
                        <span className='itr-info'>3. Review & Activate</span>
                    </div>
                    <div className='col-md-3 col-sm-12 col-xl-3'>
                        <hr></hr>
                    </div>
                </div>
                <div className='row m-0 p-0'>
                    <div className='row m-0 p-0'>
                        <fieldset className='border p-4'>
                            <legend className='float-none fw-bold '>Client Personal Information</legend>
                            <div className='row m-0 p-3'>
                                <h4 className='text-center text-danger'>
                                    Your file will be cancelled if you did not link pancard with aadhar card.
                                </h4>
                            </div>
                            <div className='row m-0 p-0'>
                                <div className='col-md-4 col-sm-12'>
                                    <label for="last-name" className='form-label'>File Type ::  </label>
                                    <span className='p-0 fw-bolder display-inline-block margin-left-10'>{itrData ? (itrData.itr_info.file_type ? itrData.itr_info.file_type : null) : null}</span>
                                </div>

                                <div className='col-md-4 col-sm-12'>
                                    <label for="pan" className='form-label'>PAN No :: </label>
                                    <span className='p-0 fw-bolder display-inline-block margin-left-10'>{itrData ? (itrData.personal_info.pan ? itrData.personal_info.pan : null) : null}</span>
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label for="last-name" className='form-label'>ITR Type</label>
                                    <span className='p-0 fw-bolder display-inline-block margin-left-10'>{itrData ? (itrData.itr_info.itr_type ? itrData.itr_info.itr_type : null) : null}</span>
                                </div>
                            </div>

                            <div className='row m-0 p-0'>
                                <div className='col-md-4 col-sm-12'>
                                    <label for="first-name" className='form-label'>Name</label>
                                    <span className='p-0 fw-bolder display-inline-block margin-left-10'>{itrData ? (itrData.personal_info.first_name ? itrData.personal_info.first_name : null) : null}</span>
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <label for="last-name" className='form-label'>Assesment Year</label>
                                    <span className='p-0 fw-bolder display-inline-block margin-left-10'>{itrData ? (itrData.itr_info.assmt_year ? itrData.itr_info.assmt_year : null) : null}</span>
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <button className='btn btn-primary'>Activate This File</button>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>
                <div className='row m-0 p-0'>
          <fieldset className='border p-4'>
            <legend className='float-none fw-bold '>Client Personal Information</legend>

            <div className='row m-0 p-0 d-flex flex-row'>
            <div className='col-md-6 col-sm-12'>
            <table className='table border text-center table-bordered'>
                <thead>
                    <tr>
                        <td className='col bg-dark text-white fw-bolder'>Particulars</td>
                        <td className='col bg-dark text-white fw-bolder'>Show Details</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='col fw-bolder color-green '>Income</td>
                        <td className='col fw-bolder color-green '>Amount</td>
                    </tr>
                    <tr>
                        <td className='col fw-bolder'>Income From Salary/Pension</td>
                        <td className='col'>
                            
                        </td>
                    </tr>
                    <tr>
                        <td className='col fw-bolder'>Income From House Property</td>
                        <td className='col'>
                            
                        </td>
                    </tr>
                    <tr>
                        <td className='col fw-bolder'>Income From Other Sources</td>
                        <td className='col'>
                            
                        </td>
                    </tr>
                    <tr>
                        <td className='col fw-bolder'>Income From Business/Profession</td>
                        <td className='col'>
                            
                        </td>
                    </tr>
                    <tr>
                        <td className='col fw-bolder'>Capital Gain</td>
                        <td className='col'>
                            
                        </td>
                    </tr>
                    <tr>
                        <td className='col fw-bolder'>Expected Income</td>
                        <td className='col'>
                            
                        </td>
                    </tr>
                    <tr>
                        <td className='col fw-bolder'>GROSS TOTAL INCOME</td>
                        <td className='col'>
                            
                        </td>
                    </tr>
                    <tr>
                        <td className='col bg-dark text-white fw-bolder'>DEDUCTION</td>
                        <td className='col bg-dark text-white fw-bolder'>AMOUNT</td>
                    </tr> 
                    <tr>
                        <td className='col fw-bolder'>80 C</td>
                        <td className='col'>
                            
                        </td>
                    </tr>
                    <tr>
                        <td className='col fw-bolder'>80 G</td>
                        <td className='col'>
                            
                        </td>
                    </tr>
                    <tr>
                        <td className='col fw-bolder'>Other Deductions</td>
                        <td className='col'>
                            
                        </td>
                    </tr>
                    <tr>
                        <td className='col fw-bolder'>80 CGA</td>
                        <td className='col'>
                            
                        </td>
                    </tr>
                    <tr>
                        <td className='col fw-bolder'>80 D</td>
                        <td className='col'>
                            
                        </td>
                    </tr>
                    <tr>
                        <td className='col fw-bolder'>GROSS TOTAL DEDUCTION</td>
                        <td className='col'>
                            
                        </td>
                    </tr>
                    <tr>
                        <td className='col fw-bolder'>NET TAXABLE INCOME</td>
                        <td className='col'>
                            
                        </td>
                    </tr>
                    <tr>
                        <td className='col bg-dark text-white fw-bolder '>TAXES PAID</td>
                        <td className='col bg-dark text-white fw-bolder '>AMOUNT</td>
                    </tr>
                    <tr>
                        <td className='col fw-bolder'>T.D.S On Salary</td>
                        <td className='col'>
                            
                        </td>
                    </tr>
                    <tr>
                        <td className='col fw-bolder'>Non Salary TDS</td>
                        <td className='col'>
                            
                        </td>
                    </tr>
                    <tr>
                        <td className='col fw-bolder'>TCS entry(Tax Collected at Source)</td>
                        <td className='col'>
                            
                        </td>
                    </tr>
                    <tr>
                        <td className='col fw-bolder'>Advance Tax / Self Assessment Tax</td>
                        <td className='col'>
                            
                        </td>
                    </tr>
                    <tr>
                        <td className='col fw-bolder'>T.D.S (Tax Deduction at Source)[16C]</td>
                        <td className='col'>
                            
                        </td>
                    </tr>
                    <tr>
                        <td className='col fw-bolder'>TOTAL TAX PAID</td>
                        <td className='col'>
                            
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div className='col-md-6 col-sm-12'>
            <ItrFormComponent data={itrData} type={type}/>
            </div>
            
            
            </div>
        
        
       
          </fieldset>
          <div className='row m-0 p-0'>
              {/* <ItrAttachements /> */}
          </div>
        </div>
            </div>
        </>
    )
}


export default ActivatItr