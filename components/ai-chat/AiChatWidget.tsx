"use client";

import { useState } from "react";
import { Message } from "./types";
import { getLocalAIResponse } from "./aiChatData";
import { MessageCircle, X } from "lucide-react";

export default function AiChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "ai",
      text: `Hi 👋 I can explain:
• About Faizan
• Projects
• Skills
• Services
• Experience
• Contact info

What would you like to know?`,
    },
  ]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now(),
      role: "user",
      text: input,
    };

    const aiReply: Message = {
      id: Date.now() + 1,
      role: "ai",
      text: getLocalAIResponse(input),
    };

    setMessages(prev => [...prev, userMsg, aiReply]);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-5 py-3 rounded-full
        bg-gradient-to-r from-cyan-400 to-blue-500
        text-black font-semibold shadow-lg
        hover:shadow-cyan-400/50 transition"
      >
        <MessageCircle size={20} />
        Ask AI
      </button>

      {/* CHAT BOX */}
      {open && (
        <div
          className="absolute bottom-16 right-0 w-90 h-[420px]
          bg-[rgb(var(--bg-light))]
          rounded-xl shadow-2xl
          flex flex-col overflow-hidden"
        >
          {/* HEADER */}
          <div className="flex justify-between items-center px-4 py-3
            bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold">
            Portfolio AI Assistant
            <button onClick={() => setOpen(false)}>
              <X size={18} />
            </button>
          </div>

          {/* MESSAGES */}
          <div className="flex-1 p-3 overflow-y-auto space-y-3 text-sm ">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`p-3 rounded-lg whitespace-pre-line 
                ${
                  msg.role === "ai"
                    ? "bg-[rgb(var(--bg-gray))] border-l-4 border-cyan-400"
                    : "bg-gradient-to-r from-cyan-400 to-blue-500 text-black ml-auto text-right"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* INPUT */}
          <div className="p-3 border-t border-white/10 flex gap-2 bg-[rgb(var(--bg-card))]">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && sendMessage()}
              placeholder="Ask about projects..."
              className="flex-1 px-3 py-2  rounded-md bg-[rgb(var(--bg-light))]
              text-white outline-none"
            />
            <button
              onClick={sendMessage}
              className="px-4 py-2 rounded-md
              bg-gradient-to-r from-cyan-400 to-blue-500
              text-black font-semibold"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
