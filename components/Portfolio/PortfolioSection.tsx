"use client";

import { useState } from "react";
import { portfolioItems, PortfolioItem } from "./portfolio.data";
import PortfolioCard from "./PortfolioCard";
import PortfolioModal from "./PortfolioModal";

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState<"popular" | "others">("popular");
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  return (
    <section id="portfolio" className="py-20 bg-[rgb(var(--mesh-2))]">
      <div className="container mx-auto px-4">

        {/* Tabs */}
        <div className="flex  gap-4 mb-10">
          {["popular", "others"].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition
                ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                    : "text-[rgb(var(--text-muted))]"
                }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolioItems
            .filter(i => i.category === activeTab)
            .map(item => (
              <PortfolioCard
                key={item.id}
                item={item}
                onClick={() => setSelected(item)}
              />
            ))}
        </div>

        {/* Modal */}
        {selected && (
          <PortfolioModal
            item={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </div>
    </section>
  );
}
