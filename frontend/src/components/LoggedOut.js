import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AllQuestions from './AllQuestions'

const LoggedOut = () => (
  <>
    <Link to="/login">
      <button type="button" className="bg-sky-400 text-white p-1 rounded w-1/4">Log in to submit a question</button>
    </Link>
    <AllQuestions />
  </>
)

export default LoggedOut
