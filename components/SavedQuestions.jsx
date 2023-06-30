import React from "react";

const SavedQuestions = ({ savedQuestions }) => {
  console.log(savedQuestions);
  return (
    <div>
     
        <div >
          <div>
            
            <ul>
              {savedQuestions.map((savedQuestion, index) => (
                <div className="mt-2 border-slate-500">
                  <li key={index}>
                    <p>Question: {savedQuestion.question}</p>
                    <p>Answers: {savedQuestion.answers.join(", ")}</p>
                  </li>
                </div>
              ))}
            </ul>
          </div>

          <div className="flex justify-center">
            <button className="border-2 border-black p-2 mt-4 rounded-md bg-green-400">
              Add to Game
            </button>
          </div>
        </div>
      
    </div>
  );
};

export default SavedQuestions;
