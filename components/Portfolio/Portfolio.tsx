"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { portfolioItems } from "./portfolio.data";
import { Plus } from "lucide-react";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<"popular" | "others">("popular");

  useEffect(() => {
    const items = document.querySelectorAll(".portfolio-item");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("show");
            }, index * 150);
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach(item => {
      item.classList.remove("show");
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, [activeTab]);

  return (
    <section id="portfolio" className="py-20 bg-[var(--gradient-banner-mesh)]">
      <div className="container mx-auto px-4">

        {/* Tabs */}
        <div className="flex  mb-10 gap-4">
          {["popular", "others"].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-6 py-2 rounded-full text-sm font-semibold uppercase transition-all
                ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-[0_8px_25px_rgba(0,198,255,0.35)]"
                    : "text-gray-400 hover:text-cyan-400"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {portfolioItems
            .filter(item => item.category === activeTab)
            .map(item => (
              <div
                key={item.id}
                className="portfolio-item opacity-0 transition-opacity duration-700"
              >
                <div
                  className="group relative overflow-hidden rounded-2xl cursor-pointer
                  shadow-[0_15px_35px_rgba(0,0,0,0.12)]
                  translate-y-10 scale-[0.96]
                  transition-all duration-700
                  group-hover:-translate-y-2 group-hover:scale-[1.02]"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                    bg-gradient-to-br from-cyan-500/70 to-blue-600/70
                    transition-all duration-500 pointer-events-none"
                  />

                  {/* Icon */}
                  <Plus className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    text-white size-16 opacity-0 scale-75
                    transition-all duration-500
                    group-hover:opacity-100 group-hover:scale-100
                    drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]"
                  />

                  {/* Glow border */}
                  <span className="absolute inset-0 rounded-2xl border-2 border-transparent
                    transition-all duration-500
                    group-hover:border-cyan-400
                    group-hover:shadow-[0_0_20px_rgba(0,198,255,0.6),0_0_40px_rgba(0,114,255,0.4)]"
                  />
                </div>

                <h5 className="mt-15 text-lg font-semibold text-white">
                  {item.title}
                </h5>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    className="text-cyan-400 text-sm hover:underline"
                  >
                    Checkout Project →
                  </a>
                )}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
