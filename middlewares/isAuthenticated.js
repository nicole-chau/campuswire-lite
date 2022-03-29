const express = require('express')

const isAuthenticated = (req, res, next) => {
  if (req.session.username) {
    next()
  } else {
    console.log('error')
    next(new Error('authentification failed'))
  }
}

module.exports = { isAuthenticated }