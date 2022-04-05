import React, { useState } from 'react'
import axios from 'axios'

const Question = ({
  loggedIn, id, questionText, author, answer,
}) => {
  const [newAnswer, setNewAnswer] = useState('')

  const answerQuestion = async e => {
    e.preventDefault()
    try {
      await axios.post('/api/questions/answer', { _id: id, answer: newAnswer })
    } catch (err) {
      alert('Question answer failed.')
    }
    e.target.reset()
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
      {loggedIn
      && (
        <>
          Answer this question:
          <form onSubmit={answerQuestion}>
            <input onChange={e => setNewAnswer(e.target.value)} className="block w-80 p-2 my-2 border-2 rounded" />
            <button type="submit" className="bg-sky-400 text-white p-2 rounded w-30 my-3">Submit Answer</button>
          </form>
        </>
      )}
    </>
  )
}

export default Question
