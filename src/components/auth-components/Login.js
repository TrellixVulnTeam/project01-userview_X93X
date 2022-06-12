import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/icons/logo.jpeg'
import TaxImage from '../../assets/icons/tax-image.jpeg'

export default function Login({ setAuth }) {

    const [isResetPassword, setIsResetPassword] = useState(false)
    const [loginId, setLoginId] = useState()
    const [password, setpassword] = useState()
    const [auth_type, setAuthType] = useState('branch')

    const navigate = useNavigate()


    const handleSubmit = async () => {
        console.log(loginId)
        console.log(password)
        axios({
            method: 'POST',
            url: 'http://3.108.219.92:3800/v1/auth/login',
            data: {
                loginId: loginId,
                password: password,
                auth_type: 'branch'
            }
        }).then(data => {
            console.log(data)

            if (data.status == 200) {
                data = data.data.data
                console.log(data)
                try {
                    let accessToken = data.accessToken
                    setAuth(accessToken)
                    let user = data.data
                    localStorage.setItem('token', JSON.stringify(accessToken))
                    localStorage.setItem('user', JSON.stringify(user))
                } catch (e) { }
                navigate('/')
            } else {
                navigate('/')
            }

        }).catch(error => {
            console.log(error)
        })
    }

    return (

        <div className='box-parent'>
                <div class="parent-container">
                <div class="child-container child-1">
                    <img class="w-100" src={TaxImage}/>
                </div>
                <div class="child-container child-2 border">
                    <div class="login-container">
                        <img src={Logo} alt="..." />
                        <h3 class="text-center mt-3">Log In</h3>
                        <div class="input-box-container mt-5">
                          
                          <input type="text" className="form-control" id='first-name' placeholder="Enter Id" onChange={(e) => setLoginId(e.target.value)}></input>
                          
                          <input type="text" className="form-control" id='first-name' placeholder="Enter Password" onChange={(e) => setpassword(e.target.value)}></input>
                          <button class="btn btn-primary mt-3" onClick={handleSubmit}>Log In</button>
                        </div>
                    </div>
                </div>
            </div>
        {/* <div className='box'>
            <div className='logo top-20'>
                <img
                    src={Logo}
                    style={{'height':'90px', 'width':'300px'}}
                    alt='bilty-bhada-logo' />
            </div>
            <div className='sign-in'>Log In</div>
            <div className='email top-20'>
                <TextField
                    fullWidth
                    // value={email}
                    onChange={(e) => setLoginId(e.target.value)}
                    type='email'
                    id="outlined-basic"
                    label="Email Address"
                    placeholder='example@email.com'
                    variant="outlined"
                    color="error"
                    required
                />
            </div>
            <div className='password top-20'>
                <TextField
                    fullWidth
                    // value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    type='password'
                    id="outlined-basic"
                    label="Password"
                    placeholder='****'
                    variant="outlined"
                    color="error"
                    required
                />

            </div>
            <div className='top-20'>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    className="login-button"
                >Login</Button>
            </div>

 
        </div> */}
        </div>
    )
}
