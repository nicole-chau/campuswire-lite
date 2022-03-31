import React, { useState } from 'react'
import axios from 'axios'
import Question from './Question'

const AllQuestions = () => {
  const [questions, setQuestions] = useState([])

  const getQuestions = async () => {
    try {
      const response = await axios.get('/api/questions')
      setQuestions(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  getQuestions()

  let id = 0

  return (
    <>
      {questions.map(q => <Question key={id++} questionText={q.questionText} author={q.author} answer={q.answer} />)}
    </>
  )
}

export default AllQuestions
