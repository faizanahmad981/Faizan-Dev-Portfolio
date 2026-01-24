"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import heroImg from "@/assets/images/home-right.webp";

interface BannerProps {
  name?: string;
  roles?: string[];
  email?: string;
  linkedin?: string;
}

export default function Banner({
  name = "Faizan Ahmed",
  roles = ["Frontend Developer", "React Engineer", "Next.js Developer"],
  email = "khawajfaizan258@gmail.com",
  linkedin = "https://www.linkedin.com/in/faizan-ahmed258/",
}: BannerProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLSpanElement>(null);

  const [titleText] = useState("Hello, I'm");

  useEffect(() => {
    let titleIndex = 0;
    let roleIndex = 0;
    let charIndex = 0;

    function typeTitle() {
      if (titleRef.current && titleIndex < titleText.length) {
        titleRef.current.textContent += titleText.charAt(titleIndex);
        titleIndex++;
        setTimeout(typeTitle, 80);
      }
    }

    function typeRole() {
      if (roleRef.current && charIndex < roles[roleIndex].length) {
        roleRef.current.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeRole, 90);
      } else {
        setTimeout(eraseRole, 1500);
      }
    }

    function eraseRole() {
      if (roleRef.current && charIndex > 0) {
        roleRef.current.textContent = roles[roleIndex].substring(
          0,
          charIndex - 1,
        );
        charIndex--;
        setTimeout(eraseRole, 60);
      } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeRole, 400);
      }
    }

    typeTitle();
    typeRole();
  }, [roles, titleText]);

  return (
    <section
      className=" relative  min-h-screen flex items-center 
    z-10   pt-24 sm:pt-0  bg-no-repeat bg-top bg-cover
    "
    >
      {/* Background layer */}
      <div className="absolute inset-0 hero-bg -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full ">
        <div className="flex flex-col-reverse lg:flex-row items-center min-h-screen gap-8">
          {/* TEXT CONTENT */}
          <div className="lg:w-7/12 text-center lg:text-left">
            <div id="intro">
              <h2
                ref={titleRef}
                className="text-white text-2xl sm:text-3xl md:text-4xl font-mono uppercase relative inline-block overflow-hidden"
              ></h2>
              <h1 className="text-secondary-custom text-4xl sm:text-5xl md:text-6xl font-bold uppercase mt-2">
                {name}
              </h1>
              <h5 className="text-white uppercase mt-2 text-lg sm:text-xl">
                SOFTWARE ENGINEER (
                <span ref={roleRef} className="font-semibold"></span>
                <span className="inline-block animate-blink">|</span>)
              </h5>
            </div>

            <div className="  mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-4">
              {/* Hire Me */}
              <button
                type="button"
                onClick={() => {
                  const emaill = email;
                  const subject = "Hiring Inquiry";
                  const body =
                    "Hi Faizan,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity.";

                  window.open(
                    `https://mail.google.com/mail/?view=cm&fs=1&to=${emaill}&su=${subject}&body=${body}`,
                    "_blank",
                  );
                }}
                className="
    px-6 py-3 rounded-lg
    bg-[rgb(var(--accent))]
    text-black font-semibold

    transition-all duration-300
    hover:scale-105
    hover:shadow-[0_0_25px_rgba(46,255,193,0.65)]

    active:bg-transparent
    active:text-[rgb(var(--accent))]
    active:border
    active:border-[rgb(var(--accent))]
    active:scale-95

    focus:outline-none
    focus:border
    focus:border-[rgb(var(--accent))]
    focus:shadow-[0_0_30px_rgba(46,255,193,0.8)]
  "
              >
                Hire Me
              </button>

              {/* LinkedIn */}
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="
      px-6 py-3 rounded-lg
      border border-[rgb(var(--accent))]
      text-white font-semibold
      transition-all duration-300
      hover:bg-[rgb(var(--accent))]
      hover:text-black
      hover:scale-105
      hover:shadow-[0_0_25px_rgba(46,255,193,0.65)]
      active:scale-95
      focus:outline-none
      focus:shadow-[0_0_30px_rgba(46,255,193,0.8)]
    "
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="lg:w-5/12 flex justify-center lg:justify-end">
            <div className="top-right-img relative">
              <Image
                src={heroImg}
                alt={name}
                className="rounded-2xl shadow-2xl transform transition-transform duration-500 hover:scale-105"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
