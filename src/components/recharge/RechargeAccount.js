import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AccountNavigation from '../Navigation/accountNavigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function RechargeAccount() {

    const date = new Date()
    const [token, setToken] = useState()
    const [loginId, setLoginId] = useState()
    const [amount, setAmount] = useState()
    const [payment_mode, setPaymentMode] = useState()
    const [payment_number, setPaymentNumber] = useState()
    const [bank_account, setBankAccount] = useState()
    const [file, setFile] = useState()
    const [narration, setNarration] = useState()
    const [bank_list, setBankList] = useState()
    const [file_base64, setFileBase64] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        async function checkToken() {
            let token;
            let user;
            try {
                token = await JSON.parse(localStorage.getItem('token'))
                user = await JSON.parse(localStorage.getItem('user'))
                setLoginId(user.loginId)
                if (token === null || token === undefined) {
                    navigate('/')
                }
                console.log("token set")
                setToken(token)
            } catch (e) {
                console.log(e)
            }
            axios({
                method:"GET",
                url:"http://localhost:3800/v1/user/allbanks",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }).then(data => {
                setBankList(data.data)
            }).catch(error => {
                console.log(error)
            })
            // axios({
            //     method:"POST",
            //     url:"http://localhost:3800/v1/user/allrecharge",
            //     headers: {
            //         "Authorization": `Bearer ${token}`
            //     }
            // }).then(data => {
            //     console.log(data)
            //     console.log(data.data)
            // }).catch(error => {
            //     console.log(error)
            // })
        }
        checkToken()

    }, [])

        async function readFileAsDataURL() {
            let result_base64 = await new Promise((resolve) => {
                let fileReader = new FileReader();
                fileReader.onload = (e) => resolve(fileReader.result);
                fileReader.readAsDataURL(file);
            });
        
            console.log(result_base64); 
            return result_base64;
        }
    
    const handleSubmit = async () => {
        let filename = file.name
        console.log(file)
        let baseFile64;
        // setTimeout(readFile, 3000)
        let dataURL = await readFileAsDataURL()
        let file_base64 = dataURL
        let data = {
            amount, payment_mode, payment_number, bank_account, narration, filename, file_base64
        }
        
        
        // data.file_base64 = baseFile64
        console.log(data)
        console.log("2")
        axios({
            method:"POST",
            url:"http://localhost:3800/v1/user/recharge/save",
            headers: {
                "Authorization":`Bearer ${token}`
            },
            data: data
        }).then(data => {
            if(data.status == 200) {
                toast.success('Recharge Request Made Successfully!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            } else {
                toast.error('Recharge Request Failed', {
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
            toast.error('There is some error Please try again letter', {
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
            <AccountNavigation />
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
                <div className='row m-0 p-0'>
                    <div className='row m-0 p-0 border'>
                        <span className="fs-3 text-uppercase itr-heading-text">Recharge Your Account</span>
                    </div>
                    <div className='row m-0 p-0'>
                        <fieldset className='border col-md-5 col-sm-12 col-xl-5'>
                            <legend className='float-none fw-bold '>Recharge Your Account</legend>
                            <div className=''>
                                <label for="last-name" className='form-label'>Date</label>
                                <input type="text" className="form-control" id='last-name' value={date} disabled></input>

                                <label for="last-name" className='form-label'>Enter Amount</label>
                                <input type="number" className="form-control" id='last-name' onChange={(e) => setAmount(e.target.value)}></input>

                                <label for="last-name" className='form-label'>From Account</label>
                                <input type="text" className="form-control" id='last-name' value={loginId} disabled></input>

                                <label for="last-name" className='form-label'>Payment Mode</label>
                                <select className='form-select' aria-label="--Select--" value={payment_mode} onChange={(e) => setPaymentMode(e.target.value)}>
                                    <option>--Select--</option>
                                    <option value="cheque">Cheque</option>
                                    <option value="cash">Cash</option>
                                    <option value="other transation">IMPS/NEFT/RTGS/ONLINE TRANSATION</option>
                                    <option value="paytm-pg-wallet">Paytm PG Wallet</option>
                                </select>
                                
                                <label for="last-name" className='form-label'>DD / Cheque Number</label>
                                <input type="text" className="form-control" id='last-name' onChange={(e) => setPaymentNumber(e.target.value)}></input>

                                <label for="last-name" className='form-label'>Bank Account</label>
                                <select className='form-select' aria-label="--Select--" value={bank_account} onChange={(e) => setBankAccount(e.target.value)}>
                                    <option>--Select--</option>
                                   {
                                       bank_list ? (bank_list.map(bank => (
                                           <option value={`${bank.name}`.concat(bank.account_number)}>{bank.name} {bank.account_number}</option>
                                       ))): null
                                   }
                                </select>

                                <label for="last-name" className='form-label'>Receipt</label>
                                <input type="file" className="form-control" id='last-name' onChange={(e) => setFile(e.target.files[0])}></input>

                                <label for="last-name" className='form-label'>Narration</label>
                                <textarea className='form-control' onChange={(e) => setNarration(e.target.value)}></textarea>
                                
                            </div>
                            <button className='btn btn-primary m-2' onClick={handleSubmit}>Submit</button>
                        </fieldset>
                        <div className='col-md-1'></div>
                        <fieldset className='border col-md-5 col-sm-12 col-xl-5'>
                            <legend className='float-none fw-bold '>Important Notes</legend>
                            <div className=''>
                                <ul>
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                </ul>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>
        </>
    )
}
