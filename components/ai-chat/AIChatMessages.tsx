"use client";

import { ChatMessage } from "./types";
import { useEffect, useRef } from "react";

type Props = {
  messages: ChatMessage[];
  loading: boolean;
};

export default function AIChatMessages({
  messages,
  loading,
}: {
  messages: ChatMessage[];
  loading: boolean;
}) {
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
          {msg.text}
        </div>
      ))}
      {loading && (
        <div className="p-2 rounded-lg bg-[rgb(var(--bg-gray))] text-[rgb(var(--text-primary))]">
          AI is thinking...
        </div>
      )}
    </div>
  );
}
