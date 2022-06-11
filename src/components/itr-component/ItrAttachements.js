import React, { useState } from 'react'

export default function ItrAttachements() {

    const [pancard_file, setPanCardFile] = useState()
    const [previous_itr_file, setPreviousItrFile] = useState()
    const [form_16a_file, setForm16aFile] = useState()
    const [balance_sheet, setBalanceSheetFile] = useState()
    const [aadhar_card_file, setAdharCardFile] = useState()
    const [form_16_file, setForm16File] = useState()
    const [other_attachement, setOtherAttachement] = useState()
    const [tax_saving_doc, setTaxSavingDoc] = useState()

  return (
    <div className='row m-0 p-0'>
        <fieldset className='border p-4'>
                        <legend className='float-none fw-bold'>Attachments</legend>
                        <div className='row m-0 p-0'>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Pan Card</label>
                                <input type="file" className="form-control" id='last-name' onChange={(e) => setPanCardFile(e.target.files[0])}></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="pan" className='form-label'>Previous ITR[if applicable]</label>
                                <input type="file" className="form-control" id='pan' onChange={(e) => setPreviousItrFile(e.target.files[0])}></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="pan" className='form-label'>Form 16A Attachement</label>
                                <input type="file" className="form-control" id='pan' onChange={(e) => setForm16aFile(e.target.files[0])}></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="pan" className='form-label'>Balance Sheet</label>
                                <input type="file" className="form-control" id='pan' onChange={(e) => setBalanceSheetFile(e.target.files[0])}></input>
                            </div>
                        </div>

                        <div className='row m-0 p-0'>
                            <div className='col-md-3 col-sm-12'>
                                <label for="first-name" className='form-label'>Adhar Card</label>
                                <input type="file" className="form-control" id='first-name' onChange={(e) => setAdharCardFile(e.target.files[0])}></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Form 16 Attachement</label>
                                <input type="file" className="form-control" id='last-name' onChange={(e) => setForm16File(e.target.files[0])}></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Other Attachement</label>
                                <input type="file" className="form-control" id='last-name' onChange={(e) => setOtherAttachement(e.target.files[0])}></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Tax Saving Docs Attachement</label>
                                <input type="file" className="form-control" id='last-name' onChange={(e) => setTaxSavingDoc(e.target.files[0])}></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Loan Investment Document</label>
                                <input type="file" className="form-control" id='last-name' onChange={(e) => setTaxSavingDoc(e.target.files[0])}></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Land Sale/Purchage Documents</label>
                                <input type="file" className="form-control" id='last-name' onChange={(e) => setTaxSavingDoc(e.target.files[0])}></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Share Details</label>
                                <input type="file" className="form-control" id='last-name' onChange={(e) => setTaxSavingDoc(e.target.files[0])}></input>
                            </div>
                        </div>

                    </fieldset>
    </div>
  )
}
