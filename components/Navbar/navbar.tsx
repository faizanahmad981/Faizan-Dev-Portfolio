"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Education", href: "#education", id: "education" },
  { name: "Services", href: "#services", id: "services" },
  { name: "Skills", href: "#technical-skills", id: "technical-skills" },
  { name: "Projects", href: "#portfolio", id: "portfolio" },
  { name: "Blog", href: "#blog", id: "blog" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  /* Scroll background */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Scroll Spy */
  useEffect(() => {
    const sections = navLinks.map(link =>
      document.getElementById(link.id)
    );

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4, // section visible % 
      }
    );

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-[rgb(var(--bg-section))]/90 backdrop-blur border-b border-cyan-400/30 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <span className="text-xl font-semibold text-white">
          Faizan<span className="text-cyan-400">Dev</span>
        </span>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.id}>
              <Link
                href={link.href}
                className={`text-sm uppercase font-medium transition-all duration-300
                ${
                  active === link.id
                    ? "text-cyan-400 drop-shadow-[0_0_10px_rgba(46,255,193,0.8)]"
                    : "text-[rgb(var(--text-muted))] hover:text-cyan-400"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300
        ${open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}
        bg-[rgb(var(--bg-section))]/95 backdrop-blur`}
      >
        <ul className="flex flex-col gap-2 py-4 px-6">
          {navLinks.map(link => (
            <li key={link.id}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block py-2 px-3 rounded-md transition-all duration-300
                ${
                  active === link.id
                    ? "text-cyan-400 bg-white/10 shadow-[0_0_12px_rgba(46,255,193,0.6)]"
                    : "text-white hover:text-cyan-400 hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
