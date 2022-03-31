import React from 'react'

const UserForm = ({ setUsername, setPassword }) => {
  return (
    <>
      Username:
      <input onChange={e => setUsername(e.target.value)} />
      <br />
      Password:
      <input onChange={e => setPassword(e.target.value)} />
    </>
  )
}

export default UserForm
