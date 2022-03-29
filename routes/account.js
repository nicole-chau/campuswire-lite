 const express = require('express')

 const User = require('../models/User')
 const { isAuthenticated } = require('../middlewares/isAuthenticated')
 
 const router = express.Router()
 
router.post('/signup', async (req, res, next) => {
  const { username, password } = req.body

  // username should be unique
  const user = await User.findOne({ username })
  if (user !== null) {
    res.send('username already exists')
  } else {
    try {
      await User.create({ username, password })
      res.send('user creation was successful')
    } catch (e) {
      console.log(e)
      res.send('user creation had a problem')
    }
  } 
})
 
router.post('/login', async (req, res, next) => {
  const { username, password } = req.body

  // verify matching username and password exists
  const user = await User.findOne({ username, password })
  if (user !== null) {
    req.session.username = username
    res.send('login successful')
  } else {
    res.send('login failed')
  }
})

router.post('/logout', isAuthenticated, (req, res) => {
  const { username, password } = req.body

  // const user = await User.findOne({ username })
    req.session.username = null
    req.session.password = null
    res.send('logout successful')
  // } else {
  //   res.send('logout failed')
  // }
})

router.post('/verify', (req, res, next) => {
  if (req.session.username) {
    res.send(`you are logged in as ${req.session.username}`)
  } else {
    res.send(`go to login bye!`)
  }
})
 
module.exports = router