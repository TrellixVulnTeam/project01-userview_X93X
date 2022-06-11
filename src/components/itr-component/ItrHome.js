import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ItrNavigation from '../Navigation/itrNavigation'
import CardComponent from '../utils/Card'

export default function ItrHome() {
  const cards = [ {
    'id': 1,
    'heading':'Total Pending ITR',
    'count': 100,
    'route' :'/gst/all'
  },
  {
    'id': 2,
    'heading':'Total Processing ITR',
    'count': 100,
    'route' :'/gst/all'
  },
  {
    'id': 3,
    'heading':'Total Pending for details ITR',
    'count': 100,
    'route' :'/gst/all'
  },
  {
    'id': 4,
    'heading':'Hold for branch confirmation',
    'count': 100,
    'route' :'/gst/all'
  },
  {
    'id': 5,
    'heading':'Pending for ERT Submission',
    'count': 100,
    'route' :'/gst/all'
  },
  {
    'id': 6,
    'heading':'Total Completed ITR',
    'count': 100,
    'route' :'/gst/all'
  },
  {
    'id': 7,
    'heading':'Total Rejected ITR',
    'count': 100,
    'route' :'/gst/all'
  },
  {
    'id': 8,
    'heading':'Total Canceled',
    'count': 100,
    'route' :'/gst/all'
  },
]

  const navigate = useNavigate()
  useEffect(() => { 
      async function checkToken() {
        try {
          let token = localStorage.getItem('token')
          if(token === null || token === undefined) {
            navigate('/')
          }
        } catch(e) {

        }
      }
      checkToken()

  }, [])

  return (
    <>
      <ItrNavigation />
        <div className='container'>
        <div className='row m-0 p-0 border'>
          <span className="fs-3 text-uppercase itr-heading-text">HOME</span>
        </div>
            <div className='row m-0 p-0'>
              {cards.map(card => <CardComponent card={card}/>)}
            </div>
        </div>
    </>
  )
}
