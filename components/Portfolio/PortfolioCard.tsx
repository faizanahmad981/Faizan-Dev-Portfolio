"use client";

import Image from "next/image";
import { PortfolioItem } from "./portfolio.data";


type Props = {
  item: PortfolioItem;
  onClick: () => void;
};

export default function PortfolioCard({ item, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="portfolio-item cursor-pointer group"
    >
        <span
        className="
          absolute top-0 left-0
          w-0 h-1
          rounded-t-xl
          bg-gradient-to-r
          from-[rgb(var(--secondary-color))]
          to-[rgb(var(--neon-color-2))]
          transition-all duration-300
          group-hover:w-full
        "
      />
      <div className="relative overflow-hidden rounded-2xl shadow-xl
        transition-all duration-500
        group-hover:-translate-y-3 group-hover:scale-[1.02]
        group-hover:shadow-[0_25px_50px_rgba(46,255,193,0.35)]
      ">
        <Image
          src={item.cover}
          alt={item.title}
          className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100
          bg-gradient-to-br from-cyan-500/70 to-blue-600/70
          flex items-center justify-center transition-all"
        >
          <span className="text-6xl text-white drop-shadow-lg">+</span>
        </div>
      </div>

      <h5 className="mt-4 text-lg font-semibold text-[rgb(var(--text-primary))]">
        {item.title}
      </h5>
    </div>
  );
}
