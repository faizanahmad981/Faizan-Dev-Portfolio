"use client";

import { MessageCircle } from "lucide-react";

type Props = {
  onClick: () => void;
};

export default function AIChatIcon({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="
        fixed bottom-6 right-6 z-50
        flex items-center gap-2
        px-4 py-3 rounded-full
        bg-gradient-to-r from-cyan-400 to-emerald-400
        text-black font-semibold
        shadow-[0_0_25px_rgba(46,255,193,0.6)]
        hover:shadow-[0_0_40px_rgba(46,255,193,0.9)]
        transition
      "
    >
      <MessageCircle size={20} />
      Ask AI
    </button>
  );
}
