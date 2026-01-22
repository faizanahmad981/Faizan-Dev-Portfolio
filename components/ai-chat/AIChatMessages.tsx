"use client";

import { ChatMessage } from "./types";
import TypingText from "./TypingText";

type Props = {
  messages: ChatMessage[];
  loading: boolean;
};

export default function AIChatMessages({ messages, loading }: Props) {
  // Project keywords mapping
  const projectCards: Record<string, { name: string; link?: string }> = {
    truthkeep: { name: "TruthKeep AI", link: "https://www.truthkeep.ai/" },
    medimind: { name: "MediMind AI" },
    "joint office": { name: "Joint Office Detector", },
    seller: { name: "Seller Margin CRM", link: "https://sellermargins-website.vercel.app/" },
    rabbit: { name: "Rabbit Hole Dashboard", link: "https://rabbit-hole-admin-panel-nu.vercel.app/sign-in " },
    efamily: { name: "EFAMILY Platform" },
    cnn: { name: "Image Classification" },
    lumina: { name: "Lumina Xpert", link: "https://lumina-xpert.vercel.app/" },
    "real estate": { name: "Real Estate Website", link: "https://realstate-woad-seven.vercel.app/" },
    fitness: { name: "Fitness Gym Website", link: "https://fitness-gym-seven.vercel.app/" },
    nexcent: { name: "Nexcent Onepage", link: "https://nexcent-website-rho.vercel.app/" },
    foodi: { name: "Foodi Onepage", link: " https://react-bootstrap-food-webapp.vercel.app/" },
  };

  // Mini stats/highlights mapping
  const miniStats: Record<string, string> = {
    experience: "💼 2+ years of hands-on web development experience",
    react: "⚛ React & Next.js expertise",
    typescript: "📝 TypeScript & JavaScript proficiency",
    tailwind: "🎨 Tailwind CSS & Bootstrap styling skills",
    redux: "🔁 Redux & state management experience",
    api: "🔗 API Integration & RESTful services",
  };

  // Render project cards if AI message contains keywords
  const renderProjectCards = (text: string) => {
    const cards = Object.keys(projectCards)
      .filter(key => text.toLowerCase().includes(key))
      .map(key => projectCards[key]);

    if (cards.length === 0) return null;

    return (
      <div className="flex flex-wrap gap-2 mt-2">
        {cards.map(card => (
          <a
            key={card.name}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-gradient-to-r from-blue-400 to-cyan-400 text-white font-semibold text-sm hover:scale-105 transition-transform"
          >
            {card.name}
          </a>
        ))}
      </div>
    );
  };

  // Render mini stats if message contains keywords
  const renderMiniStats = (text: string) => {
    const stats = Object.keys(miniStats)
      .filter(key => text.toLowerCase().includes(key))
      .map(key => miniStats[key]);

    if (stats.length === 0) return null;

    return (
      <div className="flex flex-wrap gap-2 mt-2">
        {stats.map(stat => (
          <div
            key={stat}
            className="p-1 px-2 rounded-full bg-yellow-200 text-black text-xs font-semibold"
          >
            {stat}
          </div>
        ))}
      </div>
    );
  };

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
            <>
              <TypingText text={msg.text} />
              {renderProjectCards(msg.text)}
              {renderMiniStats(msg.text)}
            </>
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
