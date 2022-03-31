import React, { useState } from 'react'
import axios from 'axios'
import LoggedOut from './LoggedOut'
import LoggedIn from './LoggedIn'

const HomePage = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  const isLoggedIn = async () => {
    try {
      await axios.post('/account/verify')
      setLoggedIn(true)
    } catch (e) {
      setLoggedIn(false)
    }
  }

  return (
    <>
      <h1>Campuswire Lite</h1>
      <LoggedOut />
    </>
  )
}

export default HomePage
