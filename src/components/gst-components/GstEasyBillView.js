import React from 'react'
import GstNavigation from '../Navigation/gstNavigation'

export default function GstEasyBillView() {
    return (
        <>
            <GstNavigation />
            <div className='container'>
                <div className='row m-0 p-0 border'>
                    <span className="fs-3 text-uppercase itr-heading-text">View All GST Client</span>
                </div>
                <div className='row m-0 p-0'>
                    <fieldset className='border p-4'>
                        <legend className='float-none fw-bold '>View All GST Client</legend>
                        <div className='row m-0 p-0'>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Client Loginid / Name</label>
                                <input type="text" className="form-control" id='last-name'></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Mobile No</label>
                                <input type="text" className="form-control" id='last-name'></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Block Status</label>
                                <select className='form-select' aria-label="--Select--">
                                    <option>--Select--</option>
                                    <option value="1">Active</option>
                                    <option value="1">Block</option>
                                </select>

                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Branch Login Id / TA Code</label>
                                <input type="text" className="form-control" id='last-name'></input>
                            </div>
                        </div>
                        <div className='row m-0 p-0'>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>GST No</label>
                                <input type="text" className="form-control" id='last-name'></input>
                            </div>
                        </div>
                        <div className='row m-0 p-3'>
                            <button className='submit-button'>Search</button>
                        </div>
                    </fieldset>
                </div>
            </div>
        </>
    )
}
