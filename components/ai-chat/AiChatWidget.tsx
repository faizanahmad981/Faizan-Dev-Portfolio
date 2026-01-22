"use client";

import { useState, useRef } from "react";
import { nanoid } from "nanoid";
import { ChatMessage } from "./types";
import AIChatIcon from "./AIChatIcon";
import AIChatMessages from "./AIChatMessages";
import AIChatInput from "./AIChatInput";
import { getLocalAIResponse } from "./aiChatData";

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: nanoid(),
      role: "ai",
      text: "Hi 👋 I’m Faizan’s AI Portfolio Assistant.\nAsk me about projects, skills, services, or contact info.",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);

 const sendMessage = async (text: string) => {
  if (!text.trim()) return;

  const userMsg: ChatMessage = { id: nanoid(), role: "user", text };
  setMessages(prev => [...prev, userMsg]);
  setLoading(true);

  // Use local AI response (for testing)
  const response = getLocalAIResponse(text);

  setTimeout(() => {
    const aiMsg: ChatMessage = { id: nanoid(), role: "ai", text: response };
    setMessages(prev => [...prev, aiMsg]);
    setLoading(false);
  }, 500); // simulate thinking
};


  return (
    <>
      <AIChatIcon onClick={() => setOpen(o => !o)} />

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[340px] h-[460px] bg-[rgb(var(--bg-light))] rounded-2xl shadow-[0_0_35px_rgba(0,0,0,0.4)] flex flex-col">
          <div className="p-3 font-semibold bg-[rgb(var(--mesh-color-3))] flex justify-between">
            Portfolio AI Assistant
            <button onClick={() => setOpen(false)}>✖</button>
          </div>

          <AIChatMessages messages={messages} loading={loading} />
<AIChatInput onSend={sendMessage} disabled={loading} />

        </div>
      )}
    </>
  );
}
