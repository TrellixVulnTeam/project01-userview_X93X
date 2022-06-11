import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/icons/logo.jpeg'


export default function TopNavigation({setAuth}) {
    const [username, setUserName] = useState()
    const [loginId, setLoginId] = useState()
    useEffect( () => {
        let user =  localStorage.getItem('user')
        user = JSON.parse(user)
        if(user == undefined || user == null) {
            setUserName('username')
            setLoginId('login Id')
        } else {
            setUserName(user.firstName)
        setLoginId(user.loginId)
        }
        
    })

    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem('product_list')
        localStorage.removeItem('itrUserDetails')
        localStorage.removeItem('gst')
        localStorage.removeItem('itrDetails')
        setAuth(false)
        navigate('/')
    }
  return (
    <>
        <div className='container'>
            <div className='row m-0 p-0 height-100 background-color-green'>
                <div className='col-md-6 col-xl-6 col-xm-12 '>
                    <img src={Logo} alt="..." className="p-2 man-logo" onClick={() => navigate('/branch/home')}></img>
                </div>
                <div className='col-md-6 col-xl-6 col-xm-12 '>
                    <ul className='list-unstyled text-white font-weight-bold p-2 float-md-end float-xl-end fw-bold'>
                        <li className='cursor-pointer p-1'>Welcome {username}</li>
                        <li className='cursor-pointer p-1'>Login Id : {loginId}</li>
                        <li className='cursor-pointer p-1' onClick={handleLogout}>LogOut</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}
