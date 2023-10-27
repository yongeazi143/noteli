import { OpenAI } from 'openai'

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY})

// Request the OpenAI API for the response
async function start() {
  const response = await openai.chat.completions.create({
    model: ${model.name},
    stream: true,
    promptOrMessages: buildPrompt(prompt),
    max_tokens: 500,
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
  })

  const result = await response.json();
  const completion = result.choices[0].message.content
  console.log(completion)
}

start()