"use client";

import { useState } from "react";

type Props = {
  onSend: (msg: string) => void;
  disabled?: boolean;
};

export default function AIChatInput({ onSend, disabled }: Props) {
  const [value, setValue] = useState("");

  const send = () => {
    if (!value.trim()) return;
    onSend(value);
    setValue("");
  };

  return (
    <div className="flex gap-2 p-3 border-t border-white/10">
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={e => e.key === "Enter" && send()}
        placeholder="Ask about projects, skills..."
        className="flex-1 bg-[rgb(var(--bg-light))] px-3 py-2 rounded-md outline-none"
      />
      <button
        onClick={send}
        disabled={disabled}
        className="px-4 py-2 rounded-md bg-gradient-to-r from-cyan-400 to-emerald-400 text-black font-semibold"
      >
        Send
      </button>
    </div>
  );
}
