import React from 'react'
import GstNavigation from '../Navigation/gstNavigation'
import OtherProductNavigation from '../Navigation/otherProductNavigation'
import CardComponent from '../utils/Card'

export default function OtherHome() {

    const cards = [ {
        'id': 1,
        'heading':'Pending Inquiry',
        'count': 0,
        'route' :'/other/product/list'
      },
      {
        'id': 2,
        'heading':'Placed Order',
        'count': 0,
        'route' :'/other/product/list'
      },
      {
        'id': 3,
        'heading':'Order In Process',
        'count': 0,
        'route' :'/other/product/list'
      },
      {
        'id': 4,
        'heading':'Complete Order',
        'count': 0,
        'route' :'/other/product/list'
      },
      {
        'id': 5,
        'heading':'Delivered Order',
        'count': 0,
        'route' :'/other/product/list'
      },
    ]

  return (
    <>
    <OtherProductNavigation />
      <div className='container'>
      <div className='row m-0 p-0 border'>
        <span className="fs-3 text-uppercase itr-heading-text">All Order Status</span>
      </div>
          <div className='row m-0 p-0'>
            {cards.map(card => <CardComponent card={card}/>)}
          </div>
      </div>
  </>
  )
}
