import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function SupportNavigation() {

  const navigate = useNavigate()

  return (
    <>
        <div className='container'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand cursor-pointer" onClick={() => navigate('/support/home')}>Support Home</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" onClick={() => navigate('/support/ticket/generate')}>Generate Ticket</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" onClick={() => navigate('/support/ticket/viewall')}>View All Tickets</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </div>
    </>
  )
}
