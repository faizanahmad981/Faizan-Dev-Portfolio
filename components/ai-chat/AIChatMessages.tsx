"use client";

import { ChatMessage } from "./types";
import TypingText from "./TypingText";

type Props = {
  messages: ChatMessage[];
  loading: boolean;
};

export default function AIChatMessages({ messages, loading }: Props) {
  return (
    <div className="flex-1 p-3 overflow-y-auto space-y-2 bg-[rgb(var(--mesh-color-3))]">
      {messages.map(msg => (
        <div
          key={msg.id}
          className={`p-2 rounded-lg ${
            msg.role === "ai"
              ? "bg-[rgb(var(--bg-gray))] text-[rgb(var(--text-primary))] border-l-4 border-[rgb(var(--secondary-color))]"
              : "bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-right"
          }`}
        >
          {msg.role === "ai" ? (
            <TypingText text={msg.text} />
          ) : (
            msg.text
          )}
        </div>
      ))}

      {loading && (
        <div className="p-2 rounded-lg bg-[rgb(var(--bg-gray))] text-[rgb(var(--text-primary))] italic">
          AI is thinking...
        </div>
      )}
    </div>
  );
}
