import React, { useEffect, useState } from 'react'


export default function IncomeFromOtherBusiness({data, type}) {

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


  return (
    <div className='row m-0 p-0'>
        <div className='row m-0 p-0 border'>
          <span className="fs-3 text-uppercase itr-heading-text">INCOME FROM OTHER BUSINESS[44AD]</span>
        </div>
        <div className='row m-0 p-0'>
            <div className='col-md-12 col-sm-12'>
            <label for="last-name" className='form-label'>Business Name</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name'></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_other_business.business_name ? data.income_from_other_business.business_name : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Type of Business</label>
            <select className={`form-control ${type == 'activate' ? "d-none" : ""}`} aria-label="--Select--">
                        <option>--Select--</option>
                        <option value="1">Owned</option>
                        <option value="1">Leased</option>
                        <option value="2">Hired</option>
            </select>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_other_business.business_type ? data.income_from_other_business.business_type : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Books Maintained or not</label>
            <select className={`form-control ${type == 'activate' ? "d-none" : ""}`} aria-label="--Select--">
                        <option>--Select--</option>
                        <option value="1">Yes</option>
                        <option value="1">No</option>
            </select>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_other_business.book_maintained ? data.income_from_other_business.book_maintained : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Cash Sales / Receipts</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name'></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_other_business.cash_sales ? data.income_from_other_business.cash_sales : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Electronic (Bankl) Sales / Receipts</label>
            <input type="date" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name'></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_other_business.bank_sales ? data.income_from_other_business.bank_sales : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Total Gross Sales / Receipts</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name'></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_other_business.total_gross_sales ? data.income_from_other_business.total_gross_sales : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Cash Sales Net Profit [Minimum 8% of cash sales]</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' value="1000"></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_other_business.cash_sales_net_profit ? data.income_from_other_business.cash_sales_net_profit : "N/A"  ) : "N/A"}
          </h4>

            <label for="last-name" className='form-label'>Electronic Sales Net Profit [Minimum 6% of electronic sales]</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name'></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_other_business.bank_sales_net_profit ? data.income_from_other_business.bank_sales_net_profit : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Income / Net Profit [Minimum 8% of electroninc sales and Minimum 6% of electronic sales]</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name'></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_other_business.income_net_profit ? data.income_from_other_business.income_net_profit : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Income / Net Profit[%]</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name'></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_other_business.income_net_profit ? data.income_from_other_business.income_net_profit : "N/A"  ) : "N/A"}
          </h4>

            <label for="last-name" className='form-label'>Amount of turnover/Gross receipt for the year corresponding to the GSTIN</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name'></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_other_business.total_income ? data.income_from_other_business.total_income : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Opening Stock</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name'></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_other_business.opening_stock ? data.income_from_other_business.opening_stock : "N/A"  ) : "N/A"}
          </h4>

            <label for="last-name" className='form-label'>Purchase</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name'></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_other_business.purchase ? data.income_from_other_business.purchase : "N/A"  ) : "N/A"}
          </h4>

            <label for="last-name" className='form-label'>Closing Stock</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name'></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_other_business.closing_stock ? data.income_from_other_business.closing_stock : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Gros Profit</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name'></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_other_business.gross_profit ? data.income_from_other_business.gross_profit : "N/A"  ) : "N/A"}
          </h4>

           <div className='row m-0 p-0 '>
          <span className="fs-3 text-uppercase itr-heading-text">Capital and Liabilities</span>
          
            <label for="last-name" className='form-label'>Partner / members own capital</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setMemberCapital(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_other_business.partner_own_capital ? data.income_from_other_business.partner_own_capital : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Secured Loans</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setSecuredLoans(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_other_business.secured_loans ? data.income_from_other_business.secured_loans : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Unsecured Loans</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setUnsecuredLoans(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_other_business.unsecured_loans ? data.income_from_other_business.unsecured_loans : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Advances</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setAdvances(e.target.value) }></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_other_business.advances ? data.income_from_other_business.advances : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Sundry Creditors</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setSundryCreditors(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_other_business.sundry_creditors ? data.income_from_other_business.sundry_creditors : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Other Liabilities</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => setOtherLiabilities(e.target.value)}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_other_business.other_liabilities ? data.income_from_other_business.other_liabilities : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Total Capital and Liabilities</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' value={total_capital_liabilities} disabled></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_other_business.total_capital_liabilities ? data.income_from_other_business.total_capital_liabilities : "N/A"  ) : "N/A"}
          </h4>


            </div>
            <div className='row m-0 p-0 '>
          <span className="fs-3 text-uppercase itr-heading-text">Assests Details</span>
          
            <label for="last-name" className='form-label'>Fixed Assests</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => { setFixedAssets(e.target.value)}}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_other_business.fixed_assets ? data.income_from_other_business.fixed_assets : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Inventories</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => { setInventories(e.target.value)}}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_other_business.inventories ? data.income_from_other_business.inventories : "N/A"  ) : "N/A"}
          </h4>

          
          

            <label for="last-name" className='form-label'>Sundry Debtors</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => { setSundryDebators(e.target.value)}}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_other_business.sundry_debators ? data.income_from_other_business.sundry_debators : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Balance with banks</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => { setBalanceWithBank(e.target.value)}}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_other_business.balance_with_bank ? data.income_from_other_business.balance_with_bank : "N/A"  ) : "N/A"}
          </h4>

            <label for="last-name" className='form-label'>Cash in hand</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => { setCashInHand(e.target.value)}}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_other_business.cash_in_hand ? data.income_from_other_business.cash_in_hand : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Loans and Advances</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => { setLoansAndAdvances(e.target.value)}}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_other_business.loans_and_advances ? data.income_from_other_business.loans_and_advances : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Other Current Assests</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name' onChange={(e) => { setOtherCurrentAssets(e.target.value)}}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_other_business.other_current_assests ? data.income_from_other_business.other_current_assests : "N/A"  ) : "N/A"}
          </h4>


            <label for="last-name" className='form-label'>Total Assets</label>
            <input type="text" className={`form-control ${type == 'activate' ? "d-none" : ""}`} id='last-name ' value={total_assets}></input>
            <h4 className={`form-control ${type !== 'activate' ? "d-none" : ""}`}>
          {data ? (data.income_from_other_business.total_assets ? data.income_from_other_business.total_assets : "N/A"  ) : "N/A"}
          </h4>


            </div>
            </div>
            {/* <button className='btn btn-primary m-2'>Add</button> */}
            <button className={`btn btn-primary ${type == 'activate' ? "d-none" : ""}`} >Add</button>
        </div>
    </div>
  )
}
