import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import UserForm from './UserForm'

const SignUp = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const createUser = async () => {
    try {
      await axios.post('/account/signup', { username, password })
      navigate('/')
    } catch (e) {
      alert('Sign up failed. Please try again.')
    }
  }

  return (
    <>
      <h1>Sign Up</h1>
      <UserForm setUsername={setUsername} setPassword={setPassword} />
      <button type="button" onClick={() => createUser()}>Sign Up</button>
      <br />
      <p>
        Already have an account? &nbsp;
        <Link to="/login">Log in here!</Link>
      </p>
      <br />
    </>
  )
}

export default SignUp
