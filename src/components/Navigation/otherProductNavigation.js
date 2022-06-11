import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function OtherProductNavigation() {
  
  const navigate = useNavigate()

  return (
    <>
        <div className='container'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand cursor-pointer" onClick={() => navigate('/other/product/home')}>Home</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Orders
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item" onClick={() => navigate('/other/order/list')}>View My Order List</a></li>
                        <li><a class="dropdown-item" onClick={() => navigate('/coupon/purchase')}>Add New Order</a></li>
                        <li><a class="dropdown-item" onClick={() => navigate('/other/product/wishlist')} disabled>WishList</a></li>
                      </ul>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Coupons
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item" onClick={() => navigate('/other/coupon/viewall')}>View All Coupon</a></li>
                        <li><a class="dropdown-item" onClick={() => navigate('')} disabled>Dispatch Report</a></li>
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
