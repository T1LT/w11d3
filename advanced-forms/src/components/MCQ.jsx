import React from 'react'

const MCQ = ({ question, idx }) => {
  return (
    <>
        <label htmlFor={`question${idx}`}>{question.stem}</label>
        {question.options.map((option, i) => (
            <div key={i}>
                <span>{option.text}</span>
                <input type="radio" name={`question${idx}`} />
            </div>
        ))}
    </>
  )
}

export default MCQ;