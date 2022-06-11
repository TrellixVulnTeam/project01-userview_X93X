import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function TdsNavigation() {

  const navigate = useNavigate()

  return (
    <>
        <div className='container'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand cursor-pointer" onClick={() => navigate('/tds/home')}>Home</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    
                    <a className="nav-link" onClick={() => navigate('/tds/register/client')}>Register Client</a>
                    
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" onClick={() => navigate('/tds/client/list')}>Client List</a>
                    </li>
                    {/* <li className="nav-item">
                    <a className="nav-link" onClick={() => navigate('/tds/apply/order')}>Apply For T.D.S. Order</a>
                    </li> */}
                    {/* <li className="nav-item">
                    <a className="nav-link" onClick={() => navigate('')}>View All Order</a>
                    </li> */}
                </ul>
                </div>
            </div>
        </nav>
        </div>
    </>
  )
}
