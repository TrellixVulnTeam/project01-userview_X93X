import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function DeductionOthers({data, type}) {

  const [token, setToken] = useState()
  const [npf, setNpf] = useState()
  const [nps, setNps] = useState()
  const [addition_nps, setAdditionNps] = useState()
  const [employer_nps, setEmployerNps] = useState()
  const [equity_scheme, setEquityScheme] = useState()
  const [rent_paid_on_hra, setRentPaidOnHra] = useState()
  const [medical_treatment_dependent, setMedicalTreatmentDependent] = useState()
  const [interest_loan_higher_eductation, setInterestLoanHightEducation] = useState()
  const [interest_loan_residential_house, setInterestLoanResidentialHouse] = useState()
  const [deduction_for_loan_house_property, setDeductionForLoanHouseProperty] = useState()
  const [deduction_electric_vehicle, setDeductionElectricVehicle] = useState()
  const [deduction_person_disability, setDeducationPersonalDisability] = useState()
  const [interest_deposit_senior_citizen, setInterestDepositSeniorCitizen] = useState()
  const [interesst_deposit_saving_account, setInterestDepositSavingAccount] = useState()
  const [dontaion_to_political_party, setDonationToPoliticalParty] = useState()
  const [royalty_on_patents, setRoyaltyOnPatent] = useState()
  const navigate = useNavigate()
  useEffect(() => {
    console.log("income from salary component rendered")

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
  }
  checkToken()
}, [])

const handleSubmit = (e) => {
  e.preventDefault()
  console.log("inside handle submit")
  // /itr/update/incomefromproperty
  let itr = JSON.parse(localStorage.getItem('itrDetails'))
  // let ack_no = itr.itr_info.ack_no
  let id = itr._id
  let data = {
    npf, nps, addition_nps, employer_nps, equity_scheme, rent_paid_on_hra, medical_treatment_dependent, interest_loan_higher_eductation, interest_loan_residential_house, deduction_for_loan_house_property,
    deduction_electric_vehicle, deduction_person_disability, interesst_deposit_saving_account, interest_deposit_senior_citizen, dontaion_to_political_party, royalty_on_patents, id
  }
  console.log(data)
  axios({
    method:"POST",
    url:"3.108.219.92:3800/v1/user/itr/update/otherdeduction",
    headers: {
      "Authorization": `Bearer ${token}`
    },
    data: data
  }).then(data => {
    console.log(data)
    console.log(data.data)
    // Navigate('/apply/itr/next')
  }).catch(error => {
    console.log(error)
  })
}


  return (
    <div className='row m-0 p-0'>
        <div className='row m-0 p-0 border'>
          <span className="fs-3 text-uppercase itr-heading-text">Other Deductions</span>
        </div>
        <div className='row m-0 p-0'>
            <div className='col-md-12 col-sm-12'>
            <label for="last-name" className='form-label'>Contribution towards NPF [80CCC]</label>
            <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setNpf(e.target.value)}></input>
            {data ? (data.other_deduction.npf ? data.other_deduction.npf : "N/A"  ) : "N/A"}


            <label for="last-name" className='form-label'>Employee / Non-Employed Contribution towards NPS (Up to 20%) (U/S 80CCD(1))</label>
            <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setNps(e.target.value)}></input>
            {data ? (data.other_deduction.nps ? data.other_deduction.nps : "N/A"  ) : "N/A"}


            <label for="last-name" className='form-label'>Additional Contribution towards NPS (u/s 80CCD(1B))</label>
            <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setAdditionNps(e.target.value)}></input>
            {data ? (data.other_deduction.addition_nps ? data.other_deduction.addition_nps : "N/A"  ) : "N/A"}


            <label for="last-name" className='form-label'>Employer Contribution towards NPS (up to 20%) (u/s 80CCD(2))</label>
            <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setEmployerNps(e.target.value)}></input>
            {data ? (data.other_deduction.employer_nps ? data.other_deduction.employer_nps : "N/A"  ) : "N/A"}


            <label for="last-name" className='form-label'>Investment Under equity saving scheme (u/s 80CCG)</label>
            <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setEquityScheme(e.target.value)}></input>
            {data ? (data.other_deduction.equity_scheme ? data.other_deduction.equity_scheme : "N/A"  ) : "N/A"}


            <label for="last-name" className='form-label'>Rent Paid(Only for those who do not receive HRA [u/s 80GGG])</label>
            <input type="test" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setRentPaidOnHra(e.target.value)}></input>
            {data ? (data.other_deduction.rent_paid_on_hra ? data.other_deduction.rent_paid_on_hra : "N/A"  ) : "N/A"}


            <label for="last-name" className='form-label'>Interest on loan for higher education (u/s 80E)</label>
            <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setInterestLoanHightEducation(e.target.value)}></input>
            {data ? (data.other_deduction.interest_loan_higher_eductation ? data.other_deduction.interest_loan_higher_eductation : "N/A"  ) : "N/A"}


            <label for="last-name" className='form-label'>Interest on loan taken for Residential House(u/s 80EE)</label>
            <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setInterestLoanResidentialHouse(e.target.value)}></input>
            {data ? (data.other_deduction.interest_loan_residential_house ? data.other_deduction.interest_loan_residential_house : "N/A"  ) : "N/A"}


            <label for="last-name" className='form-label'>Deduction in respect of interest on loan taken for certain house property (u/s 80EEA)</label>
            <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setDeductionForLoanHouseProperty(e.target.value)}></input>
            {data ? (data.other_deduction.rent_paid ? data.other_deduction.rent_paid : "N/A"  ) : "N/A"}


            <label for="last-name" className='form-label'>Deduction in respect of purchage of electric vehicle (u/s 80EEB)</label>
            <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setDeductionElectricVehicle(e.target.value)}></input>
            {data ? (data.other_deduction.deduction_electric_vehicle ? data.other_deduction.deduction_electric_vehicle : "N/A"  ) : "N/A"}


            <label for="last-name" className='form-label'>Deduction in case of a person with disability (u/s 80U)</label>
            <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setDeducationPersonalDisability(e.target.value)}></input>
            {data ? (data.other_deduction.deduction_person_disability ? data.other_deduction.deduction_person_disability : "N/A"  ) : "N/A"}


            <label for="last-name" className='form-label'>Interest on deposits in saving account (u/s 80TTA)</label>
            <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setInterestDepositSavingAccount(e.target.value)}></input>
            {data ? (data.other_deduction.interesst_deposit_saving_account ? data.other_deduction.interesst_deposit_saving_account : "N/A"  ) : "N/A"}


            <label for="last-name" className='form-label'>Interest on deposits in case of senior citizens (u/s 80TTB)</label>
            <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setInterestDepositSeniorCitizen(e.target.value)}></input>
            {data ? (data.other_deduction.interest_deposit_senior_citizen ? data.other_deduction.interest_deposit_senior_citizen : "N/A"  ) : "N/A"}


            <label for="last-name" className='form-label'>Donation to Political party (u/s 80GGC)</label>
            <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setDonationToPoliticalParty(e.target.value)}></input>
            {data ? (data.other_deduction.dontaion_to_political_party ? data.other_deduction.dontaion_to_political_party : "N/A"  ) : "N/A"}


            <label for="last-name" className='form-label'>Royalty on patents (u/s 80RRB)</label>
            <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setRoyaltyOnPatent(e.target.value)}></input>
            {data ? (data.other_deduction.royalty_on_patents ? data.other_deduction.royalty_on_patents : "N/A"  ) : "N/A"}


            </div>
            {/* <button className='btn btn-primary m-2' onClick={handleSubmit}>Add</button> */}
            <button className={`btn btn-primary ${type == 'activate' ? "d-none" : ""}`} onClick={handleSubmit}>Add</button>
        </div>
    </div>
  )
}
