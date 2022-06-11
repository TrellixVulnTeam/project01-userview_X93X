import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function ItrNavigation() {

  const navigate = useNavigate()
  const style = {
    'color':'white'
  }

  return (
    <>
        <div className='container'>
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <a className="navbar-brand cursor-pointer" style={style} onClick={() => navigate('/itr/home')}>Home</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    {/* <NavLink to="/apply/itr"> */}
                    <a className="nav-link" onClick={() => navigate('/apply/itr')}>Apply for ITR</a>
                    {/* </NavLink> */}
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Online Activity Process
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li class="dropdown-item" onClick={() => navigate('/itr/addgroup')}>Add/Edit Group</li>
                        <li class="dropdown-item" onClick={() => navigate('/apply/itr')}>Register as Individual</li>
                        <li class="dropdown-item" >Individual Client List</li>
                        <li class="dropdown-item" >Online Activity for Individual</li>
                      </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" onClick={() => navigate('/itr/activate/client')}>Activate Client</a>
                    </li>
                    {/* <li className="nav-item">
                    <a className="nav-link" onClick={() => navigate('/itr/all')}>View all ITR</a>
                    </li> */}
                </ul>
                </div>
            </div>
        </nav>
        </div>
    </>
  )
}
