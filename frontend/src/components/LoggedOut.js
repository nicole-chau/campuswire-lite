import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AllQuestions from './AllQuestions'

const LoggedOut = () => (
  <>
    <Link to="/login">
      <button type="button">Log in to submit a question</button>
    </Link>
    <AllQuestions />
  </>
)

export default LoggedOut
