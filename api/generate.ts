import { VercelRequest, VercelResponse } from "@vercel/node";
import { kv } from "@vercel/kv";
import { OpenAIStream, StreamingTextResponse } from "ai";
import OpenAI from "openai";
import { Ratelimit } from "@upstash/ratelimit";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});


// IMPORTANT! Set the runtime to edge: https://vercel.com/docs/functions/edge-functions/edge-runtime
export const runtime = "edge";


export default async function handler(req: VercelRequest, res: VercelResponse): Promise<void> {
  if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === "") {
    res.status(400).json({ error: "Missing OPENAI_API_KEY – make sure to add it to your environment variables." });
    return;
  }

  if (
    process.env.NODE_ENV !== "development" &&
    process.env.KV_REST_API_URL &&
    process.env.KV_REST_API_TOKEN
  ) {
    const ip = req.headers["x-forwarded-for"];
    const ratelimit = new Ratelimit({
      redis: kv,
      limiter: Ratelimit.slidingWindow(50, "1 d"),
    });

    const { success, limit, reset, remaining } = await ratelimit.limit(
      `novel_ratelimit_${ip}`
    );

    if (!success) {
      res
        .status(429)
        .set({
          "X-RateLimit-Limit": limit.toString(),
          "X-RateLimit-Remaining": remaining.toString(),
          "X-RateLimit-Reset": reset.toString(),
        })
        .json({ error: "You have reached your request limit for the day." });
      return;
    }
  }

  const { prompt } = req.body;

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are an AI writing assistant that continues existing text based on context from prior text. " +
          "Give more weight/priority to the later characters than the beginning ones. " +
          "Limit your response to no more than 200 characters, but make sure to construct complete sentences.",
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

  res.status(200).json(response);
  
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);

  // Respond with the stream
  return new StreamingTextResponse(stream);

}