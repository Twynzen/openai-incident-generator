import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.GPT_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function gptTurboEngine(prompt: string): Promise<string> {
   const completPromt = `Dada la siguiente entrada: "${prompt}
   ", extraer las palabras clave y generar una instrucción SQL INSERT
    adecuada para crear un nuevo incidente en una tabla llamada "incidentes".`;


  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: completPromt,
      },
    ],
  });
  

  const resIA = response.data.choices[0].message?.content;
  console.log(resIA);

  if (resIA) {
    return resIA;
  } else {
    return "";
  }
}

export { gptTurboEngine };
