import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SupportNavigation from '../Navigation/SupportNavigation';

export default function GenerateTicket() {

    const date = new Date()
    const navigate = useNavigate()
    const [token, setToken] = useState()
    const [email, setEmail] = useState()
    const [number, setNumber] = useState()
    const [department, setDepartment] = useState()
    const [ticket_type, setTicketType] = useState()
    const [subject, setSubject] = useState('subject')
    const [details, setDetails] = useState('details')
    const [file1, setFile] = useState()
    const [user, setUser] = useState()
    useEffect(() => {
        async function checkToken() {
            if (user == undefined) {
                let user = JSON.parse(localStorage.getItem('user'))
                setUser(user)
                let token;
                try {
                    token = await JSON.parse(localStorage.getItem('token'))
                    if (token === null || token === undefined) {
                        navigate('/')
                    }
                    console.log("token set")

                } catch (e) {
                    console.log(e)
                }
                setToken(token)
            }

        }
        checkToken()

    }, [])

    async function readFileAsDataURL() {
        let result_base64 = await new Promise((resolve) => {
            let fileReader = new FileReader();
            fileReader.onload = (e) => resolve(fileReader.result);
            fileReader.readAsDataURL(file1);
        });

        console.log(result_base64);
        return result_base64;
    }

    const handleSubmit = async () => {
        let email = user.primary_email || "abc@gamil.com"
        let number = user.primary_mobile_no
        let filename = file1.name
        let base64;
        try {
            base64 = await readFileAsDataURL()
        } catch (e) { console.log(e) }
        let file = base64
        let data = {
            email, number, department, subject, details, file, filename, ticket_type
        }
        console.log(data)
        axios({
            method: "POST",
            url: "http://3.108.219.92:3800/v1/user/support/save/ticket",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
            data: data
        }).then(data => {
            // console.log(data)
            // console.log(data.data)
            if(data.status == 200) {
                toast.success('Ticket Generated Successfully', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            } else {
                toast.error('There is some error while generating ticket', {
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
            toast.error('There is some error while generating ticket', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        })
    }

    return (
        <>
            <SupportNavigation />
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
            <div className='container'>
                <div className='row m-0 p-0 border'>
                    <span className="fs-3 text-uppercase itr-heading-text">Generate Ticket Form</span>
                </div>
                <div className='row m-0 p-0'>
                    <fieldset className='border'>
                        <legend className='float-none fw-bolder'>User Details</legend>
                        <div className='row m-0 p-0'>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Date</label>
                                <input type="text" className="form-control" id='last-name' value={date} disabled></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Login ID</label>
                                <input type="text" className="form-control" id='last-name' value={user ? user.loginId : null} disabled></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>User Name</label>
                                <input type="text" className="form-control" id='last-name' value={user ? user.firstName : null} disabled></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Email Id</label>
                                <input type="text" className="form-control" id='last-name' value={user ? user.primary_email : null} disabled></input>
                            </div>
                        </div>
                        <div className='row m-0 p-0'>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Contact No</label>
                                <input type="text" className="form-control" id='last-name' value={user ? user.primary_mobile_no : null} disabled></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Select Department</label>
                                <select className='form-select' aria-label="--Select--" value={department} onChange={(e) => setDepartment(e.target.value)}>
                                    <option>--Select--</option>
                                    <option value="itr-department">ITR Department</option>
                                    <option value="gst-department">GST Department</option>
                                    <option value="other-department">Other</option>
                                </select>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Ticket Type</label>
                                <select className='form-select' aria-label="--Select--" value={ticket_type} onChange={(e) => setTicketType(e.target.value)}>
                                    <option>--Select--</option>
                                    <option value="inquiry">Inquiry / Information</option>
                                    <option value="status">Status</option>
                                    <option value="complaint">Complaint</option>
                                    <option value="feedback">Feedback</option>
                                    <option value="suggestion">Suggestion</option>
                                    <option value="order">Order</option>
                                </select>
                            </div>
                        </div>
                        <div className='row m-0 p-0'>
                            <div className='col-md-12 col-sm-12 col-xl-12'>
                                <label for="last-name" className='form-label'>Subject</label>
                                <input type="text" className="form-control" id='last-name' onChange={(e) => setSubject(e.target.value)}></input>
                            </div>
                        </div>
                        <div className='row m-0 p-0'>
                            <div className='col-md-12 col-sm-12 col-xl-12'>
                                <label for="last-name" className='form-label'>Details</label>
                                <textarea className='form-control' rows={10} onChange={(e) => setDetails(e.target.value)}></textarea>
                            </div>
                        </div>
                        <div className='row m-0 p-0'>
                            <div className='col-md-3 col-sm-12 col-xl-3'>
                                <label for="last-name" className='form-label'>Attachemnt*</label>
                                <input type="file" className="form-control" id='last-name' onChange={(e) => setFile(e.target.files[0])}></input>
                            </div>
                            <span className='p-3 text-info'>If you have more than one file then attach zip file please</span>
                        </div>
                        <div className='row m-0 p-0'>
                            <div className='col-md-3 col-sm-12 col-xl-3'>
                                <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
        </>
    )
}
