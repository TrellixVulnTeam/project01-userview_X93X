import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ItrOptions() {
    const navigate = useNavigate()
    const [token, setToken] = useState()
    const [return_type, setReturnType] = useState()
    const [isDisabled, setIsDisabled] = useState(true)
    const [file_type, setFileType] = useState()
    const [assessment_year, setAssessmentYear] = useState()
    const [ack_no, setAckNo] = useState()
    const [return_date, setReturnDate] = useState(new Date())

    useEffect(() => {
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
        let itr = JSON.parse(localStorage.getItem('itrDetails'))
        // let assmt_year = assessment_year
        // let itr_type = return_type
        // let file_type = file_type
    if(assessment_year != undefined)
        itr.itr_info.assmt_year = assessment_year
    if(return_type != undefined)
        itr.itr_info.itr_type = return_type
    if(file_type != undefined)
        itr.itr_info.file_type = file_type
    }, [assessment_year, return_type, file_type])

    const handleNavigation = async () => {
        let itr = JSON.parse(localStorage.getItem('itrDetails'))
        let ack_no = itr.itr_info.ack_no
        let id = itr._id
        let assmt_year = assessment_year
        let itr_type = return_type
        itr.itr_info.ack_no = ack_no
        itr.itr_info.id = id
        itr.itr_info.assmt_year = assmt_year
        itr.itr_info.itr_type = itr_type
        itr.itr_info.file_type = file_type
        await localStorage.setItem('itrDetails', JSON.stringify(itr))
        let data = {
            itr_type, file_type, assmt_year, ack_no, id
        }
        console.log(data)
        if (return_type == "new-return") {
            axios({
                method: "POST",
                url: "http://3.108.219.92:3800/v1/user/itr/update/updateinfo",
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                data: data
            }).then(data => {
                console.log(data)
                if (data.status == 200) {
                    navigate('/apply/itr/next')
                } else {
                    toast.error('There is error while updating data, plase try again letter', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                }
            }).catch(error => {
                console.log(error)
            })

        }
    }

    return (
        <>
            <div className='container'>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <div className='row m-0 p-0'>
                    <div className='row m-0 p-0 border'>
                        <span className="fs-3 text-uppercase itr-heading-text">ITR OPTIONS</span>
                    </div>
                    <div className='row m-0 p-0'>
                        <fieldset className='border col-md-5 col-sm-12 col-xl-5'>
                            <legend className='float-none fw-bold '>ITR Type</legend>
                            <div className=''>
                                <label for="last-name" className='form-label'>Select File Type</label>
                                <select className='form-select' aria-label="--Select--" value={file_type} onChange={(e) => setFileType(e.target.value)}>
                                    <option>--Select--</option>
                                    <option value="itr-1">ITR-1</option>
                                    <option value="itr-4">ITR-4</option>
                                </select>

                                <label for="last-name" className='form-label'>Assessment Year</label>
                                <select className='form-select' aria-label="--Select--" value={assessment_year} onChange={(e) => setAssessmentYear(e.target.value)}>
                                    <option>--Select--</option>
                                    <option value="2019-20">2019-20</option>
                                    <option value="2020-21">2020-21</option>
                                    <option value="2021-22">2021-22</option>
                                    <option value="2022-23">2022-23</option>
                                    <option value="2023-24">2023-24</option>
                                    <option value="2024-25">2024-25</option>
                                </select>

                                <label for="last-name" className='form-label'>Return Type</label>
                                <select className='form-select' aria-label="--Select--" value={return_type} onChange={(e) => { setReturnType(e.target.value); if (e.target.value == "revised-return") { setIsDisabled(false) } else setIsDisabled(true) }}>
                                    <option>--Select--</option>
                                    <option value="revised-return">Revised Return</option>
                                    <option value="new-return">New Return</option>
                                </select>
                                <label for="last-name" className='form-label'>Original Acknowlegment No.</label>
                                <input type="text" className="form-control" id='last-name' disabled={isDisabled} onChange={(e) => setAckNo(e.target.value)}></input>
                                <label for="last-name" className='form-label'>Original Return Date</label>
                                <input type="date" className="form-control" id='last-name' disabled={isDisabled} onChange={(e) => setReturnDate(e.target.value)}></input>
                            </div>
                            <button className='btn btn-primary m-2' onClick={handleNavigation}>Submit</button>
                        </fieldset>
                        <div className='col-md-2'></div>
                        <fieldset className='border col-md-5 col-sm-12 col-xl-5'>
                            <legend className='float-none fw-bold '>Add Bank Account</legend>
                            <label for="last-name" className='form-label'>Bank IFSC Code</label>
                            <input type="text" className="form-control" id='last-name' ></input>
                            <label for="last-name" className='form-label'>Bank Name</label>
                            <input type="text" className="form-control" id='last-name' ></input>
                            <label for="last-name" className='form-label'>Account Type</label>
                            <input type="text" className="form-control" id='last-name' ></input>
                            <label for="last-name" className='form-label'>Account No</label>
                            <input type="text" className="form-control" id='last-name' ></input>
                            <button className='btn btn-primary m-2'>Add Bank</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </>
    )
}
