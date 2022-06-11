import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ItrNavigation from '../Navigation/itrNavigation'
import SupportNavigation from '../Navigation/SupportNavigation'


export default function AllTickets() {

 
      const navigate = useNavigate()
      const [tickets, setTickets] = useState([])
      const [token, setToken] = useState()
      
      useEffect(() => {
          async function checkToken() {
              let token;
              try {
                  token = await JSON.parse(localStorage.getItem('token'))
                  if (token === null || token === undefined) {
                      navigate('/')
                  }
                  console.log("token set")
                  
              } catch (e) {
                  console.log(e)
              }
              axios({
                  method:"GET",
                  url:"http://localhost:3800/v1/user/support/ticket/all",
                  headers: {
                      "Authorization": `Bearer ${token}`
                  }
              }).then(data => {
                  if(data.status == 200) {
                    setTickets(data.data)
                  }
                
              }).catch(error => {
                  console.log(error)
              })
              setToken(token)
          }
          checkToken()
  
      }, [])

    return (
        <>
            <SupportNavigation />
            <div className='container'>
            <div className='row m-0 p-0 border'>
              <span className="fs-3 text-uppercase itr-heading-text">View All GST Registration</span>
            </div>
            
            <div className='row m-0 p-0'>
            <table className='table table-bordered text-center'>
                <thead>
                  <tr>
                    <td className='fw-bolder'>Login ID</td>
                    <td className='fw-bolder'>Date</td>
                    <td className='fw-bolder'>Department</td>
                    <td className='fw-bolder'>Ticket Type</td>
                    <td className='fw-bolder'>Subject</td>
                    <td className='fw-bolder'>View</td>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map(ticket => (
                    <tr>
                      <td>{ticket ? ticket.loginId : null}</td>
                      <td>{ticket ? ticket.createdAt: null}</td>
                      <td>{ticket ? ticket.department : null}</td>
                      <td>{ticket ? ticket.ticket_type : null}</td>
                      <td>{ticket ? ticket.subject: null}</td>
                      <td>View</td>
                      {/* <td className='fw-bolder color-green cursor-pointer' onClick={() => navigate(`/gst/view/${ticket._id } `, {state:{ ticket}})}>Edit</td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </div>
        </>
      )
}
