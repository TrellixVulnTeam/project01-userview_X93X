import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CardComponent({card}) {

    const navigate = useNavigate()
    const [gst_list, setGstList] = useState([])
    const [token, setToken] = useState()
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
            // axios({
            //     method:"POST",
            //     url:"http://3.108.219.92:3800/v1/user/gst/registration/bystatus",
            //     headers: {
            //         "Authorization": `Bearer ${token}`
            //     },
            //     data: card.status
            // }).then(data => {
            //     console.log(data)
            //     console.log(data.data)
            // }).catch(error => {
            //     console.log(error)
            // })
        }
        checkToken()

    }, [])
  return (
    <div className='col-md-3 col-sm-12 col-xl-3 p-3 text-center '>
        <div className='card p-3 box-style'>
            <div className='card-header'>
                <h5 className='card-title fw-bold text-wrap'>{card.heading}</h5>
            </div>
            <div className='card-body'>
                <h3>{card.count}</h3>
            </div>
            <div className='card-footer'>
                <button className='btn btn-dark' onClick={() => navigate(`${card.route}`, {state: {status: card.status}})}>VIEW DETAILS</button>
            </div>
        </div>
    </div>
  )
}
