import React from 'react'

const Question = ({ questionText, author, answer }) => (
  <>
    {author}
    <br />
    {questionText}
    <br />
    {answer}
  </>
)

export default Question
