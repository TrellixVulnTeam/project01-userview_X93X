import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function GstNavigation() {

  const navigate = useNavigate()

  return (
    <>
        <div className='container'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand cursor-pointer" onClick={() => navigate('/gst/home')}>Home</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" onClick={() => navigate('/gst/apply')}>Apply for GST Registration</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" onClick={() => navigate('/gst/track')}>Track GST Status</a>
                    </li>
                    {/* <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        GST Easy Bill Clients
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item" onClick={() => navigate('/gst/add/easybill')}>Add GST Easy Bill Client</a></li>
                        <li><a class="dropdown-item" onClick={() => navigate('/gst/view/easybill')}>View Gst Easy Bill Client</a></li>
                      </ul>
                    </li> */}
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        GST Return
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item" onClick={() => navigate('/gst/return/add')}>Add GST Return</a></li>
                        <li><a class="dropdown-item" onClick={() => navigate('/gst/return/view')}>View GST Return</a></li>
                      </ul>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </div>
    </>
  )
}
