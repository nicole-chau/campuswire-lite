import React, { useState } from 'react'
import axios from 'axios'

const AddQuestion = () => {
  const [question, setQuestion] = useState('')
  const [showModal, setShowModal] = useState(false)

  const submitQuestion = async () => {
    try {
      await axios.post('api/questions/add', { questionText: question })
    } catch (e) {
      console.log(e.response.data)
    }
  }

  return (
    <>
      <button type="button" onClick={() => setShowModal(true)} className="bg-sky-400 text-white p-1 rounded w-1/4">Add new question</button>
      {showModal && (<>
        <input onChange={e => setQuestion(e.target.value)} />
        <button type="button" onClick={() => submitQuestion()}>Submit Question</button>
        <button type="button" onClick={() => setShowModal(false)}>Close</button>
        </>)}
    </>
  )
}

export default AddQuestion
