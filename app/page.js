"use client"
import { useState } from "react";
import { generateQuestions } from "@/utils";

export default function Home() {

  const [numQuestions, setNumQuestions] = useState(0);
  const [about, setAbout] = useState('');
  const [question, setQuestion] = useState([])
  const [answers, setAnswers] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to be sent to the API
    const formData = {
      numQuestions: parseInt(numQuestions),
      about: about,
    };

    //API Call
   const data =  await generateQuestions(numQuestions, about)
   for (let i = 0; i < array.length; i++) {
   
    const [questionLine, answersString] = data[i].text.split("[");
    const question = questionLine.replace(/A: /, '');
    const answers = answersString.slice(0, -1).split(", ").map((answer) => answer.replace(/A: |B: |C: |D: |"|\[|\]/g, ''));
   }
    

    // Reset the form inputs after submission
    console.log(question)
    console.log('Answers:', answers)
    
    setNumQuestions(0);
    setAbout('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-around mt-20">
      <div className="">
        <label htmlFor="numQuestions">Auto Create Questions:</label>
        <br/>
        <input
        className="border-2 w-10 pl-3 mr-20 rounded-md ml-2"
          type="number"
          id="autoCreateQuestions"
          value={numQuestions}
          onChange={(e) => setNumQuestions(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="about">About:</label>
        <br/>
        <textarea
        className="border-2 pl-3 mr-20 rounded-md"
          id="about"
          rows={3}
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />
      </div>
      </div>
      <div className="flex justify-center">
      <button 
      type="submit"
      className="bg-green-500 border-2 border-black px-1 mt-3 flex justify-center rounded-md"
      >
        Submit
        </button>
        </div>
    </form>
  );
};

