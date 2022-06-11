import React from 'react'

export default function Deduction80D({data, type}) {
  return (
    <div className='row m-0 p-0'>
        <div className='row m-0 p-0 border'>
          <span className="fs-3 text-uppercase itr-heading-text">80D Deductions [Medical Clain/Health Insurance]</span>
        </div>
        <div className='row m-0 p-0'>
            <span className='bg-dark font-size-16 text-white text-justify m-2 '>If you or any of your family member (excluding parents) is a senior citizen ?</span>
            <div className='col-md-12 col-sm-12'>
            <label for="last-name" className='form-label text-primary'>Whether you or any of your family member (excluding parents) is a senior citizen ?</label>
                    <select className={`form-control ${type == 'activate' ? "d-none" : ""}`} aria-label="--Select--">
                        <option>--Select--</option>
                        <option value="1">Yes</option>
                        <option value="1">No</option>
                        <option value="1">Not claiming for Self/Family</option>
                    </select>
                    <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.deduction_80d.is_family_member_senior_citizen ? data.deduction_80d.is_family_member_senior_citizen : "N/A"  ) : "N/A"}</h4>


            <span className='fw-bold font-size-16'>Self and Family</span><br></br>
            <label for="last-name" className='form-label'>1. Heath Insurance</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name'></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.deduction_80d.self_and_family_member_health_insurance ? data.deduction_80d.self_and_family_member_health_insurance : "N/A"  ) : "N/A"}</h4>


            <label for="last-name" className='form-label'>2. Preventive Health Checkup</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name'></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.deduction_80d.self_and_family_member_preventive_health_checkup ? data.deduction_80d.self_and_family_member_preventive_health_checkup : "N/A"  ) : "N/A"}</h4>


            <span className='fw-bold font-size-16'>Self and Family(Senior Citizen)</span><br></br>
            <label for="last-name" className='form-label'>1. Health Insurance</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name'></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.deduction_80d.self_and_family_senior_citizen_health_insurance ? data.deduction_80d.self_and_family_senior_citizen_health_insurance : "N/A"  ) : "N/A"}</h4>


            <label for="last-name" className='form-label'>2.Preventive Health Checkup</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name'></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.deduction_80d.self_and_family_senior_citizen_preventive_health_checkup ? data.deduction_80d.self_and_family_senior_citizen_preventive_health_checkup : "N/A"  ) : "N/A"}</h4>


            <label for="last-name" className='form-label'>3.Medical Expenditure (This deduction to be claimed on which health insurance is not claimed)</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' ></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.deduction_80d.self_and_family_senior_citizen_medical_expenditure ? data.deduction_80d.self_and_family_senior_citizen_medical_expenditure : "N/A"  ) : "N/A"}</h4>
            
            </div>
            
        </div>
        <div className='row m-0 p-0'>
            <span className='bg-dark font-size-16 text-white text-justify m-2'>If any one of your parent is a senior citizen ?</span>
            <div className='col-md-12 col-sm-12'>
            <label for="last-name" className='form-label text-primary'>If any one of your parent is a senior citizen ?</label>
                    <select className={`form-control ${type == 'activate' ? "d-none" : ""}`} aria-label="--Select--">
                        <option>--Select--</option>
                        <option value="1">Yes</option>
                        <option value="1">No</option>
                        <option value="1">Not claiming for Self/Family</option>
                    </select>
                    <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.deduction_80d.is_parent_senior_citizen ? data.deduction_80d.is_parent_senior_citizen : "N/A"  ) : "N/A"}</h4>


            <span className='fw-bold font-size-16'>Self and Family</span><br></br>
            <label for="last-name" className='form-label'>1. Heath Insurance</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name'></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.deduction_80d.parent_health_insurance ? data.deduction_80d.parent_health_insurance : "N/A"  ) : "N/A"}</h4>


            <label for="last-name" className='form-label'>2. Preventive Health Checkup</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name'></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.deduction_80d.parent_preventive_health_checkup ? data.deduction_80d.parent_preventive_health_checkup : "N/A"  ) : "N/A"}</h4>


            <span className='fw-bold font-size-16'>Self and Family(Senior Citizen)</span><br></br>
            <label for="last-name" className='form-label'>1. Health Insurance</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name'></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.deduction_80d.parent_senior_citizen_health_insurance ? data.deduction_80d.parent_senior_citizen_health_insurance : "N/A"  ) : "N/A"}</h4>


            <label for="last-name" className='form-label'>2.Preventive Health Checkup</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name'></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.deduction_80d.parent_senior_citizen_preventive_health_checkup ? data.deduction_80d.parent_senior_citizen_preventive_health_checkup : "N/A"  ) : "N/A"}</h4>


            <label for="last-name" className='form-label'>3.Medical Expenditure (This deduction to be claimed on which health insurance is not claimed)</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' ></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.deduction_80d.parent_senior_citizen_medical_expenditure ? data.deduction_80d.parent_senior_citizen_medical_expenditure : "N/A"  ) : "N/A"}</h4>


            <label for="last-name" className='form-label fw-bolder'>Eligible Amount of Deduction</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name'></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.deduction_80d.eligible_amount_of_deduction ? data.deduction_80d.eligible_amount_of_deduction : "N/A"  ) : "N/A"}</h4>


            </div>
            
            {/* <button className='btn btn-primary m-2'>Add</button> */}
            <button className={`btn btn-primary ${type == 'activate' ? "d-none" : ""}`} >Add</button>
        </div>
    </div>
  )
}
