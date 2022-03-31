const express = require('express')

const Question = require('../models/question')
const { isAuthenticated } = require('../middlewares/isAuthenticated')

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const questions = await Question.find()
    res.json(questions)
  } catch (e) {
    next(new Error('error fetching questions'))
  }
})

router.post('/add', isAuthenticated, async (req, res, next) => {
  const { body: { questionText } } = req

  // get author key
  const { session: { username } } = req

  try {
    await Question.create({ questionText, author: username })
    res.send(`question created by ${username} successfully`)
  } catch (e) {
    next(new Error('question creation failed'))
  }
})

router.post('/answer', isAuthenticated, async (req, res, next) => {
  const { body: { _id, answer } } = req

  try {
    await Question.updateOne({ _id }, { answer })
    res.send('question update was successful')
  } catch (e) {
    next(new Error('answer update failed'))
  }
})

module.exports = router
