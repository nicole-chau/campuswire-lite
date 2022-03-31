import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom'

import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import HomePage from './components/HomePage'

const App = () => (
  <Router>
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  </Router>
)

export default App
