import React from 'react'
import GstNavigation from '../Navigation/gstNavigation'
import SupportNavigation from '../Navigation/SupportNavigation'
import CardComponent from '../utils/Card'

export default function GstHome() {

    const cards = [ {
        'id': 1,
        'heading':'Panding Tickets',
        'status':'panding',
        'count': 0,
        'route' :'/gst/view/viewall'
      },
      {
        'id': 2,
        'heading':'Processing Tickets',
        'status':'under-processing',
        'count': 0,
        'route' :'/gst/view/viewall'
      },
      {
        'id': 3,
        'heading':'Resolved Tickets',
        'status':'panding-for-arn',
        'count': 0,
        'route' :'/gst/view/viewall'
      },
      {
        'id': 4,
        'heading':'Closed Tickets',
        'status':'panding-for-gst-no',
        'count': 0,
        'route' :'/gst/view/viewall'
      },
      {
        'id': 5,
        'heading':'View All',
        'status':'rejection-from-gst-department',
        'count': 0,
        'route' :'/gst/view/viewall'
      },
    ]

  return (
    <>
    <SupportNavigation />
      <div className='container'>
      <div className='row m-0 p-0 border'>
        <span className="fs-3 text-uppercase itr-heading-text">Support HOME</span>
      </div>
          <div className='row m-0 p-0'>
            {cards.map(card => <CardComponent card={card}/>)}
          </div>
      </div>
  </>
  )
}
