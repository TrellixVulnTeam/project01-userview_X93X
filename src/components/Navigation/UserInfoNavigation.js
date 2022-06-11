import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';

export default function UserInfoNavigation({userInfo}) {
    // const [balance, setBalance] = useState()
    // const [rewardPoints, setRewardPoints] = useState()
    // useEffect(() => {
    //     let user = localStorage.getItem('user')
    //     user = JSON.parse(user)
    //     // console.log(user)
    //     if (user == undefined || user == null) {
    //         setBalance(0)
    //         setRewardPoints(0)
    //     } else {

    //         setBalance(user.balance)
    //         setRewardPoints(user.reward_points)
    //     }

    // }, [])

    const navigate = useNavigate()
    return (
        <>
            <div className='container'>
                <div className='row m-0 p-0 bg-dark'>
                    <div className='col-md-6 col-xl-6 col-xm-12 m-0 p-0'>
                        <h5 className='text-white cursor-pointer d-inline-block' onClick={() => navigate('/')}>
                            <HomeIcon className='font-size-24 m-2' />
                        </h5>
                        <ul className='list-unstyled text-white font-weight-bold fw-bold d-flex m-0 p-0 display-inline-block'>
                                <li className='cursor-pointer p-2 m-1' onClick={() => { navigate('/support/home')}}>Support </li>
                            </ul>
                    </div>
                    <div className='col-md-6 col-xl-6 col-xm-12 m-0 p-0'>
                        <ul className='list-unstyled text-white font-weight-bold float-md-end float-xl-end fw-bold d-flex m-0 p-0 '>
                            <li className='cursor-pointer p-2 m-1'>Account Balance : Rs. {userInfo.balance} </li>
                            <li className='cursor-pointer p-2 m-1 background-color-green'>Reward Points: {userInfo.reward_points}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
