import React, { useState } from 'react'

export default function ItrSummary({data}) {
  const [group, setGroup] = useState([])
  const [token, setToken] = useState()
  const [prevDetails, setPrevDetails] = useState({})
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
//   const [pancard_file, setPanCardFile] = useState()
//   const [previous_itr_file, setPreviousItrFile] = useState()
//   const [form_16a_file, setForm16aFile] = useState()
//   const [balance_sheet, setBalanceSheetFile] = useState()
//   const [aadhar_card_file, setAdharCardFile] = useState()
//   const [form_16_file, setForm16File] = useState()
//   const [other_attachement, setOtherAttachement] = useState()
//   const [tax_saving_doc, setTaxSavingDoc] = useState()
  return (
      
    <>
    {console.log(data)}
        <div className='row m-0 p-0'>
            <div className='col-md-12 col-sm-12 mt-3'>
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
                            <input type="text" className="form-control" onChange={(e) => setSalaryIncome(e.target.value)} value={data.toString()}></input>
                        </td>
                    </tr>
                    <tr>
                        <td className='col fw-bolder'>Income From House Property</td>
                        <td className='col'>
                            <input type="text" className="form-control" onChange={(e) => setHousePropertyIncode(e.target.value)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td className='col fw-bolder'>Income From Other Sources</td>
                        <td className='col'>
                            <input type="text" className="form-control" onChange={(e) => setOtherSourceIncome(e.target.value)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td className='col fw-bolder'>Income From Business/Profession</td>
                        <td className='col'>
                            <input type="text" className="form-control" onChange={(e) => setIncomeFromProfession(e.target.value)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td className='col fw-bolder'>Capital Gain</td>
                        <td className='col'>
                            <input type="text" className="form-control" onChange={(e) => setCapitalGain(e.target.value)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td className='col fw-bolder'>Expected Income</td>
                        <td className='col'>
                            <input type="text" className="form-control" onChange={(e) => setExpectedIncome(e.target.value)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td className='col fw-bolder'>GROSS TOTAL INCOME</td>
                        <td className='col'>
                            <input type="text" className="form-control" onChange={(e) => setGrossTotalIncome(e.target.value)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td className='col bg-dark text-white fw-bolder'>DEDUCTION</td>
                        <td className='col bg-dark text-white fw-bolder'>AMOUNT</td>
                    </tr> 
                    <tr>
                        <td className='col fw-bolder'>80 C</td>
                        <td className='col'>
                            <input type="text" className="form-control" onChange={(e) => setDeduction80c(e.target.value)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td className='col fw-bolder'>80 G</td>
                        <td className='col'>
                            <input type="text" className="form-control" onChange={(e) => setDeduction80g(e.target.value)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td className='col fw-bolder'>Other Deductions</td>
                        <td className='col'>
                            <input type="text" className="form-control" onChange={(e) => setOtherDeduction(e.target.value)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td className='col fw-bolder'>80 CGA</td>
                        <td className='col'>
                            <input type="text" className="form-control" onChange={(e) => setDeduction80cga(e.target.value)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td className='col fw-bolder'>80 D</td>
                        <td className='col'>
                            <input type="text" className="form-control" onChange={(e) => setDeduction80d(e.target.value)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td className='col fw-bolder'>GROSS TOTAL DEDUCTION</td>
                        <td className='col'>
                            <input type="text" className="form-control" onChange={(e) => setGrossTotalDeduction(e.target.value)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td className='col fw-bolder'>NET TAXABLE INCOME</td>
                        <td className='col'>
                            <input type="text" className="form-control" onChange={(e) => setNetTaxableIncome(e.target.value)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td className='col bg-dark text-white fw-bolder '>TAXES PAID</td>
                        <td className='col bg-dark text-white fw-bolder '>AMOUNT</td>
                    </tr>
                    <tr>
                        <td className='col fw-bolder'>T.D.S On Salary</td>
                        <td className='col'>
                            <input type="text" className="form-control" onChange={(e) => setTdsOnSalary(e.target.value)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td className='col fw-bolder'>Non Salary TDS</td>
                        <td className='col'>
                            <input type="text" className="form-control" onChange={(e) => setNonSalaryTds(e.target.value)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td className='col fw-bolder'>TCS entry(Tax Collected at Source)</td>
                        <td className='col'>
                            <input type="text" className="form-control" onChange={(e) => setTcsEntry(e.target.value)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td className='col fw-bolder'>Advance Tax / Self Assessment Tax</td>
                        <td className='col'>
                            <input type="text" className="form-control" onChange={(e) => setAdvanceTax(e.target.value)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td className='col fw-bolder'>T.D.S (Tax Deduction at Source)[16C]</td>
                        <td className='col'>
                            <input type="text" className="form-control" onChange={(e) => setTds16c(e.target.value)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td className='col fw-bolder'>TOTAL TAX PAID</td>
                        <td className='col'>
                            <input type="text" className="form-control" onChange={(e) => setTotalTaxPaid(e.target.value)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td className='col fw-bolder'><button className='btn btn-primary'>Save</button></td>
                    </tr>
                </tbody>
            </table>
            </div>
            
        </div>

    </>
  )
}
