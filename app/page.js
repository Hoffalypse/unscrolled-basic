"use client"
import { useState } from "react";

export default function Home() {
  const [autoCreateQuestions, setAutoCreateQuestions] = useState(0);
  const [about, setAbout] = useState('');

  const handleAutoCreateQuestionsChange = (e) => {
    setAutoCreateQuestions(parseInt(e.target.value));
  };

  const handleAboutChange = (e) => {
    setAbout(e.target.value);
  };

  return (
    <div className="flex justify-center mt-20">
      <label>
        Auto Create Questions:
        </label>
       
        <input
          type="number"
          value={autoCreateQuestions}
          onChange={handleAutoCreateQuestionsChange}
          className="border-2 w-10 pl-3 mr-20 rounded-md ml-2"

        />
      

      <br />

      <label>
        About:
        <input
          type="text"
          value={about}
          onChange={handleAboutChange}
          className="border-2 rounded-md ml-2"
        />
      </label>
    </div>
  );
}
