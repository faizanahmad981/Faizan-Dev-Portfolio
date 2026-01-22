"use client";

import { ChatMessage } from "./types";
import { useEffect, useRef } from "react";

type Props = {
  messages: ChatMessage[];
  loading: boolean;
};

export default function AIChatMessages({ messages, loading }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollTo({
      top: ref.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  return (
    <div ref={ref} className="flex-1 overflow-y-auto p-4 space-y-3 text-sm">
      {messages.map(msg => (
        <div
          key={msg.id}
          className={`max-w-[85%] p-3 rounded-xl ${
            msg.role === "user"
              ? "ml-auto bg-gradient-to-r from-cyan-400 to-emerald-400 text-black font-medium"
              : "bg-[rgb(var(--bg-gray))] border-l-4 border-[rgb(var(--secondary-color))]"
          }`}
        >
          {msg.text}
        </div>
      ))}

      {loading && (
        <div className="bg-[rgb(var(--bg-gray))] p-3 rounded-xl w-fit animate-pulse">
          AI is thinking...
        </div>
      )}
    </div>
  );
}
