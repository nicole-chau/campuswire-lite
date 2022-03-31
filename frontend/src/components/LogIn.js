import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import UserForm from './UserForm'

const LogIn = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const login = async () => {
    try {
      await axios.post('/account/login', { username, password })
      navigate('/')
    } catch (e) {
      alert('Log in failed. Please try again.')
    }
  }

  return (
    <>
      <h1>Log In</h1>
      <UserForm setUsername={setUsername} setPassword={setPassword} />
      <button type="button" onClick={() => login()}>Log In</button>
      <br />
      <p>
        Don&apos;t have an account? &nbsp;
        <Link to="/signup">Sign up!</Link>
      </p>
      <br />
    </>
  )
}

export default LogIn
