"use client";

import React, { useState, useEffect } from "react";
import { SavedQuestions } from ".";
import Image from "next/image";

const RenderQuestions = ({ questions }) => {
  const [editedQuestions, setEditedQuestions] = useState([]);
  const [savedQuestions, setSavedQuestions] = useState([]);

  useEffect(() => {
    // Convert the questions object to an array
    const questionArr = Object.entries(questions).map(
      ([question, answers]) => ({
        question,
        answers: [...answers],
      })
    );
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

  const handleSaveQuestion = (questionIndex) => {
    const savedQuestion = editedQuestions[questionIndex];
    setSavedQuestions((prevSavedQuestions) => [
      ...prevSavedQuestions,
      savedQuestion,
    ]);
  };

  return (
    <div className="flex flex-col pt-10 lg:flex-row bg-slate-200">
      
      <div className="w-full lg:w-[50%] flex flex-col items-center ">
        {editedQuestions.map(({ question, answers }, questionIndex) => (
          <div className="mb-5 ml-5" key={questionIndex}>
            <div className="flex ">
            <button className="mr-1"onClick={() => handleSaveQuestion(questionIndex)}>
                <Image src="/download.png" alt="download" width={30} height={30} />
              </button>
              <input
                className="text-xl mb-2 px-2 py-1 border-none w-full border-gray-300 rounded-md"
                value={question}
                onChange={(e) => handleQuestionChange(e, questionIndex)}
              />
              
            </div>
            <div className="flex">
              {answers.map((answer, answerIndex) => (
                <div key={answerIndex}>
                  {answerIndex === 0 ? (
                    <p className="text-center text-xs">Correct A:</p>
                  ) : (
                    <p className="text-center text-xs">Wrong A{answerIndex}:</p>
                  )}
                  <input
                    className="mr-4 answers"
                    value={answer}
                    onChange={(e) =>
                      handleAnswerChange(e, questionIndex, answerIndex)
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {savedQuestions.length > 0 ? (
      <div className="w-full lg:w-[50%] mt-4 lg:mt-0 bg-slate-400 flex justify-center rounded-xl">
        <SavedQuestions savedQuestions={savedQuestions} />
      </div>): ""}
    </div>
  );
};

export default RenderQuestions;