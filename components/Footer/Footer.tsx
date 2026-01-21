"use client";

import { logoWebsite } from "@/assets/images";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!footerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="relative bg-[#0b0b14] overflow-hidden py-20"
    >
      {/* Glow Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(46,255,193,0.12),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(111,66,193,0.12),transparent_40%)] animate-footerGlow" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-10">

          {/* Logo */}
          <div
            className={`transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Image
              src={logoWebsite}
              alt="Website Logo"
              width={360}
              height={120}
              className="mx-auto animate-float"
              priority
            />
          </div>

          {/* Heading */}
          <div
            className={`transition-all duration-700 delay-150 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h5 className="text-white text-lg font-medium">
              Follow Me
            </h5>
          </div>

          {/* Social Icons */}
          <ul
            className={`flex gap-6 transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <SocialIcon
              href="https://www.facebook.com/FaizanAhmedTanolii/"
              icon={<FaFacebookF />}
            />
            <SocialIcon
              href="https://www.linkedin.com/in/faizan-ahmed258/"
              icon={<FaLinkedinIn />}
            />
            <SocialIcon
              href="https://github.com/faizanahmad981"
              icon={<FaGithub />}
            />
          </ul>
        </div>
      </div>
    </footer>
  );
}

/* Reusable Social Icon */
function SocialIcon({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full
        border border-cyan-400/30 text-gray-400 text-xl
        transition-all duration-300
        hover:text-cyan-400 hover:scale-125 hover:-translate-y-1
        hover:shadow-[0_0_18px_rgba(0,255,255,0.8)]"
      >
        {icon}
      </a>
    </li>
  );
}
