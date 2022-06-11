import React from 'react'
import OtherProductNavigation from '../Navigation/otherProductNavigation'

export default function AllCoupon() {
  return (
    <>
        <OtherProductNavigation />
        <div className='container'>
        <div className='row m-0 p-0 border'>
          <span className="fs-3 text-uppercase itr-heading-text">Order Enquiry</span>
        </div>
        <div className='row m-0 p-0'>
          <fieldset className='border p-4'>
            <legend className='float-none fw-bold '>Business Details</legend>
            <div className='row m-0 p-0'>
              {/* <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Coupon No</label>
                <input type="text" className="form-control" id='last-name'></input>
              </div>
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Coupon Status</label>
                <input type="text" className="form-control" id='last-name'></input>
              </div> */}
              {/* <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Login Id</label>
                <select className='form-select' aria-label="--Select--">
                  <option>--Select--</option>
                  <option value="1">GST Department</option>
                  <option value="1">ITR Department</option>
                  <option value="1">Other Product</option>
                </select>
              </div> */}
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Product Type</label>
                <select className='form-select' aria-label="--Select--">
                  <option>--Select--</option>
                  <option value="1">GST Department</option>
                  <option value="1">ITR Department</option>
                  <option value="1">Other Product</option>
                </select>
              </div>
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Branch Code</label>
                <input type="text" className="form-control" id='last-name' value="TA-29521" disabled></input>
              </div>
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Order No</label>
                <input type="text" className="form-control" id='last-name'></input>
              </div>
            </div>

            <div className='row m-0 p-0'>
              {/* <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Product Status</label>
                <select className='form-select' aria-label="--Select--">
                  <option>--Select--</option>
                  <option value="1">GST Department</option>
                  <option value="1">ITR Department</option>
                  <option value="1">Other Product</option>
                </select>
              </div>
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Product</label>
                <select className='form-select' aria-label="--Select--">
                  <option>--Select--</option>
                  <option value="1">GST Department</option>
                  <option value="1">ITR Department</option>
                  <option value="1">Other Product</option>
                </select>
              </div> */}
              {/* <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Branch Code</label>
                <input type="text" className="form-control" id='last-name' value="TA-29521" disabled></input>
              </div>
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Order No</label>
                <input type="text" className="form-control" id='last-name'></input>
              </div> */}
            </div>
            <div className='row m-0 p-0'>
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Order Date From</label>
                <input type="date" className="form-control" id='last-name'></input>
              </div>
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Order Date To</label>
                <input type="date" className="form-control" id='last-name'></input>
              </div>
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Expiry Date From</label>
                <input type="date" className="form-control" id='last-name'></input>
              </div>
              <div className='col-md-3 col-sm-12'>
                <label for="last-name" className='form-label'>Expiry Date To</label>
                <input type="date" className="form-control" id='last-name'></input>
              </div>
            </div>


            <div className=' d-flex flex-row'>
              <button className='btn btn-warning m-2'>Search</button>
            </div>
          </fieldset>
        </div>
      </div>
    </>
  )
}
