import { OpenAI } from 'openai'
import { OpenAIStream, StreamingTextResponse } from "ai";
const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY})

// IMPORTANT! Set the runtime to edge: https://vercel.com/docs/functions/edge-functions/edge-runtime
export const runtime = "edge";
// Request the OpenAI API for the response
async function start() {
  try {
  let { prompt } = await req.json();

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are an AI writing assistant that continues existing text based on context from prior text. " +
          "Give more weight/priority to the later characters than the beginning ones. " +
          "Limit your response to no more than 200 characters, but make sure to construct complete sentences.",
        // we're disabling markdown for now until we can figure out a way to stream markdown text with proper formatting: https://github.com/steven-tey/novel/discussions/7
        // "Use Markdown formatting when appropriate.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stream: true,
    n: 1,
  });

  const result = await response.json();
  const completion = result.choices[0].message.content;
  console.log(completion);

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}catch(err => {
  console.log("Sorry An Error Occured");
})
}

start();

