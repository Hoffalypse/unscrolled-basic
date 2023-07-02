"use client"
import { useState } from "react";
import { generateQuestions } from "@/utils";
import { RenderQuestions, AIQuestionForm, ManualQuestion, Loader } from "@/components";

export default function Home() {
  const [numQuestions, setNumQuestions] = useState(0);
  const [about, setAbout] = useState("");
  const [questionObj, setQuestionObj] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    // Prepare the data to be sent to the API
    const formData = {
      numQuestions: parseInt(numQuestions),
      about: about,
    };
  
    // API Call
    const data = await generateQuestions(numQuestions, about);
  
    // Get data into the proper format
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
  
    setQuestionObj((prevQuestionObj) => ({
      ...prevQuestionObj,
      ...updatedQuestionObj,
    }));
  
    // Reset the form inputs after submission
    setNumQuestions(0);
    setAbout("");
    setLoading(false);
  };

  const handleManualQuestionSubmit = (manualQuestion) => {
    setQuestionObj((prevQuestionObj) => ({
      ...prevQuestionObj,
      [manualQuestion.question]: manualQuestion.answers,
    }));
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <ManualQuestion handleManualQuestionSubmit={handleManualQuestionSubmit} />
        </div>
        <div className="w-full lg:w-1/2">
          <AIQuestionForm
            handleSubmit={handleSubmit}
            setNumQuestions={setNumQuestions}
            setAbout={setAbout}
            numQuestions={numQuestions}
            about={about}
          />
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center">
          <Loader />
        </div>
      ) : (
        ""
      )}
      <div>
        <RenderQuestions questions={questionObj} />
      </div>
    </>
  );
}
