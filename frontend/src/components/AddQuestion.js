import React, { useState } from 'react'
import axios from 'axios'

const AddQuestion = () => {
  const [question, setQuestion] = useState('')
  const [showModal, setShowModal] = useState(false)

  const submitQuestion = async () => {
    try {
      await axios.post('api/questions/add', { questionText: question })
      setShowModal(false)
    } catch (e) {
      alert('failed to submit question')
    }
  }

  return (
    <>
      <button type="button" onClick={() => setShowModal(true)} className="bg-sky-400 text-white p-2 block rounded w-1/4">Add new question</button>
      {showModal
      && (
        <div className="flex justify-center items-center bg-gray-200 bg-opacity-50 absolute inset-0">
          <div className="bg-white p-5 rounded">
            Add Question:
            <textarea onChange={e => setQuestion(e.target.value)} className="block w-80 p-2 my-2 border-2 rounded" />
            <button type="button" onClick={() => submitQuestion()} className="bg-sky-400 text-white p-2 rounded w-30 my-2 mr-3">Submit Question</button>
            <button type="button" onClick={() => setShowModal(false)} className="bg-slate-400 text-white p-2 rounded w-30 my-3">Close</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AddQuestion
