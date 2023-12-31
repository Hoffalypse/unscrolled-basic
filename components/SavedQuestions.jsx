"use client"
import React, { useState } from "react";
import Image from "next/image";

const SavedQuestions = ({ savedQuestions, setSavedQuestions }) => {
  const [topic, setTopic] = useState("");

  const handleTopicChange = (e) => {
    setTopic(e.target.value);
  };

  const handleRemoveQuestion = (questionIndex) => {
    const updatedQuestions = savedQuestions.filter(
      (_, index) => index !== questionIndex
    );
    setSavedQuestions(updatedQuestions);
  };

  const handleAddToGame = () => {
    const gameData = {
      topic: topic,
      questions: savedQuestions.map((savedQuestion) => ({
        question: savedQuestion.question,
        answers: savedQuestion.answers,
      })),
      totalQuestions: savedQuestions.length,
    };

    console.log(gameData);
  };


  return (
    <div>
      <div className="mb-4 flex justify-center">
        <label htmlFor="topic" className="text-lg font-bold">
          Set Topic:
        </label>
        <input
          type="text"
          id="topic"
          value={topic}
          onChange={handleTopicChange}
          className="border border-gray-400 rounded-md px-2 py-1 ml-2"
        />
      </div>

      <div className="text-center">
        <ul>
          {savedQuestions.map((savedQuestion, questionIndex) => (
            <div className="mt-2 border-slate-500" key={questionIndex}>
              <li>
                <p className="">Question: {savedQuestion.question}
                <button
                  onClick={() => handleRemoveQuestion(questionIndex)}
                  className=" rounded-md ml-5 px-1 py-1 mt-2 bg-red-400 text-white"
                >
                  <Image className='bg-transparent'src="/trash.png" alt="delete" width={15} height={15}/>
                </button>
                </p>
                <p>Answers: {savedQuestion.answers.join(", ")}</p>
                
              </li>
            </div>
          ))}
        </ul>
      </div>
      <div className="flex justify-center">
        <button
          className="border-2 border-blue-400 p-2 mt-4 rounded-md bg-blue-400 text-white"
          onClick={handleAddToGame}
        >
          Add to Quizes
        </button>
      </div>
    </div>
  );
};

export default SavedQuestions;


