import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import type { UIMessage } from "ai";

export function Chat() {
  const { status } = useChat();
  const [messages, setMessages] = useState<UIMessage[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: UIMessage = {
      id: crypto.randomUUID(),
      role: "user",
      parts: [{ type: "text", text: input }],
    };

    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: nextMessages }),
    });

    if (!res.ok) return;

    const text = await res.text();

    const assistantMessage: UIMessage = {
      id: crypto.randomUUID(),
      role: "assistant",
      parts: [{ type: "text", text }],
    };

    setMessages((prev) => [...prev, assistantMessage]);
  };

  return (
    <div>
      {messages.map((m) => (
        <div key={m.id}>
          <strong>{m.role}:</strong>{" "}
          {m.parts
            .filter((p) => p.type === "text")
            .map((p, i) => (
              <span key={i}>{p.text}</span>
            ))}
        </div>
      ))}

      <input value={input} onChange={(e) => setInput(e.target.value)} />

      <button onClick={sendMessage} disabled={status === "streaming"}>
        Send
      </button>
    </div>
  );
}
