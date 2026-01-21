"use client";

import Image from "next/image";
import { PortfolioItem } from "./portfolio.data";
import { useState } from "react";
import { X } from "lucide-react"; // clean close icon

type Props = {
  item: PortfolioItem;
  onClose: () => void;
};

export default function PortfolioModal({ item, onClose }: Props) {
  const [index, setIndex] = useState(0);

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="relative bg-[rgb(var(--bg-card))] max-w-4xl w-full rounded-2xl p-6 animate-drop-in border border-cyan-400/30 shadow-[0_0_40px_rgba(0,255,255,0.15)]">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full
                     bg-black/60 border border-cyan-400/40 text-cyan-300
                     hover:text-white hover:shadow-[0_0_15px_rgba(0,255,255,0.8)]
                     transition"
        >
          <X size={20} />
        </button>

        {/* Main Image */}
        <div className="flex ">
          <Image
            src={item.images[index]}
            alt={item.title}
            width={700}
            height={400}
            className="rounded-xl object-contain max-h-[380px]"
            priority
          />
        </div>

        {/* Thumbnails */}
        <div className="flex flex-wrap justify-center gap-3 mt-5">
          {item.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="relative"
            >
              <Image
                src={img}
                alt=""
                width={90}
                height={60}
                className={`rounded-lg  object-cover border-2 transition
                  ${
                    i === index
                      ? "border-cyan-400 shadow-[0_0_18px_rgba(0,255,255,0.7)] scale-105"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
              />
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-6 ">
          <h3 className="text-xl font-semibold text-white">{item.title}</h3>

          <p className="mt-3 text-[rgb(var(--text-muted))] leading-relaxed">
            <strong className="text-white">Description:</strong>{" "}
            {item.description}
          </p>

          <p className="mt-2 text-[rgb(var(--text-muted))]">
            <strong className="text-white">Technologies:</strong>{" "}
            {item.technologies}
          </p>

          {item.link && (
            <a
              href={item.link}
              target="_blank"
              className="inline-block mt-4 px-6 py-2 rounded-full border border-cyan-400 text-cyan-400
                         hover:bg-cyan-400 hover:text-black
                         hover:shadow-[0_0_20px_rgba(0,255,255,0.8)]
                         transition"
            >
              Visit Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
