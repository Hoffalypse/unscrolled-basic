"use client";
import { useState, useEffect } from "react";
import { generateQuestions } from "@/utils";
import { RenderQuestions, QuestionForm } from "@/components";

export default function Home() {
  const [numQuestions, setNumQuestions] = useState(0);
  const [about, setAbout] = useState("");
  const [questionObj, setQuestionObj] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to be sent to the API
    const formData = {
      numQuestions: parseInt(numQuestions),
      about: about,
    };

    // API Call
    const data = await generateQuestions(numQuestions, about);


    //Get data into proper format 
    const updatedQuestionObj = data.reduce((acc, item, index) => {
      const [questionLine, answersString] = item.text.split("[");
      const question = questionLine.replace(/[\n\r]/g, "");
      const answers = answersString
        .slice(0, -1)
        .split(", ")
        .map((answer) => answer.replace(/A: |B: |C: |D: |"|\[|\]/g, ""));

      acc[question] = answers;
      return acc;
    }, {});

    setQuestionObj(updatedQuestionObj);

    // Reset the form inputs after submission
    setNumQuestions(0);
    setAbout("");
  };
  return (
    <>
      <QuestionForm
        handleSubmit={handleSubmit}
        setNumQuestions={setNumQuestions}
        setAbout={setAbout}
        numQuestions={numQuestions}
        about={about}
      />
      <div>
        <RenderQuestions questions={questionObj} />
      </div>
    </>
  );
}
