import axios from "axios";

export async function generateQuestions(numQuestions, about) {
 
  try {

    const num = Number(numQuestions)
   

    const response = await axios.post(
      "https://api.openai.com/v1/engines/text-davinci-003/completions",
      {
        prompt: `give me a question about ${about} with 3 answers returned in an array the first returned answer is the corect one and the last 2 wrong answers, answer in the format of Question [answer 1, answer 2, answer 3] with no additional characters`,
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
            process.env.NEXT_PUBLIC_OPEN_AI_API,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices
  } catch (error) {
    console.log(error);
  }

  return;
}
