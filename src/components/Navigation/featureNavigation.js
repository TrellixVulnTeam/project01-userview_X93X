import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function FeatureNavigation() {

    const navigate = useNavigate()

  return (
    <>
        <div className='container'>
            <div className="row m-0 p-0 border">
                <div className="col-md-12 col-xl-12 m-0 p-0">
                    <ul className='list-inline list-unstyled fw-bold m-0 p-0'>
                        <li className='list-inline-item parent-menu-div' onClick={() => navigate('/itr/home')}>I.T.R. Management</li>
                        <li className='list-inline-item parent-menu-div' onClick={() => navigate('/gst/home')}>G.S.T. Registration</li>
                        <li className='list-inline-item parent-menu-div' onClick={() => navigate('/gst/return/view')}>G.S.T. Return</li>
                        <li className='list-inline-item parent-menu-div' onClick={() => navigate('/other/product/home')}>Other Product</li>
                        <li className='list-inline-item parent-menu-div' onClick={() => navigate('/tds/home')}>TDS Management</li>
                    </ul>  
                </div>
            </div>
        </div>
    </>
  )
}
