import React from 'react'

const MCQ = ({ question, idx }) => {
  return (
    <div className='question'>
        <label htmlFor={`question${idx}`}>{question.stem}</label>
        {question.options.map((option, i) => (
            <div key={i} className="option">
                <input type="radio" name={`question${idx}`} />
                <span> {option.text}</span>
            </div>
        ))}
    </div>
  )
}

export default MCQ;