"use client";

import Image, { StaticImageData } from "next/image";
import { useReveal } from "@/hooks/useReveal";
import aboutme from "@/assets/images/original-Pictur.jpeg";

import {
  htmlImg,
  cssImg,
  bootstrapImg,
  tailwindImg,
  nextImg,
  physicsImg,
} from "@/assets/images/services-img";

// ================= TYPES =================
type Skill = {
  name: string;
  icon: StaticImageData;
};

type Category = {
  title: string;
  skills: Skill[];
};

// ================= DATA =================
const categories: Category[] = [
  {
    title: "Web Development",
    skills: [
      { name: "HTML5", icon: htmlImg },
      { name: "CSS3", icon: cssImg },
      { name: "React.js", icon: physicsImg },
      { name: "Next.js", icon: nextImg },
      { name: "Tailwind CSS", icon: tailwindImg },
      { name: "Bootstrap", icon: bootstrapImg },
    ],
  },
  {
    title: "API Integration",
    skills: [
      { name: "Axios", icon: physicsImg },
      { name: "Fetch API", icon: physicsImg },
      { name: "TanStack Query", icon: physicsImg },
    ],
  },
  {
    title: "State Management",
    skills: [
      { name: "Redux", icon: physicsImg },
      { name: "Context API", icon: physicsImg },
    ],
  },
  {
    title: "Mobile Application",
    skills: [
      { name: "React Native", icon: physicsImg },
      { name: "Native Base", icon: physicsImg },
    ],
  },
];

// ================= COMPONENT =================
export default function About() {
  const image = useReveal(0.3);
  const card = useReveal(0.3);
  const tech = useReveal(0.2);

  return (
    <section
      id="about"
      className="
        py-24
        bg-[radial-gradient(circle_at_top_left,rgb(var(--mesh-1)),rgb(var(--bg-main)))]
      "
    >
      <div className="max-w-7xl mx-auto px-6 ">

        {/* ================= TOP GRID ================= */}
        <div className="grid lg:grid-cols-2  items-center ">

          {/* ---------- IMAGE ---------- */}
          <div
            ref={image.ref}
            className={`
              transition-all duration-700 ease-out
              ${image.show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"}
            `}
          >
            <Image
              src={aboutme}
              alt="Faizan Ahmed"
              width={450}
              height={600}
              className="
                rounded-2xl
                border-2  border-[rgb(var(--accent))]
                shadow-[0_20px_40px_rgba(0,0,0,0.35)]
                transition-transform duration-500
                hover:scale-105 hover:-rotate-1
                hover:shadow-[0_30px_60px_rgb(var(--accent)/0.35)]
              "
            />
          </div>

          {/* ---------- ABOUT CARD ---------- */}
          <div
            ref={card.ref}
            className={`
              transition-all duration-700 ease-out
              ${card.show ? "opacity-100 rotate-y-0" : "opacity-0 rotate-y-90"}
            `}
          >
            <div className="bg-[rgb(var(--bg-card))] rounded-2xl p-8 shadow-2xl">

              <h3 className="text-3xl font-bold text-[rgb(var(--accent))] mb-6">
                About Me
              </h3>

              <div className="space-y-4 text-[rgb(var(--text-muted))] leading-relaxed">
                <p>
                  Hi, I’m <strong className="text-[rgb(var(--text-primary))]">
                    Faizan Ahmed
                  </strong>{" "}
                  — a Software Engineer with{" "}
                  <strong className="text-[rgb(var(--accent))]">1+ year</strong>{" "}
                  of hands-on experience building modern, high-performance web apps.
                </p>

                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong className="text-[rgb(var(--accent))]">Frontend:</strong>{" "}
                    React.js, Next.js, TypeScript
                  </li>
                  <li>
                    <strong className="text-[rgb(var(--accent))]">State & Data:</strong>{" "}
                    Redux, React Query, Axios
                  </li>
                  <li>
                    <strong className="text-[rgb(var(--accent))]">Forms:</strong>{" "}
                    React Hook Form + Zod
                  </li>
                  <li>
                    <strong className="text-[rgb(var(--accent))]">Styling:</strong>{" "}
                    Tailwind CSS, Bootstrap
                  </li>
                </ul>

                <p>
                  I enjoy transforming ideas into fast, scalable digital
                  experiences with clean architecture.
                </p>
              </div>

              <a
                href="https://faizan-frontend-dev-react.linkyhost.com"
                target="_blank"
                className="
                  inline-block mt-6 px-6 py-3 rounded-lg
                  bg-[rgb(var(--accent))]
                  text-black font-semibold
                  hover:scale-105 transition
                "
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* ================= TECHNOLOGIES ================= */}
        <div
          ref={tech.ref}
          className={`
            mt-24 transition-all duration-700
            ${tech.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <h3 className="text-center text-3xl font-bold mb-12 text-[rgb(var(--text-primary))]">
            Technologies I Use
          </h3>

          {categories.map((category) => (
            <div key={category.title} className="mb-14">
              <h4 className="text-center text-2xl font-semibold text-[rgb(var(--accent))] mb-8">
                {category.title}
              </h4>

              <div className="flex flex-wrap justify-center gap-6">
              {category.skills.map((skill, idx) => {
  const cardReveal = useReveal(0.2 + idx * 0.05); // stagger each card
  return (
    <div
      key={skill.name}
      ref={cardReveal.ref}
      className={`
        w-[200px] h-[110px]
        bg-[rgb(var(--bg-card))]
        border border-white/10
        rounded-xl
        flex flex-col items-center justify-center
        text-[rgb(var(--accent))]
        cursor-pointer
        transition-all duration-700
        ${cardReveal.show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
        hover:-translate-y-2
        hover:border-[rgb(var(--accent))]
        hover:shadow-[0_12px_30px_rgb(var(--accent)/0.25)]
      `}
    >
      <Image
        src={skill.icon}
        alt={skill.name}
        width={38}
        height={38}
        className="mb-2"
      />
      <span className="text-sm font-medium text-center">
        {skill.name}
      </span>
    </div>
  );
})}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
