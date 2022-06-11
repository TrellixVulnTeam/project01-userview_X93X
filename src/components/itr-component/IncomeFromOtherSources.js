import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function IncomeFromOtherSources({data, type}) {

  const [tution_income, setTutionIncome] = useState(0)
  const [saving_bank_income, setSavingBankIncome] = useState(0)
  const [interest_income_tax_refund, setInterestIncomeTaxRefund] = useState(0)
  const [interest_fd, setInterestFd] = useState(0)
  const [interest_other_party, setOtherPartyInterest] = useState(0)
  const [income_commision, setCommissionIncome] = useState(0)
  const [income_dividend, setDividendIncome] = useState(0)
  const [deduction_pension, setPensionDeduction] = useState(0)
  const [gift_others, setGiftFromOthers] = useState(0)
  const [income_agriculture, setAgricultureIncome] = useState(0)
  const [casual_income, setCasualIncome] = useState(0)
  const [income_other, setOtherIncome] = useState(0)
  const [income_from_other_sources, setIncomeFromOtherSources] = useState(0)
  const [income_from_all_sources, setIncomeFromAllSources] = useState(0)
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
    let allIncome = income_from_all_sources == undefined ? 0 : income_from_all_sources
    let income_1 = tution_income == undefined ? 0 : tution_income
    let income_2 = saving_bank_income == undefined ? 0 : saving_bank_income
    let income_3 = interest_income_tax_refund == undefined ? 0 : interest_income_tax_refund
    let income_4 = interest_fd == undefined ? 0 : interest_fd
    let income_5 = interest_other_party == undefined ? 0 : interest_other_party
    let income_6 = income_commision == undefined ? 0 : income_commision
    let income_7 = income_dividend == undefined ? 0 :income_dividend
    let income_8 = deduction_pension == undefined ? 0 : deduction_pension
    let income_9 = gift_others == undefined ? 0 : gift_others
    let income_10 = income_agriculture == undefined ? 0 : income_agriculture
    let income_11 = casual_income == undefined ? 0 : casual_income
    let income_12 = income_other == undefined ? 0 : income_other
    // let income_13 = income_from_other_sources == undefined ? 0 : income_from_other_sources
    //+ parseInt(income_13)
    allIncome = parseInt(income_1) + parseInt(income_2) + parseInt(income_3) + parseInt(income_4) + parseInt(income_5) + parseInt(income_6) + parseInt(income_7) + parseInt(income_8) + parseInt(income_9) + parseInt(income_10) + parseInt(income_11) + parseInt(income_12) 
    setIncomeFromAllSources(allIncome )
  }, [tution_income, saving_bank_income, interest_income_tax_refund, interest_fd, interest_other_party, income_commision, deduction_pension, gift_others, income_agriculture,casual_income, income_from_other_sources])


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("inside handle submit")
    // /itr/update/incomefromproperty
    let itr = JSON.parse(localStorage.getItem('itrDetails'))
    // let ack_no = itr.itr_info.ack_no
    let id = itr._id
    let data = {
      income_from_tution: tution_income, income_from_saving_bank: saving_bank_income, 
      interest_from_fd: interest_fd, income_from_income_tax_return: interest_income_tax_refund,
      other_party_interest: interest_other_party, income_from_commision: income_commision,
      income_from_dividend: income_dividend, deduction_family_pension: deduction_pension,
      gift_from_other: gift_others, agriculture_income: income_agriculture, casual_income, 
      other_income: income_other, income_charge_other_sources: income_from_all_sources, id
    }
    axios({
      method:"POST",
      url:"http://localhost:3800/v1/user/itr/update/incomefromothersources",
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
      {console.log(type)}
        <div className='row m-0 p-0 border'>
          <span className="fs-3 text-uppercase itr-heading-text">INCOME FROM OTHER SOURCES</span>
        </div>
        <div className='row m-0 p-0'>
            <div className='col-md-12 col-sm-12'>
            <label for="last-name" className='form-label'>Income From Tution</label>
            <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setTutionIncome(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.income_from_other_sources.income_from_tution ? data.income_from_other_sources.income_from_tution : "N/A"  ) : "N/A"}</h4>


            <label for="last-name" className='form-label'>Interest from Saving Bank</label>
            <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setSavingBankIncome(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.income_from_other_sources.income_from_saving_bank ? data.income_from_other_sources.income_from_saving_bank : "N/A"  ) : "N/A"}</h4>


            <label for="last-name" className='form-label'>Interest from F.D.</label>
            <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setInterestFd(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.income_from_other_sources.interest_from_fd ? data.income_from_other_sources.interest_from_fd : "N/A"  ) : "N/A"}</h4>

            <label for="last-name" className='form-label'>Interest from Income Tax Refund</label>
            <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setInterestIncomeTaxRefund(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.income_from_other_sources.interest_income_tax_refund ? data.income_from_other_sources.interest_income_tax_refund : "N/A"  ) : "N/A"}</h4>


            <label for="last-name" className='form-label'>Other party Interest</label>
            <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setOtherPartyInterest(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.income_from_other_sources.other_party_interest ? data.income_from_other_sources.other_party_interest : "N/A"  ) : "N/A"}</h4>


            <label for="last-name" className='form-label'>Income from commision</label>
            <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setCommissionIncome(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.income_from_other_sources.income_from_commision ? data.income_from_other_sources.income_from_commision : "N/A"  ) : "N/A"}</h4>


            <label for="last-name" className='form-label'>Income from dividend(Other than Indian company)</label>
            <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setDividendIncome(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.income_from_other_sources.income_from_dividend ? data.income_from_other_sources.income_from_dividend : "N/A"  ) : "N/A"}</h4>


            <label for="last-name" className='form-label'>Deduction In case of family pension onlly</label>
            <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) =>setPensionDeduction(e.target.value)} disabled></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.income_from_other_sources.deduction_family_pension ? data.income_from_other_sources.deduction_family_pension : "N/A"  ) : "N/A"}</h4>


            <label for="last-name" className='form-label'>Gift From Others</label>
            <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setGiftFromOthers(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.income_from_other_sources.gift_from_other ? data.income_from_other_sources.gift_from_other : "N/A"  ) : "N/A"}</h4>


            <label for="last-name" className='form-label'>Agriculture Income</label>
            <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setAgricultureIncome(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.income_from_other_sources.agriculture_income ? data.income_from_other_sources.agriculture_income : "N/A"  ) : "N/A"}</h4>


            <label for="last-name" className='form-label'>Casual Income(Horse Racing, Lotteries etc.)</label>
            <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setCasualIncome(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.income_from_other_sources.casual_income ? data.income_from_other_sources.casual_income : "N/A"  ) : "N/A"}</h4>

            <label for="last-name" className='form-label'>Other Income</label>
            <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setOtherIncome(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.income_from_other_sources.other_income ? data.income_from_other_sources.other_income : "N/A"  ) : "N/A"}</h4>
            {/* <label for="last-name" className='form-label'>Income from other Sources</label>
            <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setIncomeFromOtherSources(e.target.value)} ></input> */}
            <label for="last-name" className='form-label'>Income from All Sources</label>
            <input type="number" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' disabled value={income_from_all_sources}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>{data ? (data.income_from_other_sources.income_charge_other_sources ? data.income_from_other_sources.income_charge_other_sources : "N/A"  ) : "N/A"}</h4>
            </div>
            <button className={`btn btn-primary ${type == 'activate' ? "d-none" : ""}`} onClick={handleSubmit}>Add</button>
        </div>
    </div>
  )
}
