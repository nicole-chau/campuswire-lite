import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom'

import SignUp from './components/SignUp'

const App = () => (
  <Router>
    <div>
      <Routes>
        <Route path="/" element={<h1>Hello world!</h1>} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  </Router>
)

export default App
