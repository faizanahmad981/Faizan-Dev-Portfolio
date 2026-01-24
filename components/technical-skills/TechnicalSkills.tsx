"use client";

import { skillCategories } from "./data";

export default function TechnicalSkills() {
  return (
    <section
      id="technical-skills"
      className="  bg-(--gradient-banner-mesh) py-4"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[rgb(var(--text-primary))]">
            Technical Skills
          </h2>

          <p className="max-w-2xl mx-auto text-[rgb(var(--text-muted))] leading-relaxed">
            Is give may shall likeness made yielding spirit a itself togeth created after sea
            <br className="hidden lg:block" />
            is in beast beginning signs open god you're gathering ithe
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((item, index) => (
            <div
              key={item.title}
              style={{ animationDelay: `${index * 120}ms` }}
              className="
                group relative
                bg-[rgb(var(--bg-card))]
                border border-white/10
                rounded-2xl
                h-[200px]
                flex flex-col items-center justify-center text-center
                px-6
                transition-all duration-500 ease-out
                hover:-translate-y-3
                hover:shadow-[0_25px_50px_rgb(var(--accent)/0.25)]
                hover:border-[rgb(var(--accent))]
                animate-drop-in
              "
            >
              {/* TOP ACCENT LINE (like Services) */}
              <span
                className="
                  absolute top-0 left-0
                  h-1 w-0
                  bg-[rgb(var(--accent))]
                  rounded-t-2xl
                  transition-all duration-300
                  group-hover:w-full
                "
              />

              {/* TITLE */}
              <h4
                className="
                  text-xl font-bold mb-3
                  text-[rgb(var(--text-primary))]
                  transition-all duration-300
                  group-hover:text-[rgb(var(--accent))]
                  group-hover:scale-110
                "
              >
                {item.title}
              </h4>

              {/* DESCRIPTION */}
              <p
                className="
                  text-sm leading-relaxed
                  text-[rgb(var(--text-muted))]
                  transition-transform duration-300
                  group-hover:scale-105
                "
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
