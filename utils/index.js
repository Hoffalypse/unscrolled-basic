import axios from "axios";

export async function generateQuestions(numQuestions, about) {
  try {
   
    const num = Number(numQuestions)
   

    const response = await axios.post(
      "https://api.openai.com/v1/engines/text-davinci-003/completions",
      {
        prompt: `give me a question about ${about} with 4 answers returned in an array the first returned answer is the corect one and the last 3 wrong answers`,
        max_tokens: 100,
        n: num,
        stop: null,
        temperature: 0.7,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      },
      {
        headers: {
          Authorization:
            "",
          "Content-Type": "application/json",
        },
      }
    );

    
    // const [questionLine, answersString] = response.data.choices[0].text.split("[");
    // const question = questionLine.replace(/A: /, '');
    // const answers = answersString.slice(0, -1).split(", ").map((answer) => answer.replace(/A: |B: |C: |D: |"|\[|\]/g, ''));

    return response.data.choices
  } catch (error) {
    console.log(error);
  }

  return;
}
