import React, { useEffect, useState } from 'react'
import TopNavigation from '../Navigation'
import FeatureNavigation from '../Navigation/featureNavigation'
import UserInfoNavigation from '../Navigation/UserInfoNavigation'

export default function HocNavigation({setAuth}) {

  const [balance, setBalance] = useState()
  const [rewardPoints, setRewardPoints] = useState()
  const [userInfo, setUser] = useState({})
  useEffect(() => {
      let user = localStorage.getItem('user')
      user = JSON.parse(user)
      // console.log(user)
      if (user == undefined || user == null) {
          // setBalance(0)
          // setRewardPoints(0)
          setUser({
            balance: 0,
            reward_points: 0
          })
      } else {
          setUser({
            balance: user.balance,
            reward_points: user.reward_points
          })
          // setBalance(user.balance)
          // setRewardPoints(user.reward_points)
      }

  }, [])

  return (
    <>
        <UserInfoNavigation userInfo={userInfo}/>
        <TopNavigation setAuth={setAuth}/>
        <FeatureNavigation />
    </>
  )
}
