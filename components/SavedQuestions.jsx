import React from 'react'

const SavedQuestions = ({savedQuestions}) => {
    console.log(savedQuestions)
  return (
    <div>
        <div>
       
        {savedQuestions.length > 0 && <h2 className='text-2xl font-bold mb-4'>Saved Questions:</h2>}
        <ul>
          {savedQuestions.map((savedQuestion, index) => (
            <li key={index}>
              <p>Question: {savedQuestion.question}</p>
              <p>Answers: {savedQuestion.answers.join(', ')}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex justify-center'>
      <button className='border-2 border-black p-2 mt-4 rounded-md bg-green-400'>Add to Game</button>
      </div>
    </div>
  )
}

export default SavedQuestions