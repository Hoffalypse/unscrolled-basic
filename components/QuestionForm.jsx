import React from 'react'

const QuestionForm = ({handleSubmit, numQuestions, setNumQuestions, about, setAbout}) => {
  return (
    <>
        <form onSubmit={handleSubmit}>
  <div className="flex justify-center mt-10">
    <div className="flex flex-col items-center">
      <label className="text-[30px]"htmlFor="numQuestions">How Many Questions:</label>
      <input
        className="border-2 w-[45px]  rounded-md ml-2 pl-[12px] text-[25px]"
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
      <label className="text-[30px]"htmlFor="about">About Subject:</label>
      <textarea
        className="border-2 pl-3 rounded-lg text-xl"
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
      className="bg-green-500 border-2 border-black p-2 flex justify-center rounded-md"
    >
      Generate
    </button>
  </div>
</form>
    </>
  )
}

export default QuestionForm
