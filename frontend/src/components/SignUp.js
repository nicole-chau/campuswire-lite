import React, { useState } from 'react'
import axios from 'axios'

const SignUp = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')

  const createUser = async () => {
    await axios.post('/account/signup', { username, password })
    setMsg('user creation successful')
  }

  return (
    <>
      <h1>Sign Up</h1>
      Username:
      <input onChange={e => setUsername(e.target.value)} />
      <br />
      Password:
      <input onChange={e => setPassword(e.target.value)} />
      <br />
      <button type="button" onClick={() => createUser()}> Sign Up</button>
      <br />
      <p>
        Already have an account?
        <a href="/">Log in here!</a>
      </p>
      <p>
        { msg }
      </p>
      <br />
    </>
  )
}

export default SignUp
