import React from "react";

const QuestionForm = ({
  handleSubmit,
  numQuestions,
  setNumQuestions,
  about,
  setAbout,
}) => {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-200 h-[50vh] rounded-xl ">
    <h2 className="italic text-[30px] text-center mt-2">Generate With AI</h2>
    <br/>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center items-center">
          <div className=" items-center">
            <label className="text-[20px]" htmlFor="numQuestions">
              How Many Questions:
            </label>
            <input
              className="border-2 w-[45px]  rounded-md ml-2 pl-[15px] text-[25px] inp shadow-md"
              type="number"
              id="autoQuestions"
              max={10}
              min={0}
              value={numQuestions}
              onChange={(e) => setNumQuestions(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <div className="flex flex-col items-center">
            <label className="text-[20px]  mt-[-20px]" htmlFor="about">
              Subject Matter:
            </label>
            <textarea
              className="border-2 pl-3 rounded-lg text-xl inp shadow-md"
              id="about"
              rows={3}
              cols={40}
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button
            type="submit"
            className="bg-green-400 border-2 border-black p-2 flex justify-center rounded-md mt-[-20px]"
          >
            Generate
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuestionForm;
