import React from 'react'
import './Quiz.css'

const Quiz = () => {
  return (
    <div className='container'>
        <h1>Quiz App</h1>
        <hr/>
        <h2>1. What does HTML stand for?</h2>
        <ul>
            <li>Hyper Trainer Marking Language</li>
            <li>Hyper Text Markup Language</li>
            <li>Hyper Tool Markup Language</li>
            <li>Hyperlinks Text Managing Language</li>
        </ul>
        <button>Next</button>
        <div className="index">1 of 5 questions</div>
    </div>
  )
}

export default Quiz
