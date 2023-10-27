import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const runtime = "edge";

async function generateText(prompt) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are an AI writing assistant that continues existing text based on context from prior text. Give more weight/priority to the later characters than the beginning ones. Limit your response to no more than 200 characters, but make sure to construct complete sentences.",
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

    const stream = OpenAIStream(response);

    return new StreamingTextResponse(stream);
  } catch (err) {
    console.error("Sorry, an error occurred", err);
    return "An error occurred";
  }
}

function handler(event) {
  const prompt = "Your user input here"; // Replace with actual user input
  return generateText(prompt).then((streamingResponse) => {
    return streamingResponse;
  });
}

module.exports = {
  handler,
  runtime,
};
