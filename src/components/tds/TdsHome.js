import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ItrNavigation from '../Navigation/itrNavigation'
import TdsNavigation from '../Navigation/TdsNavigation'
import CardComponent from '../utils/Card'

export default function ItrHome() {
  const cards = [ {
    'id': 1,
    'heading':'Under Review',
    'count': 0,
    'route' :'/tds/client/list'
  },
  {
    'id': 2,
    'heading':'Process Order',
    'count': 0,
    'route' :'/tds/client/list'
  },
  {
    'id': 3,
    'heading':'Pending For Details',
    'count': 0,
    'route' :'/tds/client/list'
  },
  {
    'id': 4,
    'heading':'Pending For Receipt',
    'count': 0,
    'route' :'/tds/client/list'
  },
  {
    'id': 5,
    'heading':'Complete Order',
    'count': 0,
    'route' :'/tds/client/list'
  },
  {
    'id': 6,
    'heading':'Cancel Order',
    'count': 0,
    'route' :'/tds/client/list'
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
      <TdsNavigation /> 
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
