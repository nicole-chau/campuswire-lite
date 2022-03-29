const express = require('express')

const Question = require('../models/Question')
const { isAuthenticated } = require('../middlewares/isAuthenticated')
 
const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const questions = await Question.find()
    res.json(questions)
  } catch (e) {
    console.log(e)
    res.send('error occured')
  }
})

router.post('/add', isAuthenticated, async(req, res, next) => {
  const { questionText } = req.body

  // get author key
  const author = req.session.username

  try {
    await Question.create({ questionText, author })
    res.send(`question created by ${author} successfully`)
  } catch (e) {
    console.log('hi')
    next(new Error('question creation failed'))
    // res.send('question creation failed')
  }
})

router.post('/answer', isAuthenticated, async(req, res, next) => {
  const { _id, answer } = req.body

  try {
    const question = await Question.updateOne({ _id }, { answer })
    res.send('question update was successful')
  } catch (e) {
    console.log(e)
    res.send('error occured')
  }
})

module.exports = router
