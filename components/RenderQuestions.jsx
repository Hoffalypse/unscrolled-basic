
import React, { useState, useEffect } from 'react';

const RenderQuestions = ({ questions }) => {
  const [editedQuestions, setEditedQuestions] = useState([]);

  useEffect(() => {
    // Convert the questions object to an array
    const questionArr = Object.entries(questions).map(([question, answers]) => ({
      question,
      answers: [...answers],
    }));
    setEditedQuestions(questionArr);
  }, [questions]);

  const handleQuestionChange = (e, index) => {
    const { value } = e.target;
    setEditedQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index].question = value;
      return updatedQuestions;
    });
  };

  const handleAnswerChange = (e, questionIndex, answerIndex) => {
    const { value } = e.target;
    setEditedQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[questionIndex].answers[answerIndex] = value;
      return updatedQuestions;
    });
  };

  return (
    <div className='flex justify-center flex-col items-center pt-10'>
        {!questions === {} ? <p>All Fields are Editable</p>: ""}
      {editedQuestions.map(({ question, answers }, questionIndex) => (
        <div className='mb-5 ml-5' key={questionIndex}>
          <input
          
            className='text-xl mb-2 px-2 py-1 border-none w-full border-gray-300 rounded-md'
            value={question}
            onChange={(e) => handleQuestionChange(e, questionIndex)}
          />
          <div className='flex'>
            {answers.map((answer, answerIndex) => (
              <input
                className='mr-4 answers'
                value={answer}
                onChange={(e) => handleAnswerChange(e, questionIndex, answerIndex)}
                key={answerIndex}
              />
            ))}
          </div>
        </div>
      ))}
      <br />
    </div>
  );
};

export default RenderQuestions;
