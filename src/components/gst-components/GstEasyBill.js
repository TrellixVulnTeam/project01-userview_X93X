import React from 'react'
import GstNavigation from '../Navigation/gstNavigation'

export default function GstEasyBill() {
    return (
        <>
            <GstNavigation />
            <div className='container'>
                <div className='row m-0 p-0 border'>
                    <span className="fs-3 text-uppercase itr-heading-text">GST Client</span>
                </div>
                <div className='row m-0 p-0'>
                    <fieldset className='border p-4'>
                        <legend className='float-none fw-bold '>Add New</legend>
                        <div className='row m-0 p-0'>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Name</label>
                                <input type="text" className="form-control" id='last-name'></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Mobile No</label>
                                <input type="text" className="form-control" id='last-name'></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Email ID</label>
                                <input type="text" className="form-control" id='last-name'></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Phone No</label>
                                <input type="text" className="form-control" id='last-name'></input>
                            </div>
                        </div>
                        <div className='row m-0 p-0'>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Country</label>
                                <input type="text" className="form-control" id='last-name'></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>State</label>
                                <input type="text" className="form-control" id='last-name'></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>City</label>
                                <input type="text" className="form-control" id='last-name'></input>
                            </div>
                        </div>
                        <div className='row m-0 p-0'>
                            <div className='col-md-6 col-sm-12'>
                                <label for="last-name" className='form-label'>Address</label>
                                <textarea className='form-control'></textarea>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Pin Code</label>
                                <input type="text" className="form-control" id='last-name'></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>PAN No</label>
                                <input type="text" className="form-control" id='last-name'></input>
                            </div>
                        </div>
                        <div className='row m-0 p-0'>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Business Name</label>
                                <input type="text" className="form-control" id='last-name'></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>G.S.T. No</label>
                                <input type="text" className="form-control" id='last-name'></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>GST Type</label>
                                <select className='form-select' aria-label="--Select--">
                                    <option>--Select--</option>
                                    <option value="1">Componsition</option>
                                    <option value="1">Non Componsition</option>
                                </select>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Bank Name</label>
                                <input type="text" className="form-control" id='last-name'></input>
                            </div>
                        </div>
                        <div className='row m-0 p-0'>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Account Holder Name</label>
                                <input type="text" className="form-control" id='last-name'></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Account No</label>
                                <input type="text" className="form-control" id='last-name'></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Branch Name</label>
                                <input type="text" className="form-control" id='last-name'></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Bank IFSC Code</label>
                                <input type="text" className="form-control" id='last-name'></input>
                            </div>
                        </div>
                        <div className='row m-0 p-0'>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Block Status</label>
                                <select className='form-select' aria-label="--Select--">
                                    <option>--Select--</option>
                                    <option value="1">Active</option>
                                    <option value="1">Block</option>
                                </select>

                            </div>
                            <div className='col-md-9 col-sm-12'>
                                <label for="last-name" className='form-label'>Block Reason</label>
                                <textarea className='form-control'></textarea>
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
