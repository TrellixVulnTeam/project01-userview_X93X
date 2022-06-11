import React from 'react'
import GstNavigation from '../Navigation/gstNavigation'
import CardComponent from '../utils/Card'

export default function GstHome() {

    const cards = [ {
        'id': 1,
        'heading':'GST Forms Under Review',
        'status':'under-review',
        'count': 0,
        'route' :'/gst/view/viewall'
      },
      {
        'id': 2,
        'heading':'GST Forms Under Processing',
        'status':'under-processing',
        'count': 0,
        'route' :'/gst/view/viewall'
      },
      {
        'id': 3,
        'heading':'GST Forms Pending for ARN',
        'status':'panding-for-arn',
        'count': 0,
        'route' :'/gst/view/viewall'
      },
      {
        'id': 4,
        'heading':'Pending For GST No',
        'status':'panding-for-gst-no',
        'count': 0,
        'route' :'/gst/view/viewall'
      },
      {
        'id': 5,
        'heading':'Rejection From GST Department',
        'status':'rejection-from-gst-department',
        'count': 0,
        'route' :'/gst/view/viewall'
      },
      {
        'id': 6,
        'heading':'GST Form Delivered',
        'status':'gst-form-delivered',
        'count': 0,
        'route' :'/gst/view/viewall'
      },
      {
        'id': 7,
        'heading':'GST Form Rejected',
        'status':'gst-form-rejected',
        'count': 0,
        'route' :'/gst/view/viewall'
      }
    ]

  return (
    <>
    <GstNavigation />
      <div className='container'>
      <div className='row m-0 p-0 border'>
        <span className="fs-3 text-uppercase itr-heading-text">GST HOME</span>
      </div>
          <div className='row m-0 p-0'>
            {cards.map(card => <CardComponent card={card}/>)}
          </div>
      </div>
  </>
  )
}
