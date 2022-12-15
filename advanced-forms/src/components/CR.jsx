import React from 'react'

const CR = ({ question }) => {
  return (
    <div>
      <p>{question.stem}</p>
      {question.lines > 1 ? (<textarea />) : (<input type="text" />)}
    </div>
  )
}

export default CR