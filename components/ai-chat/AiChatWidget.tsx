"use client";

import { useState, useEffect, useRef } from "react";
import { nanoid } from "nanoid";
import { ChatMessage } from "./types";
import AIChatIcon from "./AIChatIcon";
import AIChatMessages from "./AIChatMessages";
import AIChatInput from "./AIChatInput";
import { getLocalAIResponse } from "./aiChatData";

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);

  // Step 1: Track user type
  const [userType, setUserType] = useState<
    "recruiter" | "client" | "student" | null
  >(null);

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg: ChatMessage = { id: nanoid(), role: "user", text };
    setMessages(prev => [...prev, userMsg]);
    setLoading(true);

    // Get AI response
    let response = getLocalAIResponse(text);

    // Mini stats/highlights based on question keywords
    const statsResponses: Record<string, string> = {
      "experience": "💼 Faizan has 1+ years of hands-on experience in Web Development, React, Next.js, API integrations, and frontend architectures.",
      "react": "⚛️ Faizan has 1 years of professional experience building React applications.",
      "next": "🚀 Faizan has 1 years of experience building scalable Next.js applications with SSR & SSG.",
      "api": "🔗 Faizan has 1 years of experience integrating REST & GraphQL APIs in frontend projects.",
    };

    for (const key in statsResponses) {
      if (text.toLowerCase().includes(key)) {
        response += "\n\n" + statsResponses[key];
      }
    }

    // Project cards / links in chat
    const projectLinks: Record<string, string> = {
      "truthkeep": "[TruthKeep AI](https://www.truthkeep.ai/)",
      "seller": "[Seller Margin CRM](https://sellermargins-website.vercel.app/)",
      "rabbit": "[Rabbit Hole Dashboard](https://rabbit-hole-admin-panel-nu.vercel.app/sign-in)",
      "lumina": "[Lumina Xpert](https://luminaaa-xpert.vercel.app/)",
      "real estate": "[Real Estate Website](https://realstate-woad-seven.vercel.app/)",
      "fitness": "[Fitness Gym Website](https://fitness-gym-seven.vercel.app/)",
      "nexcent": "[Nexcent Onepage](https://nexcent-website-rho.vercel.app/)",
      "foodi": "[Foodi Onepage](https://react-bootstrap-food-webapp.vercel.app/)",
    };

    for (const key in projectLinks) {
      if (text.toLowerCase().includes(key)) {
        response += `\n\n🔗 Project Link: ${projectLinks[key]}`;
      }
    }

    // Simulate AI thinking
    setTimeout(() => {
      const aiMsg: ChatMessage = { id: nanoid(), role: "ai", text: response };
      setMessages(prev => [...prev, aiMsg]);
      setLoading(false);
    }, 500);
  };

  // Step 2: Add welcome message based on userType
  useEffect(() => {
    if (!userType) return;

    const welcomeMap: Record<string, string> = {
      recruiter:
        "👋 Welcome! I’ll help you quickly assess Faizan’s skills, experience, and suitability for your role.",
      client:
        "👋 Hi! I can help you understand Faizan’s services, pricing approach, and how he can help your project.",
      student:
        "👋 Hey! Feel free to ask about Faizan’s learning path, projects, and career journey.",
    };

    setMessages([
      {
        id: nanoid(),
        role: "ai",
        text:
          "👋 Hi! I’m Faizan’s AI Portfolio Assistant.\n\n" +
          "You can ask me about:\n" +
          "• About Faizan\n" +
          "• Projects\n" +
          "• Skills\n" +
          "• Services\n" +
          "• Experience\n" +
          "• Education\n" +
          "• Contact details\n\n" +
          "I’ll respond like a real portfolio assistant 🙂",
      },
      {
        id: nanoid(),
        role: "ai",
        text: welcomeMap[userType],
      },
    ]);
  }, [userType]);

  return (
    <>
      <AIChatIcon onClick={() => setOpen(o => !o)} />

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] h-[500px] bg-[rgb(var(--bg-light))] rounded-2xl shadow-[0_0_35px_rgba(0,0,0,0.4)] flex flex-col">
          <div className="p-3 font-semibold bg-[rgb(var(--mesh-color-3))] flex justify-between">
            Portfolio AI Assistant
            <button onClick={() => setOpen(false)}>✖</button>
          </div>

          {/* Step 3: Show user type selection if not selected */}
          {!userType && (
            <div className="flex-1 flex flex-col justify-center items-center p-4 gap-3">
              <p className="font-semibold text-center">Who are you?</p>
              <div className="flex gap-2 w-full">
                <button
                  onClick={() => setUserType("recruiter")}
                  className="flex-1 py-2 rounded-md bg-cyan-400 text-black font-semibold"
                >
                  Recruiter
                </button>
                <button
                  onClick={() => setUserType("client")}
                  className="flex-1 py-2 rounded-md bg-emerald-400 text-black font-semibold"
                >
                  Client
                </button>
                <button
                  onClick={() => setUserType("student")}
                  className="flex-1 py-2 rounded-md bg-indigo-400 text-black font-semibold"
                >
                  Student
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Chat messages and input */}
          {userType && (
            <>
              <AIChatMessages messages={messages} loading={loading} />
              <AIChatInput onSend={sendMessage} disabled={loading} />
            </>
          )}
        </div>
      )}
    </>
  );
}
