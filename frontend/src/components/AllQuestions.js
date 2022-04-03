import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Question from './Question'

const AllQuestions = () => {
  const [questions, setQuestions] = useState([])
  // question to display
  const [displayQuestion, setDisplayQuestion] = useState('')
  const [displayAuthor, setDisplayAuthor] = useState('')
  const [displayAnswer, setDisplayAnswer] = useState('')

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const response = await axios.get('/api/questions')
        setQuestions(response.data)
        setDisplayQuestion(response.data[0].questionText)
        setDisplayAuthor(response.data[0].author)
        setDisplayAnswer(response.data[0].answer)
      } catch (e) {
        console.log(e)
      }
    }

    getQuestions()
  }, [])

  const selectQuestion = ({ questionText, author, answer }) => {
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
        <h2 className="text-2xl">{displayQuestion}</h2>
        <br />
        <h3 className="font-bold">Author:</h3>
        {displayAuthor}
        <br />
        <br />
        <h3 className="font-bold">Answer:</h3>
        <br />
        {displayAnswer}
      </div>
    </div>
  )
}

export default AllQuestions
