import { google } from "@ai-sdk/google";
import { streamText } from "ai";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json();

  if (!Array.isArray(messages) || messages.length > 20) {
    return new Response("Too many messages", { status: 400 });
  }

  const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(10, "1 m"),
  });

  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return new Response("Too many requests", { status: 429 });
  }
  const origin = req.headers.get("origin");
  if (origin !== "https://tomasz-ostaszewski-portfolio.vercel.app") {
    return new Response("Forbidden", { status: 403 });
  }

  for (const msg of messages) {
    for (const part of msg.content ?? msg.parts ?? []) {
      if (part.type === "text" && part.text.length > 1000) {
        return new Response("Message too long", { status: 400 });
      }
    }
  }

  // 5. AI
  const result = await streamText({
    model: google("gemini-1.5-flash"),
    messages,
  });

  return result.toTextStreamResponse();
}
