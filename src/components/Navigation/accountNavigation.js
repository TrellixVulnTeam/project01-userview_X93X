import React from 'react'
import {  useNavigate } from 'react-router-dom'

export default function AccountNavigation() {

  const navigate = useNavigate()

  return (
    <>
        <div className='container'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand cursor-pointer" >Home</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Transaction
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        
                        <li><a class="dropdown-item" onClick={() => navigate('/recharge/account')}>Recharge Account</a></li>
                        <li><a class="dropdown-item" onClick={() => navigate('/recharge/status')}>Recharge Status</a></li>
                      </ul>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Account
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item" onClick={() => navigate('/gst/return/add')}>Account Statement</a></li>
                        <li><a class="dropdown-item" onClick={() => navigate('/gst/return/view')}>View Branch Reward Statement</a></li>
                      </ul>
                    </li>
                    {/* <li className="nav-item">
                    <a className="nav-link" onClick={() => navigate('/gst/apply')}>Incentive</a>
                    </li> */}
                </ul>
                </div>
            </div>
        </nav>
        </div>
    </>
  )
}
