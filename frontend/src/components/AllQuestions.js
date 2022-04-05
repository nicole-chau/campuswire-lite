import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Question from './Question'

const AllQuestions = () => {
  const [questions, setQuestions] = useState([])
  // question to display
  const [displayId, setDisplayId] = useState('')
  const [displayQuestion, setDisplayQuestion] = useState('')
  const [displayAuthor, setDisplayAuthor] = useState('')
  const [displayAnswer, setDisplayAnswer] = useState('')

  useEffect(() => {
    const intervalID = setInterval(() => {
      const getQuestions = async () => {
        try {
          const response = await axios.get('/api/questions')
          setQuestions(response.data)
          setDisplayId(response.data[0]._id)
          setDisplayQuestion(response.data[0].questionText)
          setDisplayAuthor(response.data[0].author)
          setDisplayAnswer(response.data[0].answer)
        } catch (e) {
          console.log(e)
        }
      }

      getQuestions()
    }, 2000)

    return () => clearInterval(intervalID)
  }, [])

  const selectQuestion = ({ _id, questionText, author, answer }) => {
    setDisplayId(_id)
    setDisplayQuestion(questionText)
    setDisplayAuthor(author)
    setDisplayAnswer(answer)
  }

  let id = 0

  return (
    <div className="flex">
      <div className="w-1/4 mr-10">
        {questions.map(q => <button key={id++} type="button" onClick={() => selectQuestion(q)} className="block p-2 rounded border-2 my-2 w-full">{q.questionText}</button>)}
      </div>

      <div>
        <Question id={displayId} questionText={displayQuestion} author={displayAuthor} answer={displayAnswer} /> 
      </div>
    </div>
  )
}

export default AllQuestions
