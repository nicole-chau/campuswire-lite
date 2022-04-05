import React, { useState } from 'react'
import axios from 'axios'

const Question = ({ id, questionText, author, answer }) => {
  const [newAnswer, setNewAnswer] = useState('')

  const answerQuestion = async () => {
    try {
      await axios.post('/api/questions/answer', { _id: id, answer: newAnswer })
    } catch (e) {
      alert('Question answer failed.')
    }

    window.location.reload()
  }

  return (
    <>
      <h2 className="text-2xl">{questionText}</h2>
      <br />
      <h3 className="font-bold">Author:</h3>
      {author}
      <br />
      <br />
      <h3 className="font-bold">Answer:</h3>
      {answer}
      <br />
      <br />
      Answer this question:
      <input onChange={e => setNewAnswer(e.target.value)} className="block w-80 p-2 my-2 border-2 rounded" />
      <button type="button" onClick={() => answerQuestion()} className="bg-sky-400 text-white p-2 rounded w-30 my-3">Submit Answer</button>
    </>
  )
}

export default Question
