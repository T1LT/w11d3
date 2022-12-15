import React from 'react'

const CR = ({ question }) => {
  return (
    <div className='question'>
      <p className='cr-stem'>{question.stem}</p>
      {question.lines > 1 ? (<textarea />) : (<input type="text" />)}
    </div>
  )
}

export default CR