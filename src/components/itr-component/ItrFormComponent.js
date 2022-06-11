import React, { useEffect, useState } from 'react'
import AdvanceSelfTax from './AdvanceSelfTax'
import CapitalGain from './CapitalGain'
import Deduction80C from './Deduction80C'
import Deduction80D from './Deduction80D'
import Deduction80G from './Deduction80G'
import DeductionOthers from './DeductionOthers'
import IncomeFromBusinessProfession from './IncomeFromBusinessProfession'
import IncomeFromExempt from './IncomeFromExempt'
import IncomeFromHouseProperty from './IncomeFromHouseProperty'
import IncomeFromOtherBusiness from './IncomeFromOtherBusiness'
import IncomeFromOtherSources from './IncomeFromOtherSources'
import IncomeFromSalary from './IncomeFromSalary'
import IncomeFromTransportBusiness from './IncomeFromTransportBusiness'
import NonSalaryTDS from './NonSalaryTDS'
import TaxCollectedAtSource from './TaxCollectedAtSource'
import Tds26QC from './Tds26QC'
import TdsOnSalary from './TdsOnSalary'

const  ItrFormComponent = React.memo(({salaryIncome, data, type}) => {

  useEffect(() => {
    console.log("Itr Form Component Rendered")
  }, [])

  const setIncome = (value) => {
    console.log("set income called", value)
    salaryIncome(value)
  }
  const [selection, setSelection] = useState(1)

  return (
    <div className='row m-0 p-0 '>
      {console.log("From itr form component", data, type)}
        <div className='col-md-12 col-sm-12 mt-3 '>
        <div className='row m-0 p-0 border'>
          <span className="fs-3 text-uppercase itr-heading-text">ITR FORMS</span>
        </div>
        <div className='row m-0 p-0 border'>
            <div className='col-md-12 col-sm-12 p-3'>
            <label for="pan" className='form-label fw-bolder'>ITR FORMS</label>
            <select className='form-select' aria-label="--Select--" value={selection} onChange={(e) => setSelection(e.target.value)}>
                        <option>--Select--</option>
                        <option value="1">Income From Salary/Pension</option>
                        <option value="2">Income From House Property</option>
                        <option value="3">Income From Other Sources</option>
                        <option value="4">Capital Gain</option>
                        <option value="5">Income From Profession</option>
                        <option value="6">Income From Transport Business</option>
                        <option value="7">Income From Other Business</option>
                        <option value="8">Income From Exempt / Other Sources</option>
                        <option value="9">80C</option>
                        <option value="10">80D</option>
                        <option value="11">Other Deduction</option>
                        <option value="12">80 G</option>
                        <option value="13">TDS On Salalry</option>
                        <option value="14">Non Salary TDS</option>
                        <option value="15">TCS Entry (Tax Collected At Source)</option>
                        <option value="16">Advance Tax/Self Assessment Tax</option>
                        <option value="17">TDS 26QCT</option>
                    </select>
            </div>
        </div>
        <div className='row m-0 p-0 border'>
         {selection == 1 ? <IncomeFromSalary setIncome={setIncome} data={data} type={type}/> : null}
         {selection == 2 ? <IncomeFromHouseProperty data={data} type={type}/> : null}
         {selection == 3 ? <IncomeFromOtherSources data={data} type={type}/> : null}
         {selection == 4 ? <CapitalGain data={data} type={type}/> : null}
         {selection == 5 ? <IncomeFromBusinessProfession  data={data} type={type}/> : null }
         {selection == 6 ? <IncomeFromTransportBusiness data={data} type={type}/> : null}
         {selection == 7 ? <IncomeFromOtherBusiness data={data} type={type}/> : null}
         {selection == 8 ? <IncomeFromExempt data={data} type={type}/> : null}
         {selection == 9 ? <Deduction80C data={data} type={type}/> : null}
         {selection == 10 ? <Deduction80D data={data} type={type}/> : null}
         {selection == 11 ? <DeductionOthers data={data} type={type}/> : null}
         {selection == 12 ? <Deduction80G data={data} type={type}/> : null}
         {selection == 13 ? <TdsOnSalary data={data} type={type}/> : null}
         {selection == 14 ? <NonSalaryTDS data={data} type={type}/> : null}
         {selection == 15 ? <TaxCollectedAtSource data={data} type={type}/> : null}
         {selection == 16 ? <AdvanceSelfTax data={data} type={type}/> : null}
         {selection == 17 ? <Tds26QC data={data} type={type}/> : null}
        </div>
        </div>
    </div>
  )
})

export default ItrFormComponent
