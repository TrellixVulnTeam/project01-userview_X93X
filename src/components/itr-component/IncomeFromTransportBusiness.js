import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function IncomeFromTransportBusiness({data, type}) {

  const [member_capital, setMemberCapital] = useState()
  const [secured_loans, setSecuredLoans] = useState()
  const [unsecured_loans, setUnsecuredLoans] = useState()
  const [advances, setAdvances] = useState()
  const [sundry_creditors, setSundryCreditors] = useState()
  const [other_liabilities, setOtherLiabilities] = useState()
  const [total_capital_liabilities, setTotalCapitalLiabilities] = useState()
  const [fixed_assets, setFixedAssets] = useState()
  const [inventories, setInventories] = useState()
  const [sundry_debators, setSundryDebators] = useState()
  const [balance_with_bank, setBalanceWithBank] = useState()
  const [cash_in_hand, setCashInHand] = useState()
  const [loans_and_advances, setLoansAndAdvances] = useState()
  const [other_current_assests, setOtherCurrentAssets] = useState()
  const [total_assets, setTotalAssets] = useState()
  const [business_name, setBusinessName] = useState()
  const [number_of_vehicles, setVehicleNumber] = useState()
  const [vehicle_registration_no, setVehicleRegistrationNo] = useState()
  const [vehicle_type, setVehicleType] = useState()
  const [tonnage_capacity, setTonnageCapacity] = useState()
  const [period_of_holding, setPeriosOfHolding] = useState()
  const [income_per_vehicle, setIncomePerVehicle] = useState()
  const [deemed_income, setDeemedIncome] = useState()
  const [token, setToken] = useState()
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
  useEffect(() => {
    let capital_1 = member_capital == undefined ? 0 : member_capital
    let capital_2 = secured_loans == undefined ? 0 : secured_loans
    let capital_3 = unsecured_loans == undefined ? 0 : unsecured_loans
    let capital_4 = advances == undefined ? 0 : advances
    let capital_5 = sundry_creditors == undefined ? 0 : sundry_creditors
    let capital_6 = other_liabilities == undefined ? 0 : other_liabilities
    let all_capital = parseInt(capital_1) + parseInt(capital_2) + parseInt(capital_3) + parseInt(capital_4) + parseInt(capital_5) + parseInt(capital_6) 
    setTotalCapitalLiabilities(all_capital)
  }, [member_capital, secured_loans, unsecured_loans, advances, sundry_creditors, other_liabilities])

  useEffect(() => {
    let data1 = fixed_assets == undefined ? 0 : fixed_assets
    let data2 = inventories == undefined ? 0 : inventories
    let data3 = sundry_debators == undefined ? 0 : sundry_debators
    let data4 = balance_with_bank == undefined ? 0 : balance_with_bank
    let data5 = cash_in_hand == undefined ? 0 : cash_in_hand
    let data6 = loans_and_advances == undefined ? 0 : loans_and_advances
    let data7 = other_current_assests == undefined ? 0 : other_current_assests
    let all_data = parseInt(data1) + parseInt(data2) + parseInt(data3) + parseInt(data4) + parseInt(data5) + parseInt(data6) + parseInt(data7)
    setTotalAssets(all_data)
  }, [fixed_assets,inventories, sundry_debators, balance_with_bank, cash_in_hand, loans_and_advances, other_current_assests])
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("inside handle submit")
    // /itr/update/incomefromproperty
    let itr = JSON.parse(localStorage.getItem('itrDetails'))
    // let ack_no = itr.itr_info.ack_no
    let id = itr._id
    let data = {
        business_name, number_of_vehicles, vehicle_registration_no, vehicle_type, tonnage_capacity, period_of_holding, income_per_vehicle, deemed_income,
        partner_own_capital:member_capital, secured_loans, unsecured_loans, advances, sundry_creditors, other_liabilities, total_capital_liabilities,
        fixed_assets, inventories, sundry_debators, balance_with_bank, cash_in_hand, loans_and_advances, other_current_assests, total_assets, id
    }
    console.log(data)
    axios({
      method:"POST",
      url:"http://localhost:3800/v1/user/itr/update/transportincome",
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
          <span className="fs-3 text-uppercase itr-heading-text">INCOME FROM TRANSPORT BUSINESS[44AE]</span>
        </div>
        <div className='row m-0 p-0'>
            <div className='col-md-12 col-sm-12'>
            <label for="last-name" className='form-label'>Name Of Business</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setBusinessName(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_transport_business.business_name ? data.income_from_transport_business.business_name : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Number Of Vehicles</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' value="1" disabled></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_transport_business.number_of_vehicles ? data.income_from_transport_business.number_of_vehicles : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Type of Vehicle</label>
            <select className={`form-control ${type == 'activate' ? "d-none" : ""}`} aria-label="--Select--" value={vehicle_type} onChange={(e) => setVehicleType(e.target.value)}>
                        <option>--Select--</option> 
                        <option value="owned">Owned</option>
                        <option value="leased">Leased</option>
                        <option value="hired">Hired</option>
            </select>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_transport_business.vehicle_type ? data.income_from_transport_business.vehicle_type : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Tonnage Capacity(in M.T.)</label>
            <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setTonnageCapacity(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_transport_business.tonnage_capacity ? data.income_from_transport_business.tonnage_capacity : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Perios of holding (in months)</label>
            <input type="number " className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setPeriosOfHolding(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_transport_business.period_of_holding ? data.income_from_transport_business.period_of_holding : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Income per vehicle(Computed @ Rs.1000 per ton per month in case tonnage exceeds 12MT, or else @ 7500 per month)</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setIncomePerVehicle(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_transport_business.income_per_vehicle ? data.income_from_transport_business.income_per_vehicle : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Deemed Income</label>
            <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setDeemedIncome(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_transport_business.deemed_income ? data.income_from_transport_business.deemed_income : "N/A"  ) : "N/A"}
          </h4>


            {/* <label for="last-name" className='form-label'>RC Of Vehicle</label>
            <input type="file" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name'></input> */}
            <div className='row m-0 p-0 '>
          <span className="fs-3 text-uppercase itr-heading-text">Capital and Liabilities</span>
          
            <label for="last-name" className='form-label'>Partner / members own capital</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setMemberCapital(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_transport_business.partner_own_capital ? data.income_from_transport_business.partner_own_capital : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Secured Loans</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setSecuredLoans(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_transport_business.secured_loans ? data.income_from_transport_business.secured_loans : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Unsecured Loans</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setUnsecuredLoans(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_transport_business.unsecured_loans ? data.income_from_transport_business.unsecured_loans : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Advances</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setAdvances(e.target.value) }></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_transport_business.advances ? data.income_from_transport_business.advances : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Sundry Creditors</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setSundryCreditors(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_transport_business.sundry_creditors ? data.income_from_transport_business.sundry_creditors : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Other Liabilities</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setOtherLiabilities(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_transport_business.other_liabilities ? data.income_from_transport_business.other_liabilities : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Total Capital and Liabilities</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' value={total_capital_liabilities} disabled></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_transport_business.total_capital_liabilities ? data.income_from_transport_business.total_capital_liabilities : "N/A"  ) : "N/A"}
          </h4>


            </div>
            <div className='row m-0 p-0 '>
          <span className="fs-3 text-uppercase itr-heading-text">Assests Details</span>
          
            <label for="last-name" className='form-label'>Fixed Assests</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => { setFixedAssets(e.target.value)}}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_transport_business.fixed_assets ? data.income_from_transport_business.fixed_assets : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Inventories</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => { setInventories(e.target.value)}}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_transport_business.inventories ? data.income_from_transport_business.inventories : "N/A"  ) : "N/A"}
          </h4>

          
          

            <label for="last-name" className='form-label'>Sundry Debtors</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => { setSundryDebators(e.target.value)}}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_transport_business.sundry_debators ? data.income_from_transport_business.sundry_debators : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Balance with banks</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => { setBalanceWithBank(e.target.value)}}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_transport_business.balance_with_bank ? data.income_from_transport_business.balance_with_bank : "N/A"  ) : "N/A"}
          </h4>

            <label for="last-name" className='form-label'>Cash in hand</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => { setCashInHand(e.target.value)}}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_transport_business.cash_in_hand ? data.income_from_transport_business.cash_in_hand : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Loans and Advances</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => { setLoansAndAdvances(e.target.value)}}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_transport_business.loans_and_advances ? data.income_from_transport_business.loans_and_advances : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Other Current Assests</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => { setOtherCurrentAssets(e.target.value)}}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_transport_business.other_current_assests ? data.income_from_transport_business.other_current_assests : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Total Assets</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name ' value={total_assets}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_transport_business.total_assets ? data.income_from_transport_business.total_assets : "N/A"  ) : "N/A"}
          </h4>


            </div>
            </div>
            {/* <button className='btn btn-primary m-2' onClick={handleSubmit}>Add</button> */}
            <button className={`btn btn-primary ${type == 'activate' ? "d-none" : ""}`} onClick={handleSubmit}>Add</button>
        </div>
    </div>
  )
}
