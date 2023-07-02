import React, { useState } from "react";

const ManualQuestion = ({ handleManualQuestionSubmit }) => {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState(["", "", ""]);

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleAnswerChange = (e, index) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = e.target.value;
    setAnswers(updatedAnswers);
  };

  const submitQuestion = () => {
    const manualQuestion = {
      question,
      answers,
    };
    handleManualQuestionSubmit(manualQuestion);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-slate-300 h-[50vh] rounded-xl">
      <h2 className="text-[30px] italic">Create Your Own Question:</h2>
      <br />
      <label className="text-[20px]" htmlFor="question">Question:</label>
      <input
        type="text"
        id="question"
        value={question}
        onChange={handleQuestionChange}
        className=" inp rounded-md px-2 py-1 ml-2 mb-4 w-[80%] shadow-md"
      />

      <div className="mb-4">
        <label className="text-[20px]"htmlFor="answer1">Answer 1(Correct):</label>
        <input
          type="text"
          id="answer1"
          value={answers[0]}
          onChange={(e) => handleAnswerChange(e, 0)}
          className="border border-gray-400 rounded-md px-2 py-1 ml-2 shadow-md inp"
        />
      </div>
      <div className="mb-4">
        <label className="text-[20px]"htmlFor="answer2">Answer 2(Wrong):</label>
        <input
          type="text"
          id="answer2"
          value={answers[1]}
          onChange={(e) => handleAnswerChange(e, 1)}
          className="border border-gray-400 rounded-md px-2 py-1 ml-2 shadow-md inp"
        />
      </div>
      <div className="mb-4">
        <label className="text-[20px]"htmlFor="answer3">Answer 3(Wrong):</label>
        <input
          type="text"
          id="answer3"
          value={answers[2]}
          onChange={(e) => handleAnswerChange(e, 2)}
          className="border border-gray-400 rounded-md px-2 py-1 ml-2 shadow-md inp"
        />
      </div>

      <button
        onClick={submitQuestion}
        className="bg-green-400 border-2 border-black px-4 py-[7px] flex justify-center rounded-md"
      >
        Submit
      </button>
    </div>
  );
};

export default ManualQuestion;
